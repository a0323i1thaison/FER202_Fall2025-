

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import HomePage from './pages/HomePage';
import AccountPage from './pages/Account/AccountPage'; 

const App = () => {
  return (

    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;