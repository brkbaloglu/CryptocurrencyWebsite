import React from 'react'

function Contact() {
  return (
    <div className='flex items-center justify-center flex-col mt-10 mb-20'>
      <h1 className='text-black text-4xl font-semibold my-10'>Contact <span className='text-green-700'>Us</span></h1>
      <form action="" className='flex items-center justify-center flex-col'>
        <input type="text" placeholder='Enter your name' className=' w-[600px] border-2 border-green-700 my-2 p-2 placeholder:text-green-700 rounded-xl' name="" id="" />
        <input type="email" placeholder='Enter your email' className=' w-[600px] border-2 border-green-700 my-2 p-2 placeholder:text-green-700 rounded-xl' name="" id="" />
        <input type="number" placeholder='Enter your number' className=' w-[600px] border-2 border-green-700 my-2 p-2 placeholder:text-green-700 rounded-xl' name="" id="" />
        <textarea cols="30" rows="10" placeholder='Enter your message' className='resize-none w-[600px] border-2 border-green-700 my-2 p-2 placeholder:text-green-700 rounded-xl'></textarea>
        <button type="submit" className='px-8 py-2 bg-green-700 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Contact