import React,{Component} from 'react';
import {connect} from 'react-redux';
import {finishQuiz} from '../actions';
import {Card} from 'reactstrap'

class DisplayTimeOver extends Component {

  componentDidMount(){
    var timeOver=true;
    this.props.finishQuiz(timeOver);
  }
  render(){
    //console.log('DisplayTimeOver data',this.props);
    return(
      <Card className="card">
      <h1 className="heading">Sorry! :(  </h1><h1 className="heading">Time Over!</h1>
      <h3 className="heading">Your Score : {this.props.data.marks} / {this.props.data.totalMarks} </h3>
      <h3 className="heading">Correct Answers : <span className="spanning">{this.props.data.correctAns} </span>
      Out of <span className="spanning">{this.props.data.totalQues}</span></h3>
      <h2 className="heading">Thank You!</h2>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return{data:state}
}
export default connect(mapStateToProps,{finishQuiz})(DisplayTimeOver);
