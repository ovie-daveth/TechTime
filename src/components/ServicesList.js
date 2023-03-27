import React from 'react'
import live from '../assets/live.png'
import auto from '../assets/autoplay.png'
import notes from '../assets/description.png'
import volume from '../assets/volume.png'

const ServicesList = () => {

  const service = [
    {
      id: 1,
      img: volume,
      title: "Audio Classes",
      color: 'rgba(63, 169, 106, 0.2)',
    },
    {
      id: 2,
      img: live,
      title: "Live Classes",
      color: 'rgba(247, 158, 142, 0.2)',
    },
    {
      id: 3,
      img: auto,
      title: "Recorded Classes",
      color: 'rgba(146, 105, 205, 0.2)',
    },
    {
      id: 4,
      img: notes ,
      title: "50+ Notes",
      color: 'rgba(89, 120, 207, 0.2)',
    },
  ]

  return (
    <ul className=' grid grid-cols-2 gap-5'>
        {
          service.map((item) => (
            <li className='hover:scale-90 transition-transform ease-in-out duration-500 flex items-center gap-2 bg-white md:py-4 py-2 px-1 md:px-3 rounded-[5px] text-[12px] md:text-[14px] font-semibold w-[180px]' key={item.id}>
            <span className=' p-2' style={{backgroundColor:item.color}} > <img src={item.img} alt="" /> </span>
            <p>{item.title}</p>
          </li>
          ))
        }
       
    </ul>
  )
}

export default ServicesList
