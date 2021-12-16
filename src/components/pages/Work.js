import React from 'react';
import '../styles/Work.css';
import Contents1 from '../../images/project-1.png';
import Contents2 from '../../images/project-2.png';
import Contents3 from '../../images/project-3.png';

function DtWork() {
  return (
    <React.Fragment>
    <div id="work">
    <div className="body">
      <div className="work-color"></div>

    <div className="title">
      <h2>Work</h2>
    </div>

    <div className='work-contents'>
      <img src={Contents1} alt='contents1'/>
      <img src={Contents2} alt='contents2'/>
      <img src={Contents3} alt='contents3'/>
      <div className='contents-more'>see all projects</div>
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

export default DtWork;
