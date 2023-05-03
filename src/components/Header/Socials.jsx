import React from 'react'
import {BsLinkedin,BsGithub,BsTwitter} from "react-icons/bs"


const Socials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com/in/mohamed-aliani-046283222" target="blank"> <BsLinkedin/></a>
        <a href="https://github.com/mohaliani" target="blank"><BsGithub/></a>
        <a href="https://twitter.com/mohamed_aliani" target="blank"><BsTwitter/></a>
    </div>
  )
}

export default Socials