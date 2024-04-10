import React from 'react'
import Link from 'next/link'
import { BsEye } from 'react-icons/bs'
import Image from 'next/image'

const Work = () => {
    return (
        <div className='flex items-center justify-center bg-neutral-950'>
            <div>
                <h1 data-aos="fade-in" className='text-5xl lg:text-6xl font-bold text-center py-6 text-[#34ebde]'>Projects</h1>

                <div data-aos="fade-in" className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-4 w-auto px-4'>
                    <Link data-aos="fade-in" href={"https://flexforce-gymnasium.vercel.app/"} target='_main'>
                        <Image src="/website1.jpg" alt="" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform' />
                        <BsEye className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#ADB7BE] text-neutral-400 text-8xl' />
                    </Link>
                    <Link data-aos="fade-in" href={"https://praroz.vercel.app/"} target='_main'>
                        <Image src="/website2.jpg" alt="" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform' />
                        <BsEye className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#ADB7BE] text-neutral-400 text-8xl' />
                    </Link>
                    <Link data-aos="fade-in" href={"https://seaside-escape-gateways.vercel.app/"} target='_main'>
                        <Image src="/website3.jpg" alt="" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform' />
                        <BsEye className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-purple-800 text-neutral-400 text-8xl' />
                    </Link>
                    <Link data-aos="fade-in" href={"https://sportswebsite.vercel.app/"} target='_main'>
                        <Image src="/website4.jpg" alt="" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform' />
                        <BsEye className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#ADB7BE] text-neutral-400 text-8xl' />
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Work