import React from 'react';
import '../styles/Contact.css';
import Footer from './footer';

function Contact() {
  return (
    <React.Fragment>
      <div className="contact">
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
            <h4>shihonagano9797@gmail.com</h4>
          </div>
          <div className="linkedin">
            <i class="fab fa-linkedin fa-2x"></i>
            <h4>shiho-nagano</h4>
          </div>
          <div className="discord">
            <i class="fab fa-discord fa-2x"></i>
            <h4>@Shiho N (#7054)</h4>
          </div>
          <div className="github">
            <i class="fab fa-github-square fa-2x"></i>
            <h4>Shiho317</h4>
          </div>
        </div>

        <div className="closing">
          <h1>Thank you.</h1>
        </div>

        <Footer/>
      </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
