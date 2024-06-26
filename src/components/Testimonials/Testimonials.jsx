import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import fire from '../../assets/fire.png'

import './Testimonials.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import tlo from '../../assets/tlo.jpg'
import {selectSlide} from "../../redux/slices/slidesSlices.js";
const Testimonials = () => {

const slider = useRef();

const slides = useSelector(selectSlide)
const [currentIndex, setCurrentIndex] = useState(0);
    const slide = useRef(null);
const slideForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(slides.length / 2));
  };
 const slideBackward = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(slides.length / 2)) % Math.ceil(slides.length / 2));
  };

   React.useEffect(() => {
    if (slider.current) {
      slider.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);




  return (
    <div className="tlo testimonials" id='opinions'>
        {slides.length > 2 ? <div><FaArrowRight className='next-btn' onClick={slideForward}/>
            <FaArrowLeft className='back-btn'  onClick={slideBackward}/></div> : ''}

        <div className="slider">
            {slides.length === 0 ? (<p className='no-slide'>No testimonials available <img src={fire} alt="" className='fire'/></p>) :

                <ul ref={slider}>{slides.map((slide, i) =>

                    <li  key={slide.id}>
                        <div className="slide">
                            <div className="user-info">
                                <FaUserCircle className='img'/>
                                <div>
                                    <h3>{slide.name} {slide.lastName}</h3>
                                    <span>Orto Parisi, Ukraine</span>
                                </div>
                            </div>

                            <p>{slide.message}
                            </p>
                        </div>
                    </li>
                )}

                </ul>
            }

        </div>
    </div>
  );
};

export default Testimonials;