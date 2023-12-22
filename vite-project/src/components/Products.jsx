import React, { useEffect } from 'react'
import blackstool from '../assets/blackstool.png'
import brownstool from '../assets/brownstool1.png'
import wardrobe from '../assets/wardrobe1.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Products = () => {
  useEffect(() =>{

    Aos.init()
  }, [])
  return (
    <div className='text-black px-4 md:px-[8.5rem] pt-[3rem] pb-[2.5rem] text-center'
    data-aos="flip-up" data-aos-delay="700" data-aos-once="true" name="products">
        <div className='p-4' id="products">
            <h1 className='text-2xl md:text-4xl font-bold'>Products</h1>
        </div>
    
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[8rem]'>
            <div className='bg-rose-100 w-[20rem] h-[22rem] flex flex-col gap-5 justify-center items-center'>
                <img src={blackstool} className='mb-4'/>
                <p className='text-xl font-bold -mt-10'>Black Stool</p>
                <p className='text-[#D70404] text-xl font-bold'>$55</p>
            </div>
            <div className='bg-rose-100 w-[20rem] h-[22rem] flex flex-col gap-5 justify-center items-center'>
                <img src={brownstool}/>
                <p className='text-xl font-bold'>Brown Side Table</p>
                <p className='text-[#D70404] text-xl font-bold'>$45</p>
            </div>
            <div className='bg-rose-100 w-[20rem] h:24rem md:h-[22rem]  flex flex-col gap-5 justify-center items-center'>
                <img src={wardrobe} className='lg:-mt-8 lg:-mb:6'/>
                <p className='text-xl font-bold -mt-[60px] lg:-mt-[72px]'>White Wardrobe</p>
                <p className='text-[#D70404] text-xl font-bold'>$60</p>
            </div>
        </div>
        <div>
            <button className='mt-8 w-[8rem] md:w-[11rem] h-[3rem] md:h-[4rem] text-white text-[16px] md:text-2xl font-bold bg-[#D70404]'>Explore More</button>
        </div>
    </div>
  )
}

export default Products