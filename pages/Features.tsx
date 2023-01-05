import React from 'react'
import Image from 'next/image'
import Featurefstimg from '../pages/images/fe@3x.png'
import Pathline from '../pages/images/Pathline.png'
import Untitleddesign from '../pages/images/Untitleddesign.png'
import Destinationsscreenshot from '../pages/images/destinationsscreenshot.png'
import Untitledblub from '../pages/images/Untitledblub.png'
import Rectangleba from '../pages/images/Rectangleba.jpg'
import Untitleddesignstar from '../pages/images/Untitleddesignstar.png'
import FeaIcon from '../pages/images/feaIcon.png'
import Learnmoreimagebranding from '../pages/images/learn_more_image_branding.png'
import Typewriter from 'typewriter-effect'

const Features = () => {
    return (
        <div>
            <div className='container mx-auto py-20'>

                {/* Use StreamWay to drive growth at Your Audience  ----HEAD LINE---- */}
                <div className='px-2 '>
                    <p className='text-center roboto text-[#adb1b5] text-[20px]'>FEATURES</p>
                    <h2 className='text-3xl md:text-5xl lg:text-[58px] font-medium relative before:content-[url(../pages/images/Group.png)] before:h-[21px] before:absolute before:bottom-[-5px] before:left-[13%] md:before:left-[38%]  md:leading-[64px] roboto max-w-[1000px] tracking-wide text-center mx-auto '>Use StreamWay to drive growth at your  &nbsp; 
                    <div className='tracking-wide text-3xl md:text-5xl lg:text-[58px] roboto leading-[64px] inline-block'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 80,
                                strings: [
                                    "Audience",
                                    "Crowdcast",
                                    "Community",
                                    "Business",
                                    "Reach",
                                    "Confidence",
                                    "Dream",
                                    "Live Shows",
                                    "Conferences",
                                    "Events",
                                    "Popularity"
                                ]
                            }} />
                        </div></h2>
                </div>

                {/* Reach more viewers, Go live on all platforms */}
                <div className='flex flex-col-reverse lg:flex-row lg:mt-[68px] lg:py-[78px] px-4   justify-around relative before:content-[url(../pages/images/Rectangle.png)] before:absolute before:animate-animation-bouncii-rev before:right-[32%] before:bottom-0'>
                    <div className='m-auto lg:m-0'>
                        <div className='sm:mt-6 lg:mt-0'><Image src={Untitledblub} alt="img" className='inline mb-2 mr-[9px]' /><p className='inline roboto text-[#6d6d6d] text-sm md:text-lg '>feature-hint You can go live to over 40 streaming sites with few clicks</p> </div>
                        <h2 className='text-[42px] max-w-[440px] leading-[53px] lg:ml-4'>Reach more viewers, Go live on all platforms</h2>
                        <p className='lg:ml-4 max-w-[520px] roboto text-[22px] leading-[34px] text-[#6d6d6d] tracking-wide mt-10 mb-[17px]'>Reach more viewers by live streaming to multiple platforms simultaneously such as Facebook Page, YouTube, Twitch, Vimeo, and many more.</p>
                        <div className="bg-[#f4f9fc] pt-9 pb-6 px-3 lg:pl-9 relative max-w-[460px] rounded lg:ml-4 mt-[55px] before:content-[url(../pages/images/right-quote.png)] before:h-[57px] before:absolute before:top-[-30px] before:left-5 before:rounded-[50%]  before:bg-white">
                            <p className='max-w-[400px] text-lg roboto leading-[28px]'>“Our team really feels great to use StreamWay specially their quality”</p>
                            <p className='text-base roboto leading-[25px] mt-5 text-[#706d6d]'><b className='text-[#191717] font-normal text-base roboto '>Gautam jangid,</b> Product Manager <br /> <span className='text-[#999999] text-base roboto '>ska.ind.in</span> </p>
                        </div>
                    </div>
                    <div className='m-auto mt-20 lg:m-0 relative before:content-[url(../pages/images/Rectangleicon.png)] before:animate-animation-bouncii-rev before:absolute before:top-[-10px] before:left-[-100px] before:h-[57px]'>
                        <div className='relative  before:w-[10px] md:before:h-[10px] md:before:bg-[#f77a56]  md:before:absolute md:before:animate-animation-bouncii md:before:right-[-60px] md:top-[8%]' ></div>
                        <Image src={Featurefstimg} alt="img" className=" w-full md:max-w-[522px]"/>
                        <div className='relative before:content-[url(../pages/images/Groupiconn.png)] before:animate-animation-rotatee before:absolute before:right-[50px] md:before:right-[-10px] top-[3%]'></div>
                    </div>
                </div>
                <Image src={Pathline} alt="img" className='mx-auto min-w-full mt-20' />

                {/* Easy account integration */}
                <div className='flex flex-col-reverse lg:flex-row-reverse lg:mt-[68px] lg:py-[78px] px-4  justify-around  relative before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-bouncii before:absolute before:right-[32%] before:bottom-0'>
                    <div className='m-auto lg:m-0'>
                        <div className='sm:mt-6 lg:mt-0 mx-auto'><Image src={Untitleddesign} alt="img" className='inline mr-[9px]' /><p className='inline roboto text-[#6d6d6d] md:text-lg '>FEATURE</p> </div>
                        <h4 className='text-[42px] max-w-[460px] leading-[53px] ml-4'>Easy account integration</h4>
                        <p className='ml-4 max-w-[500px] roboto text-[22px] leading-[34px] text-[#6d6d6d] tracking-wide mt-10 mb-[17px]'>No need to copy/paste RTMP ingests from popular streaming sites, each time you go live. Simply link your account
                        </p>
                        <p className='ml-4 max-w-[500px] roboto text-[22px] leading-[34px] text-[#6d6d6d] tracking-wide mt-10 mb-[17px]'>Add and link your accounts pr pages from Facebook, Twitch, Youtube to enjoy one-click streaming to all
                        </p>
                        <div className="bg-[#f4f9fc] pt-9 pb-6  px-3 lg:pl-9 relative max-w-[460px] rounded lg:ml-4 mt-[55px] before:content-[url(../pages/images/right-quote.png)] before:h-[57px] before:absolute before:top-[-30px] before:left-5 before:rounded-[50%]  before:bg-white">
                            <p className='max-w-[430px] text-lg roboto leading-[28px]'>Im from a non-IT background and I setup my first live very easily thank to StreamWay for best UI_UX </p>
                            <p className='text-base roboto leading-[25px] mt-5 text-[#706d6d]'><b className='text-[#191717] font-normal text-base roboto '>Dhruv god,</b> Product Manager <br /> <span className='text-[#999999] text-base roboto '>SRG TECHNOLOGY</span> </p>
                        </div>
                    </div>
                    <div className='mx-auto lg:m-0 bg-white  relative before:content-[url(../pages/images/Groupiconn.png)]  before:animate-animation-rotatee-rev    before:absolute before:top-[-20px] before:left-[-80px] '>
                        <div className='relative  before:w-[10px] md:before:h-[10px] md:before:bg-[#f77a56]  md:before:absolute md:before:animate-animation-bouncii md:before:right-[-60px] md:top-[8%]' ></div>
                        <Image src={Destinationsscreenshot} alt="img" className="mx-auto z-10 w-full md:w-[522px] relative mt-10 " />
                    </div>
                </div>
                <Image src={Pathline} alt="img" className='mx-auto min-w-full mt-20' />

                {/* Watch live streams directly from your Website */}
                <div className='flex flex-col-reverse lg:flex-row lg:mt-[68px] lg:py-[78px] px-4 justify-around  relative before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-bouncii before:absolute before:right-[32%] before:bottom-0'>
                    <div className='m-auto lg:m-0'>
                        <div className='sm:mt-6 lg:mt-0'><Image src={Untitleddesignstar} alt="img" className='inline mb-2 mr-[9px]' /><p className='inline roboto text-[#6d6d6d] text-lg '>Do you want to add your livestreams to your website ?</p> </div>
                        <h3 className='text-[42px] max-w-[500px] leading-[53px] ml-4'>Watch live streams directly from your Website</h3>
                        <p className='ml-4 max-w-[520px] roboto text-[22px] leading-[34px] text-[#6d6d6d] tracking-wide mt-10 mb-[17px]'>Livepush offers HTML5 web player code to be placed into your website as Iframe snippet.</p>
                        <div className="bg-[#f4f9fc] pt-9 pb-6 px-3 lg:pl-9 relative max-w-[460px] rounded lg:ml-4 mt-[55px] before:content-[url(../pages/images/right-quote.png)] before:h-[57px] before:absolute before:top-[-30px] before:left-5 before:rounded-[50%]  before:bg-white">
                            <div className='grid grid-cols-2 leading-7'>
                                <div className='inline'>
                                    <svg className='inline mb-1 mr-1' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                        <circle id="Oval" cx="7.5" cy="7.5" r="7.5" fill="#66e19e" />
                                    </svg>
                                    Responsive Web Player </div>
                                <div className='inline'>
                                    <svg className='inline mb-1 mr-1' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                        <circle id="Oval" cx="7.5" cy="7.5" r="7.5" fill="#66e19e" />
                                    </svg>
                                    Faster CDN Delivery </div>
                                <div className='inline'>
                                    <svg className='inline mb-1 mr-1' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                        <circle id="Oval" cx="7.5" cy="7.5" r="7.5" fill="#66e19e" />
                                    </svg>
                                    Player Security </div>
                            </div>
                            <button className='bg-[#7034ff] mt-6 rounded-3xl pt-[11px] pb-[10px]  px-[14px] text-white text-base roboto'>Start Embedding</button>
                        </div>
                    </div>
                    <div className='m-auto lg:m-0 relative before:content-[url(../pages/images/Rectangleicon.png)] before:animate-animation-bouncii before:absolute before:top-[-10px] before:left-[-100px] before:h-[57px]'>
                        <div className='relative  before:w-[10px] md:before:h-[10px] md:before:bg-[#f77a56]  md:before:absolute md:before:animate-animation-bouncii md:before:right-[-60px] md:top-[8%]' ></div>
                        <Image src={Rectangleba} alt="img" className="mt-6 w-full md:w-[522px]" />
                        <div className='relative before:content-[url(../pages/images/Groupiconn.png)] before:absolute before:animate-animation-rotatee before:right-[50px] md:before:right-[-10px] top-[3%]'></div>
                    </div>
                </div>
                <Image src={Pathline} alt="img" className='mx-auto min-w-full mt-20' />

                {/* Make live streams Interactive with Multi Chat Overlays */}
                <div className='flex flex-col-reverse lg:flex-row-reverse lg:mt-[68px] lg:py-[78px] px-4 justify-around  relative before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-bouncii before:absolute md:before:right-[32%] before:left-[0%]  before:bottom-0'>
                    <div className='m-auto lg:m-0'>
                        <div className='sm:mt-6 lg:mt-0'><Image src={FeaIcon} width={49} alt="img" className='inline mb-4 ml-4 mr-[9px]' /><p className='inline roboto text-[#6d6d6d] text-lg '>FEATURE</p> </div>
                        <h4 className='text-[42px] max-w-[440px] leading-[53px] ml-4'>Make live streams Interactive with Multi Chat Overlays</h4>
                        <p className='ml-4 max-w-[520px] roboto text-[22px] leading-[34px] text-[#6d6d6d] tracking-wide mt-10 mb-[17px]'>You can use our Multi Chat overlay url to create an HTML/Browser overlay using your favorite encoders like OBS, Xplit, SLOBS etc.
                        </p>
                        <div className="bg-[#f4f9fc] pt-9 pb-6 px-3 lg:pl-9 relative max-w-[460px] rounded lg:ml-4 mt-[55px] before:content-[url(../pages/images/right-quote.png)] before:h-[57px] before:absolute before:top-[-30px] before:left-5 before:rounded-[50%]  before:bg-white">
                            <p className='max-w-[400px] text-lg roboto leading-[28px]'>“Our team really feels great to use deski apps specially their quality”</p>
                            <p className='text-base roboto leading-[25px] mt-5 text-[#706d6d]'><b className='text-[#191717] font-normal text-base roboto '>Micle Duke,</b> Product Manager <br /> <span className='text-[#999999] text-base roboto '>Uber Inc.</span> </p>
                        </div>
                    </div>
                    <div className='m-auto lg:m-0 relative before:content-[url(../pages/images/Groupiconn.png)] before:absolute before:animate-animation-rotatee-rev before:top-[-10px] before:left-0 '>
                        <div className='relative  before:w-[10px] md:before:h-[10px] md:before:bg-[#f77a56]  md:before:absolute md:before:animate-animation-bouncii md:before:right-[-60px] md:top-[8%]' ></div>
                        <Image src={Learnmoreimagebranding} alt="img" className="mt-6 relative z-10 w-full md:w-[522px]" />
                        <div className='relative before:content-[url(../pages/images/Rectangleicon.png)] before:absolute before:left-[46px] before:animate-animation-bouncii  before:top-[0px] rotate-180'></div>
                    </div>
                </div>
                <Image src={Pathline} alt="img" className='mx-auto min-w-full mt-20' />
            </div>
        </div>
    )
}

export default Features
