"use client";
<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  console.log("Current pathname:", pathname); // Debugging line

  // Determine if the current path should have the bg-blue class
  const isBlueBgRoute =
    pathname === "/mission" ||
    pathname === "/advice" ||
    pathname === "/help" ||
    pathname === "/legal" ||
    pathname === "/discover";
  console.log("isBlueBgRoute:", isBlueBgRoute); // Debugging line

  // Determine if the navbar should be hidden
  const hiddenRoutes = [
    "/verification",
    "/register",
    "/questions",
    "/login",
    "/forgotpassword",
    "/createpassword",
  ];
  const isHiddenRoute = hiddenRoutes.includes(pathname);
  console.log("isHiddenRoute:", isHiddenRoute); // Debugging line
=======
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
>>>>>>> 093fd45503118bee5161e71333a972e4d2c4c5da

  if (isHiddenRoute) {
    return null;
  }

  return (
<<<<<<< HEAD
    <div
      className={`absolute z-10 opacity-80 w-full text-white md:px-16 px-3 ${
        isBlueBgRoute ? "bg-[#007eb0]" : ""
      }`}
    >
      {/* <div className='h-20 bg-black blur-2xl '>

</div> */}
      <div className="flex items-center justify-between">
        <div className="text-white">
          <ul className="hidden md:flex gap-5 items-center">
            <li>
              <Link href="/mission">Mission</Link>
            </li>
            <li>
              <Link href="/advice">Advice</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Image src="/Logo.svg" alt="logo" width={300} height={100} />
          <h1 className="-rotate-90 relative top-4 right-2 text-xl">.au</h1>
        </div>
        <div className="flex gap-5 items-start">
          <button className="flex items-center justify-center md:gap-3 text-white md:rounded-full rounded-3xl border-white border-2 md:w-32 w-20 md:h-16 md:text-xl px-3">
=======
    <div className={`absolute z-10   w-full text-white   ${isBlueBgRoute ? 'bg-[#007eb0]' : ''}`}>
      
      <div className={` ${isBlueBgRoute ? 'hidden' : `h-2 xl:h-6 xl:w-[100%]  z-10  bg-black xl:blur-[18px]  blur-[30px]`}`}></div>
      <div className="flex px-3 xl:px-16 items-center justify-between">
        <div className='text-white'>
          <ul className='hidden md:flex gap-5 items-center'>
            <li><Link href="/mission">Mission</Link></li>
            <li><Link href="/advice">Advice</Link></li>
            <li><Link href="/help">Help</Link></li>
          </ul>
        </div>
        <div className="flex items-center my-3 md:my-0">
            <Image src="/Logo.svg" alt="logo" width={300} height={100} className="w-28 xl:w-[273px] h-[90px]"  />
            <h1 className="-rotate-90 relative top-2 md:top-4 right-2 text-sm md:text-xl " >.au</h1>
          </div>
        <div className='flex gap-5 items-start'>
          <button className='flex items-center justify-center md:gap-3 text-white md:rounded-full rounded-3xl border-white border-2 xl:w-32 w-20 md:h-16 md:text-xl px-3' onClick={openLogin}>
>>>>>>> 093fd45503118bee5161e71333a972e4d2c4c5da
            Login
            <RiArrowDropDownLine className="text-5xl" />
          </button>
          <Image src="/Aus.svg" width={40} height={50} alt="lang" />
        </div>
      </div>
      <Login isOpen={isLoginOpen} onClose={closeLogin}   />
    </div>
  );
}

export default Navbar;
