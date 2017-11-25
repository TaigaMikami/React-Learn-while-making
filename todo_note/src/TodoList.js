import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {

  render() {
    if (this.props.isLoading) {
      return <h2>loading . . . </h2>;
    }

    if (this.props.hasError) {
      return <h2>error</h2>;
    }
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        setTodoStatus={this.props.setTodoStatus}
      />
    )

    return(
      <ul>
        {todos}
      </ul>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.array,
  setTodoStatus: PropTypes.func,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool
}

export default TodoList
