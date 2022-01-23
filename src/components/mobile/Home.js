import React from 'react';
import { Link as Scroll } from 'react-scroll';
import HomeImage from '../../images/Shiho-home.png';
import '../styles/Home.css';

export default function Home() {

  return (
    <React.Fragment>
      <div id="home">
        <div className="body">
          <div className="home-color"></div>

          <div className="front-end-developer">
            <h1><span className="white-str">F</span>ront End Developer</h1>
          </div>

          <div className="shiho-nagano">
            <h1><span className="black-str">S</span>hiho Nagano</h1>
          </div>

          <div className="big-img">
            <img className="home-img" src={HomeImage} alt="home-img"/>
          </div>

          <div className="intro-arrow">
          <div className="intro">
            <p>Thank you for visiting my website.<br/>
            To learn about me, you can scroll down<br/>
            or click on a button in below.</p>
          </div>

          <div className="down-arrow">
          <Scroll
          to="about"
          spy={true} 
          smooth={true}
          duration={1000}>
            <p>more</p>
            <div className="arrow"></div>
          </Scroll>
          </div>
        </div>

        </div>

      </div>
      
    </React.Fragment>
  )
}



