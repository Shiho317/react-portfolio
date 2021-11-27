import React from 'react';
import selfImage from '../../images/aboutme-img.jpg';
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
          <p>Shiho has a passionate to everything that she try to focus on. <br/>And now, she is absorbed in web development.<br/>
          As a junior developer, she like to improve her skills and excited to find something she didn’t know.<br/> 
          Even she is a junior developer, she is joining to developer community actively.<br/>
          She has been created several web site with other web developers through online communication.<br/>
          She thinks team project is more important not to mention self project,<br/> she is currently forcusing on working with others.</p>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default About
