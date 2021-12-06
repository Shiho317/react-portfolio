import React from 'react';
import { Link as Scroll } from 'react-scroll';
import '../styles/Work.css';
import Slider from '../slide/Slider';

function Work() {

  return (
    <React.Fragment>
      <div id="work">
        <div className="body">
          <div className="work-color"></div>

        <div className="title">
          <h2>Work</h2>
        </div>

        <Slider/>

        <div className="down-arrow">
          <Scroll
          to="resume"
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

export default Work
