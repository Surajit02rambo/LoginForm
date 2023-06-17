import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import './App.css'
import CredentialsPage from './CredentialsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/credentials" element={<CredentialsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
