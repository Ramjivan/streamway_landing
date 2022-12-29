import React, { useState } from 'react'
import Image from 'next/image';
import Logo from './images/icon.png'
import Link from 'next/link';
import Envelope from './images/envelope.png'
import Fb from './images/facebook.png'
import Insta from './images/instagram.png'
import Twitter from './images/twitter.png'
import Youtube from './images/youtube.png'
import Downarrow from './images/downarrow.png'
import Dropdown from './images/dropdown.png'
import Globe from './images/globe.png'

<<<<<<< HEAD
export const footer = () => {
    const [Company, SetCompany] = useState(false);
    const [Product, SetProduct] = useState(false);
    const [Community, SetCommunity] = useState(false);
    const [StreamYard, SetStreamYard] = useState(false);
    const Companybtn = () => {
        SetCompany(!Company)
    }
    const Productbtn = () => {
        SetProduct(!Product)
    }
    const Communitybtn = () => {
        SetCommunity(!Community)
    }
    const StreamYardbtn = () => {
        SetStreamYard(!StreamYard)
    }
    return (
        <div>
            <div className='lg:globe-container mx-auto sm:container md:container pt-[72px] px-5 pb-10'>
                <div className=''>
                    <Link href={'#'}>  <Image src={Logo} width={100} alt="logo" /></Link>
                    <p className='text-lg text-[#505868] font-medium mt-3'>The easiest way to create professional live streams</p>
                </div>
                <div className='mb-[55px] mt-[35px] flex flex-col md:flex-row  justify-center md:justify-between'>
                    <div>
                        <h4 onClick={() => Companybtn()} className='text-base text-[#000000ce] relative font-bold mb-[30px] md:mb-[14px]'>Company <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${Company ? `block` : `hidden`} `}>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>About</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Careers</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Contact Us</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Contact Sales</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 onClick={() => Productbtn()} className='text-base text-[#000000ce] relative font-bold mb-[30px] md:mb-[14px]'>Product <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${Product ? `block` : `hidden`} `}>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Why StreamYard</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Multistreaming</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Branded Streams</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Recordings</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Guest Interviews</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Audience Engagement</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Podcasting</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>StreamYard On-Air</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Status</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Security</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 onClick={() => Communitybtn()} className='text-base text-[#000000ce] relative font-bold mb-[30px]  md:mb-[14px]'>Community <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${Community ? `block` : `hidden`} `}>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Blog</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Affiliates</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Merchandise</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Help Center</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>What's New</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 onClick={() => StreamYardbtn()} className='text-base text-[#000000ce] relative font-bold mb-[30px] md:mb-[14px]'>StreamYard for <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${StreamYard ? `block` : `hidden`} `}>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Enterprise</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-base text-[#000000ce] font-bold  mb-[14px]'>Join us</h4>
                        <ul className='grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-none'>
                            <li><Link href={'#'} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative inline-block  h-[20px] w-[20px]  top-[-1px]' src={Envelope} /> Webinar</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative inline-block  h-[20px] w-[20px]  top-[-1px]' src={Fb} /> Facebook</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative inline-block  h-[20px] w-[20px]  top-[-1px]' src={Twitter} /> Twitter</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative  inline-block  h-[20px] w-[20px] top-[-1px]' src={Youtube} /> YouTube</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1 relative  inline-block h-[20px] w-[20px]  top-[-1px]' src={Insta} /> Instagram</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='flex md:justify-between'>
                    <div className='my-[30px]'>
                        <span className='hover:underline mr-8'><Link href={'#'} className='text-sm text-[#2D2D2F] font-medium'>A Hopin Company </Link></span>
                        <span className='hover:underline mr-8'><Link href={'#'} className='text-sm text-[#2D2D2F] font-medium'>Terms of Service </Link></span>
                        <span className='hover:underline mr-8'><Link href={'#'} className='text-sm text-[#2D2D2F] font-medium'>Privacy Policy </Link></span>
                        <span className='hover:underline mr-8'><Link href={'#'} className='text-sm text-[#2D2D2F] font-medium'>Help Center </Link></span>
                        <span className='hover:underline mr-8'><Link href={'#'} className='text-sm text-[#2D2D2F] font-medium'>Trademarks </Link></span>
                    </div>
                    <div className='my-[30px]'>
                        <button className='text-sm text-[#505868] px-2 py-[2px] hover:duration-500 rounded font-bold tracking-wide hover:bg-[#8080804d] hover:transition-[1s]'><Image alt='img' className='inline mb-[1px] mr-1' width={15} src={Globe} /> English <Image alt='img' className='inline-block' src={Downarrow} /> </button>
                    </div>
                </div>
                <p className='text-sm tracking-wide text-[#505868] text-center'>© 2022 StreamYard, Inc.</p>
            </div>
        </div>
    )
}
export default footer
=======
import React from "react";
import Image from "next/image";
import Flag from "./images/Flag.png";
import Link from "next/link";

const Footer = () => {
  return (

    <div className="tb:mx-auto container mb-10">

      {/* Links div and Image div  */}

      <div className="xl:flex place-content-center md:pt-20 "> {/* parent div*/}
        <div className="md:flex w-[100%] lg:w-[75%] 2xl:pl-40 text-center md:text-left xl:w-[60%] xl:mx-0 tb:mx-auto">{/* Link main div */}
          <div className="md:p-10 p-5">
            <p className="md:text-3xl text-2xl font-semibold">Services</p>
            <div className="md:pt-10 pt-4 flex flex-col md:text-xl lg:space-y-2">
              <Link href={'#'}>Web Design</Link>
              <Link href={'#'}>Development</Link>
              <Link href={'#'}>Wordpress</Link>
              <Link href={'#'}>Online Marketing</Link>
              <Link href={'#'}>Content</Link>
            </div>
          </div>
          <div className="md:p-10 p-5">
            <p className="md:text-3xl text-2xl font-semibold">About us</p>
            <div className="md:pt-10 pt-4 flex flex-col md:text-xl lg:space-y-2">
              <Link href={"AboutUs"}>About us</Link>
              <Link href={"#"}>Work Portfolio</Link>
              <Link href={"#"}>Team</Link>
              <Link href={"#"}>Plan & Pricing</Link>
              <Link href={"#"}>News</Link>
            </div>
          </div>
          <div className="md:p-10 p-5">
            <p className="md:text-3xl text-2xl font-semibold">Address</p>
            <div className="md:pt-10 pt-4 flex flex-col md:text-xl lg:space-y-2">
              <Link href={'#'}>companyinfo@mail.com</Link>
              <Link href={'#'}>+91-8386853447</Link>
            </div>
          </div>
        </div>
        <div className=""> {/* Image div */}
          <Image
            src={Flag}
            alt=""
            className="md:mx-auto p-10 "
          ></Image>
        </div>
      </div>

      {/* End of Footer */}

      <div className="flex gap-10 text-base text-gray-500 place-content-center">
        <Link href={'Privacypolicy'}>Privacy</Link>
        <Link href={'#'}>Security</Link>
        <Link href={'#'}>Terms</Link>
      </div>
    </div>
  );
};

export default Footer;
>>>>>>> 6f2a7401e96f4628e40583729380b37579ef8e42
