import React from 'react'
import CV from "../../assets/Aliani_Mohamed_CV.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#Contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default CTA