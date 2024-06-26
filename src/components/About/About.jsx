import React from 'react';
import './About.css'
import about_img from '../../assets/about.jpg'
import { FaPlayCircle } from "react-icons/fa";
const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
    <div className="about-left">
        <img src={about_img} alt="" className="about"/>
        <FaPlayCircle  className="play-icon" onClick={()=>{setPlayState(true)}} />
    </div>

      <div className="about-right">
       <h3>ABOUT FRAGRANCE</h3>
          <h2>Orto Parisi's Ode to Southern Italian Splendor</h2>
           <p>Orto Parisi's "Teroni" fragrance embodies a profound homage to the Italian landscape, particularly the rich, sun-drenched soils of Southern Italy. Named after the inhabitants of the ancient regions of Italy, Teroni captures the essence of rugged terrain and Mediterranean flora with its distinctive blend of notes.</p>
          <p>At its core, Teroni features earthy accords that evoke the warmth of the sun-baked earth, enriched by hints of aromatic herbs and spices that evoke the vibrant countryside. The fragrance unfolds with a nuanced interplay of bitter citrus, herbal freshness, and a deep, grounding base of woody notes and resins. This composition not only reflects the natural beauty of the region but also pays tribute to its timeless allure and cultural richness.</p>
          <p>Teroni is more than a scent; it's a sensory journey that transports wearers to the heart of Italy's sunlit landscapes, offering a captivating olfactory experience that is both sophisticated and deeply evocative. It speaks to those who appreciate the artistry of perfumery and seek to connect with the essence of a place through fragrance.</p>
      </div>
    </div>
  );
};

export default About;