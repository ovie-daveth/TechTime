import React from 'react'

import about from '../assets/about.png'
import AboutList from '../components/AboutList'

const About = () => {
  return (
    <section className=' bg-section flex flex-col lg:flex-row gap-2 items-center justify-between lg:px-28 px-5 text-center pt-20'>
      <div className="flex flex-col gap-4 lg:w-[50%]">
      <h1 className='md:text-lg lg:text-header text-[1.8rem] font-bold leading-header font-Clash lg:text-left capitalize'>This is why we are best from others</h1>
      <p className='text-[15px] mb-7 lg:text-left text-lightgrey'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
      <img src={about} alt="about" />
      </div>
      <div className="block lg:w-[40%]">
        <AboutList />
      </div>
    </section>
  )
}

export default About
