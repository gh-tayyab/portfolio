'use client'
import { RiMenu3Line, } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link"

const Navbar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <nav className='top-0 z-50  py-3 bg-neutral-900'>
            <div className='container flex justify-between px-4 mx-auto relative text-sm'>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center flex-shrink-0 p'></div>
                    <Link href={"/"}><span className="text-4xl tracking-tight text-white">P<span className="text-[#34ebde]">ortfolio</span></span></Link>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-14 items-center justify-center text-white text-xl">
                    <Link href='/About' className="hover:text-[#34ebde]"> <li>About</li></Link>
                    <Link href='/Skills' className="hover:text-[#34ebde]"> <li>Skills</li></Link>
                    <Link href='/Projects' className="hover:text-[#34ebde]"> <li>Projects</li></Link>
                    <Link href='/Contact' className="hover:text-[#34ebde]"> <li>Contact</li></Link>
                </ul>

                <div className="lg:hidden md:flex flex-col justify-end  text-xl">
                    <button onClick={toggleNavbar} className="py-3">{mobileDrawerOpen ? <RxCross2 className="text-white" /> : <RiMenu3Line className="text-white" />}</button>
                </div>
            </div>
            {
                mobileDrawerOpen && (
                    <div className="right-0 z-20 bg-neutral-900 w-full h-screen p-4 flex flex-col justify-center items-center text-center lg:hidden text-white text-xl">
                        <ul className=" space-x-1">
                            <Link href='/About' className="hover:text-[#34ebde]"> <li>About</li></Link>
                            <Link href='/Skills' className="hover:text-[#34ebde]"> <li>Skills</li></Link>
                            <Link href='/Projects' className="hover:text-[#34ebde]"> <li>Projects</li></Link>
                            <Link href='/Contact' className="hover:text-[#34ebde]"> <li>Contact</li></Link>
                        </ul>
                    </div>

                )
            }
        </nav>
    )
}

export default Navbar