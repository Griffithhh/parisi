import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import './Contact.css'
import contact from '../../assets/contact.jpg'
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {addSlide} from '../../redux/slices/slidesSlices.js'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');


    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();

if(name && lastName && message){
    dispatch(addSlide({name, lastName, message}))
     setName('');
    setLastName('');
    setMessage('');
}else{
      toast.warning('Please fill in all fields');
}
    }

  return (
      <div className="contact" id='contact'>
          <div className="contact-col">
              <div className="form">
                  <form onSubmit={handleSubmit}>

                      <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                      <input type="text" value={lastName} placeholder='Last Name'
                             onChange={(e) => setLastName(e.target.value)}/>
                      <textarea rows="6" value={message} placeholder='Enter your message'
                                onChange={(e) => setMessage(e.target.value)}></textarea>
                      <button type='submit' className='btn dark-btn' id='mobile'>Send</button>

                  </form>

              </div>

          </div>


          <img src={contact} id='flex' alt=""/>

          <ul>
              <li><HiOutlineMailOpen className='email'/> anxiouslyyys@gmail.com</li>
              <li><MdOutlinePhoneIphone className='phone'/> +4739509963</li>
              <li><IoLocationOutline className='location'/> Kamenskoe, Dnepr <br/>MA 23321, Ukraine</li>
          </ul>

          <ToastContainer position="top-right" autoClose={2000}/>
      </div>

  );
};

export default Contact;