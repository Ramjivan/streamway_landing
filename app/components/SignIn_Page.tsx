import React from 'react'
import Link from 'next/link'
const SignIn_Page = () => {
  return (
    <div>
    <div className='container mt-40  md:mx-20 pt-40 '>
        <div className=''>
            <div className='relative  h-24'>
            <p className='text-5xl f absolute z-10 md:ml-44 text-center'>Everyone has a message to share</p>
            <p className='bg-[#f9e3b1] w-[350px] md:w-[752px] h-4 absolute z-0 mx-12 md:ml-44 mt-8'></p>
            </div>
            <p className='text-2xl mt-5 text-center md:ml-[270px] w-500px md:w-[550px] '>Our platform is made for you - & loved by content creator and influencers.</p>
        </div>

        <div className='border-2 border-black p-2 mt-10 md:ml-60 flex mx:5 w-[100] md:w-[600px]  justify-between '>
            <input className='ml-5 w-96 h-12 border-none outline-none ' type={'email'} placeholder='Email address' required></input>
            <button className='bg-[#655c97] hover:bg-[#973c56] text-white w-32 '>Start Trial</button>
        </div>
        <div className='flex space-x-2 mt-4 text-center mx-24 md:ml-[420px]'>
            <label className='text-gray-400 '>Already a member?</label>
            <Link className='hover:underline' href={'#'}>Sign in.</Link>
        </div>

    </div>
    <img className='mt-20' src="https://html.creativegigstf.com/deski/deski/images/shape/122.svg" alt="nothing"  />
    </div>
  )
}

export default SignIn_Page