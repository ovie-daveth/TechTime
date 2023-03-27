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
    <div className='bg-background text-center text-white font-bold py-12 px-10'>
      <small className='uppercase'>join our community</small>
      <h1 className='text-[28px] capitalize'>are you  ready to connect with the future talent of the tech world</h1>
      <small className='capitalize text-md'>meet up with other techstars and grow together</small>
     <div className="block relative">
        <img src={map} alt="" />
        <img src={jes} alt="" />
        <img src={Ellipse} alt="" />
        <img src={jessica} alt="" />
        <img src={joe} alt="" />
        <img src={kes} alt="" />
        <img src={clarity} alt="" />
        <img src={pip} alt="" />
        <img src={red} alt="" />
        <img src={sam} alt="" />
        <img src={bella} alt="" />
     </div>
    </div>
  )
}

export default Community
