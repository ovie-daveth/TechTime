import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Questions = () => {

    const q = [
        {
            title: 'is there a free trial available?',
            quest: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
        },
        {
            title: 'can i change my plan later?',
            quest: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
        },
        {
            title: 'are the courses lifetime?',
            quest: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
        },
        {
            title: 'do i get certified after taking courses?',
            quest: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
        },
        {
            title: 'how do i reach out to mentors?',
            quest: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
        },
        {
            title: 'do we get job ready after taking courses?',
            quest: "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. "
        },
    ]

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }
  return (
    <div className='flex flex-col gap-1'>
      {
        q.map((qtem, i) => (
            <div className='flex flex-col bg-white gap-1 font-satoshi'>
            <div className='flex justify-between items-center cursor-pointer bg-white py-2 px-2 text-gray rounded-[10px] shadow-lg' onClick={() => toggle(i)}> 
                    <h1 className={`capitalize font-bold md:text-[16px] text-[14px] transition-all ease-in-out duration-500 ${ selected === i && 'text-background '}`}>{qtem.title}</h1>
                    <span className='transition-all ease-in-out duration-500'>
                        {
                            selected === i ? <AiOutlineMinus /> : <AiOutlinePlus /> 
                        }
                    </span>
            </div>
            <div className={`${selected === i ? 'show' : 'context' } text-gray font-satoshi capitalize px-2 text-[14px]`} >
                <p>{qtem.quest}</p>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default Questions
