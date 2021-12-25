import React, { useState } from 'react';
import './Slider.css';
import SlideBtn from './SlideBtn';
import DataSlider from './DataSlider';
import Project1 from '../../images/project-1.png';
import Project2 from '../../images/project-2.png';
import Project3 from '../../images/project-3.png';
import Project4 from '../../images/project-4.png';
import Project5 from '../../images/project-5.png';

function Slider() {

  const slideArr = [<DataSlider src={Project1}/>, <DataSlider src={Project2}/>, <DataSlider src={Project3}/>, <DataSlider src={Project4}/>, <DataSlider src={Project5}/>]

  const [x, setX] = useState(0)
  
  const nextSlide = () => {
    if(x === -100 * (slideArr.length - 1)){
      setX(0)
    } else {
      setX(x - 100)
    }
  }

  const prevSlide = () => {
    if(x === 0){
      setX(-100 * (slideArr.length - 1))
    } else {
      setX(x + 100)
    }
  }

  return (
    <div className="container-slider">
    {slideArr.map((item, index) => {
      return(
        <div className="projects">
          <div key={index} className="project" style={{transform: `translateX(${x}%)`}}>
            <a href='https://www.notion.so/de5824d2644647d4b56818c5c085dc9b?v=0f61cf96707c425582bc98350090d29c' rel='noreferrer' target='_blank'>
            {item}
            </a>
          </div>
        </div>
      )
    })}
      
    <SlideBtn moveSlide = {nextSlide} direction = {"next"}/>
    <SlideBtn moveSlide = {prevSlide} direction = {"prev"}/>

    <div className="dots-slider">
      <div className={x === 0 ? "dot0 active" : "dot1"}></div>
      <div className={(x * -1) / 100 === 1 ? "dot1 active" : "dot1"}></div>
      <div className={(x * -1) / 100 === 2 ? "dot2 active" : "dot2"}></div>
      <div className={(x * -1) / 100 === 3 ? "dot3 active" : "dot3"}></div>
      <div className={(x * -1) / 100 === 4 ? "dot4 active" : "dot4"}></div>
    </div>

    </div>
  )
}

export default Slider
