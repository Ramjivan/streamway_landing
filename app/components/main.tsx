import React from 'react'
import Feature from './Feature'
import CEO from './CEO'

const Main = () => {
  return (
    <div className='bg-[#fbf3ec] relative'>
    <div className=' container mx-auto'>
      <div className=''>
        <img className='absolute z-[1] top-[11%] right-[35%]' src="https://html.creativegigstf.com/deski/deski/images/shape/101.svg" alt="nothing"  />
        <img className='absolute z-[1] top-[1%] left-[15%] hidden md:block' src="https://html.creativegigstf.com/deski/deski/images/shape/100.svg" alt="nothing"  />
        
      </div>
      <div className='w-[80%] h-[100%] pt-[220px] md:flex md:flex-row-reverse ml-5 md:ml-48 '>
      <div className='w-72 md:w-[50%]'>
            <img src="https://html.creativegigstf.com/deski/deski/images/assets/ils_14.svg" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <p className="text-2xl text-center">
        Over <span className="text-3xl text-red-800 underline">150,000+ client</span> all over the world.
        </p>
        </div>
      <div className='mt-10 pb-24'>
        <div className='w-[50%]'>
            <p className='text-6xl md:text-7xl f'>Event ticket organiser & seller.</p>
            <p className='text-xl  md:text-2xl py-12 text-left w-64 md:w-[500px] text-gray-700'>For hassale free event, we are here to help you by creating online ticket.</p>
        </div>
        <div className="relative w-52 h-12 group bg-[#655c97] text-white  ">
          <div className="absolute bg-[#973c56]  z-10 left-0 w-0 h-12  group-hover:w-full   duration-700"></div>
          <button className="absolute  w-44 h-12 bg-transparent z-20 text-xl">
            Let's get started
          </button>
        </div>
        </div>
      </div>

      
      
      </div>
    </div>
  )
}

export default Main