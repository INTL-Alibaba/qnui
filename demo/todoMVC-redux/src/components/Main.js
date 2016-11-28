import React from 'react';
import { DatePicker,Input,Moment,Icon,Button } from 'qnui';
import List from './List.js';
import '../styles/main.scss';
import {addItem} from '../redux/actions/todoMVC.js';
const disabledDate = function (theDate) {
    return theDate && theDate < Moment().add(-1,'d');
};

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:Moment().format('YYYY-MM-DD'),
      inputState:'success'
    };
    console.log(props.todoMVC);
  };

  timeChange(a,b){
    if(a===b) return;
    this.setState({
      date:b
    })
  };

  handleEnter(){
    let currEve = '',currDate =this.state.date;
    this.refs.inputEvent.state ?  currEve = this.refs.inputEvent.state.value : null;

    if(!currEve || !currDate || currEve.length == 0 || currDate.length==0){
      this.setState({
        inputState: 'error'
      });
      return;
    }
    this.props.dispatch(
      addItem({
        time:currDate,
        content:currEve,
        status:false
      })
    );
  };

  render() {
    return (
      <div className='todoMVC-container'>
        <div>
          <DatePicker disabledDate={disabledDate} ref='datePicker' value={this.state.date} onChange ={(a,b)=>this.timeChange(a,b)}
                            locale={{placeholder:'请选择待办日期'}}
                            format='YYYY-MM-DD'/>
                          <Input state={this.state.inputState} ref='inputEvent' className='input-area' placeholder='请输入待办事件' onPressEnter={e=>this.handleEnter(e)}/>
        </div>
        <List dataSource={this.props.dataSource} dispatch={this.props.dispatch}></List>
        <Button type="primary" onClick={()=>this.handleEnter()}>新增</Button>
      </div>
    );
  };
}

AppComponent.defaultProps = {
  dataSource:[],
  dispatch:{}
};

export default AppComponent;
