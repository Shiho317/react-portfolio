import React from 'react';
import Menu from './Menu';
import HomeImage from '../../images/Shiho-home.png';
import '../styles/Mobile-Home.css';

function Home() {
  return (
    <React.Fragment>
      <div className="home">

        <div className="menu">
        <Menu/>
        <nav className="menu-list">
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Work</li>
            <li>Résumé</li>
            <li>Contact</li>
          </ul>
        </nav>
        </div>

        <div className="body">
          <div className="bg-color"></div>

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
            <p>Thank you for visiting portfolio.<br/>
            I am sure when you finish to look my portfolio,<br/>
            you are going to be interested in me.</p>
          </div>

          <div className="down-arrow">
            <p>more</p>
            <div className="arrow"></div>
          </div>
        </div>

        </div>

      </div>
      
    </React.Fragment>
  )
}

export default Home


