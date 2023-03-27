import React, { useState } from 'react'
import CourseList from '../components/CourseList'
import star from '../assets/Vector (9).png'
import { courses } from '../Data'

const Courses = () => {

  const [isActive, setIsActive] = useState(null)
  const [course, setCourse] = useState(courses)
 
  const category = [
    {
      id: 1,
      title: "all Categories"
    },
    {
      id: 2,
      title: "design"
    },
    {
      id: 3,
      title: "development"
    },
    {
      id: 4,
      title: "marketting"
    },
  ]
 
  const setCategory = (itemid) => {
    setIsActive(itemid)
    if(itemid === 1){
      setCourse(courses)
    } else if(itemid === 2){
      const filteredCourse = courses.filter((item) => item.genre === 'design')
      setCourse(filteredCourse)
    } else if(itemid === 3){
      const filteredCourse = courses.filter((item) => item.genre === 'development')
      setCourse(filteredCourse)
    } else if(itemid === 4){
      const filteredCourse = courses.filter((item) => item.genre === 'marketting')
      setCourse(filteredCourse)
    }
  }

  return (
    <div id="course" className='flex flex-col gap-3 px-3 bg-section pt-16 relative'>
      <img src={star} alt="" className='absolute top-9 w-6 md:w-12 lg:top-32 lg:left-16' />
      <h1 className='text-[24px] md:text-header text-center font-extrabold tracking-tighter  m-auto lg:w-[60%]'>Browse Our Popular Courses</h1>
      <small className='text-center text-lightgrey md:text-[16px]  m-auto lg:w-[60%]'>High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition.</small>
      <ul className=' flex items-center gap-3 justify-center text-[14px] my-4'>
       {
        category.map((item) => (
          <li key={item.id}
          onClick={() => setCategory(item.id)}
        className={` capitalize font-semibold font-satoshi cursor-pointer px-2 py-1 rounded-[10px] text-sm md:text-[16px] ${isActive === item.id ? 'bg-white' : null}`}
          >{item.title}</li>
        ))
       }
      </ul>
        <div className="block md:px-16 px-2">
            <CourseList 
            courses={course}
            setCourse={setCourse}
            />
        </div>
        <button
        className='bg-background px-1 py-2 text-white w-[30%] md:w-[20%] mt-6 rounded-[5px] self-center text-[12px] md:text-[15px] border hover:bg-transparent hover:border-background hover:text-black transition-all ease-in-out cursor-pointer'
        >View Courses</button>
    </div>
  )
}

export default Courses
