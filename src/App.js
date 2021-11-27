import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './components/mobile/Home';
import About from './components/mobile/About';
import Work from './components/mobile/Work';
import Resume from './components/mobile/Resume';
import Contact from './components/mobile/Contact';
import MobilePage from './components/mobile/Mobile-Page';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MobilePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
