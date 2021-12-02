import React from 'react';
import selfImage from '../../images/aboutme-img.png';
import '../styles/About.css';

function About() {
  return (
    <React.Fragment>
    <div className="about">
      <div className="body">
        <div className="about-color"></div>
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="selfImage">
          <img src={selfImage} alt="self"/>
        </div>

        <div className="profile">
          <p>A front-end developer with a background as a nurse and a passion for learning, designing, programming, building functions. About personality, reliable, fast learner, self motivated, hardworking team player who works well with others. I believe that my passion for web development, designing, my skills and my personality would make me a great asset for your team and I would love to improve my knowledge and skills as your team member as well.
          </p>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default About
