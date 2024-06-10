import Image from "next/image";
import React from "react";

const Search = () => {
  const Profile = [
    {
        
      img: "/p1.png",
      ct: "Bengali",
    },
    {
        img: "/p2.png",
        ct: "Gujarati",
      },
      {
        img: "/p3.png",
        ct: "Hindi",
      },
      {
        img: "/p4.png",
        ct: "Kannada",
      },
      {
        img: "/p4.png",
        ct: "Kannada",
      },
      {
        img: "/p4.png",
        ct: "Kannada",
      },
    
      {
        img: "/p5.png",
        ct: "Malayalam",
      },
      {
        img: "/p6.png",
        ct: "Marathi",
      },
      {
        img: "/p7.png",
        ct: "Odia",
      },
      {
        img: "/p8.png",
        ct: "Punjabi",
      },
      {
        img: "/p8.png",
        ct: "Telugu",
      },
      {
        img: "/p8.png",
        ct: "Telugu",
      },
    
  ];

  return (
    <div>
      {" "}
      <div
        className="md:space-y-16 md:px-20 md:py-20 space-y-5 p-8 
    bg-[#E6F2F7]"
      >
        <div className="md:space-y-10 space-y-5">
          <div className="flex items-center  justify-between pr-20">
            <h1 className=" md:text-6xl text-3xl font-bold text-[#007EAF]">
              Browse matrimonial profiles by
            </h1>
          </div>
          <p className=" md:text-2xl text-xl md:w-[50rem] text-[#101828E5]">
            Your search for a great relationship has never been easier with
            groundbreaking overhaul of the eharmony you know and trust.
          </p>
        </div>
        <div className="md:flex gap-20">
          <div className="rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2">
            Mother Tongue
          </div>
          <div className="rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2">
            Religion
          </div>
          <div className="rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2">
            Community
          </div>
          <div className="rounded-full hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-2">
            Nationality
          </div>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-3">
            {Profile.map((P, index) =>
        (
            <div key={index} className="flex flex-col items-center gap-2">
            <Image
              src={P.img}
              alt="p1"
              width={150}
              height={100}
              className="rounded-full"
            />
            <h1>{P.ct}</h1>
          </div>
        ))}
         
        </div>
        <div className="underline text-blue-600 relative left-[62rem]">
          More Matrimonial {">"}
        </div>
      </div>
    </div>
  );
};

export default Search;
