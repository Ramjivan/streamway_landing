import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from './Images/icon.png'
const Landing = () => {
  return (
    <>
     <div className='bg-[#fbf3ec] py-6 w-screen sticky'>
         <nav className='space-x-96'>
            <div>
              
              <span className='flex ml-5 mb-3 absolute text-black'>
              <Image
              src={Icon}
              alt="icon"
              width={40}
              height={40}
              />
              <Link className='mt-1' href={"#"}>
                Streamway
              </Link>
              </span>


            </div>

            <div>
               <ul  className='flex space-x-10    text-black '>
                <Link className='hover:text-red-700 flex space-x-2' href={"#"}>Home
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

                </Link>
                <Link className='hover:text-red-700' href={"#"}>Porifolio</Link>
                <Link className='hover:text-red-700' href={"#"}>Pages</Link>
                <Link className='hover:text-red-700' href={"#"}>Blogs</Link>
                <Link className='hover:text-red-700' href={"#"}>Docs</Link>
               </ul>
            </div>
         </nav>
     </div>
    </>
  )
}

export default Landing