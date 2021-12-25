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
      <a href='https://www.notion.so/nero-waffle-bar-Website-56e914fbb12f4b6cbb3be6b980c06c51' rel='noreferrer' target='_blank'>
        <img src={Contents1} alt='contents1'/>
      </a>
      
      <a href='https://www.notion.so/Seattle-DJ-Website-c109fca04ede4e23b401139d9a1c4d96' rel='noreferrer' target='_blank'>
        <img src={Contents2} alt='contents2'/>
      </a>
      
      <a href='https://www.notion.so/Web-Application-InforMATE-b31a857b52f341d5aea85ceef0317e15' rel='noreferrer' target='_blank'>
        <img src={Contents3} alt='contents3'/>
      </a>
      
      <div className='contents-more'>
        <a href='https://www.notion.so/de5824d2644647d4b56818c5c085dc9b?v=0f61cf96707c425582bc98350090d29c' rel='noreferrer' target='_blank'>
          see all projects
        </a>
      </div>
    </div>

    </div>
  </div>
    </React.Fragment>
  )
}

export default DtWork;
