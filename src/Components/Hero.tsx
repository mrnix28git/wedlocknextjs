'use client'
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";

function Hero() {

  const imagePaths = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
    "/img9.png",
    "/img10.png",
    "/img11.png",
    "/img12.png",
    "/img13.png",
    "/img14.png",
    "/img15.png",
    "/img16.png",
    "/img17.png",
    "/img18.png",
    "/img19.png",
    "/img20.png",
    "/img21.png",
    "/img22.png",
    "/img23.png",
    "/img24.png"
  ]




  return (
    <div className="relative   h-[48rem] overflow-hidden">
      <div className="absolute inset-0 bg-black grid grid-cols-6 grid-rows-4 gap-1">
        {imagePaths.map((path, index) => (
          <div key={index} className="relative   w-full h-full ">
            <Image src={path} layout="fill"   alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>      
      <div className="relative  bg-black bg-opacity-80 text-white h-full pl-16 flex pt-32 gap-80">
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
          {/* <div className=" backdrop-blur-md backdrop-brightness-125 rounded-2xl w-96 p-6 flex gap-5 text-white">
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
          </div> */}

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
