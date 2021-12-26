import React from 'react';
import { Link as Scroll } from 'react-scroll';
import selfImage from '../../images/aboutme-img.png';
import '../styles/About.css';

export default function About() {
  return (
    <React.Fragment>
    <div id="about">
      <div className="body">
        <div className="about-color"></div>
        <div className="title">
          <h2>About Me</h2>
        </div>
        
        <div className="selfImage">
          <img src={selfImage} alt="self"/>
        </div>

        <div className="profile">
          <p>A front-end developer with a background as a nurse and a passion for learning, designing, programming, building functions.<br/> About personality, reliable, fast learner, self motivated, hardworking team player who works well with others. 
          </p>
        </div>

        <div className="down-arrow">
          <Scroll
          to="work"
          spy={true} 
          smooth={true}
          duration={1000}>
            <p>more</p>
            <div className="arrow"></div>
          </Scroll>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}


