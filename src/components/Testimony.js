import React from 'react'
import { test } from '../Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const Testimony = () => {
   
  return (
   <Swiper
   breakpoints = {
    {
        320: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        840: {
            slidesPerView: 3,
        },
    }
   }
   modules={[Navigation, Pagination, Scrollbar, A11y]}
   spaceBetween={10}
   slidesPerView={1}
   navigation
   pagination={{ clickable: true }}
   scrollbar={{ draggable: true }}
   onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log('slide change')}
    className=' flex items-center gap-1 overflow-x-hidden font-satoshi cursor-pointer mb-20 bg-section'>        
    {
            test.map((test) => (
                <SwiperSlide className=' flex flex-col items-start text-left bg-white rounded-[10px] py-4 px-3 shadow-xl' key={test.id}>
                <p className='w-full capitalize text-sm font-satoshi text-justify'>{test.test}</p>
                <div className='flex items-center gap-3 mt-6'>
                  <img src={test.img} alt="" className='w-12' />
                  <p className='flex flex-col text-sm font-bold '>
                      <span>{test.name}</span>
                      <span>{test.proffession}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))
        }
   </Swiper>
  )
}

export default Testimony
