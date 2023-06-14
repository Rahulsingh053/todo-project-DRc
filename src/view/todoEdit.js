import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions/todoAction';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditTodoScreen = ({ todos, editTodo }) => {
  const { id } = useParams(); // Access the route parameter 'id'
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  console.log('Received todos:', todos);

  useEffect(() => {
    // Check if todos is defined and an array
    if (!Array.isArray(todos)) {
      console.error('Invalid todos prop:', todos);
      return;
    }
  
    // Find the todo with the matching id
    const todo = todos.find((todo) => todo.id === id);
  
    // Set the initial values for title and description
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [id, todos]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTodo = {
      id,
      title,
      description,
    };

    editTodo(updatedTodo);

    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoScreen);