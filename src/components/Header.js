import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='flex items-center justify-between p-10 border-b-2 border-green-600 '>
        
        <div>
            <Link to="/" className='font-bold hover:text-green-500 hover:underline underline-offset-4 text-xl mx-2 '>Home</Link>
            <Link to="about" className='font-bold hover:text-green-500 hover:underline underline-offset-4 text-xl mx-2 '>About Us</Link>
            <Link to="cryptocurrencies" className='font-bold hover:text-green-500 hover:underline underline-offset-4 text-xl mx-2 '>Cryptocurrencies</Link>
            <Link to="contact" className='font-bold hover:text-green-500 hover:underline underline-offset-4 text-xl mx-2 '>Contact Us</Link>
        </div>
        <div>
            <FaBars className='hover:text-green-600 cursor-pointer' size={25}/>
        </div>
    </div>
  )
}

export default Header