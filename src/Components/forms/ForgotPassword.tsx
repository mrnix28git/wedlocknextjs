import React, { useState } from "react";
import Input from "../Input";
import Image from "next/image";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-top  bg-[#007EAF] ">
      <div className="flex items-center justify-center mb-14 w-[268px] h-[90px]">
        <Image src="/logowhite.png" alt="Logo" />
      </div>

      <div className="flex flex-col items-center justify-center mt-8 mb-2">
        <div className="bg-white flex items-center justify-center rounded-full w-12 h-12">
          <div className="bg-[#D1FADF] rounded-full w-9 h-9 flex items-center justify-center ">
            <Image src="/confirm.png" alt="Star" className="w-[24px] h-[24px] " />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-white mt-4">
          <h1 className="text-4xl font-bold">Forgot password</h1>
          <p className="mt-4  text-md ">
          This blog post has been published. Team members <br /> will be able to edit this post and republish changes.
          </p>
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
            Send email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
