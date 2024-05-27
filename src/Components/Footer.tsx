import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { IoLogoTwitter } from "react-icons/io5";
const Footer = () => {
  return (
    <div className=" p-16 bg-[#2A2A2A] text-white space-y-8">
      <div className="flex gap-10">
        <div className="w-2/4 space-y-5">
          <div className="flex items-center">
            <Image src="/Logo.svg" alt="logo" width={300} height={100} />
            <h1 className="-rotate-90 relative top-4 right-2 text-xl">.au</h1>
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
            <li>Mission</li>
            <li>Career</li>
            <li>Success Stories</li>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>
        <div>
          <ul>
            <li>Safe matrimonial tips</li>
            <Link href="/faqs">FAQs</Link>
            <li>Trust & safety</li>
          </ul>
        </div>
        <div>
          <ul>
            <Link href="/legal">Legal</Link>
            <li>Security</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies policy</li>
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
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-semibold">
            {" "}
            <i>Love at first swipe</i>
          </h1>
          <p className="text-xs">
            This website is strictly for matrimonial purpose only and not a
            dating website
          </p>
        </div>
        <h1 className=""> © 2024 Wedlock Australia. All rights Reserved</h1>
        <div className="text-white rounded-full bg-[#007EAF] w-10 h-10 flex items-center justify-center text-2xl">
            ^
        </div>
      </div>
    </div>
  );
};

export default Footer;
