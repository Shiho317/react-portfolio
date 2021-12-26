import React from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import Menu from './Menu';
import Resume from './Resume';
import Contact from './Contact';

export default function MobilePage() {
  return (
    <div>
      <Menu/>
      <Home/>
      <About/>
      <Work/>
      <Resume/>
      <Contact/>
    </div>
  )
}


