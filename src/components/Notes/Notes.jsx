import React from 'react';
import { GiDeadWood } from "react-icons/gi";
import { LuCigarette } from "react-icons/lu";
import { WiSmoke } from "react-icons/wi";
import note_1 from '../../assets/note_1.jpg'
import note_2 from '../../assets/note_2.jpg'
import note_3 from '../../assets/note_3.jpg'
import './Notes.css'
const Notes = () => {
  return (
      <div className="notes" id='notes'>
          <div className="note" id='f'>
              <img src={note_1} alt=""/>
              <div className="caption">
                  <GiDeadWood  className="note_icon_1"/>
                  <p>Woody notes</p>
              </div>
          </div>
          <div className="note" id='s'>
              <img src={note_2} alt=""/>
              <div className="caption">
               <LuCigarette className='note_icon_2' />
                  <p>Cigarette notes</p>
              </div>
          </div>
          <div className="note" id='d'>
              <img src={note_3} alt=""/>
              <div className="caption">
                  <WiSmoke className='note_icon_3'  />
                  <p>Smoky Notes</p>
              </div>
          </div>
      </div>
  );
};

export default Notes;