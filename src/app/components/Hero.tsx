'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='h-screen bg-neutral-900 text-white'>
      <div className='h-screen flex flex-col justify-center items-center pt-2 space-y-2'>
        <h1 className='font-semibold md:text-3xl sm:text-2xl text-xl'>👋🏻 HELLO I am</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-[#34ebde] text-center'>Muhammad Tayyab</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Frontend Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'UI/UX DESIGNER',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block'}}
          repeat={Infinity}
          className='text-center'
        />
        <p className='md:texl-xl text-sm text-center'>Passionate Next.js frontend developer with a knack for crafting responsive and performant web applications.
        </p>
        <a href="/tayyab-resume.pdf" download="tayyab-resume.pdf" className='bg-[#34ebde] text-black px-4 py-2 rounded-full hover:bg-white'>Download CV</a>
      </div>
    </div>
  )
}

export default Hero
