import React from 'react';
import DtFooter from './DtFooter';
import '../styles/Contact.css';

function DtContact() {
  return (
    <React.Fragment>
    <div id="contact">
    <div className="body">
      <div className="contact-color"></div>
      
      <div className="title">
        <h2>Contact</h2>
      </div>

      <div className="details">
        <div className="tel">
          <i class="fas fa-phone-square fa-2x"></i>
          <h4>+1 (236)-838-5407</h4>
        </div>
        <div className="mail">
          <i class="fas fa-envelope fa-2x"></i>
          <a href='mailto:shihonagano9797@gmail.com' rel='noreferrer' target='_blank'><h4>shihonagano9797@gmail.com</h4></a>
        </div>
        <div className="linkedin">
          <i class="fab fa-linkedin fa-2x"></i>
          <a href='https://www.linkedin.com/in/shiho-nagano-b7518b21b' rel='noreferrer' target='_blank'><h4>shiho-nagano</h4></a>
        </div>
        <div className="discord">
          <i class="fab fa-discord fa-2x"></i>
          <h4>@Shiho N (#7054)</h4>
        </div>
        <div className="github">
          <i class="fab fa-github-square fa-2x"></i>
          <a href='https://github.com/Shiho317' rel='noreferrer' target='_blank'><h4>Shiho317</h4></a>
        </div>
      </div>

      <div className="closing">
        <h2>Thank you.</h2>
      </div>

      <div className="back-to-top">
      <i class="fas fa-sort-up" />
          <p>Top</p>
      </div>
      
      <DtFooter/>
    </div>
    </div>
    </React.Fragment>
  )
}

export default DtContact;
