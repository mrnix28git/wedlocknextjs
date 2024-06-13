import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const GetApp = () => {
  return (
    <div className="bg-[#007EAF] text-white relative font-lato overflow-hidden">
      <div className="bg-[url('/appbg.svg')] h-full w-full md:flex justify-between md:p-16 p-10">
        <div className="md:space-y-32 space-y-12">
          <div className="md:space-y-10 space-y-5">
          <h1 className="text-6xl font-bold">Get the app!</h1>
          <p className="text-2xl md:w-[40rem]">
            Lorem ipsum dolor sit amet consectetur. Dui mauris dictum ultrices
            rutrum nec arcu vel. Viverra egestas vitae aenean placerat faucibus
            pharetra .
          </p>
          </div>
          <div className="md:space-x-5 space-y-6">
            <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-2 cursor-pointer px-5">
              <div className="flex items-center gap-2  ">
                <FaApple className="text-5xl" />
                <div className="text-start">
                  <p className="text-[#231F20B2] text-sm">Download from</p>
                  <p className="text-lg font-medium">Apple Store</p>
                </div>
              </div>
            </button>
            <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D]  text-black  text-lg p-2 px-5">
              <div className="flex items-center gap-2 ">
                <FaGooglePlay className="text-5xl text-[#231F20E5]" />
                <div className="text-start">
                <p className="text-[#231F20B2] text-sm">Download from</p>
                  <p className="text-lg font-medium">Google Store</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="">
          <Image src="/qr.svg" width={200} height={150} alt="logo" className="absolute md:right-72 md:top-48 bottom-44 right-3" />
          <Image src="/ph.svg" width={300} height={200} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
