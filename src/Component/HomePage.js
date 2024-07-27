import React from 'react';
import logo from './MainVplogo.png'; // Make sure you have a logo.png in the src folder
import movingImage from './file.png'; 
import './All.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomCursor from './Customcursor.js';
import Navbar from './Navbar.js';
import Figma_logo from './react.png';
import Logo from './Logo.js';
import Logomobileview from './LogomobileView.js';
import './AllMobileview.css';
import logo1 from './chakka.svg';
import arrow from './Arrow1.svg';


function HomePage() {
  return (
    <div id="App">
      <CustomCursor/>
      <div className='Maindivlogo'><Logo/></div>
      <div className='Mobileviewlogo'><Logomobileview/></div>
      
      <div className="content">
      
        <div className="moving-text">
          <b>Hi! I am Kashish Arora</b> Front End Developer<b>Hi! I am Kashish Arora</b> Front End Developer
          </div>
        <div className="image-container">
              <div className="main_image-flip-card">
              <div className="main_image-flip-card-inner">
                <div className="main_image-flip-card-front">
                  <img src={movingImage} alt="Flippable" className="main_image-flip-card-image" />
                </div>
                <div className="main_image-flip-card-back">
                  <div className="main_image-flip-card-data">
                  <div className='About_logo'>
                    <img src={logo1} className="logo_about" alt="Logo" />
                    <img src={arrow} className="arrow" alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div><img src={Figma_logo} className="Figma-image" alt="Moving Content" /></div>
          
          <br/>
          {/* <div className="overlay-text">Transform ideas Into Reality With <br/> Purposeful Branding and Effective<br/> Web Designing </div>
        */}
              </div>
          <div className='third-div-text'> 
            <span className='third-div-text-span'>Hi! I am Kashish Arora</span>I Design & Develop Interfaces<br/> That's Make People's Lives Easier
          </div>
        </div>
        <div><button className='Work_Together'>Let's Work Together</button></div>
      
      <div className='Bottom_navbar'><Navbar/></div>
      </div>

  );
}

export default HomePage;
