import {RECEIVE_DATA,DISPLAY_NEXT,ADD_MARKS,DEDUCT_MARKS,FINISH_QUIZ,STOP_TIMER} from '../constants.js';
let key=0;
let marks=0;
let correctAns=0;

const data=(state={timerStatus:true},actions)=>{
  let data=null;
  switch (actions.type) {

  case RECEIVE_DATA:
        data=Object.assign({},state,{json:actions.question,id:key})
        //console.log('reducer in recieve data',data);
       return data;
  case DISPLAY_NEXT:
        //  console.log('i m reducer displayNext');
         data=Object.assign({},state,{json:actions.json,id:++key})
          return data;
    case ADD_MARKS:
          //console.log('I M ADD_MARKS');
          //console.log(marks);
          marks=marks+actions.marks;
          data=Object.assign({},state,{id:key,marks:marks,correctAns:++correctAns})
          return data;
    case DEDUCT_MARKS:
                //console.log('I M DEDUCT_MARKS');
                //console.log(marks);
                marks=marks-actions.marks;
                data=Object.assign({},state,{id:key,marks:marks})
                return data;
    case FINISH_QUIZ:
          //console.log(state,'finish quiz state');
          var totalMarks=0;
          var totalQues=0;
          state.json.map((value,k)=>
          {totalMarks=totalMarks+state.json[k].marks;
          totalQues=totalQues+1;
           return 0;}
          )
          data=Object.assign({},state,{marks:marks,totalQues:totalQues,correctAns:correctAns,timeOver:actions.timeOver,showResult:true,totalMarks:totalMarks})
          //console.log('finish quiz reducer',data);
          return data;
    case STOP_TIMER:
          data=Object.assign({},state,{timerStatus:actions.timerStatus})
          return data;
    default:
    return state;

  }
}

export default data;
