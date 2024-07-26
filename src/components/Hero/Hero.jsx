import React from 'react'
import './Hero.css';
import myimg from '../../assets/images/myimg.jpeg';
import react from '../../assets/images/react-logo.png';
import php from '../../assets/images/Php-logo.png';
import js from '../../assets/images/javascript-logo.jpg';

const Hero = () => {
  return (
    <section className="hero-container" id='home-p'>
<div className="hero-content">
    <h2>Building experiences that inspire</h2>
    <p>Passionate Full stack Developer | Transforming Ideas into seamless and  Visually Stunning Web Solutions</p>
</div>

<div className="hero-img">
    <div>
        <div className="tech-icon">
        <img className="all-logo" src={myimg} alt="myimg" />
        </div>
        <img className="my-img" src={myimg} alt="myimg" />
    </div>

<div>
<div className="tech-icon">
<img className="all-logo" src={react} alt="react" />
</div>
<div className="tech-icon">
<img className="all-logo" src={php} alt="php" />
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