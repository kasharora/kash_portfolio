import React from 'react'
import Name_LOGO from './logo2.svg';
import email from './email.png'

function Logo() { 
  return (
    <div className="header">
    <div className='mail'><img src={email}/>Kashishkurra@gmail.com</div>
      <div className='header-logo-content'>
        <span className="text-left">Kashish</span>
        <img src={Name_LOGO} className="logo" alt="Logo" />
        <span className="text-right">Arora<br/> <span className='text-right-bottom'>Designs & Co.</span></span>
        </div>
      <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook"></i></a>
      </div>
    </div>
  )
}

export default Logo