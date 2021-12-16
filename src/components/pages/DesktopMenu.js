import React from 'react';
import '../styles/DesktopMenu.css';

function DesktopMenu() {
  return (
    <React.Fragment>
    <div className="header">
    <nav>
      <ul>
        <li className="white-btn">Home</li>
        <li className="white-btn">About</li>
        <li className="white-btn">Work</li>
        <li className="red-btn">Resume</li>
        <li className="red-btn">Contact</li>
      </ul>
    </nav>
    </div>
    </React.Fragment>
  )
}

export default DesktopMenu
