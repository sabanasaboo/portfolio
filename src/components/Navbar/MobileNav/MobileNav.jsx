import React from 'react';
import './MobileNav.css';
import logo from '../../../assets/images/logo.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
  const click = () => {
    let hash = window.location.hash
    let element = document.querySelector((hash))
    if(element){
      element.scrollIntoView({behavior: '', block: 'start' });
    }
  }
  const contact = () => {
    
    let element = document.querySelector("#contact")
    console.log(element)
    if(element){
      console.log(element)
      element.scrollIntoView({behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <>
      <div     
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#home" onClick={click}>Home</a>
            </li>
            <li>
              <a className="menu-item" href="#skills" onClick={click}>Skills</a>
            </li>
            <li>
              <a className="menu-item" href="#work-experience" onClick={click}>Work Experience</a>
            </li>
            {/* <li>
              <a className="menu-item">Contact Me</a>
            </li> */}
            <button className="contact-btn" onClick={contact}>Contact Me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
