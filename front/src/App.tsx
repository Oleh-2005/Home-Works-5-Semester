import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import LoginPage from './components/auth/login';
import RegisterPage from './components/auth/register';
import HomeLayout from './components/containers/homeLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
