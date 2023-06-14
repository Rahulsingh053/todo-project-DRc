import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

const AddTodoScreen = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    const newTodo = {
      title,
      description,
    };
    addTodo(newTodo); // Dispatch action to add the new todo
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo, // Action to add a new todo
};

export default connect(null, mapDispatchToProps)(AddTodoScreen);
