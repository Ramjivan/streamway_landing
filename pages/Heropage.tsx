import React from 'react'
import Image from 'next/image'
// import Commentone from './images/commentsone.png'
// import Commenttwo from './images/commenttwo.png'

export const Heropage = () => {
    return (
        <div className='container mx-auto px-3 md:px-0  lg:pl-[40px] py-16 lg:pt-4 lg:pb-32 '>
            <div className='flex lg:flex-row flex-col justify-between gap-2'>
                <div className='pt-16'>
                    <h1 className='max-w-[550px] overflow-re  md:overflow-hidden lg:mx-0 lg:text-left text-center mx-auto mb-[110px] relative roboto text-[40px] lg:text-[80px] leading-[48px] lg:leading-[88px] before:content-[url(../pages/images/Group.png)] xl:before:content-[url(../pages/images/Groupline.png)]  before:absolute before:h-[18px] before:bottom-[-12px] lg:before:bottom-[123px] '>Make Your Live Stream Viral</h1>
                    <p className='max-w-[590px] text-[#565657] roboto text-[30px] leading-[33px]  lg:mx-0 lg:text-left text-center mx-auto'>Get more views and reach  more people by going live on  multiple social channels at same time.</p>
                    <button type='submit' className='w-[184px] text-white rounded-md text-[17px] roboto py-[12.5px] mt-16 border-2 border-solid border-[#fd6a5e] bg-[#fd6a5e]'>Get Started</button>
                    <ul className='mt-5  lg:mx-0 lg:text-left text-center mx-auto'>
                        <div>
                            <svg className='inline-block mr-[7.1px]' xmlns="http://www.w3.org/2000/svg" width="9.983" height="9.074" viewBox="0 0 9.983 9.074">
                                <path id="Path_4" data-name="Path 4" d="M0,3.993,3.318,6.9,7.886,0" transform="translate(1.058 1.039)" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" />
                            </svg>
                            <li className='inline-block text-base roboto mr-[22px]'>Multi Streaming</li>
                            <svg className='inline-block mr-[7.1px]' xmlns="http://www.w3.org/2000/svg" width="9.983" height="9.074" viewBox="0 0 9.983 9.074">
                                <path id="Path_4" data-name="Path 4" d="M0,3.993,3.318,6.9,7.886,0" transform="translate(1.058 1.039)" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" />
                            </svg>
                            <li className='inline-block text-base roboto mr-[22px]'>Pre-recorded live</li>
                            <svg className='inline-block mr-[7.1px]' xmlns="http://www.w3.org/2000/svg" width="9.983" height="9.074" viewBox="0 0 9.983 9.074">
                                <path id="Path_4" data-name="Path 4" d="M0,3.993,3.318,6.9,7.886,0" transform="translate(1.058 1.039)" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" />
                            </svg>
                            <li className='inline-block text-base roboto mr-[22px]'>14 days free trial</li>
                        </div>
                    </ul>
                </div>
                <div className='relative  lg:left-5'>
                    {/* <video src={Herovideo} autoPlay muted loop style={{ width: "400px" }} /> */}
                    {/* <Image src={Commentone} alt="img" /> */}
                    <div className='table  relative md:before:content-[url(../pages/images/cmntthree.png)] md:before:absolute md:before:animate-animation-cmntbouncii md:before:top-[70%] md:before:z-20 md:before:right-[-3%]'>
                        <div className='table  relative md:before:content-[url(../pages/images/commentstwo.png)] md:before:absolute md:before:animate-animation-cmntbouncii-rev md:before:top-[50%] md:before:z-20 md:before:left-[-6.5%]'>
                            <video className='mt-7 lg:mt-0 mb-7 w-full relative z-10 ' autoPlay muted >
                                <source src="./videoo.mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heropage 