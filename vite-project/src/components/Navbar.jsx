import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {RiMenu4Fill} from 'react-icons/ri'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav]= useState(false);

    const handleNav= () => {
        setNav(!nav)
    }
    return (
        <div className='text-black bg-[#D70404] flex justify-between items-center h-24 max-w-[1240px] md:max-w-[100vw] mx-auto px-4'>

            <h1 className='w-full md:ml-[6.5rem] text-xl text-white font-bold'>Yangy</h1>
            <ul className='hidden md:flex font-medium text-white mr-12'>
                <li className='p-4'><Link to="hero" spy={true} smooth={true} offset={100} duration={500}>Home</Link></li>
                <li className='p-4 md:w-[7rem]'><Link to="about" spy={true} smooth={true} offset={100} duration={500} >About us</Link></li>
                <li className='p-4'><Link to="blog" spy={true} smooth={true} offset={100} duration={500}>Blog</Link></li>
                <li className='p-4'><Link to="products" spy={true} smooth={true} offset={100} duration={500}>Products</Link></li>
                <li className='p-4'><button className='w-[6rem] h-[2rem] bg-white text-[#D70404] font-bold'>Sign up</button></li>
            </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav? <AiOutlineClose size={20} className='text-white font-bold'/> : < RiMenu4Fill size= {20} className='text-white font-bold'/>}
        </div>
        <div className= {nav? 'fixed bg-[red] left-0 top-0 w-[60%] h-full border-r border-r-gray-900' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-xl font-bold m-4 text-white'>yangy</h1>
            <ul className='p-4 uppercase text-white'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About us</li>
                <li className='p-4'>Blog</li>
                <li className='p-4'>Products</li>
                <li className='p-4 bg-primary'><button className='w-[6rem] h-[2rem] bg-white text-[#D70404] font-bold'>Sign up</button></li>
            </ul>
    </div>
    </div>
    )
}

export default Navbar