import React from 'react';
import './Features.css'
import features from '../../assets/features.jpg'
import { SiBackendless } from "react-icons/si";
import { MdOutlineBalance } from "react-icons/md";
import scent from '../../assets/scent.png'
import unique from '../../assets/unique.png'
import endless from '../../assets/endless.png'
import balance from '../../assets/balance.png'

const Features = () => {
  return (
      <div className="features" id='features'>

          <div className='main-feature'>
              <img src={features} alt="" className='lava'/>
              <p className='p'>Orto Parisi Teroni perfumes blend rare and precious ingredients into a complex, long-lasting fragrance that evolves beautifully, offering an exclusive and sophisticated experience.</p>
          </div>
          <div className='features-container'>
          <div>
             <div className='endless'><img src={endless} alt="" className='endless-logo'/></div>
              <h1 className='endless-h1'>Longevity</h1>
              <p className='endless-p'>The fragrance lasts on skin and clothes for over 12 hours, leaving a lasting impression.</p>
          </div>

          <div>
              <img src={scent} alt="" className='scent'/>
              <h1 className='scent-h1'>Sophistication</h1>
              <p className='scent-p'>A complex composition combining rare and precious ingredients, creating a unique and unforgettable scent.</p>
          </div>

          <div >
            <div className='unique'>  <img src={unique} alt=""  className='unique-logo'/></div>
              <h1 className='unique-h1'>Exclusivity</h1>
              <p className='unique-p'>Limited editions and unique bottles make each perfume truly special.</p>
          </div>

          <div>
             <div className='balance'><img src={balance} alt="" className='balance-logo'/></div>
              <h1 className='balance-h1'> Harmony</h1>
              <p className='balance-p'>Perfectly balanced notes that unfold in stages, creating a deep and multi-layered fragrance.</p>
          </div>
</div>
      </div>
  );
};

export default Features;