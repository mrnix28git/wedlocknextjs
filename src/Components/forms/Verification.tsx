import React from "react";
import Input from "../Input";
import Image from "next/image";

const Verification = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-top  bg-[#007EAF] ">
      <div className="flex items-center justify-center mb-14 w-[268px] h-[90px]">
        <Image src="/logowhite.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 mb-2">
        <div className="bg-white flex items-center justify-center rounded-md w-12 h-12">
          <Image src="/lock.png" alt="Star" className="w-[16px] h-[18px]" />
        </div>

        <div className="flex flex-col items-center justify-center text-white mt-4">
          <h1 className="text-4xl font-bold">Verification code</h1>
          <p className="mt-4 md:text-lg text-center">
            Enter verification code which is sent to your email <br /> address
            and you verify
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <form action=" ">
            <div className="flex  gap-4">
              <Input
                className="w-16 h-16 text-center rounded-xl text-3xl text-[#007EAF] placeholder-[#007EAF] outline-gray-400"
                label=""
                type="text"
                placeholder="0"
              />
              <Input
                className="w-16 h-16 text-center rounded-xl text-3xl text-[#F9F5FF] placeholder-[#007EAF] outline-gray-400"
                label=""
                type="text"
                placeholder="0"
              />
              <Input
                className="w-16 h-16 text-center rounded-xl text-3xl text-[#F9F5FF] placeholder-[#007EAF] outline-gray-400"
                label=""
                type="text"
                placeholder="0"
              />
              <Input
                className="w-16 h-16 text-center rounded-xl text-3xl text-[#F9F5FF] placeholder-[#007EAF] outline-gray-400"
                label=""
                type="text"
                placeholder="0"
              />
            </div>
            <div className="flex items-center justify-center mt-8 text-[#F9F5FF] gap-1 text-lg">
                <p>Didn't receive code? </p>
                <button> Click to resend.</button>

            </div>
              <button className="bg-white text-[#007EAF] w-full h-12 rounded-xl">
                Confirm
              </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
