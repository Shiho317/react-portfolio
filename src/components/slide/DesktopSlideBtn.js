import React from 'react';
import './DesktopSlideBtn.css';

function DesktopSlideBtn({movePage, direction}) {
  return (
    <React.Fragment>
    <div className='desktop-slideBtn'>
      <div className={direction === "prev" ? "prev-arrow" : "next-arrow"} onClick={movePage}>
        {direction === "prev" ? (
          <p>back</p>
        ) : (
          <p>more</p>
        )}
        <div className={direction === "prev" ? "left-arrow" : "right-arrow"}></div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default DesktopSlideBtn
