import React from 'react'
import {FaStar} from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'


import book from '../assets/menu_book.png'

const CourseList = ({courses}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
    {
        courses.map((course)=>(
            <div className="flex flex-col gap-3" key={course.id}> 
                <div className="block overflow-hidden group">
                    <img src={course.img} alt="" 
                    className='group-hover:scale-110 transition-transform ease-in-out'
                    />
                </div>
                <div className="flex flex-col gap-2 px-1 font-Clash">
                    <div className="flex justify-between text-md font-bold ">
                        <span className=' capitalize bg-genrebgcolor px-1 md:px-2 text-genrecolor rounded-[100px] text-[8px] md:text-[12px]'>{course.genre}</span>
                        <span className='flex gap-1 items-center text-[8px] md:text-[12px]'>{course.rating} <FaStar 
                        className='text-star'
                        /> ({course.ratingpercent})</span>
                    </div>
                    <div className="block">
                        <h1 className='font-bold text-[11px] md:text-[16px] capitalize'>{course.title}</h1>
                    </div>
                    <div className="flex items-center justify-between text-[8px] md:text-[12px] font-bold text-lightgrey">
                        <span className='flex items-center gap-1 md:gap-2 '><BiTimeFive className='text-[10px] md:w-[16px]'/>  {course.time}</span>
                        <span className='flex items-center md:gap-2 gap-1'><img src={book} alt="book" className='w-[15px] md:w-[20px]'/> {course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center justify-between text-[8px] md:text-md">
                        <span className='flex items-center gap-2'><img src={course.authorimg} alt="author" className='md:w-6 w-5' /> {course.author}</span>
                        <span>${course.price}</span>
                    </div>
                </div>
            </div>
        ))
    }
</div>
  )
}

export default CourseList
