import React from 'react'
import "./Projects.css"
import img1 from "../../assets/color.png"
import img2 from "../../assets/task_Manager.png"
import img3 from "../../assets/chat_room.png"



const Projects = () => {
  return (
    <section id="Projects" >
      <h2> Projects </h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="protfolio_img">
            <img src={img1} alt="" />
          </div>
          <h3>Random Color Generator</h3>
          <div className="portfolio_cta">
          <a href="https://github.com/mohaliani/Color_Generator" className="btn" target="blank">Github</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="protfolio_img">
            <img src={img2} alt="" />
          </div>
          <h3>Task_Manager</h3>
          <div className="portfolio_cta">
          <a href="https://github.com/mohaliani/Task_Manager" className="btn " target="blank">Github</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="protfolio_img">
            <img src={img3} alt="" />
          </div>
          <h3>Basic chat room</h3>
          <div className="portfolio_cta">
          <a href="https://github.com/mohaliani/Basic_Chat_Room" className="btn" target="blank">Github</a>
          </div>
        </article>
        
        
      </div>
    </section >
  )
}

export default Projects