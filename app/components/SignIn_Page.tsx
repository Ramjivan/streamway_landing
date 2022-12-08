import React from 'react'
import Link from 'next/link'
const SignIn_Page = () => {
  return (
    <div>
      <div  className='container  mx-auto'>
    <div className=' mt-20  pt-40 w-full  '>
        <div className='w-200'>
            <div className='relative  h-24'>
            <p className='text-3xl text-center md:text-5xl f absolute z-10 md:ml-44 md:text-center'>Everyone has a message to share</p>
            <p className='md:bg-[#f9e3b1] w-[150px] md:w-[752px] h-4 absolute z-0 mx-12 md:ml-44 mt-8'></p>
            </div>
            <p className='md:text-2xl md:mt-5 text-center md:ml-[270px] w-[320px] md:w-[550px] mx-auto'>Our platform is made for you - & loved by content creator and influencers.</p>
        </div>

        <div className='border-2 border-black p-1 md:p-2 mt-4 md:mt-10 md:ml-60 flex mx:5 w-[320px] md:w-[600px] mx-auto justify-between '>
            <input className='ml-5 w-96 h-12 border-none outline-none ' type={'email'} placeholder='Email address' required></input>
            <button className='bg-[#655c97] hover:bg-[#973c56] text-white w-44 md:w-32 '>Start Trial</button>
        </div>
        <div className=' w-[340px] mt-3 md:mt-4 text-center md:mx-24 md:ml-[420px]'>
            <label className='text-gray-400 inline-block '>Already a member?</label>
            <Link className='hover:underline  ' href={'#'}>Sign in.</Link>
        </div>

    </div>
    <img className='mt-20' src="https://html.creativegigstf.com/deski/deski/images/shape/122.svg" alt="nothing"  />
    </div>
    </div>
  )
}

export default SignIn_Page