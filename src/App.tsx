
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Corrected import
import LoginPage from './Components/login';
import SignUp from './Components/SignUp';
import Main from './Components/main'
import React from 'react';
import Contact from './Components/contact'
import Dashboard from './Components/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        {/* Corrected usage of Routes */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;