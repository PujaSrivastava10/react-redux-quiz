import React,{Component} from 'react';
import {finishQuiz} from '../actions';
import {Card} from 'reactstrap';
import {connect} from 'react-redux'

class DisplayFinishQuiz extends Component {

  componentDidMount(){
    var timeOver=false;
    this.props.dispatch(finishQuiz(timeOver))
  }
  render(){
      //console.log('display finish quiz');
      //console.log(this.props);
    return(
      <Card className="card">
      <h1 className="heading">Congratulations! {"You've"} </h1><h1 className="heading">finished the Quiz!</h1>
      <h3 className="heading">Your Score : {this.props.data.marks} / {this.props.data.totalMarks} </h3>
      <h3 className="heading">Correct Answers : <span className="spanning">{this.props.data.correctAns} </span>
      Out of <span className="spanning">{this.props.data.totalQues}</span></h3>
      <h2 className="heading">Thank You!</h2>
      </Card>
    )
  }
}
 function mapStateToProps(state){
   console.log('total state displayFinishQuiz',state)
   return{
     data:state
   }
 }

export default connect(mapStateToProps)(DisplayFinishQuiz)
