import React, { useId, useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";
import "./todo.css";
const AddTodoScreen = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleAddTodo = ({ dispatch }) => {
        const newTodo = {
            title,
            description,
        };
        props.addTodo(newTodo);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="add-todo-container">
            <h1>Add Todo</h1>
            <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (newTodo) => dispatch(addTodo(newTodo)), // Action to add a new todo
    };
};

export default connect(null, mapDispatchToProps)(AddTodoScreen);
