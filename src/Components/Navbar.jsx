import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import "../styles/Navbar.css"

export default function Navbar() {

  const[expandNavbar,setExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={(expandNavbar) ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={
              () => {
                setExpandNavbar((prev) => !prev);
              }
            }><FontAwesomeIcon icon={faBars} /></button>
        </div>

        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}
