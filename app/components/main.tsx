import React from 'react'
import Feature from './Feature'
const Main = () => {
  return (
    <div className='bg-[#fbf3ec] w-screen h-full'>
      <div className='w-[80%] h-[100%] pt-[220px] flex ml-48 '>
        <div className='w-[50%]'>
            <p className='text-7xl'>Event ticket organiser & seller.</p>
            <p className='text-3xl py-12'>For hassale free event, we are here to help you by creating online ticket.</p>
        </div>
        <div className='w-[50%]'>
            <img src="https://html.creativegigstf.com/deski/deski/images/assets/ils_14.svg" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>

      </div>

      <div className="pl-44 mt-10 flex space-x-[500px]">
        <div className="relative w-52 h-12 group bg-[#655c97] text-white">
          <div className="absolute bg-[#973c56]  z-10 left-0 w-0 h-12  group-hover:w-full   duration-700"></div>
          <button className="absolute  w-44 h-12 bg-transparent z-20 text-xl">
            Let's get started
          </button>
        </div>
        <p className="text-2xl">
        Over <span className="text-3xl text-red-800 underline">150,000+ client</span> all over the world.
        </p>
      </div>
      <Feature/>
      <img className="bg-white" src="https://html.creativegigstf.com/deski/deski/images/shape/99.svg" alt="" />
    </div>
  )
}

export default Main