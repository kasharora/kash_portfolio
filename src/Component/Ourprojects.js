import React from 'react';
import './All.css';
import OurProject from './OurProject'

const Ourprojects = () => {
  return (
    <div id="project-App">
      <div className='project_header'>
        <div className="project-top-left">
          <p className="project-our-text">Our</p>
          <p className="project-project-text">Projects</p>
        </div>
        <div className="project-top-right">
          <p className="project-explore-text">Explore My Recent Projects</p>
          <button className="project-explore-button">Let's See</button>
        </div>
      </div>
      <OurProject/>

    </div>
  );
}

export default Ourprojects;
