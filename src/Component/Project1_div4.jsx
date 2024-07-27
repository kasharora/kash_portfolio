import React from 'react';
import './All.css';
import NothingPhone1 from './NothingPhone1.png';
import NothingPhone2 from './NothingPhone2.svg';
import NothingPhone3 from './NothingPhone3.svg';
import NothingPhone4 from './NothingPhone4.svg';

const Project1_div4 = () => {
  return (
    <div className="project1_div3-container">
      <div className="project1_div3-title">
        <span className="project1_div3-number">02</span>
        <span className="project1_div3-mainText">STARTING Flow <br/><span className='project1_div3-mainsubtext'>Given the on-the-go nature of our users, prioritize mobile responsiveness.</span></span>
      </div>
      
      <div className="project1_div3-images">
        <div className="project1_div3-imageContainer">
          <img src={NothingPhone1} className="project1_div3-image project1_div3-image1" />
          <div className="project1_div3-arrow">→</div>
          <div className="project1_div3-imageText">Splash screen</div>
        </div>
        <div className="project1_div3-imageContainer">
          <img src={NothingPhone2} className="project1_div3-image project1_div3-image2" />
          <div className="project1_div3-arrow">→</div>
          <div className="project1_div3-imageText">login /signup </div>
        </div>
        <div className="project1_div3-imageContainer">
          <img src={NothingPhone3}  className="project1_div3-image project1_div3-image3" />
          <div className="project1_div3-arrow">→</div>
          <div className="project1_div3-imageText">Geolocation Integration</div>
        </div>
        <div className="project1_div3-imageContainer">
          <img src={NothingPhone4}  className="project1_div3-image project1_div3-image4" />
          <div className="project1_div3-arrow">→</div>
          <div className="project1_div3-imageText">Home page</div>
        </div>
      </div>
    </div>
  );
};

export default Project1_div4;
