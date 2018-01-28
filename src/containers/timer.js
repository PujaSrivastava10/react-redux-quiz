import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import {stopTimer} from '../actions';
import {connect} from 'react-redux'
class Timer extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 60 };
    this.timer = 0;

  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer()
  }

  startTimer=()=> {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown=()=> {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    if (seconds === 0) {
      clearInterval(this.timer);
    }
    if(this.state.time.h===0&&this.state.time.m===0&&this.state.time.s===0){
      let timerStatus=false;
     this.props.stopTimer(timerStatus);
     }
  }
   componentWillUnmount(){
       clearInterval(this.timer);
   }

  render() {
    return(
      <Row className="timer">
      <Col>
       Time Left : <span className="timerdesign"> <span className="time"> {this.state.time.h} </span> :
       <span className="time"> {this.state.time.m} </span> :
       <span className="time"> {this.state.time.s} </span>
       </span>
       </Col>
      </Row>
    );
  }
}
function mapStateToProps(state){
  return{
    data:state
  }
}
export default connect(mapStateToProps,{stopTimer})(Timer);
