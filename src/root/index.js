import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'


const Root = () => {
  return (
  <div>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
  </div>
  )
}

export default Root