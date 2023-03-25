import React from 'react'
import Testimony from '../components/Testimony'

const Testimonials = () => {
  return (
    <div className=' block text-center pt-6 bg-section px-3'>
        <h1 className=' capitalize font-bold text-lg '>what our clients are saying</h1>
        <small className=' capitalize'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</small>
        <div className="flex items-center overflow-x-hidden mt-6 m-auto px-5 md:px-8">
            <Testimony />
        </div>
    </div>
  )
}

export default Testimonials
