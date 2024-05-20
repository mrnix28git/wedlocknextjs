import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div>  <div className='md:space-y-16 md:px-20 md:py-20 space-y-5 p-8 
    bg-[#E6F2F7]'>
  
    <div className='md:space-y-10 space-y-5'>
        <div className='flex items-center  justify-between pr-20'>
            <h1 className=' md:text-6xl text-3xl font-bold text-[#007EAF]'>Browse matrimonial profiles by</h1>
           
        </div>
        <p className=' md:text-2xl text-xl w-[50rem] text-[#101828E5]'>Your search for a great relationship has never been easier with groundbreaking overhaul of the eharmony you know and trust.</p>
    </div>
    <div className='flex gap-20' >
        <div className='rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2'>
            Mother Tongue
        </div>
        <div className='rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2'>
            Religion
        </div>
        <div className='rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2'>
            Community
        </div>
        <div className='rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2'>
            Nationality
        </div>
    </div>
    <div className='grid grid-cols-6 gap-3'>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
        <div className='flex flex-col items-center gap-2'>
            <Image src="/p1.png" alt='p1' width={150} height={100} className='rounded-full'/>
            <h1>Bengali</h1>
       
        </div>
    </div>
    <div className='underline text-blue-600 relative left-[62rem]'>
        More Matrimonial {'>'}
    </div>
</div>
</div>
  )
}

export default Search