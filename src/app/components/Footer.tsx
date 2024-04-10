import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-center dark:bg-neutral-700 lg:text-left text-white">
      <div className="bg-black/5 p-4 text-center text-surface dark:text-white flex justify-between px-16 gap-2 space-x-2">
        <h1 className='text-[#34ebde] text-xl'>© 2023 Copyright</h1>
        <Link href={"https://www.instagram.com/ig.tayyab/"} target='_main' className='cursor-pointer  hover:text-[#34ebde]'><FaInstagram size={30} /></Link>
      <Link  href={"https://www.facebook.com/profile.php?id=100081053644114"} target='_main' className='cursor-pointer hover:text-[#34ebde]'><FaFacebook size={30} /></Link>
      <Link  href={"https://www.linkedin.com/in/muhammad-tayyab-6661102a1/"} target='_main' className='cursor-pointer hover:text-[#34ebde]'><FaLinkedin size={30} /></Link>
      <Link  href={"https://github.com/gh-tayyab"} target='_main' className='cursor-pointer  hover:text-[#34ebde]'><FaGithub size={30} /></Link>
      </div>
      
    </footer>
  )
}

export default Footer