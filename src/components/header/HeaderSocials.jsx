import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ajay-yadav-a24082270/" targets="_blank"><BsLinkedin/></a>
      <a href="https://github.com/no0b2no0b" targets="_blank"><FaGithub/></a>
      <a href="https://www.facebook.com/profile.php?id=100041852323270" targets="_blank"><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials
