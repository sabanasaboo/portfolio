import React from 'react'
import './Hero.css';
import myimg from '../../assets/images/my-profile2.jpeg';
import html from '../../assets/images/html-logo.png';

import react from '../../assets/images/react-logo.png';
import php from '../../assets/images/Php-logo.png';
import js from '../../assets/images/javascript-logo.png';

const Hero = () => {
  return (
    <section className="hero-container" id='home'>
<div className="hero-content">
    {/* <h2>Where Creativity Meets Code</h2> */}
    <h2>Hi,I'm Sabana </h2>

    <p>Passionate Full stack Developer |  Designing Exceptional Web Solutions with Passion</p>
</div>



<div className="hero-img">
    <div>
        <div className="tech-icon">
        <img className="all-logo" src={php} alt="myimg" />
        </div>
        <img className="my-img" src={myimg} alt="myimg" />
    </div>

<div>
<div className="tech-icon">
<img className="all-logo" src={react} alt="react" />

</div>
<div className="tech-icon">

<img className="all-logo" src={html} alt="html" />

</div>
<div className="tech-icon">
<img className="all-logo" src={js} alt="js" />
</div>

</div>




</div>
    </section>
  )
}

export default Hero