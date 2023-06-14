import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/todoAction';

const TodoList = ({ todos, addTodo, deleteTodo }) => {
  // Component logic

  return (
    <div>
      {/* Render your todos */}
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}

      {/* Add a new todo */}
      <button onClick={() => addTodo({ id: 1, title: 'New Todo' })}>Add Todo</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);