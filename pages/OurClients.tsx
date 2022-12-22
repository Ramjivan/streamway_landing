import React from 'react'
import Image from 'next/image'
import youtubeLogo from "../pages/Images/ytl.png"
import facebookLogo from "../pages/Images/fbLogo.webp"
import instagramLogo from "../pages/Images/instaLogo.png"
import twitchLogo from "../pages/Images/twitchLogo.webp"
import twitterLogo from "../pages/Images/twitterLogo.png"
import istartLogo from "../pages/Images/istart.png"
import linkedinLogo from "../pages/Images/linkedInLogo.png"



const OurClients = () => {
    return ( 
        <div>
            <div className='container mx-auto bg-[#ffffff] grid  lg:grid-cols-2'>
                <div className=' px-5 py-12  sm:px-12 md:px-16 xl:pl-40 h-[500px] lg:h-[600px] flex justify-center items-center '>
                    <div>
                        <span className='text-[18px] sm:text-[23px]  text-gray-400 font-light f'>OUR PARTNERS</span>
                        <span className='text-4xl sm:text-6xl mt-3 sm:mt-7 leading-[50px] sm:leading-[70px] line font-semibold block f'>They Trust Us, & Vice Versa.</span>
                        <p className='text-xl sm:text-2xl mt-5 md:w-[full] lg:w-[450px] tracking-normal f'>
                            Share content across apps. Evernote connects with the productivity tools you already use, so you can work your way.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex md:block'>
                        <div className=' md:flex space-y-8  md:space-x-16  lg:space-x-8 xl:space-x-16'>
                            <div className=' animate-animation-bouncii-rev relative  w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] p-2 rounded-full flex justify-center items-center drop-shadow-xl bg-white'>
                                <Image src={youtubeLogo} alt="Youtube Logo" />

                            </div>
                            <div className='animate-animation-bouncii relative left-8 top-3 mid:-left-5 sm:left-0 sm:top-0  w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full flex justify-center items-center drop-shadow-xl bg-white'>
                                <div className='    '>
                                    <Image src={facebookLogo} alt="Facebook Logo" className='w-[100%] h-[100%]' />
                                </div>
                            </div>
                            <div className=' animate-animation-bouncii-rev relative left-2 top-10 sm:left-0 sm:top-0 w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] rounded-full flex justify-center items-center drop-shadow-xl bg-white'>
                                <Image src={twitterLogo} alt="twitter logo" />
                            </div>
                            <div className=' animate-animation-bouncii relative left-10 top-0 mid:left-8 sm:top-0 w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] p-3 rounded-full flex justify-center items-center drop-shadow-xl bg-white'>
                                <Image src={istartLogo} alt="istart logo" />
                            </div>

                        </div>
                        <div className=' ml-8 md:mt-16 lg:mt-16 md:flex space-y-8 md:space-x-20 lg:space-x-12 xl:space-x-20'>
                            <div className='animate-animation-bouncii-rev  relative w-[130px] sm:w-[150px] h-[130px] sm:h-[150px]  rounded-full flex justify-center items-center drop-shadow-xl bg-white'>
                                <Image src={linkedinLogo} alt="linkedin logo" />
                            </div>
                            <div className=' animate-animation-bouncii relative left-8 top-3 mid:left-5 sm:left-0 sm:top-0 w-[100px] h-[100px] p-1 sm:p-3 rounded-full flex justify-center items-center drop-shadow-xl bg-white'>
                                <Image src={twitchLogo} alt="twitch logo" />
                            </div>
                            <div className=' animate-animation-bouncii-rev relative w-[110px] sm:w-[120px] h-[110px] sm:h-[120px] p-5 rounded-full flex justify-center items-center drop-shadow-xl bg-white'>
                                <Image src={instagramLogo} alt="instagram logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients
