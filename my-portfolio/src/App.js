// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage'; // ✅ A new wrapper for Home, About, etc.
import Resume from './Pages/Resume';

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Home, About, Projects... all in one page */}
        <Route path="/" element={<HomePage />} />

        {/* 👇 Resume in a separate page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
