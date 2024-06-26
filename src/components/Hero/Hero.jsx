import React from 'react';
import './Hero.css'
import { IoIosArrowDown } from "react-icons/io";
const Hero = () => {
  return (
    <div className="hero container" id='main'>
  <div className='hero-text'>
      <h1>Unleash the Essence of Ash and Volcano</h1>
      <p>The parts of the body that carry more smell are those where more soul is collected.
          Orto Parisi Terroni embodies this essence with intensity and intrigue</p>

      <button className='btn'>See more <IoIosArrowDown className='icon'/></button>
  </div>

    </div>
  );
};

export default Hero;