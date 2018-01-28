import React, { Component } from 'react';
import '../App.css';
import FetchData from './fetchData';
import {Card,Button} from 'reactstrap'

class App extends Component {
constructor(props){
  super(props);
  this.state={showQuiz:false}
}
next=()=>{
  this.setState({showQuiz:true})
}
  render() {
    if(this.state.showQuiz){
      return(
          <FetchData />
      );
    }else{
    return (
     <Card className="card">
      <h2 className="ins">INSTRUCTIONS!</h2>
      <ul className="list">
      <li>All questions are not compulsory.</li>
      <li>For skiping any questions click on "Skip and Next" button. </li>
      <li>For saving any option click on "Save and Next" button. </li>
      <li>On Clicking "Finish" button at the end will submit the quiz. </li>
      <li>For each correct answer you will be awarded with 10 marks. </li>
      <li>For each Wrong answer 2 marks will be deducted. </li>
      <li>Once ready click on "Start Quiz" button to start the quiz. </li>
      <li>Total Time alloted is 60 secs for 4 questions. </li>
      </ul>
      <Button className="btn" onClick={this.next}>Start Quiz</Button>
     </Card>
   );}

  }
}

export default App;
