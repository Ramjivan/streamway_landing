import React, { useState } from 'react'
import { NextSeo } from "next-seo";
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'
import Tick from './images/tick.png'
import Testimonals from './Testimonals'
import Faq from './Faq'
import Pathline from '../pages/images/Pathline.png'

export const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <>
      <div>
        <NextSeo
          title="Pricing | Streamway"
          description="Choose a Streamway pricing plan that matches your budget. Try the Team plan features for 14 days with no credit card required."
        />
        {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Navbar />
        {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}

        {/* Pricing >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className='container mx-auto relative before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-rotatee-rev before:absolute before:right-[32%] before:bottom-[-37px] before:opacity-25 before:z-[-2]'>
          <div className='px-3 relative before:content-[url(../pages/images/Rectangleicon.png)] before:animate-animation-bouncii before:absolute before:right-[84%] before:bottom-[-174px] before:z-[-1]'>
            <h1 className='max-w-[896px] mx-auto text-[40px] md:text-[70px] lg:text-[80px] font-semibold leading-[50px] md:leading-[80px] lg:leading-[90px] text-center text-[#2a2a2a] relative before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-rotatee before:absolute before:right-[32%] before:bottom-0 before:z-[-2] '>Choose package match your budget</h1>
            <p className='text-center text-[#2A2A2A] text-2xl leading-[42px] mt-[38px]'>Unbeatable prices · Try Team plan features for 14 days · No credit card required </p>
            <div className='max-w-[320px] flex mx-auto mt-9 rounded text-lg border-2 border-solid border-[#fd6a5e] before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-rotatee before:absolute before:left-[32%] before:bottom-0 before:z-[-2]'>
              <button className={`w-full py-[10px] ${monthly ? `bg-[#fd6a5e] text-white` : `text-[#fd6a5e]`}   `} onClick={() => setMonthly(true)}>Monthly</button>
              <button className={`w-full py-[10px]  ${!monthly ? `bg-[#fd6a5e] text-white` : `text-[#fd6a5e]`} `} onClick={() => setMonthly(false)}>Yearly</button>
            </div>
          </div>
          <div className='mx-auto flex max-w-[1170px] flex-wrap mt-[133px] z-10 bg-white justify-center '>
            <div className='w-[290px] border border-1 border-solid border-[#eaeaea] pt-7 '>
              <div className='flex flex-col items-center'>
                <h6 className='text-center text-lg roboto mb-4 uppercase tracking-widest'>Free</h6>
                <h4 className='text-[72px]   text-center relative table before:content-[url(../pages/images/Indian-Rupee-symbol.png)] before:absolute before:top-[-50px] before:left-[-15px]'>0</h4>
                <span className='text-lg roboto relative top-[-18px] text-[#363636]'>3 Free Agents</span>
                <button className='text-base roboto text-[#EF6458] border border-1 border-solid border-[#f8e2db] py-[10px] w-[144px] rounded-full hover:bg-[#fd6a5e] hover:text-white hover:duration-500 mt-2 mb-9'>Sign Up</button>
              </div>
              <div className='border border-t border-b-0 border-r-0 border-l-0 pt-[39px] px-[29px]'>
                <ul>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' /> Accept donations</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' /> StreamWay branding</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' /> Streaming limits</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' /> 2 channels</li>
                </ul>
              </div>
            </div>

            <div className='w-[290px] border border-1 border-solid border-[#eaeaea] pt-7 '>
              <div className='flex flex-col items-center'>
                <h6 className='text-center text-lg roboto mb-4 uppercase tracking-widest'>Standard</h6>
                <h4 className='text-[72px]   text-center relative table before:content-[url(../pages/images/Indian-Rupee-symbol.png)] before:absolute before:top-[-50px] before:left-[-15px] '>449</h4>
                <span className='text-lg roboto relative top-[-18px] text-[#363636]'>Per agent billed</span>
                <button className='text-base roboto text-[#EF6458] border border-1 border-solid border-[#f8e2db] py-[10px] w-[144px] rounded-full hover:bg-[#fd6a5e] hover:text-white hover:duration-500 mt-2 mb-9'>Sign Up</button>
              </div>
              <div className='border border-t border-b-0 border-r-0 border-l-0 pt-[39px] px-[29px]'>
                <ul>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Your Custom branding</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />No streaming limits</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />MultiStreaming</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Playlist Streaming</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Support</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Accept donations</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Public Knowledge Base</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />SLAs & Escalations</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Workflow, Assignment</li>
                </ul>
              </div>
            </div>
            <div className='w-[290px] border border-1 border-solid border-[#eaeaea] pt-7'>
              <div className='flex flex-col items-center'>
                <h6 className='text-center text-lg roboto mb-4 uppercase tracking-widest'>Start up</h6>
                <h4 className='text-[72px]   text-center relative table before:content-[url(../pages/images/Indian-Rupee-symbol.png)] before:absolute before:top-[-50px] before:left-[-15px] '>659</h4>
                <span className='text-lg roboto relative top-[-18px] text-[#363636]'>Per agent billed</span>
                <button className='text-base roboto text-[#EF6458] border border-1 border-solid border-[#f8e2db] py-[10px] w-[144px] rounded-full hover:bg-[#fd6a5e] hover:text-white hover:duration-500 mt-2 mb-9'>Sign Up</button>
              </div>
              <div className='border border-t border-b-0 border-r-0 border-l-0 pt-[39px] px-[29px]'>
                <ul>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Multi-Department Ticketing</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Team Management</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Telephony</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Automatic Time Tracking</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Blueprint - Basic Process</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Management</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Round Robin Ticket </li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Assignment</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Agent Collision</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Tasks, Events & Call </li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Activities</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Mobile SDKs</li>

                </ul>
              </div>
            </div>
            <div className='w-[290px] border border-1 border-solid border-[#eaeaea] pt-7 '>
              <div className='flex flex-col items-center'>
                <h6 className='text-center text-lg roboto mb-4 uppercase tracking-widest'>Business</h6>
                <h4 className='text-[72px]   text-center relative table before:content-[url(../pages/images/Indian-Rupee-symbol.png)] before:absolute before:top-[-50px] before:left-[-15px] '>959</h4>
                <span className='text-lg roboto relative top-[-18px] text-[#363636]'>Per agent billed</span>
                <button className='text-base roboto text-[#EF6458] border border-1 border-solid border-[#f8e2db] py-[10px] w-[144px] rounded-full hover:bg-[#fd6a5e] hover:text-white hover:duration-500 mt-2 mb-9'>Sign Up</button>
              </div>
              <div className='border border-t border-b-0 border-r-0 border-l-0 pt-[39px] px-[29px] relative md:before:content-[url(../pages/images/Groupiconn.png)] md:before:animate-animation-rotatee md:before:absolute md:before:right-[-25%] md:before:bottom-[-10%] md:before:z-[-1]'>
                <ul>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Live Chat</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Zia - Artificial Intelligence</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Help Center</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Customization</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Multi-brand Help Center</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Advanced Process </li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Management</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Custom Functions</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Multi-level IVR</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Global Reports &</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Dashboards</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Scheduled Reports</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Contract Management</li>
                  <li className='text-[17px] text-[#4d4d4d] roboto leading-[50px]'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />Validation Rules</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        {/* Pricing >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Image src={Pathline} alt="img" className='mx-auto -w-full mt-20' />

        {/* Testimonals >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Testimonals />
        {/* Testimonals >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Image src={Pathline} alt="img" className='mx-auto -w-full mt-20' />

        {/* FAQ >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Faq />
        {/* FAQ >.>>>>>>>>>>>>>>>>>>>>>>>> */}

        {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Footer />
        {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
      </div>
    </>
  )
}

export default Pricing