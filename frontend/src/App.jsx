import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Routes, Route } from'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import Aboutpage from './pages/about'


// import './App.css'

const App =()=> {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Gallery />}/>
        <Route path='/about' element={<Aboutpage/>}/>
        

      </Routes>
      <Footer/>
    </div>
  )
}


export default App
