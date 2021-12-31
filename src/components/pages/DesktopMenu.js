import React from 'react';
import '../styles/DesktopMenu.css';

export default function DesktopMenu({index, setIndex}) {

  return (
    <React.Fragment>
    <div className="header">
    <nav>
      <ul>
        <li className={index === 0 ? "nav-btn current" : "nav-btn"} onClick={() => {setIndex(0)}}>Home</li>
        <li className={(index * -1) / 100 === 1 ? "nav-btn current" : "nav-btn"} onClick={() => {setIndex(-100)}}>About</li>
        <li className={(index * -1) / 100 === 2 ? "nav-btn current" : "nav-btn"} onClick={() => {setIndex(-200)}}>Work</li>
        <li className={(index * -1) / 100 === 3 ? "nav-btn current" : "nav-btn"} onClick={() => {setIndex(-300)}}>Résumé</li>
        <li className={(index * -1) / 100 === 4 ? "nav-btn current" : "nav-btn"} onClick={() => {setIndex(-400)}}>Contact</li>
      </ul>
    </nav>
    </div>
    </React.Fragment>
  )
}

