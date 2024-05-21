"use client";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';




const Navbar: React.FC = () => {
  const [pathname, setPathname] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(router.pathname)
    }
  }, [router.pathname])

  const isPagePath = pathname === "/mission" || 
                     pathname === "/vision" || 
                     pathname === "/team" || 
                     pathname === "/contact"


                     
  return (
    <div className={`absolute   w-[83.9rem] text-white px-16 ${isPagePath ? "bg-blue-400" : " bg-black opacity-80"}`}>
      <div className="flex items-center justify-between   ">
    <div className=' text-white'>
        <ul className='hidden md:flex gap-5 items-center'>
            <Link href="/mission">Mission</Link>
            <Link href="/advice">Advice</Link>
            <Link href="/help">Help</Link>
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

</div>
  )
}

export default Navbar