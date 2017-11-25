import React, { Component } from 'react';
import './css/todo.css';
import PropTypes from 'prop-types';

class Todo extends Component {

  render() {
    const className = this.props.done ? 'done' : 'undone'
    const link = this.props.done ? '元に戻す' : '完了！'
    return(
      <li className={className}>
        <span>{this.props.id}</span>
        <span>：{this.props.title}</span>
        <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>　
        <p>{this.props.desc}</p>
      </li>
    );
  }
}
Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  done: PropTypes.bool,
  setTodoStatus: PropTypes.func
}

export default Todo
