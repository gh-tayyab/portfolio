import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsBoxes } from 'react-icons/bs'
import { HiCodeBracket } from 'react-icons/hi2'
import { IoIosCrop, IoMdSettings } from 'react-icons/io'
import { VscGraph } from 'react-icons/vsc'

const Services = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-neutral-900'>
            <div className='space-y-4'>
                <h1 data-aos="fade-in" className='text-[#34ebde] text-4xl sm:text-5xl md:text-5xl text-center mt-2 lg:mt-0'>Services</h1>

                <div data-aos="fade-in" className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>

                    <div className='border border-white w-auto py-2 px-6 space-y-2 rounded bg-neutral-950 hover:scale-105 duration-300 cursor-pointer'>
                        <IoMdSettings className='text-[#34ebde]' size={30} />
                        <h2 className='text-2xl'>Creative Design</h2>
                        <p className='text-center'>Creative designs are innovative and visually captivating solutions that break conventions and inspire new ways of thinking. They blend artistry with functionality, engaging viewers and leaving a lasting impression.</p>
                    </div>

                    <div className='border border-white w-auto py-2 px-4 space-y-2 rounded bg-neutral-950 hover:scale-105 duration-300 cursor-pointer'>
                        <IoIosCrop className='text-[#34ebde]' size={30} />
                        <h2 className='text-2xl'>Clean Code</h2>
                        <p className='text-center'>Clean code is code that is easy to understand, maintain, and modify. It follows principles and practices that make it readable and reusable, reducing complexity and improving overall software quality.</p>
                    </div>

                    <div className='border border-white w-auto py-2 space-y-2 px-4 rounded bg-neutral-950 hover:scale-105 duration-300 cursor-pointer'>
                        <BsBoxes className='text-[#34ebde]' size={30} />
                        <h2 className='text-2xl'>Responsive Design</h2>
                        <p className='text-center'>Responsive design is an approach to web design that ensures web pages render well on a variety of devices and window or screen sizes. It involves using fluid grids, flexible images, and CSS media queries to adapt the layout to different viewing environments.</p>
                    </div>

                    <div className='border border-white w-auto py-2 space-y-2 px-4 rounded bg-neutral-950 hover:scale-105 duration-300 cursor-pointer'>
                        <AiOutlinePieChart className='text-[#34ebde]' size={30} />
                        <h2 className='text-2xl'>Bootstrap 4</h2>
                        <p className='text-center'>Bootstrap is a popular front-end framework for building responsive and mobile-first websites and web applications. It provides a set of CSS and JavaScript components that make it easy to create consistent layouts and user interfaces.</p>
                    </div>

                    <div className='border border-white w-auto py-2 space-y-2 px-4 rounded bg-neutral-950 hover:scale-105 duration-300 cursor-pointer'>
                    <HiCodeBracket  className='text-[#34ebde]' size={30} />
                        <h2 className='text-2xl'>Font Icon</h2>
                        <p className='text-center'>Fonts are styles of typefaces used to display text. They can convey a range of moods and enhance the readability and visual appeal of written content.</p>
                    </div>

                    <div  className='border border-white w-auto py-2 space-y-2 px-4 rounded bg-neutral-950 hover:scale-105 duration-300 cursor-pointer'>
                    <VscGraph  className='text-[#34ebde]' size={30} />
                        <h2 className='text-2xl'>Figma</h2>
                        <p className='text-center'>Figma is a collaborative interface design tool that allows teams to create, test, and share user interfaces for websites, mobile apps, and other digital products in real-time.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services