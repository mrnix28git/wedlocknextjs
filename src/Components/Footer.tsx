"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // Determine if the footer should be hidden
  const hiddenRoutes = [
    "/verification",
    "/register",
    "/questions",
    "/login",
    "/forgotpassword",
    "/createpassword",
  ];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  // If the footer should be hidden, return null
  if (isHiddenRoute) {
    return null;
  }

  return (
    <div className="p-16 bg-[#2A2A2A] text-white space-y-8">
      <div className="md:flex gap-10 space-y-8">
        <div className="md:w-2/4 space-y-5">
          <div className="flex items-center">
            <Image src="/Logo.svg" alt="logo" width={300} height={100} />
            <h1 className="-rotate-90 relative top-4 right-2 text-lg text-center xl:text-xl">.au</h1>
          </div>
          <p>
            In the spirit of reconciliation, Wedlock acknowledges the
            Traditional Custodians of country throughout Australia and their
            connections to land, sea and community. We pay our respect to their
            elders past and present and extend that respect to all Aboriginal
            and Torres Strait Islander peoples today.
          </p>
        </div>
        <div>
          <ul>
            <li><Link href="/mission">Mission</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/success-stories">Success Stories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link href="/safe-matrimonial-tips">Safe Matrimonial Tips</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/trust-and-safety">Trust & Safety</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link href="/legal">Legal</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/cookies-policy">Cookies Policy</Link></li>
          </ul>
        </div>
        <div>
          <div className="space-y-2">
            <h1 className="">Social</h1>
            <div className="flex gap-5 text-2xl">
              <FaFacebookF />
              <IoLogoTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full bg-[#FFFFFF80] h-1 "></div>
      <div className="flex flex-col md:flex-row items-end justify-between">
        <div>
          <h1 className="font-semibold">
            <i>Love at first swipe</i>
          </h1>
          <p className="text-xs">
            This website is strictly for matrimonial purposes only and not a
            dating website.
          </p>
        </div>
        <h1 className="mt-2 text-balance">© 2024 Wedlock Australia. All rights reserved.</h1>
        <div className="text-white rounded-full bg-[#007EAF] w-10 h-10 flex items-center justify-center text-2xl">
          ^
        </div>
      </div>
    </div>
  );
};

export default Footer;
