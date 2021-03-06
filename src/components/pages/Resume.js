import React from 'react';
import '../styles/Resume.css';
import HtmlImg from '../../images/html.png';
import CssImg from '../../images/css.png';
import ScssImg from '../../images/sass.png';
import JqueryImg from '../../images/jquery.png';
import JsImg from '../../images/javascript.png';
import ReactImg from '../../images/react.png';
import ReduxImg from '../../images/redux.png';
import NextjsImg from '../../images/nextjs.png';
import { SiTypescript } from 'react-icons/si';
import FigmaImg from '../../images/figma.png';
import { SiFirebase } from  'react-icons/si';
import InkscapeImg from '../../images/inkscape.png';
import GithubImg from '../../images/github.png';
import { SiTailwindcss } from 'react-icons/si';
import ResumePdf from '../../images/ShihoNagano-Résumé.pdf';


export default function DtResume() {
  return (
    <React.Fragment>
    <div id="resume">
    <div className="body">
      <div className="resume-color"></div>
      <div className="title">
      <h2>Résumé</h2>
      </div>
      <div className="resume-details">
      <div className="education">
      <div className="subtitle">
        <span className="red">E</span>ducation
      </div>
      <div className="contents">
      <div>
        <h5>Cornerstone International Community College of Canada</h5>
        <h6>Diploma in Web Development</h6>
        <p> - Aug 2021 - Aug 2022 / Vancouver, BC, Canada</p>
      </div>

      <div>
        <h5>Mie Prefectural College Of Nursing</h5>
        <h6>Bachelor Degree of Nursing</h6>
        <p> - Apr 2015 - Mar 2019 / Tsu, Mie, Japan</p>
      </div>
      </div>
      </div>

      <div className="skills">
      <div className="subtitle">
        <span className="red">S</span>kills
      </div>
      <div className="contents">
        <div className="wrap">
          <div className="icon-wrap">
            <img src={HtmlImg} alt="html"/>
          </div>
          <div className="icon-wrap">
            <img src={CssImg} alt="css"/>
          </div>
          <div className="icon-wrap">
            <img src={ScssImg} alt="scss"/>
          </div>
          <div className="icon-wrap">
            <img src={JqueryImg} alt="jquery"/>
          </div>
          <div className="icon-wrap">
            <img src={JsImg} alt="javascript"/>
          </div>
          <div className="icon-wrap">
            <img src={ReactImg} alt="react"/>
          </div>
          <div className="icon-wrap">
            <img src={ReduxImg} alt="redux"/>
          </div>
          <div className="icon-wrap">
            <img src={NextjsImg} alt="nextjs"/>
          </div>
          <div className="icon-wrap">
            <SiTypescript/>
          </div>
          <div className="icon-wrap">
            <SiTailwindcss/>
          </div>
          <div className="icon-wrap">
            <img src={FigmaImg} alt="figma"/>
          </div>
          <div className="icon-wrap">
            <SiFirebase/>
          </div>
          <div className="icon-wrap">
            <img src={InkscapeImg} alt="inkscape"/>
          </div>
          <div className="icon-wrap">
            <img src={GithubImg} alt="github"/>
          </div>
          
        </div>
      </div>
      </div>

      <div className="employment">
      <div className="subtitle">
        <span className="red">E</span>mployment
      </div>
      <div className="contents">
        <h5>Frontend Web Developer</h5>
        <h6>Protest Tunes</h6>
        <p> - Nov 2021 - Present / Seattle, Washington, United States</p>
      </div>
      <div className="contents">
        <h5>Registered Nurse</h5>
        <h6>Osaka Red Cross Hospital</h6>
        <p> - Apr 2019 - Jun 2021 / Osaka, Osaka, Japan</p>
      </div>
      </div>

      <div>
        <a href={ResumePdf} rel='noreferrer' target='_blank' className="download-resume">
          <h6>Download/Print résumé</h6>
          <i class="fas fa-file-export size"></i>
        </a>
    </div>
    </div>
    
    </div>
  </div>
  
    </React.Fragment>
  )
}

