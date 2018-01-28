import fetch from 'cross-fetch';
import {RECEIVE_DATA,DISPLAY_NEXT,ADD_MARKS,DEDUCT_MARKS,FINISH_QUIZ,STOP_TIMER} from '../constants.js';

//let key=0;
 function receiveData(json){
 const action={
   type:RECEIVE_DATA,
   question:json[0].questions.map(value=>value),
   timerStatus:true
 }
    //console.log('action in recieveData',action.question);
    return action;

}
export const displayNext=(json,id)=>{
//  console.log('displayNext json',json);
  //console.log('displayNext id', id);
  return{
    type:DISPLAY_NEXT,
    id,
    json
  }
}

export const addMarks=(marks,id)=>{
  return{
    type:ADD_MARKS,
    id,
    marks
  }

}
export const deductMarks=(marks,id)=>{
  return{
    type:DEDUCT_MARKS,
    id,
    marks

  }
}
export const stopTimer=(timerStatus)=>{
  return{
    type:STOP_TIMER,
    timerStatus
  }
}
export const finishQuiz=(timeOver)=>{
  //console.log('action finish quiz');
  return{
    type:FINISH_QUIZ,
    correctAns:0,
    totalQues:0,
    showResult:true,
    timeOver
  }
}
export function fetchData(){
  return dispatch => {
    return fetch('http://localhost:3004/data')
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}
