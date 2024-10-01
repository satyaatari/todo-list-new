
import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/sign-up';
import Profile from './components/profile';
import AddTodoForm from './components/add-todo-list';
import TodoList from './components/todo-list';

const App: React.FC = () => {
  return (
    <Router>  {/* Ensure you wrap your application in Router */}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/addTodo" element={<AddTodoForm />} />
      </Routes>
    </Router>
  );
};

export default App;
