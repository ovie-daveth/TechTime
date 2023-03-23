import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-transparent'>
        <div className="block font-Tech text-header">TechTime</div>
        <ul className="flex font-satoshi font-bold gap-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Testimonial</li>
          <li>Community</li>
          <button>Enrol Now</button>
        </ul>
    </div>
  )
}

export default Header
