import React from 'react';
import './SlideBtn.css';

function SlideBtn({moveSlide, direction}) {
  return (
    <div className="slide-btn">
    <div className={direction === "next" ? "slide-btn-right" : "slide-btn-left"} onClick={moveSlide}>
      <div className={direction === "next" ? "arrow-right" : "arrow-left"}></div>
    </div>
  </div>
  )
}

export default SlideBtn
