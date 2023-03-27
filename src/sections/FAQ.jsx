import React from 'react'
import Questions from '../components/Questions'

const FAQ = () => {
  return (
    <div className=' flex flex-col gap-4 items-center pt-8 bg-section md:w-[70%] m-auto px-2'>
      <h1 className='font-Clash font-bold text-[24px] md:text-header capitalize'>frequently asked questions</h1>
      <small className='text-[12px] md:text-[16px] text-lightgrey text-cente capitalize text-center mb-10'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</small>
      <div className="flex flex-col gap-3 items-center">
            <Questions />
      </div>
    </div>
  )
}

export default FAQ
