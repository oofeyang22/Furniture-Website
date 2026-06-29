
import React, { useEffect } from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {


  return (
    <div className='bg-[#D70404] text-white flex flex-col  md:flex md:flex-row  md:justify-evenly md:gap-8 min-h-[10rem] md:min-h-[12rem] p-6 md:p-0'
    >
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

export default Footer;
/*
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {


  return (
    <footer
      className="bg-[#D70404] text-white py-0 md:py-10 px-0 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

=
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media</h2>

          <div className="flex items-center gap-5 text-2xl">
            <BsLinkedin className="cursor-pointer hover:scale-110 transition-transform" />
            <FaFacebook className="cursor-pointer hover:scale-110 transition-transform" />
            <FaXTwitter className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>


        <div>
          <h2 className="text-xl font-bold mb-4">About</h2>

          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">
              Our Company
            </li>
            <li className="cursor-pointer hover:underline">
              Company Goals
            </li>
            <li className="cursor-pointer hover:underline">
              Key Members
            </li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-bold mb-4">Resources</h2>

          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:underline">
              Customer Care
            </li>
            <li className="cursor-pointer hover:underline">
              Terms of Service
            </li>
            <li className="cursor-pointer hover:underline">
              FAQs
            </li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1
                px-4
                py-2
                rounded-md
                border
                border-black
                text-black
                bg-white
                outline-none
                focus:ring-2
                focus:ring-black
              "
            />

            <button
              className="
                bg-black
                text-white
                px-5
                py-2
                rounded-md
                hover:bg-gray-900
                transition
              "
            >
              Register
            </button>
          </form>
        </div>
      </div>


      <div className="border-t border-red-300 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;*/