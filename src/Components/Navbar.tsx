"use client";
import React from 'react'
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="flex items-center justify-between md:px-10 pl-16 absolute bg-black opacity-80 bg-cover text-white mb-1">
    <div className=' text-white'>
        <ul className='hidden md:flex gap-5 items-center'>
            <li>Mission</li>
            <li>Advice</li>
            <li>Help</li>
        </ul>
    </div>
    <div className='w-40 md:w-auto'>
      <Image src="/Logo.svg" width={250} height={150} alt='logo' />
    </div>
    <div className='flex gap-5 items-start'>
        <button className='flex items-center  justify-center  md:gap-3 text-white rounded-full border-white border-2 md:w-32 w-20 h-16 md:text-xl px-3'>
            Login
            <RiArrowDropDownLine className="text-5xl" />
        </button>
       <Image src="/Aus.svg" width={40} height={50} alt='lang'/>
    </div>

</div>
  )
}

export default Navbar