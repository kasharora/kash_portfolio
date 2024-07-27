import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import img1 from './1_Work_gallery.svg';
import img2 from './2_Work_gallery.svg';
import img3 from './3_Work_gallery.svg';
import img4 from './4_Work_gallery.svg';
import img5 from './5_Work_gallery (1).svg';
import img6 from './5_Work_gallery (10).svg';
import img7 from './5_Work_gallery (11).svg';
import img8 from './5_Work_gallery (7).svg';
import img9 from './5_Work_gallery (8).svg';
import img10 from './5_Work_gallery (9).svg';

const Workgallery = () => {
  return (
    <div id="Work_gallery">
    <div className="gallery-container">
      <h1 className="title">Work</h1>
      <p className="subtitle">Gallery</p>
      <div className="carousel">
        <div className="carousel-track">
          <div className="carousel-item">
            <img src={img1} alt="Slide 1"/>
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Slide 2"/>
          </div>
          <div className="carousel-item">
            <img src={img3} alt="Slide 3"/>
          </div>
          <div className="carousel-item">
            <img src={img4} alt="Slide 4"/>
          </div>
          <div className="carousel-item">
            <img src={img5} alt="Slide 5"/>
          </div>
          <div className="carousel-item">
            <img src={img6} alt="Slide 6"/>
          </div>
          <div className="carousel-item">
            <img src={img7} alt="Slide 7"/>
          </div>
          <div className="carousel-item">
            <img src={img8} alt="Slide 8"/>
          </div>
          <div className="carousel-item">
            <img src={img9} alt="Slide 9"/>
          </div>
          <div className="carousel-item">
            <img src={img10} alt="Slide 10"/>
          </div>
        </div>
      </div>

    </div>
  </div>
  );
}

export default Workgallery;
