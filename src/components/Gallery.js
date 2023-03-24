import React from 'react'
import img1 from '../assets/Frame 95.png'
import img2 from '../assets/Frame 96.png'
import img3 from '../assets/Frame 97.png'
import img4 from '../assets/Frame 98.png'
import img5 from '../assets/Frame 99.png'

const Gallery = () => {
  return (
    <div className='flex items-center gap-0'>
      <img src={img1} alt="img1" 
      className=' lg:w-12 w-9'
      />
      <img src={img2} alt="img2" 
      className='-ml-[24px] lg:w-12 w-9'
      />
      <img src={img3} alt="img3" 
      className='-ml-[24px] lg:w-12 w-9'
      />
      <img src={img4} alt="img4" 
      className='-ml-[24px] lg:w-12 w-9'
      />
      <img src={img5} alt="img5" 
      className='-ml-[24px] lg:w-12 w-9'
      />
    </div>
  )
}

export default Gallery
