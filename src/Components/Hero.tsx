import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-[url('/hero.jpg')] text-white h-[48rem]  pt-[83.5px] ">
      <div className="bg-black opacity-80 bg-cover text-white h-full  pl-16 flex  pt-10 gap-80">
        <div className="  font-lato space-y-8">
          <div className="text-white space-y-8 ">
            <h1 className=" text-6xl font-semibold">
              Love at <br />
              first swipe
            </h1>
            <p className="text-2xl">
              With over two decades of reliable matchmaking <br /> experience,
              supported by a committed Trust and <br /> Safety.
            </p>
          </div>
          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-2xl w-96 p-6 flex gap-5 text-white">
            <div className="space-y-2 ">
              <h1>I am</h1>
              <div className=" group hover:bg-white  rounded-full w-40 h-12 flex items-center px-2">
                <div className="flex items-center  gap-3 ">
                  <div className="rounded-full border-2  border-white group-hover:border-black  w-8 h-8 flex items-center justify-center">
                    <div className="group-hover:bg-black rounded-full w-4 h-4"></div>
                  </div>
                  <h1 className="text-white group-hover:text-black">a man</h1>
                </div>
              </div>
              <div className=" group hover:bg-white  rounded-full w-40 h-12 flex items-center px-2">
                <div className="flex items-center  gap-3 ">
                  <div className="rounded-full border-2  border-white group-hover:border-black  w-8 h-8 flex items-center justify-center">
                    <div className="group-hover:bg-black rounded-full w-4 h-4"></div>
                  </div>
                  <h1 className="text-white group-hover:text-black">a women</h1>
                </div>
              </div>
              <div className=" group hover:bg-white  rounded-full w-40 h-12 flex items-center px-2">
                <div className="flex items-center  gap-3 ">
                  <div className="rounded-full border-2  border-white group-hover:border-black  w-8 h-8 flex items-center justify-center">
                    <div className="group-hover:bg-black rounded-full w-4 h-4"></div>
                  </div>
                  <h1 className="text-white group-hover:text-black">
                    nonbinary
                  </h1>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h1>I am looking for</h1>
              <div className=" group hover:bg-white  rounded-full w-40 h-12 flex items-center px-2">
                <div className="flex items-center  gap-3 ">
                  <div className="rounded-full border-2  border-white group-hover:border-black  w-8 h-8 flex items-center justify-center">
                    <div className="group-hover:bg-black rounded-full w-4 h-4"></div>
                  </div>
                  <h1 className="text-white group-hover:text-black">a man</h1>
                </div>
              </div>
              <div className=" group hover:bg-white  rounded-full w-40 h-12 flex items-center px-2">
                <div className="flex items-center  gap-3 ">
                  <div className="rounded-full border-2  border-white group-hover:border-black  w-8 h-8 flex items-center justify-center">
                    <div className="group-hover:bg-black rounded-full w-4 h-4"></div>
                  </div>
                  <h1 className="text-white group-hover:text-black">a women</h1>
                </div>
              </div>
              <div className=" group hover:bg-white  rounded-full w-40 h-12 flex items-center px-2">
                <div className="flex items-center  gap-3 ">
                  <div className="rounded-full border-2  border-white group-hover:border-black  w-8 h-8 flex items-center justify-center">
                    <div className="group-hover:bg-black rounded-full w-4 h-4"></div>
                  </div>
                  <h1 className="text-white group-hover:text-black">
                    nonbinary
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#009BDA] rounded-full w-56 h-12 px-5 text-lg">
            <h1>Start free today </h1>
            <IoMdArrowForward />
          </div>
        </div>
        <div>
          <div className="flex items-end gap-12">
            <div className="border-8 border-gray-700 rounded-3xl ">
              <div className="bg-white  bg-opacity-30 backdrop-blur-3xl w-72 h-[30rem] rounded-2xl "></div>
            </div>
            <div>
              <Image src="/ver.svg" width={60} height={40} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
