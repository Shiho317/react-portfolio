import React from 'react';
import selfImage from '../../images/aboutme-img.png';
import '../styles/About.css';
import { useMediaQuery } from 'react-responsive';

function DtAbout() {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

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
      {isDesktop ? (
        <p>A front-end developer with a background as a nurse and a passion for learning, designing, programming, building functions. About personality, reliable, fast learner, self motivated, hardworking team player who works well with others. I believe that my passion for web development, designing, my skills and my personality would make me a great asset for your team and I would love to improve my knowledge and skills as your team member as well.
        </p>
      ) : (
        <p>A front-end developer with a background as a nurse and a passion for learning, designing, programming, building functions.<br/> About personality, reliable, fast learner, self motivated, hardworking team player who works well with others. 
        </p>
      )}
        
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
