import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex items-center justify-between mx-20 my-20 relative'>
      <div>
        <h5 className='text-2xl font-bold my-2'>Buy & Sell Crypto 24/7 using your account</h5>
        <h3 className='text-5xl font-bold my-2'>Invest in Cryptocurrency</h3>
        <h5 className='text-2xl font-bold my-2'>Buy, Sell, and store hundreds of cryptocurrencies</h5>
        <Link className='bg-green-700 text-white p-4 absolute my-2 left-[15%] rounded-xl border-2 hover:bg-white hover:text-green-700 border-green-700' to="cryptocurrencies">Learn More</Link>
      </div>
      <div>
        <img className='w-[500px]' src="http://localhost:3000/static/media/hero-img.66b9eb77caa3ac6d4fe8.png" alt="" />
      </div>
    </div>
  )
}

export default Home