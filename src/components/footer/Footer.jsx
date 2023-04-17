import React from 'react'
import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
// import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ajay Yadav</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#services">service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100041852323270"><FaFacebook/></a>
        <a href="https://www.linkedin.com/in/ajay-yadav-a24082270/"><BsLinkedin/></a>
        <a href="https://github.com/no0b2no0b"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ajay Yadav. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer