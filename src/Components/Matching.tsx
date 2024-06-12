import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiMic } from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import { IoMdArrowForward } from "react-icons/io";
import '../app/font.css';
const Matching = () => {
  return (
    <div className="bg-[#DCD1E8] px-40   py-20 relative  ">
      <div className="bg-[url('/shadow.png')] -rotate-342 absolute w-[72rem] h-[100%]  top-0 right-0 "></div>
      <Image
    src="/curve.png"
    alt="arw"
    width={100}
    height={100}
    className="absolute w-[42rem] right-4 top-0 "
  />



      <div className="text-[#4E3A63] space-y-10 pb-10 px-14   ">
        <h1 className="text-lg md:text-2xl xl:text-6xl font-bold" style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif', lineHeight: '89.5px' }}>Exclusive matchmaking</h1>
        <p className=" md:text-lg " style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif', letterSpacing: '2px' ,lineHeight: '42px' }}>
          Cras at pellentesque eros. Nullam vitae sapienet felis eleifend
          luctus. Nam ac dui
        </p>
      </div>
      <div className="md:flex  gap-40  bg-[#8E69B4] rounded-3xl p-6 opacity-95	">
        <div>
          <Image src="/matching.svg" width={450} height={400} alt="couple" />
        </div>
        <div className="space-y-5">
          <p className="md:w-96 text-white">
            Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
            laoreet mi. Fusce pulvinar commodo
          </p>
          <div className="space-y-2 p-">
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <FaStar className="text-2xl text-yellow-400 " />
              <h1 className="md:text-xl font-semibold">Top Rated Consultants</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <FiMic className="text-2xl text-[#007EAF] " />
              <h1 className="md:text-xl font-semibold">100% Privacy</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="md:text-xl text-sm font-semibold">
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="md:text-xl text-sm font-semibold">
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="md:text-xl text-sm font-semibold">
                5 times higher success rates
              </h1>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center justify-between px-4 text-white bg-[#3C2C4C] rounded-full md:w-60 md:h-16 h-10 ">
              <span className="md:text-lg text-sm">Check your Eligibility </span>
              <IoMdArrowForward className="md:text-2xl text-lg " />
            </div>
            <div className="text-white text-sm md:text-xl cursor-pointer md:relative left-[150px] ">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matching;
