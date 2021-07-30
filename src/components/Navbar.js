import React from 'react';
import './Navbar.css';
import logoimg from '../images/logo.jpeg';

export default function card(){
  return (
    <>
    <div className="nav-container">
      <div className="nav-links">
        <div className="nav-logo">
          <img src={logoimg} alt="logo" />
        </div>
        <div className="links">
          <p>Integration</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>About Us</p>
        </div>
      </div>
      <div className="nav-btn">
        <button>Get early access</button>
      </div>
    </div>
    </>
  )
}