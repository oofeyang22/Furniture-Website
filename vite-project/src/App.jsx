import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Hero from './components/Hero'
import Goals from './components/Goals'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

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
      <Footer/>
      
    </div>
  )
}

export default App
