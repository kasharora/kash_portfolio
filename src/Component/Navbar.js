import React from 'react';
import './All.css';
import { HashLink as Link } from 'react-router-hash-link';
import homeicon from './home-icon-silhouette.png';

function Navbar() {
  return (
    <div className="footer">
      <Link className="footer-button" id="footer-button" smooth to="/#App"><img src={homeicon}/></Link>
      <Link className="footer-button" id="footer-button-1" smooth to="/#App">Work</Link>
      <Link className="footer-button" smooth to="/#project-App">Project</Link>
      <Link className="footer-button" smooth to="/#services-container">Service</Link>
      <Link className="footer-button"  id="footer-button-2"smooth to="/contactpage-container">Connect</Link>
    </div>
  );
}

export default Navbar;
