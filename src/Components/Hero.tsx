"use client";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

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
    "/img24.png",
    "/img25.png",
    
    

  ];

  return (
    <div className="relative   md:h-[48rem] overflow-hidden">
      <div className="absolute  inset-0   " >
        <div className="grid grid-cols-5 grid-rows-5 gap-1  rotate-12 bg-black h-full scale-[1.35]">
        {imagePaths.map((path, index) => (
          <div key={index} className="relative  h-full w-full ">
            <Image src={path} layout="fill" alt={`Image ${index + 1}`} />
          </div>
        ))}
        </div>
      </div>
      <div className="relative bg-black  bg-opacity-60  text-white h-full md:pl-16 md:flex  md:pt-32 pt-16 px-10 gap-80">
        <div className="  font-lato space-y-20">
          <div className=" space-y-8 ">
            <h1 className=" text-9xl font-bold w-[40rem]">
              Love at first swipe
            </h1>
            <p className="text-2xl md:tracking-wider w-[35rem]">
              Australia{`'`}s most trusted Matrimony Website and Mobile
              Application
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

          <Link href={"/questions"}  className="flex items-center justify-between bg-[#009BDA] rounded-full w-56 h-12 px-5 text-lg" >
            <div className="flex items-center gap-2">
              <span>  Start free today </span>
             <IoMdArrowForward /> 
            </div>
            
          </Link>
        </div>
        <div>
          <div
            className="relative
           md:-bottom-96 left-64 "
          >
            {/* <div className="border-8 border-gray-700 rounded-3xl ">
              <div className="bg-white  bg-opacity-30 backdrop-blur-3xl w-72 h-[30rem] rounded-2xl "></div>
            </div> */}
            <div className="">
              <Image src="/ver.svg" width={60} height={40} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
