import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Card,Input,FormGroup,Label,Button,Row} from 'reactstrap';
import {displayNext,addMarks,deductMarks,finishQuiz,stopTimer} from '../actions'
import DisplayFinishQuiz from './displayFinishQuiz.js';
import DisplayTimeOver from './DisplayTimeOver';
import Timer from './timer'



  class DisplayQuesAns extends Component {
  constructor(props) {
    super(props);
    this.state={
      fact:false,
      selectedOption:'notSelected',
      checked:false,
      correctOption:'invalid'
    }
  }

  handleOptionChange=(changeEvent)=>{
    //console.log(changeEvent.target.value[changeEvent.target.value.length-1]);
    this.setState({selectedOption:changeEvent.target.value,checked:true,correctOption:parseInt(changeEvent.target.value[changeEvent.target.value.length-1],10)});
  }

  handleFormSubmit=(formSubmitEvent)=>{
    //alert("i am submit");
    //console.log('You have selected:', this.state.selectedOption);
    formSubmitEvent.preventDefault();
  }

  componentWillReceiveProps(nextProps){
    //console.log('nextProps',nextProps);
    if(nextProps){
      this.setState({fact:true,
                     selectedOption:'notSelected',
                     checked:false,
                     correctOption:'invalid'
                    })
    }
  }
  addMarks=()=>{


       if(this.state.correctOption===1){
        this.props.addMarks(this.props.data.json[this.props.data.id].marks,this.props.data.id);
         //console.log('i m correctOption',this.state.marks+this.props.data.json[this.props.data.id].marks);
       }
       else if(this.state.correctOption===0){
         this.props.deductMarks(this.props.data.json[this.props.data.id].negativeMarks,this.props.data.id);
       }
       else{
         alert("Select an option To Save")
       }
       if(this.props.data.id!==Object.keys(this.props.data.json).length-1){
         this.displayNext();
       }
       else{
         this.finishQuiz();
       }


  }
  displayNext=()=>{
    this.props.displayNext(this.props.data.json,this.props.data.id);
    //console.log('i m display next');
  }

   finishQuiz=()=>{
     var timeOver=false;
     var timerStatus=false;
     this.props.stopTimer(timerStatus);
     this.props.finishQuiz(timeOver);

   }
 render(){
   //console.log('timer status',this.props.data.timerStatus);
   const {json,id}=this.props.data;
   if(this.props.data.showResult&&(!(this.props.data.timeOver))){
     return(
       <DisplayFinishQuiz />
     )
   }
   if(this.props.data.timerStatus){
   if(this.state.fact&&(id<Object.keys(json).length-1)){
    // console.log(json[id].options[0]);
     return(
       <Card>
       <Row>
       <div className="col-md-4">
       Question <span className='.spanning'>{this.props.data.id+1}</span> of <span className='.spanning'>{Object.keys(json).length}</span>
       </div>
       <div className="col-md-4 offset-4">
       <Timer />
       </div>
       </Row>
          <h3>{json[id].question}</h3>
            {json[id].options.map((value,key)=>
              <FormGroup check key={key}>
             <Label check>
             <Input type="radio" name="option" value={value} onChange={this.handleOptionChange} checked={this.state.selectedOption==value}/>
             {value[0]}
             </Label>
             </FormGroup>
            )}

            <Button  className="btn" type="submit" onClick={this.addMarks}>Save and Next</Button>

            <Button className="btn" onClick={this.displayNext}>Skip and Next</Button>

       </Card>
     )
   }
   else if(this.state.fact&&(id<Object.keys(json).length)){
     return(
       <Card>
          <Row>
          <div className="col-md-4">
          Question <span className='.spanning'>{this.props.data.id+1}</span> of <span className='.spanning'>{Object.keys(json).length}</span>
          </div>
          <div className="col-md-4 offset-4">
          <Timer />
          </div>
          </Row>
          <h3>{json[id].question}</h3>
            {json[id].options.map((value,key)=>
              <FormGroup check key={key}>
             <Label check>
             <Input type="radio" name="option" value={value} onChange={this.handleOptionChange} checked={this.state.selectedOption==value}/>
             {value[0]}
             </Label>
             </FormGroup>
            )}
            <Button className="btn" type="submit" onClick={this.addMarks}>Save and Finish</Button>

            <Button className="btn" onClick={this.finishQuiz} >Finish</Button>
       </Card>
     )
   }
   else{
     return(
       <div>
       </div>
     )
   }}
   else{
    return(
      <DisplayTimeOver />
    )
   }

 }

}
function mapStateToProps(state){
  //console.log(state,'data state');
  return { data : state}
}

export default connect(mapStateToProps,{displayNext,addMarks,deductMarks,finishQuiz,stopTimer})(DisplayQuesAns);
