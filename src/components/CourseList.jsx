import React from 'react'
import {FaStar} from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'
import { courses } from '../Data'

import book from '../assets/menu_book.png'

const CourseList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
    {
        courses.map((course)=>(
            <div className="flex flex-col gap-3" key={course.id}> 
                <img src={course.img} alt="" />
                <div className="flex flex-col gap-2 px-3">
                    <div className="flex justify-between text-md font-bold">
                        <span className=' capitalize bg-genrebgcolor px-2 text-genrecolor rounded-[100px]'>{course.genre}</span>
                        <span className='flex gap-1 items-center'>{course.rating} <FaStar 
                        className='text-star'
                        /> ({course.ratingpercent})</span>
                    </div>
                    <div className="block">
                        <h1 className='font-bold text-[14px]'>{course.title}</h1>
                    </div>
                    <div className="flex items-center justify-between text-md font-bold text-lightgrey">
                        <span className='flex items-center gap-2 '><BiTimeFive className='text-[16px]'/>  {course.time}</span>
                        <span className='flex items-center gap-2'><img src={book} alt="book" /> {course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center justify-between text-md">
                        <span className='flex items-center gap-2'><img src={course.authorimg} alt="author" className='w-6' /> {course.author}</span>
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
