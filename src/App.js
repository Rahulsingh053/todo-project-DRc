// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginScreen from './view/login';
import Dashboard from './view/dashboard';
import AddTodoScreen from './view/todoAdd';
import EditTodoScreen from './view/todoEdit';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-todo" element={<AddTodoScreen />} />
          <Route path="/edit-todo/:id" element={<EditTodoScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
