"use client";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css'

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
    "/img11.png",
    "/img12.png",
    "/img13.png",
    "/img21.png",
    "/img22.png",
    "/img23.png",
    "/img24.png",
    

    
  ];

  return (
    <div className="relative xl:h-[48rem] h-[100vh] overflow-hidden">
       <div className="absolute  inset-0 bg-black   " >
        <div className="grid grid-cols-7 grid-rows-6 gap-2 rotate-12 h-[72rem]  scale-[1.39]  ">
        {imagePaths.map((path, index) => (
        <div key={index} className="relative  " >
        <Image src={path} layout="fill" alt={`Image ${index + 1}`}  />
      </div>
      
        ))}
        </div>
      </div>
      <div className="relative bg-black  bg-opacity-60  text-white h-full md:pl-16 md:flex  md:pt-32 pt-16 px-10 gap-80">
        <div className="space-y-20 ">
        <div className="flex flex-col justify-center gap-10 ml-10 mt-20">
            <h1 className=" text-2xl md:text-4xl mt-10 md:mt-0 xl:text-8xl font-bold  " style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif', letterSpacing: '2px' }}>
              Love At <br /> First Swipe
            </h1>
            <p className=" text-2xl "  style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif', letterSpacing: '2px' }}>
              Australia{`'`}s most trusted Matrimony <br /> Website and Mobile
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

          <Link href={"/questions"}  className="flex items-center justify-between bg-[#009BDA] rounded-full w-56 h-12 px-5 text-lg ml-10" >
            <div className="flex items-center gap-6">
              <span>  Start free today </span>
              <span className="text-2xl"> <IoMdArrowForward /></span>
            </div>
            
          </Link>
        </div>
        <div>
          <div
            className="relative
           md:-bottom-96 left-[20rem] "
          >
            {/* <div className="border-8 border-gray-700 rounded-3xl ">
              <div className="bg-white  bg-opacity-30 backdrop-blur-3xl w-72 h-[30rem] rounded-2xl "></div>
            </div> */}
            <div className="flex flex-col items-right justify-right ">
              {/* <Image src="/ver.svg" width={100} height={100} alt="logo" /> */}
              <div className="flex flex-col items-center gap-4">
                <Image src="/veri.png" width={50} height={50} alt="logo" />
                <p className="text-center  text-[14px]" style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif' }}>#1 matrimony <br /> website and mobile <br /> app</p>
              </div>
              <p className="text-[10px]  mt-10"  style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}>All photos are used for illustrative purposes only. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
