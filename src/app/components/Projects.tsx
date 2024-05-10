import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {client} from '@/lib/sanityClient'
import { Image as IImage} from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'
export const getProductdata=async()=>{
    const res = await client.fetch(`*[_type=='product']{title, image, link}`)
    return res
 }
 interface IProp{
     title:string
     image:IImage,
     link:string
 }
 
const Work =async () => {
    const data:IProp[] =  await getProductdata()
    return (
        <div className='flex items-center justify-center bg-neutral-950'>
            <div>
                <h1 data-aos="fade-in" className='text-5xl lg:text-6xl font-bold text-center py-6 text-[#34ebde]'>Projects</h1>

                <div data-aos="fade-in" className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-4 w-auto px-4'>
                    {data.map((item:IProp,i:number)=>{
                        return(
                            <Link data-aos="fade-in" href={item.link} target='_main' title='FlexForce-Gymnasium Website' key={i}>
                            <Image src={urlForImage(item.image)} alt='Flex Force Website' width={600} height={600} className='hover:scale-105 duration-300' /> 
                            </Link>  
                            
                        )
                    })}
                
                </div>
            </div>

        </div>
    )
}

export default Work
{/*
{/* 



<Link data-aos="fade-in" href={"https://praroz.vercel.app/"} target='_main' title='PraRoz Website'>
<Image src={"/website2.jpg"} alt='PraRoz Website' width={600} height={600} className='hover:scale-105 duration-300'/>
</Link>



<Link data-aos="fade-in" href={"https://seaside-escape-gateways.vercel.app/"} target='_main' title='SeaSide_Escape-Gateways Website'>
<Image src={"/website3.jpg"} alt='SeaSide Escape Gateways Website' width={600} height={600} className='hover:scale-105 duration-300'/> 
</Link>



<Link data-aos="fade-in" href={"https://sportswebsite.vercel.app/"} target='_main' title='Sports Website'>
<Image src={"/website4.jpg"} alt='Sports Website' width={600} height={600} className='hover:scale-105 duration-300'/>
</Link> */}

