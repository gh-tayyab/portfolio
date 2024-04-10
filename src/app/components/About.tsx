import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <div className='min-h-screen bg-neutral-950 gap-2 px-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-4'>
        
            <img data-aos="fade-up" src="/mine.png" alt="" width={400} height={400} />
        
        <div data-aos="fade-up" className='text-white space-y-4'>
            <h1 data-aos="fade-up" className='font-bold text-4xl md:text-5xl lg:text-6xl text-[#34ebde]'>About Me</h1>
            <p data-aos="fade-up" className='font-thin'>Front-end Development I am a beginner developer looking for opportunities to expand my skills. I have knowledge of HTML, CSS, Tailwind CSS and TypeScript with React or Next.js Framework, and I am commited to improving my proficiency in these technologies.</p>
            <p data-aos="fade-up" className='font-thin'>If you are looking for a motivated and dedicated front-end developer, I am available for work opportunities and excited to contribute to projects that allow me to expand my experience and knowledge.</p>
            <div className='flex space-x-4 py-4'>
            <Link data-aos="fade-up" href={"https://www.instagram.com/ig.tayyab/"} target='_main' className='cursor-pointer text-[#34ebde]'><FaInstagram size={30}/></Link>
            <Link data-aos="fade-up" href={"https://www.facebook.com/profile.php?id=100081053644114"} target='_main' className='cursor-pointer text-[#34ebde]'><FaFacebook size={30}/></Link>
            <Link data-aos="fade-up" href={"https://www.linkedin.com/in/muhammad-tayyab-6661102a1/"} target='_main' className='cursor-pointer text-[#34ebde]'><FaLinkedin size={30}/></Link>
            <Link data-aos="fade-up" href={"https://github.com/gh-tayyab"} target='_main' className='cursor-pointer text-[#34ebde]'><FaGithub size={30}/></Link>
            </div>
        </div>
        
    </div>
  )
}

export default About