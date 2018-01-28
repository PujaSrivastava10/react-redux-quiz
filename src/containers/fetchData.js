import React,{Component} from 'react';
import {fetchData} from '../actions';
import { connect } from 'react-redux';
import DisplayQuesAns from './DisplayQuesAns'

class FetchData extends Component {

  componentDidMount(){
    //console.log('componentDidMount');
    const { dispatch} = this.props
    dispatch(fetchData())
    //console.log(s);
  }
  render(){
    //const {data}=this.props
    //console.log('this.props',this.props);
    //console.log(this.props.datas);
    return(
      <div>
      <DisplayQuesAns />
      </div>
    );
  }
}

function mapStateToProps(state){
//  console.log(state,'state');
  //const {data} = state;
  //console.log(data);
  return {data:state};
}
export default connect(mapStateToProps)(FetchData);
