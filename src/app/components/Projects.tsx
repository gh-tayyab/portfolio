import React from 'react'
import Link from 'next/link'
import { BsEye } from 'react-icons/bs'
import Image from 'next/image'
import website1 from '../assets/website1.jpg'
import website2 from '../assets/website2.jpg'
import website3 from '../assets/website3.jpg'
import website4 from '../assets/website4.jpg'

const Work = () => {
    return (
        <div className='flex items-center justify-center bg-neutral-950'>
            <div>
                <h1 data-aos="fade-in" className='text-5xl lg:text-6xl font-bold text-center py-6 text-[#34ebde]'>Projects</h1>

                <div data-aos="fade-in" className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-4 w-auto px-4'>
                    <Link data-aos="fade-in" href={"https://flexforce-gymnasium.vercel.app/"} target='_main' title='FlexForce-Gymnasium Website'>
                        <Image src={website1} alt='Flex Force Website' width={600} height={600} className='hover:scale-105 duration-300' /> 
                    </Link>
                   
                   
                   
                    <Link data-aos="fade-in" href={"https://praroz.vercel.app/"} target='_main' title='PraRoz Website'>
                        <Image src={website2} alt='PraRoz Website' width={600} height={600} className='hover:scale-105 duration-300'/>
                    </Link>
                   
                   
                   
                    <Link data-aos="fade-in" href={"https://seaside-escape-gateways.vercel.app/"} target='_main' title='SeaSide_Escape-Gateways Website'>
                        <Image src={website3} alt='SeaSide Escape Gateways Website' width={600} height={600} className='hover:scale-105 duration-300'/> 
                    </Link>
                    
                    
                    
                    <Link data-aos="fade-in" href={"https://sportswebsite.vercel.app/"} target='_main' title='Sports Website'>
                        <Image src={website4} alt='Sports Website' width={600} height={600} className='hover:scale-105 duration-300'/>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Work