import React from 'react'
import Testimony from '../components/Testimony'

const Testimonials = () => {
  return (
    <div className=' block text-center pt-10 bg-section px-3'>
      <div className=" m-auto lg:w-[60%]">
      <h1 className='text-[28px] md:text-header capitalize font-extrabold font-Clash leading-header tracking-tighter mb-2 '>what our clients are saying</h1>
        <small className=' capitalize text-lightgrey font-satoshi md:text-[16px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</small>
      </div>
        <div className="flex items-center overflow-x-hidden mt-6 m-auto px-5 md:px-8">
            <Testimony />
        </div>
    </div>
  )
}

export default Testimonials
