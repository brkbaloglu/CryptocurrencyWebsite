import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineCopyrightCircle, AiOutlineArrowRight} from 'react-icons/ai'
function Footer() {
  return (
    <div className=''>
      <div className='grid grid-cols-3 '>
        <div className='flex items-center justify-center flex-col '>
        <ul>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Payment Options</li>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Management</li>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Business Partners</li>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Customer service</li>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Protection of Personal Data</li>
        </ul>
        </div>
        <div className="flex items-center justify-center flex-col border-l-2 border-r-2 border-green-700">
        <ul>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/><Link to="/">Home</Link></li>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/><Link to="about">About Us</Link></li>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/><Link to="cryptocurrencies">Cryptocurrencies</Link></li>
          <li className='flex items-center my-2 hover:translate-x-2 hover:text-green-600 font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/><Link to="contact">Contact</Link></li>
        </ul>
      </div>
        <div className='flex justify-center items-center'>
          <AiFillFacebook size={35} className='hover:text-green-600 cursor-pointer mx-2'/>
          <AiOutlineTwitter size={35} className='hover:text-green-600 cursor-pointer mx-2'/>
          <AiFillLinkedin size={35} className='hover:text-green-600 cursor-pointer mx-2'/>
          <AiOutlineWhatsApp size={35} className='hover:text-green-600 cursor-pointer mx-2'/>
        </div>
      </div>
      <div className='my-10 py-2 px-10 bg-green-700 text-white flex items-center '>
        <AiOutlineCopyrightCircle size={25} className='mr-4'/> 
        <p className='text-lg'>Copyright 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer