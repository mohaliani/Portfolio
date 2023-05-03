import React from 'react'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"



const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App