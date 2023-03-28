import React from 'react'
import {BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsDiscord} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='md:-32 md:px-20 py-12 px-4 bg-footer mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-12 text-white'>
      <div className='w-[80%]'>
        <h1 className=' font-Tech text-lg text-white capitalize'>techtime</h1>
        <small className='my-2 mb-3 capitalize text-[12px]'>reach out to us on any of our social media networks</small>
        <div className="flex items-center gap-3 text-gray mt-3 text-[20px]">
          <BsFacebook className='hover:text-gray2 cursor-pointer transition-all ease-in-out'/>
          <BsTwitter className='hover:text-gray2 cursor-pointer transition-all ease-in-out'/>
          <BsYoutube className='hover:text-gray2 cursor-pointer transition-all ease-in-out'/>
          <BsInstagram className='hover:text-gray2 cursor-pointer transition-all ease-in-out'/>
          <BsDiscord className='hover:text-gray2 cursor-pointer transition-all ease-in-out'/>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-[19px] font-satoshi mb-5'>Useful Links</h1>
        <ul className='text-[15px] font-extralight font-satoshi flex flex-col gap-3'>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300 inline'><a href="#home"> Home</a></li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300 inline'><a href="#about"> About Us</a></li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300 inline'><a href="#course"> Our Courses</a></li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300 inline'><a href="#testimony">Testimonials</a> </li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300 inline'><a href="#community">Our Community</a> </li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold text-[19px] font-satoshi mb-5'>Community</h1>
        <ul className='text-[15px] font-extralight font-satoshi flex flex-col gap-3'>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300'>Help Centers</li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300'>Patners</li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300'>Suggestions</li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300'>Blog</li>
          <li className='cursor-pointer hover:text-lightgrey transition-colors ease-in-out duration-300'>Newsletter</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold text-[19px] font-satoshi mb-5'>Subscribe Us</h1>
        <div className="flex relative">
        <input type="search" id="search" placeholder='NPI123@gamil.com' className='w-full bg-gray border border-background px-2 py-1 text-light-background placeholder:text-lightgrey placeholder:text-[15px] text-[15px] focus:outline-none tracking-wider' />
        <label htmlFor="search" className='bg-background flex justify-between items-center px-4 py-[4.3px] absolute right-0'>Search</label>
        </div>
      </div>
    </div>
  )
}

export default Footer
