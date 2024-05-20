import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const GetApp = () => {
  return (
    <div className="bg-[#007EAF] text-white relative font-lato">
      <div className="bg-[url('/appbg.svg')] h-full w-full flex justify-between p-16">
        <div className="space-y-32">
          <div className="space-y-10">
          <h1 className="text-6xl font-bold">Get the app!</h1>
          <p className="text-2xl w-[40rem]">
            Lorem ipsum dolor sit amet consectetur. Dui mauris dictum ultrices
            rutrum nec arcu vel. Viverra egestas vitae aenean placerat faucibus
            pharetra .
          </p>
          </div>
          <div className="md:space-x-5">
            <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-2 cursor-pointer">
              <div className="flex items-center gap-7  ">
                <FaApple className="text-5xl" />
                <div className="text-start">
                  <p>Download from</p>
                  <p className="text-lg font-medium">Apple Store</p>
                </div>
              </div>
            </button>
            <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D]  text-black  text-lg p-2">
              <div className="flex items-center gap-7 ">
                <FaGooglePlay className="text-5xl" />
                <div className="text-start">
                  <p>Download from</p>
                  <p className="text-lg font-medium">Google Store</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="">
          <Image src="/qr.svg" width={200} height={150} alt="logo" className="absolute right-72 top-48" />
          <Image src="/ph.svg" width={300} height={200} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
