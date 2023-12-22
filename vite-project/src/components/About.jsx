import React, { useEffect } from 'react'
import img1 from '../assets/img1.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(() =>{

    Aos.init()
  }, [])
  return (
    <div className='mt-0 flex flex-col px-4 md:px-[8.5rem] pt-[3rem] pb-[2.5rem] md:flex-row'
    data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000" data-aos-once="true" id="about">
        <div>
            <h1 className='font-bold text-2xl md:text-4xl mb-2'>About Us</h1>
            <p className='text xl max-w-sm md:mt-6 md:text-2xl font-normal mb-2'>We are an international plug, able to deliver high-quality furniture all over 
            the world without causing our customers any discomfort</p>
            <div>
                <button className=' w-[8rem] md:w-[10rem] md:mt-10 mb-4 text-white text-[16px] md:text-2xl font-bold p-2 md:p-4 h-[3rem] md:h-[4rem] bg-[#D70404]'>See More</button>
            </div>
        </div>
        <div className='md:ml-2'>
            <img src={img1} className='-mt-[0.3rem] md:-mt-[0.5rem] md:ml-[20rem]'></img>
        </div>
    </div>
  )
}

export default About