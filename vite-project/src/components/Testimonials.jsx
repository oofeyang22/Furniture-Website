import React, { useEffect } from 'react'
import Ellipse1 from '../assets/Ellipse1.png'
import Ellipse2 from '../assets/Ellipse2.png'
import Ellipse3 from '../assets/Ellipse3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {

  useEffect(() =>{
    Aos.init()
  }, [])
  return (
    <div className='text-black px-4 md:px-[8.5rem] pt-[3rem] pb-[2.5rem] text-center'
    data-aos="fade-down" data-aos-delay="900" data-aos-once="true">
        <div className='p-4'>
            <h1 className='text-2xl md:text-4xl mb-6 font-bold'>Testimonials</h1>
        </div>
    
        <div className='flex flex-col md:flex-row relative justify-center items-center gap-6 md:gap-[8rem]'>
            <div className='bg-white shadow-xl shadow-gray-500 rounded-xl w-[20rem] h-[22rem] flex flex-col gap-5 justify-center items-center'>
                <div className='absolute top-12 md:top-[2.3rem]'>
                    <h2 className='px-[8px] text-2xl md:text-xl w-[20rem] md:w-[15rem]'><span className='md:text-2xl font-bold'>"</span>They delivered exactly when they 
                    promised to deliver and that's rare.</h2>
                </div>
                <div className='bg-green-900 absolute top-[17rem] md:top-[17rem] p-8 text-white rounded-xl w-[20rem] md:w-[20rem] h-[80px] text-center'>
                    <p className='font-bold'>Anna Williams</p>
                    <p>Model</p>
                </div>
                <div className='absolute bottom-[50rem] md:bottom-[2.8rem]'>
                    <img src={Ellipse1} />
                </div>
            </div>

            <div className='bg-white shadow-xl shadow-gray-500 rounded-xl w-[20rem] h-[22rem] flex flex-col gap-5 justify-center items-center'>
                <div className='absolute top-[26rem] md:top-[2.3rem]'>
                    <h2 className='px-[8px] text-2xl md:text-xl w-[20rem] md:w-[15rem]'><span className='md:text-2xl font-bold'>"</span>I bought their furniture and 
                    I have been using it for a long time</h2>
                </div>
                <div className='bg-[#D70404] absolute top-[41rem] md:top-[17rem] p-8 text-white rounded-xl w-[20rem] md:w-[20rem] h-[80px] text-center'>
                    <p className='font-bold'>Jack Kruger</p>
                    <p>Dancer</p>
                </div>
                <div className='absolute bottom-[25.5rem] md:bottom-[2.8rem]'>
                    <img src={Ellipse2} />
                </div>
            </div>

            <div className='bg-white shadow-xl shadow-gray-500 rounded-xl w-[20rem] h-[22rem] flex flex-col gap-5 justify-center items-center'>
                <div className='absolute top-[49rem] md:top-[2.3rem]'>
                    <h2 className='px-[8px] text-2xl w-[20rem] md:w-[15rem] md:text-xl'><span className='md:text-2xl font-bold'>"</span>I benefitted from a promo 
                    held last easter and I got a big discount</h2>
                </div>
                <div className='bg-blue-900 absolute top-[65rem] md:top-[17rem] p-8 text-white rounded-xl w-[20rem] md:w-[20rem] h-[80px] text-center'>
                    <p className='font-bold'>Ian Xavi</p>
                    <p>Comedian</p>
                </div>
                <div className='absolute bottom-[2rem] md:bottom-[2.8rem]'>
                    <img src={Ellipse3} />
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Testimonials