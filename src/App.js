import React, { useState, useEffect } from 'react';
import './App.css';
import MobilePage from './components/mobile/Mobile-Page';
import DesktopPage from './components/pages/Desktop-page.js';


function App() {

  const [laptopPage, setLaptopPage] = useState(true);

  const LaptopPage = () => {
    if(window.innerWidth <= 768){
      setLaptopPage(false)
    }else{
      setLaptopPage(true)
    }
  };

  useEffect(() => {
    LaptopPage();
  }, []);

  window.addEventListener('resize', LaptopPage);

  return (
    <div>
      {laptopPage ? (
        <DesktopPage/>
      ) : (
        <MobilePage/>
      )}
    </div>
  );
};

export default App;
