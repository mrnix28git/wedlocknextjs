'use client'
import React, { useState } from "react";
import Input from "../Input";
const Registration = () => {
  const [username, setUsername] = useState("");

  return ( 
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-top  bg-[#007EAF] ">
      <div className="flex items-center justify-center mb-14 w-[268px] h-[90px]">
        <img src="/logowhite.png" alt="Logo" />
      </div>

      <div className="flex flex-col items-center justify-center mt-8 mb-2">
        <div className="bg-white flex items-center justify-center rounded-md w-12 h-12">
          <img src="/star.png" alt="Star" className="w-6 h-6" />
        </div>

        <div className="flex flex-col items-center justify-center text-white mt-4">
          <h1 className="text-4xl font-bold">Create an account</h1>
          <p className="mt-4 md:text-xl">Start your free 30-day trial. Cancel at any time.</p>
        </div>
      </div>

      <div className="w-full max-w-md px-2  py-4">
        <form action="" className="space-y-6">
          <Input
            label="Email"
            value={username}
            placeholder="Enter your email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 text-[#007EAF] rounded bg-[#ffffff]"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
