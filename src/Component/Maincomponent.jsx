import './Maincomponent.css';
import React, { useEffect } from 'react';
import About from './About';
import HomePage from './HomePage';
import Workgallery from './Workgallery';
import Ourprojects from './Ourprojects';
import Ourservices from './Ourservices';
import Contactpage from './ContactPage';
import Footer from './Footer';
import Process from './Process';

const Maincomponent = () => {
  

  return (
    <>
      <HomePage />
      {/* <About />
      <Workgallery />
     <Ourprojects /> */}
     <Ourservices />
      {/* <Process/> */}
    <Contactpage />
      <Footer />
      </>
    
  );
};

export default Maincomponent;

