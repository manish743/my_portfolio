import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'

export default function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2003-2017" iconStyle={{background: "#38497a", color: "#fff"}} icon={<FontAwesomeIcon icon={faGraduationCap} />}>

    <h3 className="vertical-timeline-element-title">Sambriddhi Learning Academy, Checkpost</h3>
    <p>SEE Examination</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education" date="2017-2019" iconStyle={{background: "#38497a", color: "#fff"}} icon={<FontAwesomeIcon icon={faGraduationCap} />}>

    <h3 className="vertical-timeline-element-title">Everest Innovative College, Soaltemode</h3>
    <p>+2 in Science</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education" date="2019-2024" iconStyle={{background: "#38497a", color: "#fff"}} icon={<FontAwesomeIcon icon={faGraduationCap} />}>

    <h3 className="vertical-timeline-element-title">Patan Multiple Campus</h3>
    <p>BSc.CSIT</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
