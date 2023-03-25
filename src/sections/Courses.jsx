import React from 'react'
import CourseList from '../components/CourseList'

const Courses = () => {
  return (
    <div className='flex flex-col gap-3 px-3'>
      <h1>Browse Our Popular Courses</h1>
      <small>High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition.</small>
      <ul className=' flex items-center gap-3'>
        <li>All Categories</li>
        <li>Design</li>
        <li>Development</li>
        <li>Marketting</li>
      </ul>
        <div className="block">
            <CourseList />
        </div>
        <button
        className='bg-background px-3 py-2 text-white w-[30%] mt-6 rounded-[5px] self-center'
        >View Courses</button>
    </div>
  )
}

export default Courses
