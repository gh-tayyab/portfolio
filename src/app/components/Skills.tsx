import React from 'react'
import { FaHtml5 } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='min-h-screen bg-neutral-900 justify-center items-center py-8'>
      <div className='space-y-8'>
        <h1 data-aos="fade-in" className='text-4xl sm:text-5xl text-[#34ebde] text-center'>Skills</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20'>
        
        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="html.png" alt="" width={100} height={100}/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>HTML</h1>
          </div>
        </div>

        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="css.webp" alt="" width={100} height={100}/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>CSS</h1>
          </div>
        </div>

        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="typescript.png" alt="" width={100} height={100}/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>TypeScript</h1>
          </div>
        </div>

        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="nodejs.png" alt="" width={100} height={100} className='bg-transparent'/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>NodeJs</h1>
          </div>
        </div>

        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="github.png" alt="" width={100} height={100} className='bg-transparent'/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>Github</h1>
          </div>
        </div>

        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="react.png" alt="" width={100} height={100} className='bg-transparent'/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>React</h1>
          </div>
        </div>

        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="nextjs.png" alt="" width={100} height={100} className=' text-white'/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>Next.js</h1>
          </div>
        </div>

        <div data-aos="fade-in" className='bg-neutral-950 flex justify-center items-center shadow-white rounded-2xl'>
          <div className='py-6 px-6  space-y-2 hover:scale-x-110 duration-300'>
            <img src="tailwind.png" alt="" width={100} height={100}/>
            <h1 className='text-2xl sm:text-3xl font-bold text-center text-white'>Tailwind CSS</h1>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Skills