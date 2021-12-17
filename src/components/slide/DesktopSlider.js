import React, { useState } from 'react';
import DtAbout from '../pages/About';
import DtContact from '../pages/Contact';
import DesktopSlideBtn from './DesktopSlideBtn';
import DtHome from '../pages/Home';
import DtResume from '../pages/Resume';
import DtWork from '../pages/Work';
import './DesktopSlider.css';

function DesktopSlider() {
  const desktopPageArr = [<DtHome/>, <DtAbout/>, <DtWork/>, <DtResume/>, <DtContact/>];

  const [x, setX] = useState(0);

  const nextPage = () => {
    if(x === -100 * (desktopPageArr.length - 1)){
      setX(0);
    }else{
      setX(x - 100);
    };
  };

  const prevPage = () => {
    if(x === 0){
      setX(-100 * (desktopPageArr.length -1));
    }else{
      setX(x + 100);
    };
  };

  return (
    <React.Fragment>
      <div className='page-slider'>
        {desktopPageArr.map((item, index) => {
          return(
            <div className='pages'>
              <div key={index} className='page' style={{transform: `translateX(${x}%)`}}>
              {item}
              </div>
            </div>
          )
        })}
        <DesktopSlideBtn movePage={nextPage} direction={"next"}/>
        <DesktopSlideBtn movePage={prevPage} direction={"prev"}/>

      </div>
    </React.Fragment>
  )
}

export default DesktopSlider
