import React from 'react';
import './MobileNav.css';
import logo from '../../../assets/images/logo.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
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
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            {/* <li>
              <a className="menu-item">Contact Me</a>
            </li> */}
            <button className="contact-btn" onClick={() => {}}>Contact Me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
