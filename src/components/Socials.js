import React from 'react'
import zoom from '../assets/zoom.png'
import dropbox from '../assets/dropbox.png'
import stripe from '../assets/stripe.png'
import monday from '../assets/monday.png'
import slacklogo from '../assets/slacklogo.png'

const Socials = () => {
  return (
    <div className=' bg-light-background w-full flex items-center md:gap-10 gap-4 justify-center lg:px-0 px-2 py-2'>
      <img src={zoom} alt="logo" 
      className=' md:w-28 w-[50px]'
      />
      <img src={stripe} alt="logo" 
      className=' md:w-28 w-[50px]'
      />
      <img src={monday} alt="lgog"
      className='md:w-44 w-[120px] -ml-5'
      />
      <div className='flex items-center md:text-[30px] text-[15px] -ml-5 font-bold'>
        <img src={slacklogo} alt="logo" 
        className=' md:w-8 w-3'
        /> Slack
      </div>
      <img src={dropbox} alt="lgog" 
      className=' md:w-28 w-[50px]'
      />
    </div>
  )
}

export default Socials
