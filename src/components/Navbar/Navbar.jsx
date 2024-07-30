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
    
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="logo" />
          <ul className="desktop-menu">
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
              <a className="menu-item" href="#contact-me">Contact Me</a>
            </li> */}
            <button className="contact-btn" onClick={contact}>Contact Me</button>
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
