import React from 'react'
import "./Navbar.css"
import {BiHomeAlt2} from "react-icons/bi"
import {FiUser} from "react-icons/fi"
import {BsClipboardData,BsBook} from "react-icons/bs"
import {AiOutlineMessage} from "react-icons/ai"
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#Home")
  return (
    <nav>
      <a href="#Home" onClick={()=>setActiveNav("#Home")} className={activeNav==="#Home" ? "active":""}><BiHomeAlt2/></a>
      <a href="#About" onClick={()=>setActiveNav("#About")} className={activeNav==="#About" ? "active":""}><FiUser/></a>
      <a href="#Skills" onClick={()=>setActiveNav("#Skills")} className={activeNav==="#Skills" ? "active":""}><BsClipboardData/></a>
      <a href="#Projects" onClick={()=>setActiveNav("#Projects")} className={activeNav==="#Projects" ? "active":""}><BsBook/></a>
      <a href="#Contact" onClick={()=>setActiveNav("#Contact")} className={activeNav==="#Contact" ? "active":""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Navbar