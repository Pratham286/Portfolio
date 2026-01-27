import React from 'react'
import Introduction from './Introduction'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

const Content = () => {
  return (
    <div className="min-h-screen">
        <Introduction />
        <About />
        <Project />
        <Skills />
        <Contact />
    </div>
  )
}

export default Content