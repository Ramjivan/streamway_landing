import React from 'react'

const CAB = () => {
  return (
    <div className='container w-full mx-auto'>
      <div className='text-center p-16'>
        <span className='text-6xl font-semibold'>Get Connected with Us</span>
      </div>
      <div className="container md:w-[620px] mx-auto ">
        <label htmlFor="" className='rounded-sm  border-slate-800 mr-2'>
        <input type="text" className='border-2 p-2 w-[80%] border-black rounded-md' placeholder=' Enter your mobile number here'  value=""  ></input>
        </label>
        <button type="submit" className='border-2 border-black rounded-lg'>Boost My Views</button>
      </div>
    </div>
  )
}

export default CAB
