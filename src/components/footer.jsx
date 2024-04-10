import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='text-center' style={{background:'#FFEA00'}}>
        <h1 className='lead display-6'>Reach ME</h1>
        <hr />
        <p className='' style={{fontSize:'30px'}}><a href="https://www.linkedin.com/in/roshith-pb/"><FaLinkedin /></a> <a href="https://github.com/pb-roshith"><FaGithub /></a></p>
        
    </div>
  )
}

export default Footer