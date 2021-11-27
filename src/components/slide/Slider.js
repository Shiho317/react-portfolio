import React, { useState } from 'react';
import './Slider.css';
import SlideBtn from './SlideBtn';
import dataSlider from './dataSlider';

function Slider() {

  const [slideIndex, setSlideIndex] = useState(1);
  
  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex + 1)
    } else if(slideIndex === dataSlider.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }else if(slideIndex === 1){
      setSlideIndex(dataSlider.length)
    }
  }

  return (
    <div className="container-slider">
    {dataSlider.map((obj) => {
      return(
        <div className="projects">
          <div key={obj.id} className="project">
            <div className="component">
              <div className="react"></div>
              <div className="redux"></div>
              <div className="inkscape"></div>
            </div>
          </div>
        </div>
      )
    })}
      
    <SlideBtn moveSlide = {nextSlide} direction = {"next"}/>
    <SlideBtn moveSlide = {prevSlide} direction = {"prev"}/>

    </div>
  )
}

export default Slider
