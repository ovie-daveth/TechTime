import React from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import hero from '../assets/HERO IMAGEE.png'
import bulb from '../assets/Induction-Hub-Artwork_Admin-and-IT 1.png'
import wordpress from '../assets/path22.png'
import ring from '../assets/Vector (1).png'
import angle from '../assets/Vector.png'
import vdcode from '../assets/Visual Studio Code - jpeg.png'
import figma from '../assets/figma.png'
import grayring from '../assets/grayring.png'
import spiral from '../assets/spiral.png'

import {GoPrimitiveDot} from 'react-icons/go'
import {FiArrowUpRight} from 'react-icons/fi'
import Socials from '../components/Socials'


const Home = () => {
  return (
    <main className='bg-background  h-full text-white'>
        <Header />
        <div className=' flex items-center lg:flex-row flex-col   justify-between lg:px-28 px-5 text-center lg:text-left gap-16 lg:gap-0 mt-10'>
            <div className="flex flex-col gap-5 relative lg:w-[44%] w-[100%]">
                <div className="block absolute -top-[4.4rem] right-10">  <GoPrimitiveDot  className=' text-yellow' />
                </div>
                <div className="block absolute -top-[5rem] left-10 w-[10px]"><img src={ring} alt="" /></div>
                <div className="block absolute top-[7rem] -left-28 w-[60px]"><img src={grayring} alt="" /></div>
                <h1 className=' md:text-header text-[2rem]  leading-header font-bold'>Grow your skills to advance your career path </h1>
                <small className=' font-satoshi lg:w-[100%] font-thin text-[15px] md:text-[18px]'>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</small>
                <div className="flex gap-4 items-center justify-center lg:justify-start">
                  <button className='border border-white flex items-center gap-1 md:px-8 px-3 py-2 font-semibold md:text-normal text-[14px] hover:bg-white hover:text-background transition-all ease-in-out cursor-pointer'>Get Started Now <span> <FiArrowUpRight/> </span></button>
                  <button className='bg-white text-background font-semibold md:px-10 px-3 py-2  md:text-normal text-[14px] border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all ease-in-out cursor-pointer'>Enrol Now</button>
                </div>
                <div className="flex items-center m-auto lg:ml-[6.5rem] gap-3">
                  <Gallery />
                  <h3 className='flex flex-col items-center font-Clash font-semibold lg:text-normal text-[14px]'>255K+<span className='text-sm font-extralight -mt-1'>Previews</span></h3>
                </div>
            </div>
            <div className="block relative ml-5 md:ml-0 w-[300px] md:w-[unset]">
              <img src={hero} alt="hero" 
              className=' md:w-[400px] w-[100%] absoluet top-0 left-[63.51px]'
              />
              <div className="block absolute md:bottom-32 md:top-[unset] -top-16 md:-left-24 -right-8 md:w-[80px] w-[60px] rotate-45 md:rotate-0"><img src={spiral} alt="" /></div>
              <div className="block absolute top-3 -left-10 md:w-[140px] w-[100px]"><img src={bulb} alt="" /></div>
              <div className="block absolute md:bottom-7 bottom-2 right-1 bg-white md:w-[55px] w-[45px] p-1 rounded-[5px]"><img src={wordpress} alt="" /></div>
              <div className="block absolute top-[50%] -left-8 md:w-[50px] w-[40px] bg-white p-1 rounded-[8px] "><img src={figma} alt="" /></div>
              <div className="block absolute top-12 right-4 w-[50px]"><img src={vdcode} alt="" /></div>
              <div className="block absolute md:top-[11rem] top-[9rem] md:left -left-6 -2 w-[10px] md:w-[12px]"><img src={ring} alt="" /></div>
              <div className="block absolute top-[40%] right-1 w-6"><img src={angle} alt="" /></div>
              <div className="block absolute bottom-16 md:left-5 left-2"> <GoPrimitiveDot  className=' text-yellow' />
              </div>
            </div>
        </div>
        <Socials />
    </main>
  )
}

export default Home
