import React from 'react'
import { IoMdArrowForward } from "react-icons/io";


function Hero() {
  return (
    <div className="bg-black text-white pl-16">
        <div>
                <div className='text-white font-lato '>
                    <h1 className=' text-6xl font-semibold'>Love at  <br />first swipe</h1>
                    <p className='text-2xl'>With over two decades of reliable matchmaking <br /> experience,
                        supported by a committed Trust and <br /> Safety.
                        </p>
                </div>
            <div className="bg-opacity-15 bg-white rounded-2xl w-96 p-4 flex  gap-5">
                <div className="space-y-2">
                    <h1>I am</h1>
                    <div className=" group hover:bg-white  rounded-full w-40 h-12 flex items-center px-2">
                        <div className="flex items-center  gap-3 ">
                            <div className="rounded-full border-2  border-white group-hover:border-black  w-8 h-8 flex items-center justify-center">
                                <div className="group-hover:bg-black rounded-full w-4 h-4">
                                </div>
                            </div>
                            <h1 className="text-white group-hover:text-black">a man</h1>
                        </div>
                        
                    </div>
                    <div className="bg-white rounded-full w-40 h-12 flex items-center px-2">
                        <div className="flex items-center  gap-3 ">
                            <div className="rounded-full border-2 border-black  w-8 h-8 flex items-center justify-center">
                                <div className="bg-black rounded-full w-4 h-4">

                                </div>
                            </div>
                            <h1 className="text-black">a women</h1>
                        </div>
                        
                    </div>
                    <div className="bg-white rounded-full w-40 h-12 flex items-center px-2">
                        <div className="flex items-center  gap-3 ">
                            <div className="rounded-full border-2 border-black  w-8 h-8 flex items-center justify-center">
                                <div className="bg-black rounded-full w-4 h-4">

                                </div>
                            </div>
                            <h1 className="text-black">nonbinary</h1>
                        </div>
                        
                    </div>
                </div>
                <div className="space-y-2">
                    <h1>I am looking for</h1>
                    <div className="bg-white rounded-full w-40 h-12 flex items-center px-2">
                        <div className="flex items-center  gap-3 ">
                            <div className="rounded-full border-2 border-black  w-8 h-8 flex items-center justify-center">
                                <div className="bg-black rounded-full w-4 h-4">

                                </div>
                            </div>
                            <h1 className="text-black">a man</h1>
                        </div>
                        
                    </div>
                    <div className="bg-white rounded-full w-40 h-12 flex items-center px-2">
                        <div className="flex items-center  gap-3 ">
                            <div className="rounded-full border-2 border-black  w-8 h-8 flex items-center justify-center">
                                <div className="bg-black rounded-full w-4 h-4">

                                </div>
                            </div>
                            <h1 className="text-black">a women</h1>
                        </div>
                        
                    </div>
                    <div className="bg-white rounded-full w-40 h-12 flex items-center px-2">
                        <div className="flex items-center  gap-3 ">
                            <div className="rounded-full border-2 border-black  w-8 h-8 flex items-center justify-center">
                                <div className="bg-black rounded-full w-4 h-4">

                                </div>
                            </div>
                            <h1 className="text-black">nonbinary</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex items-center ">
                <h1>Start free today </h1>
                <IoMdArrowForward/>
            </div>
        </div>
    </div>
  )
}

export default Hero