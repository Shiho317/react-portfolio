import React from 'react';
import selfImage from '../../images/aboutme-img.png';
import '../styles/About.css';

function DtAbout() {
  return (
    <React.Fragment>
    <div id="about">
    <div className="body">
      <div className="about-color"></div>
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className='content-wrap'>
      <div className="selfImage">
        <img src={selfImage} alt="self"/>
      </div>

      <div className="profile">
        <p>A front-end developer with a background as a nurse and a passion for learning, designing, programming, building functions.<br/> About personality, reliable, fast learner, self motivated, hardworking team player who works well with others. 
        </p>
      </div>
      </div>
      
      <div className="next-arrow">
          <p>more</p>
          <div className="arrow"></div>
      </div>
    </div>
  </div>
    </React.Fragment>
  )
}

export default DtAbout;
