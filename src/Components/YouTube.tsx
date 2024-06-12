import Image from 'next/image'
import React from 'react'
import '../app/globals.css'

const YouTube = () => {
  return (
    <div className='relative' >
       <img
        src="/curvesm.svg"
        alt="arw"
        className="absolute  w-[35rem] -right-20 top-4"
      />
    <div className='bg-[#E6F2F7]  md:px-20 md:py-20 md:space-y-14 p-8 space-y-8'>
       
        <h1 className='md:text-6xl text-3xl font-bold text-[#007EAF]'>Introducing: A new eharmony experience
        </h1>
        <p className='text-xl text-[#101828E5]' style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>Your search for a great relationship has never been easier with <br /> groundbreaking overhaul of the eharmony you know and trust.
        </p>
        <h4 className='xl:text-md text-xl font-bold text-[#007EAF]' style={{fontFamily: 'Proxima-Nova-Bold, sans-serif'}}>Get a sneek peek:</h4>
        <Image src="/YT.svg" width={1200} height={700} alt='yt' className='relative left-2'/>
    </div></div>
  )
}

export default YouTube