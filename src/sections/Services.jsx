import React from 'react'
import ServicesList from '../components/ServicesList'
import service from '../assets/service.png'
import learned from '../assets/learned.png'
import Gallery from '../components/Gallery'
import spiral from '../assets/Vector (7).png'
import crown from '../assets/Vector (5).png'
import boldring from '../assets/Vector (8).png'
import grayring from '../assets/grayring.png'

const Services = () => {
  return (
    <div className=' bg-section w-full flex items-center justify-between lg:flex-row flex-col lg:px-28 px-6 relative pt-8'>
        <img src={crown} alt="crown" 
        className='absolute lg:top-5 top-3 lg:left-[85px] md:left-4 left-8 w-[40px] lg-w-[unset] '
        />
      <div className="flex flex-col md:gap-5 gap-3 lg:w-[45%] text-center lg:text-left">
        <h1 className='md:text-header text-[24px] font-Clash md:leading-header leading-[35px] tracking-tighter font-extrabold'>High quality video, audio & live classes</h1>
        <small className=' text-lightgrey lg:w-[90%] w-full text-[12px]'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</small>
        <button className='bg-background text-white w-[38%] font-semibold md:px-5 px-3 py-2  md:text-normal text-[14px] hover:bg-white hover:text-background transition-all ease-in-out cursor-pointer border border-transparent hover:border-background m-auto lg:m-[unset]'>View Courses</button>
       <div className="flex justify-center items-center mt-3">
        <ServicesList />
       </div>
      </div>
      <div className="group flex md:w-[45%] relative mt-10">
        <img src={service} alt="service" 
        className='w-[200px] md:w-[unset] z-10 group-hover:-translate-y-4 transition-transform ease-in-out duration-500'
        />
         <img src={learned} alt="service" 
        className='absolute md:-bottom-12 -bottom-4 md:-left-32 -left-12 w-[100px] md:w-[220px] z-20 group-hover:translate-y-4 transition-transform ease-in-out duration-500'
        />
        <div className=" bg-white absolute md:top-[25%] top-[10%] -left-20 px-2 py-1 rounded-[10px] flex justify-center flex-col z-20 group-hover:-translate-x-4 transition-transform ease-in-out duration-500">
            <small className='md:text-md text-[8px] text-center'>255k+ enrolled students</small>
            <Gallery />
        </div>
        <img src={spiral} alt="" 
            className='absolute -right-2  -bottom-8 z-0 group-hover:-translate-y-4 transition-transform ease-in-out duration-500  w-[100px]'
        />
        <img src={boldring} alt="" 
            className='absolute -right-28 -bottom-20'
        />
         <img src={grayring} alt="" 
            className='absolute -right-28 -top-12 w-[40px]'
        />
      </div>
    </div>
  )
}

export default Services
