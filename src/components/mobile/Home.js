import React from 'react';
import HomeImage from '../../images/Shiho-home.png';
import '../styles/Home.css';

function Home() {

  return (
    <React.Fragment>
      <div className="home">
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


