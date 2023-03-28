import React from 'react'
import Header from './components/Header'
import About from './sections/About'
import Community from './sections/Community'
import Courses from './sections/Courses'
import Home from './sections/Home'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'
import FAQ from './sections/FAQ'

const App = () => {
  return (
    <>
     <Header />
    <Home />
    <Services />
    <About />
    <Courses />
    <Testimonials />
    <Community />
    <FAQ />
    <Footer />
    </>
  )
}

export default App
