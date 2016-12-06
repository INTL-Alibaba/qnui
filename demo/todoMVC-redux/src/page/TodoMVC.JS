import React from 'react';
import Main from '../components/Main.js'
import {connect} from 'react-redux';
import '../styles/main.scss';
const disabledDate = function (theDate) {
    return theDate && theDate < Moment().add(-1,'d');
};
class TodoMVC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };
  componentWillReceiveProps(nextProps){
    console.log('nextProps',nextProps);
  }
  render() {
    console.log('props',this.props);
    return (
      <div>
        <div>这是一个简单的TodoMVC,介绍了基本组件的搭配及redux的使用</div>
        <Main dataSource={this.props.todoMVC} dispatch={this.props.dispatch}/>
      </div>
    );
  };
}

TodoMVC.defaultProps = {
};
function mapStateToProps(state){
  return {
    todoMVC:state.todoMVCReducer
  }
};
export default connect(mapStateToProps)(TodoMVC);
