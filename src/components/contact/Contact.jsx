import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ikwalx9', 'template_num7vc1', form.current, 'KfqkTG79qsKl-uC5d')

    e.target.reset()

  };

  return (
    <section id='contact'z>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5 style={{fontSize:"10px"}}>atulprajapati02022001@gmail.com</h5> */}
            <a href="mailto:atulprajapati02022001@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            {/* <h5>egatortutorials</h5> */}
            <a href="https://www.facebook.com/profile.php?id=100022035846655" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            {/* <h5>+91 70393 47132</h5> */}
            <a href="https://api.whatsapp.com/send/?phone=917039347132&text&type=phone_number&app_absent=0" target='_blank'>Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact