import React from 'react';
import '../../App.css';
import '../styles/Home.css';
import '../styles/DesktopMenu.css';
import HomeImage from '../../images/Shiho-home.png';

export default function DtHome() {
  return (
    <React.Fragment>
      <div id="home">
        <div className="body">
        <div className="home-color"></div>
        
        <div className="front-end-developer">
          <h1>Front End Developer</h1>
        </div>

        <div className="shiho-nagano">
          <h1>Shiho Nagano</h1>
        </div>

        <div className="big-img">
          <img className="home-img" src={HomeImage} alt="home-img"/>
        </div>

        <div className="intro-arrow">
          <div className="intro">
            <p>Thank you for visiting my website.<br/>
            To learn about me, you can use links above<br/>
            or click on a button in below.</p>
          </div>
        </div>
        
      </div>

      </div>
    </React.Fragment>
  )
}


