import  { useRef } from 'react'
import './Workexperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import { Experiencecard } from './Experiencecard/Experiencecard'
import Slider from 'react-slick'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const Workexperience = () => {
    const SliderRef = useRef();

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

const slideRight = () => {
    SliderRef.current.slickNext();
}

const slideLeft = () => {
    SliderRef.current.slickPrev();
}


  return (
    <section className="experience-container" id='work-experience'>
        <h5>Work Experience</h5>
        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
            <FaArrowRight />
                
            </div>
            <div className="arrow-left" onClick={slideLeft}>
               
            <FaArrowLeft />
            </div>
       
            <Slider ref={SliderRef} {...setting}>
            {WORK_EXPERIENCE.map((item) => (
                <Experiencecard key={item.title} details={item} />
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default Workexperience