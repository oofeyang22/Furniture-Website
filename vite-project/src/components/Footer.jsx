import React, { useEffect } from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {BsLinkedin} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() =>{
    Aos.init()
  }, [])
  return (
    <div className='bg-[#D70404] text-white flex flex-col md:flex-row justify-evenly md:gap-8 h-[30rem] md:h-[12rem] p-12 md:p-0'
    data-aos="flip-down" data-aos-delay="500" data-aos-once="true">
        <div className='mt-0 md:mt-6'>
            <h1 className='font-bold'>Social Media</h1>
            <div className='flex flex-row gap-2'>
                <BsLinkedin/>
                <FaFacebook/>
                <FaXTwitter />
            </div>
        </div>
        <div className='mt-6'>
            <h1 className='font-bold'>About</h1>
            <p>Our company</p>
            <p>Company goals</p>
            <p>Key members</p>
        </div>
        <div className='mt-6'>
            <h1 className='font-bold'>Resources</h1>
            <p>Customer Care</p>
            <p>Terms of services</p>
            <p>FAQs</p>
        </div>
        <div className='mt-6'>
            <h1 className='font-bold'>Subscribe to our newsletter</h1>
            <div className='flex flex-row gap-0'>
                <input placeholder='Enter your email' className='border-black border-[1.6px] w-[12rem] h-[2rem] text-center py-2'/>
                <button className='bg-black text-white w-[6rem] h-[2rem]'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Footer