import React from 'react'
import "./Skills.css"
import{BsFillPatchCheckFill} from "react-icons/bs"

const Skills = () => {
  return (
    <section  id="Skills" >
      <h2>My Skills</h2>
      <div className="container skills_container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skills_content">
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>HTML</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>CSS</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>Javascript</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>Bootstarp</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>react</h4>
            </article>
          </div>
        </div>
        <div className="skills_Backend">
        <h3>Backend Development</h3>
          <div className="skills_content">
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>Node</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>Express</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>MongoDB</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>Python</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>SQL Server</h4>
            </article>
            <article className="skill_details">
              <BsFillPatchCheckFill className=" skill-details_icon"/>
              <h4>PostgreSQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Skills