import Image from 'next/image'
import React from 'react'
import '../app/font.css';


function Pre() {
  return (
    <div className='xl:p-10 p-2 space-y-20 bg-[#E6F2F7] relative'>
        <img src="/Vector.png" alt='arw' className='absolute  w-[40rem] -right-4 -top-44'/>
        <div className='space-y-7'>
            <h1 className='text-[#007EAF] font-bold text-2xl text-left md:text-3xl xl:text-6xl '>The premier matrimony application </h1>
            <p className='text-[#475467] text-lg text-balance xl:text-xl text-left' style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>With over two decades of reliable matchmaking experience, supported by a <br /> committed Trust and Safety team at your service.
            </p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 '>
            <div className=' flex flex-col items-center gap-3 p-5 rounded-3xl bg-[#B0D7E680]'>
                <div className='bg-[#1EDC8B] rounded-full w-20 h-20 flex justify-center items-center'>
                    <Image src="/lock2.png" alt='lock2' width={40} height={40}/>

                </div>
                <h1 className='text-2xl font-extrabold text-[#00597C]'>100% Privacy</h1>
                <p className='text-[#00739F] text-xl text-center w-80'>Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
            </div>
            <div className=' flex flex-col items-center gap-3 p-5 rounded-3xl bg-[#B0D7E680]'>
                <div className='bg-[#2D95BD] rounded-full w-20 h-20 flex items-center justify-center'>
                <Image src="/guard.png" alt='guard' width={40} height={40}/>


                </div>
                <h1 className='text-2xl font-extrabold text-[#00597C]'>Verified Profiles
                </h1>
                <p className='text-[#00739F] text-xl text-center w-80'>Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
            </div>
            <div className=' flex flex-col items-center gap-3 p-5 rounded-3xl bg-[#B0D7E680]'>
                <div className='bg-[#FFB42C] rounded-full w-20 h-20 flex justify-center items-center'>
                <Image src="/user.png" alt='user' width={40} height={40}/>


                </div>
                <h1 className='text-2xl font-extrabold text-[#00597C]'>Best Matches</h1>
                <p className='text-[#00739F] text-xl text-center w-80'>Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
            </div>
        </div>

    </div>
  )
}

export default Pre