import React from 'react'

import about from '../assets/about.png'
import AboutList from '../components/AboutList'

import angle from '../assets/Vector.png'
import ring from '../assets/orange.png'

const About = () => {
  return (
    <section id="about" className=' bg-section flex flex-col lg:flex-row  items-center justify-between lg:px-28 px-2 text-center pt-28 relative'>
      <img src={angle} alt="" className='absolute hidden lg:block bottom-20 left-6 w-6' />
      <img src={ring} alt="" className='absolute hidden lg:block top-20 right-[30%] w-11' />
      <div className="flex flex-col gap-4 lg:w-[48%]">
          <h1 className=' md:text-header text-[24px] font-extrabold leading-[35px] md:leading-header font-Clash lg:text-left capitalize'>This is why we are best from others</h1>
          <p className='text-[15px] mb-7 lg:text-left text-lightgrey'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          <img src={about} alt="about" />
      </div>
      <div className="block lg:w-[45%] mr-5 md:mr-0">
        <AboutList />
      </div>
    </section>
  )
}

export default About
