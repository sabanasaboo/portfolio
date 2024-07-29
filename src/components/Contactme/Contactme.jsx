import React from 'react'
import './Contactme.css'
import Contactinfocard from './Contactinfocard/Contactinfocard'
import Contactform from './Contactform/Contactform'
import emailIcon from '../../assets/images/email-icon.png' 
import gitIcon from '../../assets/images/git-icon.png'      

const Contactme = ({ id }) => {
  return (
    <section className="contact-container" id='contact-p'>
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}> 
              <Contactinfocard 
                iconUrl={emailIcon}  
                text={"sabanabegam0211@gmail.com"}
              />
              <Contactinfocard 
                iconUrl={gitIcon}    
                text={"https://github.com/dashboard"}
              />
            </div>
            <div style={{flex: 1}}>
              <Contactform />
            </div>
        </div>
    </section>
  )
}

export default Contactme
