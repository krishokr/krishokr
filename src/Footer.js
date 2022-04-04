import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-icons'>
        <a href='https://github.com/krishokr'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
        <a href="mailto: kristoferhokr@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
        <a href='https://www.linkedin.com/in/kristoferhokr'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>

        </div>
    </div>
  )
}
