import React from 'react'
import {BiCast} from 'react-icons/bi'
import {MdGroups} from 'react-icons/md'
import {BiDollar} from 'react-icons/bi'
import {AiFillClockCircle} from 'react-icons/ai'

const AboutList = () => {
    const aboutlist = [
        {
            id: 1,
            icon: <BiCast />,
            title: "Experienced Mentors",
            desc: "High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition. ",
            color: '#4C7FBD',
        },
        {
            id: 2,
            icon: <MdGroups />,
            title: "Affordable Prices",
            desc: "High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition. ",
            color: "#ED6BA6",
        },
        {
            id: 3,
            icon: <BiDollar />,
            title: "Experienced Mentors",
            desc: "High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition. ",
             color: "#EA6B45"
        },
        {
            id: 4,
            icon: <AiFillClockCircle />,
            title: "Flexible Learning",
            desc: "High-defination video is video of higher resolution and quality than standard definition. High-defination video is video of higher resolution and quality than standard definition. ",
            color: "#AECD5E",
        },
    ]
  return (
    <ul className='grid grid-cols-2 m-auto gap-x-12 gap-y-6 mt-6'>
        {
            aboutlist.map((list) => (
                <li key={list.id} className='flex flex-col items-start text-left gap-2 px-4 py-3 bg-white shadow-md w-[240px] c font-satoshiursor-pointer hover:scale-95 transition-transform ease-in-out'>
                    <span style={{backgroundColor: list.color}}
                    className='p-1 text-white'
                    >{list.icon}</span>
                    <h1 className='font-bold'>{list.title}</h1>
                    <p className='text-[14px] md:text-[16px] text-lightgrey'>{list.desc}</p>
                </li>
            ))
        }
    </ul>
  )
}

export default AboutList
