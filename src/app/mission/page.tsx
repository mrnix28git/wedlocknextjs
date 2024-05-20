import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <div className='pt-[83.5px]'>
        <div>
          <div>
            <h1 className='text-[#101828E5]'>At the heart of Wedlock.</h1>
            <p className='text-[#42526B]'>Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique. Pellentesque quis augue ac mauris posuere vehicula.</p>
          </div>
          <div>
            <Image src="/mission.jpg" width={500} height={500} alt='mission
            '/>
          </div>
        </div>
    </div>
  )
}

export default Mission