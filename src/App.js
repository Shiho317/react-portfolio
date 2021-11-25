import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element="" />
          <Route path="/portfolio" element="" />
          <Route path="/resume" element="" />
          <Route path="/contact" element="" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
