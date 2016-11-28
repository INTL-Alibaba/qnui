import React from 'react';
import { Table,Button } from 'qnui';
import '../styles/main.scss';
import {modifyItem,deleteItem} from '../redux/actions/todoMVC.js'

const ButtonGroup = Button.Group;
const renderStatus = (value) => {
  if(value  == true){
    return '已完成';
  }else{
    return '进行中';
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
  };
  renderAction(value,index) {
    var status = value ? '撤销':'完成';
    return (
      <ButtonGroup>
             <Button type="primary" size="small" onClick={this.modify.bind(this,index)}>{status}</Button>
             <Button type="primary" shape="warning" size="small" onClick={this.delete.bind(this,index)}>删除</Button>
      </ButtonGroup>
    )
  }
  modify(index){
    this.props.dispatch(modifyItem(index));
  }
  delete(index){
    this.props.dispatch(deleteItem(index));
  }
  render() {
    return (
      <div className='todomvc-list'>
        <Table dataSource ={this.props.dataSource}
          >
          <Table.Column title="时间" dataIndex="time"/>
          <Table.Column title="事件" dataIndex="content"/>
          <Table.Column title="状态" dataIndex="status" cell={renderStatus.bind(this)}/>
          <Table.Column title="操作" dataIndex="status" cell={this.renderAction.bind(this)}/>
        </Table>
      </div>
    );
  };
}

List.defaultProps = {
  dataSource:[]
};

export default List;
