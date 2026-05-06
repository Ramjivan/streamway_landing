import Link from 'next/link'
import React from 'react'

export const Calltoaction = () => {

    return (
        <div className='container mx-auto py-20'>
            <div className='max-w-[1170px] mx-auto bg-Call-to-action bg-no-repeat bg-cover pt-[82px] px-[50px] pb-[89px] rounded-[40px]'>
                <div className=' flex justify-between lg:gap-0 md:gap-3 flex-col md:flex-row'>
                    <div>
                        <h4 className='text-xl leading-[24px] pb-[15px] font-medium text-left text-[#F96F60]'>Start your free trial.</h4>
                        <h2 className='max-w-[520px] text-[30px] leading-[35px] lg:text-[48px] text-[#101621] font-extrabold lg:leading-[55px] py-0 text-left'>New here? Start your free trial now.</h2>
                    </div>
                    <div>
                        <div className='w-full md:w-[455px] lg:mx-0 lg:text-left text-center mx-auto  py-[7.5px]  pr-[10px] mt-5 rounded-md flex md:flex-row flex-col  justify-between relative bg-transparent  '>
                          <Link href={'https://localhost:3000/signup'} >  <span className=' text-white rounded-md text-[17px] font-medium roboto py-[12.5px] px-7  border-2 border-solid border-[#fd6a5e] bg-[#fd6a5e]'>Get Started</span></Link>
                        </div>
                        <h4 className=' text-base text-[#73737b] font-medium pt-[10px]'>Already a member? <Link href={'https://localhost:3000/login'} > <span className='text-black '>Sign in.</span></Link> </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calltoaction