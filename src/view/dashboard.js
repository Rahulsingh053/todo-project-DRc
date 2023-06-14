// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Dashboard = ({ todos }) => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <Link to="/add-todo">Add Todo</Link>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <h3>{todo.title}</h3>
//             <p>{todo.description}</p>
//             <Link to={`/edit-todo/${todo.id}`}>Edit</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   todos: state.todos.todos, // Assuming you have a "todos" reducer in your Redux store
// });

// export default connect(mapStateToProps)(Dashboard);

// src/view/Dashboard.js

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodoList } from "../actions/todoAction";
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";
import { logout } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ todos, fetchTodoList }) => {
    console.log(todos, "todos");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the todo list when the component mounts
        fetchTodoList();
    }, [fetchTodoList]);
    const handleLogout = () => {
        logout();
        navigate("/");
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Log out</button>
            <TodoAdd />
            <ul>{todos && <TodoList />}</ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos,
    };
};

const mapDispatchToProps = {
    fetchTodoList,
    logout: (dispatch) => {
        return dispatch(logout());
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
