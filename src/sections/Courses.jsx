import React, { useState } from 'react'
import CourseList from '../components/CourseList'

const Courses = () => {

  const [isActive, setIsActive] = useState(null)
 
  const category = [
    {
      id: 1,
      title: "All Categories"
    },
    {
      id: 2,
      title: "Design"
    },
    {
      id: 3,
      title: "Development"
    },
    {
      id: 4,
      title: "Marketting"
    },
  ]
  const setCategory = (itemid) => {
    setIsActive(itemid)
  }
  return (
    <div className='flex flex-col gap-3 px-3 bg-section pt-16'>
      <h1 className='text-[2rem] text-center font-bold tracking-tighter'>Browse Our Popular Courses</h1>
      <small className='text-center text-lightgrey'>High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition.</small>
      <ul className=' flex items-center gap-3 justify-center text-[14px] my-4'>
       {
        category.map((item) => (
          <li key={item.id}
          onClick={() => setCategory(item.id)}
        className={`font-semibold font-satoshi cursor-pointer hover:font-bold px-3 py-1 rounded-[10px] ${isActive === item.id ? 'bg-white' : null}`}
          >{item.title}</li>
        ))
       }
      </ul>
        <div className="block md:px-16 px-5">
            <CourseList />
        </div>
        <button
        className='bg-background px-3 py-2 text-white w-[30%] md:w-[20%] mt-6 rounded-[5px] self-center border hover:bg-transparent hover:border-background hover:text-black transition-all ease-in-out cursor-pointer'
        >View Courses</button>
    </div>
  )
}

export default Courses
