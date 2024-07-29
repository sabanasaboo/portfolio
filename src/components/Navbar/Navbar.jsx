import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import MobileNav from './MobileNav/MobileNav';
import { RxHamburgerMenu } from 'react-icons/rx'; 
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="logo" />
          <ul className="desktop-menu">
            <li>
              <a className="menu-item" href="#home">Home</a>
            </li>
            <li>
              <a className="menu-item" href="#skills">Skills</a>
            </li>
            <li>
              <a className="menu-item" href="#work-experience">Work Experience</a>
            </li>
            {/* <li>
              <a className="menu-item" href="#contact-me">Contact Me</a>
            </li> */}
            <button className="contact-btn" onClick={() => {}}>Contact Me</button>
          </ul>
         
          <button className="menu-btn" onClick={toggleMenu}>
            <span style={{ fontSize: '1.8rem', color: 'white' }}>
              {openMenu ? <FaTimes /> : <RxHamburgerMenu />} 
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
