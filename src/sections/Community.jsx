import React from 'react'
import map from '../assets/worldmap-vector.png'
import jes from '../assets/jes.png'
import Ellipse from '../assets/Ellipse (1).png'
import jessica from '../assets/jessica.png'
import joe from '../assets/Image.png'
import kes from '../assets/Frame 99.png'
import clarity from '../assets/clarity.png'
import pip from '../assets/Ellipse.png'
import red from '../assets/Frame 210.png'
import sam from '../assets/samuel.png'
import bella from '../assets/adam.png'


const Community = () => {
  return (
    <div className='bg-background text-center text-white font-bold py-12 '>
      <small className='uppercase px-5 md:px-10'>join our community</small>
      <h1 className='text-[24px] md:text-[28px] capitalize px-5 md:px-10'>are you  ready to connect with the future talent of the tech world</h1>
      <small className='capitalize text-md px-5 md:px-10'>meet up with other techstars and grow together</small>
     <div className="block relative m-auto md:w-[800px]">
        <img src={map} alt="" className='md:w-[100%]' />
        <img src={jes} alt="" className='absolute top-12 md:top-24 left-4 md:left-10 w-7 md:w-12'/>
        <img src={Ellipse} alt="" className='absolute top-20 md:top-[50%] border border-white bg-gray2 rounded-[100px] w-7 md:w-12 left-20 md:left-52' />
        <img src={jessica} alt="" className='absolute w-7 md:w-12 bottom-2 left-24 md:left-56' />
        <img src={joe} alt="" className='absolute w-7 md:w-12 h-7 md:h-12 top-12 md:top-32 bg-gray2 border border-white rounded-[50%] left-32 md:left-80' />
        <img src={kes} alt="" className='absolute  w-7 md:w-12 top-[36%] left-[58%]' />
        <img src={clarity} alt="" className='absolute w-7 md:w-12 bottom-[15%] left-[48%]' />
        <img src={pip} alt="" className='absolute top-[41%] md:top-[38%] right-16 md:right-40 w-7 md:w-12  bg-gray2 border border-white rounded-[100px] ' />
        <img src={red} alt="" className='absolute w-7 md:w-12 top-10 md:top-24 right-4 md:right-7' />
        <img src={sam} alt="" className='absolute w-7 md:w-12 top-28 md:top-[55%] right-1' />
        <img src={bella} alt="" className='absolute w-7 md:w-12 bottom-2 md:bottom-10 right-8' />
     </div>
     <button className='bg-white mt-6 py-2 px-12 text-background text-sm rounded-[5px] hover:bg-transparent border hover:text-white hover:border-white cursor-pointer transition-all ease-in-out'>Join Our Community</button>
    </div>
  )
}

export default Community
