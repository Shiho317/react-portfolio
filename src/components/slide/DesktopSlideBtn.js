import React from 'react';
import './DesktopSlideBtn.css';

function DesktopSlideBtn({movePage, direction, index}) {
  return (
    <React.Fragment>
    <div className='desktop-slideBtn'>
      <div className={direction === "prev" ? "prev-arrow" : "next-arrow"} onClick={movePage}>
        {direction === "prev" ? (
          <div>
            <p className={index === 0 ? "hidden" : ""}>back</p>
            <div className={index === 0 ? "hidden" : "left-arrow"}></div>
          </div>
        ) : (
          <div>
            <p className={index === -400 ? "hidden" : ""}>more</p>
            <div className={index === -400 ? "hidden" : "right-arrow"}></div>
          </div>
        )}
        
      </div>
    </div>
    </React.Fragment>
  )
}

export default DesktopSlideBtn
