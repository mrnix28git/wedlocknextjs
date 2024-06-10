import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='relative'>
       <img
        src="/curvewhite.svg"
        alt="arw"
        className="absolute  w-[35rem] left-10 top-0 -rotate-[125deg]"
      />
      <div className='bg-[#007EAF] flex flex-col md:flex-row gap-8 text-white md:p-20 p-8  '>
    <div className='space-y-12'>
      
        <h1 className='text-5xl font-bold'>Connect with matches the way you like
        </h1>
        <p className='text-2xl'>Cras at pellentesque eros. Nullam vitae <br />sapien et felis eleifend luctus. Nam ac dui</p>
        <Image src="/Feature.svg" alt="feature" width={400} height={100} />
    </div>

    <div>
        <Image src="/main.svg" alt="main" width={400} height={100} />
    </div>
</div>
</div>
  )
}

export default Feature