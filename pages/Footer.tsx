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

export const Footer = () => {
    const [Company, setCompany] = useState(false);
    const [Product, setProduct] = useState(false);
    const [Community, setCommunity] = useState(false);
    const [StreamYard, setStreamYard] = useState(false);

    // Get year 
    const date = new Date()
    const year = date.getFullYear()

    const Companybtn = () => {
        setCompany(!Company)
    }
    const Productbtn = () => {
        setProduct(!Product)
    }
    const Communitybtn = () => {
        setCommunity(!Community)
    }
    const StreamYardbtn = () => {
        setStreamYard(!StreamYard)
    }
    return (
        <div>
            <div className=' mx-auto sm:container md:container pt-[50px] px-5 pb-5'>
                <div className=''>
                    <Link href={'/'}>  <Image src={Logo} width={100} alt="logo" /></Link>
                    <p className='text-lg text-[#505868] font-medium mt-3'>The easiest way to create professional live streams</p>
                </div>
                <div className='my-[32px]  flex flex-col md:flex-row  justify-center md:justify-between'>
                    <div>
                        <h4 onClick={() => Companybtn()} className='text-base text-[#000000ce] relative font-bold mt-[30px] mb-[5px] md:mb-[14px]'>Company <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${Company ? `block` : `hidden`} `}>
                            {/* <li><Link href={'../pricing'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Pricing</Link></li> */}
                            <li><Link href={'../solution/religious'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Solution</Link></li>
                            <li><Link href={'../contact'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Contact Us</Link></li>
                            {/* <li><Link href={'../MainBlog'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>blogs & how to</Link></li> */}
                        </ul>
                    </div>
                    <div>
                        <h4 onClick={() => Productbtn()} className='text-base text-[#000000ce] relative font-bold mt-[30px] mb-[5px] md:mb-[14px]'>Product <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${Product ? `block` : `hidden`} `}>
                            <li><Link href={'../'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Why StreamWay</Link></li>
                            <li><Link href={'../Features'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Multistreaming</Link></li>
                            <li><Link href={'../Features'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Branded Streams</Link></li>
                            <li><Link href={'../What-we-do'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Recordings</Link></li>
                            <li><Link href={'../Testimonals'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Guest Interviews</Link></li>
                            <li><Link href={'../'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Audience Engagement</Link></li>
                            <li><Link href={'../Faq'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>F & Qs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 onClick={() => Communitybtn()} className='text-base text-[#000000ce] relative font-bold mt-[30px] mb-[5px]  md:mb-[14px]'>Community <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${Community ? `block` : `hidden`} `}>
                            <li><Link href={'../Blog'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Blog</Link></li>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Affiliates</Link></li>
                            {/* <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Merchandise</Link></li> */}
                            <li><Link href={'../contact'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Help Center</Link></li>
                            <li><Link href={'../'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>What&#39;s New</Link></li>
                        </ul>
                    </div>
                    {/* <div>
                        <h4 onClick={() => StreamYardbtn()} className='text-base text-[#000000ce] relative font-bold mt-[30px] mb-[5px] md:mb-[14px]'>StreamWay for <Image alt='img' className='text-[12px] block lg:hidden absolute right-0 mb-1 ml-1 w-[20px] h-[20px]' src={Dropdown} /></h4>
                        <ul className={`lg:block ${StreamYard ? `block` : `hidden`} `}>
                            <li><Link href={'#'} className='hover:underline text-base leading-8 text-[#2d2d2fe2] font-medium'>Enterprise</Link></li>
                        </ul>
                    </div> */}
                    <div className='mt-10'>
                        <h4 className='text-base text-[#000000ce] font-bold  mb-[14px]'>Join us</h4>
                        <ul className='grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-none'>
                            <li><Link href={'https://www.facebook.com/groups/5982593718453831/'} target={'_blank'} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative inline-block  h-[20px] w-[20px]  top-[-1px]' src={Fb} /> Facebook</Link></li>
                            <li><Link href={'https://twitter.com/streamwayin'} target={'_blank'} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative inline-block  h-[20px] w-[20px]  top-[-1px]' src={Twitter} /> Twitter</Link></li>
                            <li><Link href={'https://www.youtube.com/@streamwayin'} target={"_blank"} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative  inline-block  h-[20px] w-[20px] top-[-1px]' src={Youtube} /> YouTube</Link></li>
                            <li><Link href={'https://www.instagram.com/streamway.in/'} target={"_blank"} className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1 relative  inline-block h-[20px] w-[20px]  top-[-1px]' src={Insta} /> Instagram</Link></li>
                            <li><Link href={'mailto:Contact@streamway.in'} target='_blank' className='hover:underline text-base leading-10 text-[#2d2d2fe2] font-medium'><Image alt='img' className='mr-1  relative inline-block  h-[20px] w-[20px]  top-[-1px]' src={Envelope} /> Email Us</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='flex md:justify-between'>
                    <div>
                        <span className='hover:underline mr-8'><Link href={'../res/rcpolicy'} className='text-sm text-[#2D2D2F] font-medium'>Return and cancellation policy</Link></span>
                        <span className='hover:underline mr-8'><Link href={'../res/terms'} className='text-sm text-[#2D2D2F] font-medium'>Terms of Service </Link></span>
                        <span className='hover:underline mr-8'><Link href={'../res/privacypolicy'} className='text-sm text-[#2D2D2F] font-medium'>Privacy Policy </Link></span>
                        <span className='hover:underline mr-8'><Link href={'#'} className='text-sm text-[#2D2D2F] font-medium'>Help Center </Link></span>
                        <span className='hover:underline mr-8'><Link href={'#'} className='text-sm text-[#2D2D2F] font-medium'>Trademarks </Link></span>
                    </div>
                    <div className='my-[12px]'>
                        <button className='text-sm text-[#505868] px-2 py-[2px] hover:duration-500 rounded font-bold tracking-wide hover:bg-[#8080804d] hover:transition-[1s]'><Image alt='img' className='inline mb-[1px] mr-1' width={15} src={Globe} /> English  </button>
                    </div>
                </div>
                <p className='text-sm tracking-wide text-[#505868] text-center'>© {year} StreamWay, Inc.</p>
            </div>
        </div>
    )
}
export default Footer
