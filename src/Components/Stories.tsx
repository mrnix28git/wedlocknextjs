import Image from 'next/image'
import React from 'react'
import { IoArrowForward, IoArrowBack, } from "react-icons/io5";

const Stories = () => {
  return (
    <div>  <div className='md:space-y-16 md:px-20 md:py-20 space-y-5 p-8 bg-[#007EAF] text-white'>
  
    <div className='md:space-y-10 space-y-5'>
        <div className='flex items-center  justify-between pr-20'>
            <h1 className=' md:text-6xl text-3xl font-bold'>Happy Stories</h1>
            <div className='flex items-center gap-4'>
                <IoArrowBack className=' md:w-10 md:h-10 hover:bg-[#009BDA] rounded-full' />
                <IoArrowForward className=' text-white rounded-full hover:bg-[#009BDA] md:w-10 md:h-10' />

            </div>
        </div>
        <p className=' md:text-2xl text-xl w-[50rem]'>Dive into stories of unexpected friendships, love that blossoms in the most extraordinary places, and dreams that come true against all odds.</p>
    </div>
    <div className='flex gap-5' >
        {/* <div className='relative'>
            <img src={Story} alt="" className='rounded-3xl w-72' />
            {/* <div className=' absolute bottom-0 '>
                <h1>JACK & Celine</h1>
                <p className='text-xs '>We matched. spoke for sometime and then met in real. We were sure we want to spend our life together after the initial few conversations.</p>
                <div className='flex items-center gap-3 '>
                    <h1>Read More</h1>
                    <MdOutlineArrowRightAlt  className='text-2xl'/>
                </div>
            </div> 
        </div> */}
        <Image src="/story.svg" width={400} height={400} alt='story'/>
        <Image src="/story.svg" width={400} height={400} alt='story'/>
        <Image src="/story.svg" width={400} height={400} alt='story'/>
    </div>
</div>
</div>
  )
}

export default Stories