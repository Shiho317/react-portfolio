import React from 'react';
import '../styles/Work.css';
import Slider from '../slide/Slider';

function Work() {

  return (
    <React.Fragment>
      <div className="work">
        <div className="body">
          <div className="work-color"></div>

        <div className="title">
          <h2>Work</h2>
        </div>

        <Slider/>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Work
