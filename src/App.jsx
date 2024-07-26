import React from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Workexperience from './components/Workexperience/Workexperience';
import Contactme from './components/Contactme/Contactme';
import Footer from './components/Footer/Footer';


const App = () => {


  
  return (
    <>
    <Navbar />
    <div className="container">
    <Hero />
    <Skills  />
    <Workexperience/>
    <Contactme/>
    <Footer/>
    </div>
    </>
  )
}

export default App