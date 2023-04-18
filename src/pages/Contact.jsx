import React from 'react'
import "../styles/Contact.css"
import emailjs from "@emailjs/browser"

export default function Contact() {

  const sendEmail = (e)=>{
    e.preventDefault();

    // emailjs.sendForm('service_id','template_id',e.target,'public_key')
    emailjs.sendForm('service_rft3lvg','template_ko5k5df',e.target,'2s_3eqmlGpdpVCTZp')
  }

  return (
    <div className="contact">
      <div className="contact-me">
        <h1>Contact me</h1>
      </div>

      <div className="contact-form">
        <form onSubmit={sendEmail}>
        <div className="form-element">
          <input type="text" name="name" placeholder="Name" required />
        </div>

        <div className="form-element">
          <input type="email" name="email_from" placeholder="Email" required />
        </div>

        <div className="form-element">
          <input type="text" name="subject_from" placeholder="Subject" required />
        </div>

        <div className="form-element">
          <textarea placeholder="Message" name
          ="message" required  style={{resize: "none"}}></textarea>
        </div>

        <div className="form-element">
          <input type="submit" className="btn" value="SEND" />
        </div>
        </form>
      </div>
    </div>
  )
}
