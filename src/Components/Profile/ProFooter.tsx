import Link from "next/link";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";



const ProFooter = () => {
  return (
    <div className="bg-[#2A2A2A] mt-96 p-20 ">
      <div>
        <div className="text-white space-x-8 ">
          <Link href="/mission">Mission</Link>
          <Link href="/career">Career</Link>
          <Link href="/stories">Success Stories</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Safe matrimonial Tips</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies Policy</Link>
        </div>
        <div>
            <h1 className="">Get the App</h1>
            <FaApple/>
            <FaGooglePlay/>

        </div>
      </div>
    </div>
  );
};

export default ProFooter;
