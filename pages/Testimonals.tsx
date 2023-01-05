    import React from 'react'
    import Image from 'next/image'
    import Commaimg from './images/comma.svg'

    const testimonals = () => {
        return (
            <div className='container mx-auto  my-[80px] relative before:content-[url(../pages/images/fullopdot.svg)] before:animate-animation-bouncii before:absolute before:right-[10%] before:bottom-[0%] before:z-[]'>
                <div className='flex flex-col lg:flex-row justify-evenly relative before:content-[url(../pages/images/fullopdot.svg)] before:opacity-30 before:animate-animation-bouncii-rev before:absolute before:left-[8%] before:bottom-0 before:z-[]'>
                    <div className='mx-auto lg:m-0 relative before:content-[url(../pages/images/tringrl.svg)] before:animate-animation-bouncii before:absolute before:left-[-15%] before:top-0 before:z-[6]'>
                        <div className='w-[300px] h-[300px] md:w-[441px] md:h-[441px] rounded-full bg-[#d4e5f7] relative before:content-[url(../pages/images/fullopdot.svg)] before:animate-animation-bouncii-rev before:absolute before:left-[-15%] before:top-0 before:z-[]'>

                        </div>
                    </div>
                    <div className='mx-auto lg:m-0 px-5 relative before:content-[url(../pages/images/lowopecitysq.svg)] before:animate-animation-bouncii before:absolute before:left-[-15%] before:top-[45%] before:z-[]'>
                        <Image src={Commaimg} alt="img"  />
                        <h3 className=' text-[30px] lg:text-[42px] max-w-[570px] roboto leading-[40px] lg:leading-[56px] pt-[22px] pb-[30px] relative before:content-[url(../pages/images/fullopdot.svg)] before:animate-animation-bouncii-rev before:absolute before:right-[-4%] before:top-[-5%] before:z-[65666]'>Deski combines excellent live chat, ticketing and automation that allow us to provide quality.</h3>
                        <h6 className='text-xl text-[#101621] font-semibold leading-6 mt-5'>
                            Mike Lucas. 
                            <span className='block roboto text-[18px] text-[#9eadba] font-normal leading-[21.6px] pt-2'>CEO & Founder deksi</span>
                        </h6>
                    </div>
                </div>
            </div>
        )
    }

    export default testimonals
