import React, { useState } from "react";
import usersData from "../users.json";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = usersData.users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            // onLogin(user.username);
            setUsername("");
            setPassword("");
            setErrorMessage("");

            // Redirect to the Dashboard
            navigate("/dashboard");
        } else {
            setErrorMessage("Invalid username or password");
        }
    };

    return (
        <div className="login-form">
            <div className="container">
                <div className="form-wrapper">
                    <form onSubmit={handleLogin}>
                        <div className="login-form-control">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="login-form-control">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                        {errorMessage && <p>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
