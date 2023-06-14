import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../actions/todoAction";
import { useNavigate } from "react-router-dom";
import "./todo.css";
const TodoList = ({ todos, addTodo, deleteTodo, editTodo }) => {
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/edit-todo/${id}`);
    };

    return (
        <div>
            {/* Render your todos */}
            {todos.map((todo) => (
                <div key={todo.id} className="todo-item">
                    <input value={todo.title} disabled></input>
                    <input value={todo.description} disabled></input>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => handleEdit(todo.id)}>Edit Todo</button>
                </div>
            ))}

            {/* Add a new todo */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (newTodo) => dispatch(addTodo(newTodo)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        editTodo: (id, newTodo) => dispatch(editTodo(id, newTodo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
