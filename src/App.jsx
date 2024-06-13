import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Projects/Project'
import Skills from './Components/Skills/Skills'
import Drawing from './Components/Skills/Drawing/Drawing'
import Photography from './Components/Skills/Photography/Photography'
import Editing from './Components/Skills/Editing/Editing'
import Poster from './Components/Skills/Poster/Poster'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Hero />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/skills:drawing' element={ <Drawing />}/>
        <Route path='/photography' element={ < Photography />}/>
        <Route path='/editing' element={ <Editing />}/>
        <Route path='/poster' element={ <Poster />}/>
        
      </Routes>
    </>
  )
}

export default App
