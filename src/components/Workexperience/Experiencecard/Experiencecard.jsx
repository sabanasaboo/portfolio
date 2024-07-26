import React from 'react'
import './Experiencecard.css';

export const Experiencecard = ({ details }) => {
  return (
    <div className="work-experience-card">
        <h6>{details.title}</h6>
<div className="work-duration">{details.date}</div>

<ul>
    {details.responsibilities.map((item) =>(
        <li key={item}>{item}</li>
    ))}
</ul>

    </div>
  )
}
