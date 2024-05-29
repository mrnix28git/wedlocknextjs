"use client";
import React from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  console.log('Current pathname:', pathname); // Debugging line

  // Determine if the current path should have the bg-blue class
  const isBlueBgRoute = pathname === "/mission" || pathname === "/advice" || pathname === "/help";
  console.log('isBlueBgRoute:', isBlueBgRoute); // Debugging line

  return (
    <div className={`absolute z-10 opacity-80 w-full text-white px-16 ${isBlueBgRoute ? 'bg-[#007eb0]' : ''}`}>
      <div className="flex items-center justify-between">
        <div className='text-white'>
          <ul className='hidden md:flex gap-5 items-center'>
            <li><Link href="/mission">Mission</Link></li>
            <li><Link href="/advice">Advice</Link></li>
            <li><Link href="/help">Help</Link></li>
          </ul>
        </div>
        <div className='w-40 md:w-auto'>
          <Image src="/Logo.svg" width={250} height={150} alt='logo' />
        </div>
        <div className='flex gap-5 items-start'>
          <button className='flex items-center justify-center md:gap-3 text-white rounded-full border-white border-2 md:w-32 w-20 h-16 md:text-xl px-3'>
            Login
            <RiArrowDropDownLine className="text-5xl" />
          </button>
          <Image src="/Aus.svg" width={40} height={50} alt='lang' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
