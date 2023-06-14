import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions/todoAction";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./todo.css";
const EditTodoScreen = ({ todos, editTodo }) => {
    const { id } = useParams(); // Access the route parameter 'id'
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    console.log("Received todos:", todos);

    useEffect(() => {
        // Check if todos is defined and an array
        if (!Array.isArray(todos)) {
            console.error("Invalid todos prop:", todos);
            return;
        }
        const todo = todos.find((todo) => todo.id === Number(id));
        console.log({ todo });
        console.log({
            id,
            title,
            description,
        });
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
        }
    }, [id, todos]);
    console.log(title);
    console.log(description);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedTodo = {
            id,
            title,
            description,
        };

        editTodo(updatedTodo);

        navigate("/dashboard");
    };

    return (
        <div className="edit-todo-container">
            <h1>Edit Todo</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => {
    return { editTodo: (id, newTodo) => dispatch(editTodo(id, newTodo)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoScreen);
