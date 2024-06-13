import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import './getapp.css'
import '../app/font.css';

const GetApp = () => {
  return (
    <div className="bg-[#007EAF] text-white relative overflow-hidden ">
      <div className=" flex justify-between ">
      <div className="bg-container md:flex justify-between w-full px-16 py-12">
        
        <div className="md:space-y-32 space-y-12 ml-20">
          <div className="md:space-y-10 space-y-5 mt-4">
            <h1 className="text-[64px] "style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif' }}>Get the app!</h1>
            <p className="text-xl text-balance" style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif', lineHeight: '42px' , letterSpacing:'2px'}} >
              Lorem ipsum dolor sit amet consectetur. <br /> Dui mauris dictum ultrices rutrum nec arcu <br />vel. Viverra egestas vitae aenean placerat <br />faucibus pharetra.
            </p>
          </div>
          <div className="md:space-x-5 ">
            <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-2 cursor-pointer px-5">
              <div className="flex items-center gap-2">
                <FaApple className="text-5xl" />
                <div className="text-start">
                  <p className="text-[#231F20B2] text-sm" style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}>Download from</p>
                  <p className="text-lg font-medium">Apple Store</p>
                </div>
              </div>
            </button>
            <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-2 px-5">
              <div className="flex items-center gap-2">
                <FaGooglePlay className="text-5xl text-[#231F20E5]" />
                <div className="text-start">
                  <p className="text-[#231F20B2] text-sm" style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}>Download from</p>
                  <p className="text-lg font-medium">Google Store</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 relative mr-20">
          <Image src="/qr.svg" width={200} height={150} alt="QR code" className="absolute w-[280px] xl:right-64 xl:top-32 bottom-44" />
          <Image src="/ph.svg" width={300} height={200} alt="Phone" className="" />
        </div>
      </div>

      <div className="absolute top-0 right-0 bg-[url('/topcircle.png')] bg-cover bg-center h-[400px] w-80 ">
      {/* <Image src="/topcircle.png" alt=""  width={500} height={500}/> */}
      </div>
      </div>

    </div>
  );
};

export default GetApp;
