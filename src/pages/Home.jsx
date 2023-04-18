import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons'
import "../styles/Home.css"

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, it's me Manish</h2>
        <div className="info">
          <p>A front end developer with a passion to create things.</p>
          <a href="mailto:shresthamanish606@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="https://github.com/manish743"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://discord.com/channels/@me"><FontAwesomeIcon icon={faDiscord} /></a>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, JavaScript, React, Bootstrap</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}
