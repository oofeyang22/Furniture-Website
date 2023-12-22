import React, { useEffect } from 'react'
import star from '../assets/star1.png'
import truck from '../assets/truck.png'
import fire from '../assets/fire.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Goals = () => {
    useEffect(() =>{

        Aos.init()
    }, [])
    return (
        <div className='text-black bg-rose-100 px-4 md:px-[8.5rem] pt-[3rem] pb-[2.5rem] text-center'
        data-aos="fade-right" data-aos-delay="800" data-aos-once="true">

            <div>
                <h1 className='text-2xl md:text-4xl font-bold'>Why We Should Be Your Furniture Blog</h1>
            </div>
    
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[2rem]'>
                <div className=' text-black flex flex-col gap-5 justify-center items-center'>
                    <img src={star}/>
                    <div className='mt-6'>
                        <p className='text-xl font-bold -mt-11'>High quality</p>
                        <p className='text-xl font-normal'>We provide you with the best 
                        furniture from the best artisans</p>
                    </div>
                  
                </div>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <img src={truck}/>
                    <div>
                        <p className='text-xl font-bold'>Fast delivery</p>
                        <p className='text-xl font-normal'>We deliver products within two days 
                        after order has been made</p>
                    </div>
                 
                </div>
                <div className='flex flex-col gap-5 justify-center items-center'>

                    <img src={fire} className='lg: mt-5'/>
                    <div className='mt-[3.5rem] '>
                        <p className='text-xl font-bold -mt-[60px] lg:-mt-[72px]'>Hot deals</p>
                        <p className='text-xl font-normal'>We offer discounts to first-time customers and offer special deals</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals