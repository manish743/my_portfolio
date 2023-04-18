import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter,faTiktok} from '@fortawesome/free-brands-svg-icons'
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href="https://www.facebook.com/msdianmanish7"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/manish.shrestha7/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com/ManishS58402842"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.tiktok.com/@shresthamanish444777"><FontAwesomeIcon icon={faTiktok} /></a>
        </div>
        <p>&copy; 2023 manishshrestha.com</p>
    </div>
  )
}
