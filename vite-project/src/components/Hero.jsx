import { useEffect } from 'react'
import furniture from '../assets/furniture.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() =>{
        Aos.init()
    }, [])
    return (
        <div className='bg-rose-100 mt-0 flex flex-col px-4 md:px-[8.5rem] pt-[3rem] pb-[rem] md:flex-row'
        data-aos="fade-down" data-aos-duration="2000" data-aos-once="true" id="hero" >
            <div >
                <h1 className='font-bold text-2xl md:text-4xl mb-2'>Providing Stunning Furniture At The Best Price</h1>
                <p className='text xl md:text-2xl font-normal mb-2'>The best furniture plug for everyone</p>
                <div>
                    <button className='md:w-[11rem] w-[8rem] mb-4 text-white text-[16px] text-center md:text-2xl font-bold p-2 md:p-4 h-[3rem] md:h-[5rem] bg-[#D70404]'>Learn More</button>
                </div>
            </div>
            <div className='md:ml-2'>
                <img src={furniture} className='md:w-[450px] md:h-[450px] -mt-[7rem] md:-mt-[12rem] '></img>
            </div>
        </div>
    )
}

export default Hero