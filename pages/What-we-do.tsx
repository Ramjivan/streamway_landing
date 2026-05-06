import React from 'react'
import Image from 'next/image'
import Wwd_fstimg from './images/2.png'
import Wwd_secimg from './images/fbgroup.png'
import Wwd_thrdimg from './images/wwdimg3.png'

export const Whatwedo = () => {
  return (
    <div className='bg-[#f8f9fa] '>
      <div className='container mx-auto pt-[100px] pb-[120px] px-10'>
        <div>
          <p className='roboto uppercase text-base text-center text-[#ADB1B5]'>What we do</p>
          <h3 className='mx-auto max-w-[700px] text-3xl font-bold md:font-semibold  lg:text-[58px] lg:leading-[64px] text-center  relative lg:before:content-[url(../pages/images/wline.png)] before:absolute before:left-[5%]  before:top-[61%] before:z-[1]'>Be everywhere at once</h3>
          <h4 className='mx-auto max-w-[900px] text-2xl lg:text-[40px]  lg:leading-[64px] text-center mt-4'>Multistream anywhere you need at the same time.</h4>
        </div>
        <div className='relative  md:before:content-[url(../pages/images/Rectangleicon.png)] md:before:absolute md:before:animate-animation-bouncii md:before:top-[-12%] md:before:left-[4%] md:before:h-[57px] md:before:z-[-1]'>
          <div className='flex justify-evenly mt-[90px]  max-w-[1300px] mx-auto flex-wrap px-5 relative z-10 md:before:content-[url(../pages/images/Groupiconn.png)] before:animate-animation-rotatee md:before:absolute md:before:bottom-[4%] md:before:right-[-1%] md:before:h-[57px] md:before:z-[-1]'>
            <div className='max-w-[370px] pt-[20px] pb-[45px] mt-5 mr-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center'>
              <Image src={Wwd_fstimg} width={200} alt="img" className='inline-block' />
              <p className='w-[290px] text-2xl text-center  relative bottom-2'>30+ Social platforms, from giants to local gems</p>
            </div>
            <div className='max-w-[370px] pt-[20px] pb-[45px] mt-5 mx-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center '>
              <div className='relative before:content-[url(../pages/images/Oval.png)] before:absolute before:left-[2%]  before:top-[2%] before:z-[1]'>  <Image src={Wwd_secimg} width={200} alt="img" className='inline-block relative z-10' /></div>
              <p className='w-[290px] text-2xl text-center relative bottom-2'>Multiple channels on a single platform</p>
            </div>
            <div className='max-w-[370px] pt-[20px] pb-[45px] mt-5 mx-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center'>
              <Image src={Wwd_thrdimg} width={200} alt="img" className='inline-block' />
              <p className='w-[290px] text-2xl text-center relative bottom-2'>Your server or anywhere else</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo