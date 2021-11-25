import React from 'react';
import '../../App.css';
import '../styles/Home.css';
import HomeImage from '../../images/Shiho-home.png';

function Home() {
  return (
    <div>
      <div className="home">
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

      <div className="body">
        <div className="bg-color"></div>

        <div className="big-img">
          <img className="home-img" src={HomeImage} alt="home-img"/>
        </div>

        <div className="front-end-developer">
          <h1>Front End Developer</h1>
        </div>

        <div className="shiho-nagano">
          <h1>Shiho Nagano</h1>
        </div>

        <div className="intro-arrow">
          <div className="intro">
            <p>Thank you for visiting portfolio.<br/>
            I am sure when you finish to look my portfolio,<br/>
            you are going to be interested in me.</p>
          </div>

          <div className="arrow">
            <i class="fas fa-angle-double-right"></i>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home;

