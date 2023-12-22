import React, { useEffect } from 'react'
import img2 from '../assets/img2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Blog = () => {
  useEffect(() =>{

    Aos.init()
  }, [])
  return (
    <div className='bg-rose-100 mt-2 flex flex-col px-4 md:px-[8.5rem] pt-[3rem] pb-[4rem] md:flex-row'
    data-aos="fade-right" data-aos-delay="500" data-aos-once="true" id="blog" >
        <div className='md:ml-2'>
            <img src={img2} className='-mt-[0.2rem] md:-mt-[0] '></img>
        </div>
        <div className='md:ml-[20rem]'>
            <h1 className='font-bold text-2xl md:text-4xl mb-2 mt-2'>Blog</h1>
            <p className='text-xl max-w-sm md:text-2xl font-normal mb-2'>We have writers experienced in writing about luxury, that give good 
            advice about buying the best furniture available</p>
            <div>
                <button className='w-[8rem] md:w-[10rem] mb-6 text-white text-[16px] md:text-2xl font-bold p-2 md:p-4 h-[3rem] md:h-[4rem] bg-[#D70404]'>Read More</button>
            </div>
        </div>
        
    </div>
  )
}

export default Blog

