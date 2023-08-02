import React from 'react'

function About() {
  return (
    <div className='flex items-center justify-between mx-20 my-20'>
      <div>
        <img className='w-[1400px]' src="https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg" alt="" />
      </div>
      <div className='ml-20 flex items-center justify-center flex-col'>
        <h3 className='text-4xl text-black font-bold mb-10'>About <span className='text-green-700'>Us</span></h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis repellendus? Esse odio deleniti, animi quibusdam aspernatur error soluta reiciendis! Exercitationem odit illum aliquam consequatur dolorem debitis, nobis consequuntur praesentium asperiores culpa sequi, dicta eos alias delectus quas incidunt numquam autem non, odio quos quidem. In animi ratione numquam eveniet.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis repellendus? Esse odio deleniti, animi quibusdam aspernatur error soluta reiciendis! Exercitationem odit illum aliquam consequatur dolorem debitis, nobis consequuntur praesentium asperiores culpa sequi, dicta eos alias delectus quas incidunt numquam autem non, odio quos quidem. </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis repellendus? Esse odio deleniti, animi quibusdam aspernatur error soluta reiciendis! Exercitationem odit illum aliquam consequatur dolorem debitis, nobis consequuntur praesentium asperiores culpa sequi.</p>
      </div>
    </div>
  )
}

export default About