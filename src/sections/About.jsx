import React from 'react'

import about from '../assets/about.png'
import AboutList from '../components/AboutList'

const About = () => {
  return (
    <div className=' bg-section flex lg:flex-row flex-col items-center justify-between lg:px-28 px-5 text-center mt-6  pt-16'>
      <h1>This is why we are best from others</h1>
      <p>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
      <img src={about} alt="about" />
      <div className="block">
        <AboutList />
      </div>
    </div>
  )
}

export default About
