"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Icon from './Images/icon.png'
const Footer = () => {
  return (
    <div className='bg-[#fbf3ec] w-full  h-[1000px] md:h-full '>
        
        <div className=' w-screen h-[400px] md:flex md:space-x-32 place-content-center'>
            <div>
            
            <div className='text-black ml-20 md:ml-36 md:mt-20 space-y-2'>
              
              <span className="  flex ">
              
              <Image src={Icon} alt="icon" width={50} height={50} />
              <Link className="f mt-1 text-2xl" href={"#"}>
                Streamway
              </Link>
              </span>
              <div><Link className='ml-3  hover:underline hover:text-[#655c97]' href={'#'}>streamway@gmail.com</Link></div>
              <div className='md:pb-44' ><Link className='ml-3 hover:underline hover:text-[#655c97]' href={'#'}>+761 412 3224</Link></div>
              
              
            
            </div>

            </div>
            <div className='ml-20 space-y-6 md:space-y-0 mt-10 md:mt-20 md:flex md:space-x-36 justify-center font-medium'>
                <div className='space-y-2'>
                    <label className='text-2xl f '>Links</label>
                    <div><Link className='mt-16 hover:underline' href={'#'}>Home</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Pricing</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Features</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Product</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Blog</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Help & Support</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Api documentation</Link></div>
                    
                </div>

                <div className='   space-y-2'>
                    <label className='text-2xl f '>Links</label>
                    <div><Link className='mt-16 hover:underline' href={'#'}>Legal</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Terms of use</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Terms & conditions</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Privacy policy</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Cookie policy</Link></div>
                    
                </div>

                <div className='  space-y-2'>
                    <label className='text-2xl f '>Links</label>
                    <div><Link className='mt-16 hover:underline' href={'#'}>Products</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Take the tour</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Live chat</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Self-service</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Social</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Mobile</Link></div>
                    <div><Link className='hover:underline' href={'#'}>Streamway Reviews</Link></div>
                </div>
            </div>
        </div>
        <p className='text-center md:mt-0 mt-[500px] ml-3 text-xs  text-gray-500'>Copyright @2022 streamway inc</p>
    </div>
  )
}

export default Footer