/*import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Hero from './components/Hero'
import Goals from './components/Goals'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Cookie from './components/Cookie'
import PrivacyPolicy from './components/Privacy'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import './App.css'

function App() {
  return (
    <div>
      
          <Navbar/>
          
      
                <Hero/>
                <About/>
                <Blog/>
                <Products/>
                <Goals/>
                <Testimonials/>
                <Cookie/>
            
          
          <Footer/>
          
      
    </div>
  )
}


export default App*/

import React from 'react'
import { Routes, Route } from 'react-router-dom' // Remove Router import
import About from './components/About'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Hero from './components/Hero'
import Goals from './components/Goals'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Cookie from './components/Cookie'
import PrivacyPolicy from './components/Privacy'
//import './App.css'

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={
          <>
                <Navbar/>
            <Hero/>
            <About/>
            <Blog/>
            <Products/>
            <Goals/>
            <Testimonials/>
            <Cookie/>
            <Footer/>
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App