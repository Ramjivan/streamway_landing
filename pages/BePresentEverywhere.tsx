import React from 'react'
import Image from 'next/image'
import Broadcast_Img from './images/Broadcast.png'

const BePresentEverywhere = () => {
  return (
    <div className='bg-[#7b56ff] overflow-hidden'>
        <div className='container flex flex-col md:flex-row p-12 md:p-0 justify-center md:justify-between items-center mx-auto h-full'>
            <div>
                <h2 className='text-white text-4xl pb-16 md:text-[50px] font-bold'>Be present everywhere!</h2>
                <p className='text-white max-w-[750px] text-[22px] font-medium'>Broadcast your real time or pre recorded live stream on major social media platforms. Either connect it directly through your dashboard or through custom RTMP.</p>
                <button className='uppercase bg-white hover:bg-[#ffffffda] duration-200 px-14 mt-10 rounded-lg h-[60px] text-[#7b56ff] font-bold'>explore now</button>
            </div>
            <div className='flex items-center justify-center py-10'>
                <Image src={Broadcast_Img} width={750} alt="broadcast" />
            </div>
        </div>
    </div>
  )
}

export default BePresentEverywhere
