import React from 'react'
import { FaGrinBeam } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' style={{background:'#000', color:'#fff'}}>
        <h1 style={{color:'#FFEA00', paddingLeft:'40px', paddingTop:'20px'}}>About <FaGrinBeam /></h1>
        <p className='lead p-5'>Passionate Full Stack Developer and Data Scientist driven by curiosity and a love for technology. As a student, I bring fresh perspectives and a strong desire to learn to software development and data science. Dedicated to creating reliable and scalable solutions, I'm excited to apply my skills where technology meets data-driven insights for real-world impact.</p>
    </div>
  )
}

export default About