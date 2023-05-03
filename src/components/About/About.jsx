import React from 'react'
import "./About.css"
import {GiAchievement} from "react-icons/gi"

const About = () => {
  return (
    <section id="About">
      <h5>Get to know </h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_content">
        <p >
        Hey there! I'm a computer science student who loves making cool stuff on the internet and on computers. 
        I'm in my second year at AIAC and I'm always trying to learn new things about technology. 
        I'm a team player and I love working with other people to make awesome things happen!
        </p>
        <div className="about_cards">
          <article className="about_card">
          <GiAchievement className="about_icon" />
          <h5>Experience</h5>
          <small>
          Summer internship at CAT Assurance & Réassurance<br/>
          07/2022 – 08/2022<br/>
          Creating a web app for managing office furniture<br/>
          </small>
          </article>
        </div>
        
        </div>
      </div>
    </section>
  )
}

export default About