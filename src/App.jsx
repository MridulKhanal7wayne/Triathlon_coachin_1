import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Coaches from './pages/Coaches'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullscreenNav from './components/Navigation/FullscreenNav'
import About from './pages/About'






const App = () => {



  return (
    <div className='overflow-x-hidden'>

     

      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coaches' element={<Coaches />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/menu' element={<FullscreenNav />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

