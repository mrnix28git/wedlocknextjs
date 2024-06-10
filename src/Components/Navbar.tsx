"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Login from './model/Login';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const isBlueBgRoute = pathname === "/mission" || pathname === "/advice" || pathname === "/help" || pathname === "/legal" || pathname === "";
  const hiddenRoutes = ["/verification", "/register", "/questions", "/login", "/forgotpassword", "/createpassword"];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  if (isHiddenRoute) {
    return null;
  }

  return (
    <div className={`absolute z-10 opacity-80 w-full text-white md:px-16 px-3 ${isBlueBgRoute ? 'bg-[#007eb0]' : ''}`}>
      
      {/* <div className='h-20 bg-black blur-2xl '>

</div> */}
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
          <button className='flex items-center justify-center md:gap-3 text-white md:rounded-full rounded-3xl border-white border-2 md:w-32 w-20 md:h-16 md:text-xl px-3' onClick={openLogin}>
            Login
            <RiArrowDropDownLine className="text-5xl" />
          </button>
          <Image src="/Aus.svg" width={40} height={50} alt='lang' />
        </div>
      </div>
      <Login isOpen={isLoginOpen} onClose={closeLogin}  />
    </div>
  );
}

export default Navbar;
