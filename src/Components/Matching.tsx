import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiMic } from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import { IoMdArrowForward } from "react-icons/io";
const Matching = () => {
  return (
    <div className="bg-[#DCD1E8] font-lato px-16 py-20 ">
      <div className="text-[#4E3A63] space-y-10">
        <h1 className="text-6xl font-bold">Exclusive matchmaking</h1>
        <p className="">
          Cras at pellentesque eros. Nullam vitae sapienet felis eleifend
          luctus. Nam ac dui
        </p>
      </div>
      <div className="md:flex gap-40  bg-[#8E69B4] rounded-3xl p-6">
        <div>
          <Image src="/matching.svg" width={450} height={400} alt="couple" />
        </div>
        <div className="space-y-5">
          <p className="md:w-96 text-white">
            Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
            laoreet mi. Fusce pulvinar commodo
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <FaStar className="text-2xl text-yellow-400 " />
              <h1 className="md:text-xl font-semibold">Top Rated Consultants</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <FiMic className="text-2xl text-[#007EAF] " />
              <h1 className="md:text-xl font-semibold">100% Privacy</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="text-2xl text-[#008435] " />
              <h1 className="md:text-xl font-semibold">
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="text-2xl text-[#008435] " />
              <h1 className="md:text-xl font-semibold">
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] md:w-96 h-10 px-5">
              <PiChatsBold className="text-2xl text-[#008435] " />
              <h1 className="md:text-xl font-semibold">
                5 times higher success rates
              </h1>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center justify-between px-5 text-white bg-[#3C2C4C] rounded-full md:w-60 md:h-16 ">
              <span className="md:text-lg">Check your Eligibility </span>
              <IoMdArrowForward className="text-2xl " />
            </div>
            <div className="text-white md:text-xl cursor-pointer md:relative left-40">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matching;
