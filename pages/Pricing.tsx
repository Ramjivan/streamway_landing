import React, { useState, useEffect } from 'react'
import { NextSeo } from "next-seo";
import axios from 'axios'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'
import Tick from './images/tick.png'
import Testimonals from './Testimonals'
import Faq from './Faq'
import Pathline from '../pages/images/Pathline.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import G_pay from './images/gpay.png'
import Upi from './images/bheem-upi.png'
import Paytm from './images/paytm.png'
import PhonePay from './images/phonepe.png'
export const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  const [prepaid, setPrepaid] = useState(false);

  const [dataArray, setDataArray] = useState<any[]>([]);
  const [data, setData] = useState("month")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.streamway.in/v1/pricing');
      const data = await response.json();
      setDataArray(data);
      console.log("byybyy", dataArray)
    }
    fetchData();
  }, [dataArray]);
 
  const filteredArray =  dataArray.filter(plan => plan.validity_period.time_unit === data)
  console.log("Pricing array", filteredArray)

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
            <h2 className='max-w-[896px] mx-auto text-[40px] md:text-[70px] lg:text-[80px] font-semibold leading-[50px] md:leading-[80px] lg:leading-[90px] text-center text-[#2a2a2a] relative before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-rotatee before:absolute before:right-[32%] before:bottom-0 before:z-[-2] '>Choose package match your budget</h2>

            <p className='text-center text-[#2A2A2A] text-2xl leading-[42px] '>Pay easily with UPI&nbsp;
              <Image src={G_pay} alt="gpay" width={36} className='inline mr-3' />
              <Image src={Upi} alt="gpay" width={36} className='inline mr-3' />
              <Image src={Paytm} alt="gpay" width={36} className='inline mr-3' />
              <Image src={PhonePay} alt="gpay" width={36} className='inline mr-3' /> </p>
            <div className='max-w-[320px] flex mx-auto mt-9 rounded text-lg border-2 border-solid border-[#fd6a5e] before:content-[url(../pages/images/Rectangle.png)] before:animate-animation-rotatee before:absolute before:left-[32%] before:bottom-0 before:z-[-2]'>
              <button value="month" className={`w-full py-[10px] ${monthly ? `bg-[#fd6a5e] text-white` : `text-[#fd6a5e]`}   `} onClick={(e) => { setMonthly(true), setYearly(false), setPrepaid(false), setData("month")}}>Monthly</button>
              <button value={"year"} className={`w-full py-[10px]  ${yearly ? `bg-[#fd6a5e] text-white` : `text-[#fd6a5e]`} `} onClick={() => { setYearly(true), setMonthly(false), setPrepaid(false), setData("year") }}>Yearly</button>
              <button value={"days"} className={`w-full py-[10px]  ${prepaid ? `bg-[#fd6a5e] text-white` : `text-[#fd6a5e]`} `} onClick={() => { setPrepaid(true), setYearly(false), setMonthly(false), setData("days") }}>Prepaid</button>
            </div>
          </div>

          {/* //  <div key={index}>{plan.name}</div> */}
          <div className='mx-auto flex max-w-[1170px] flex-wrap mt-[133px] z-10 bg-white justify-center '>
            {/*  */}
            {filteredArray.map((plan, index) => (
              <div key={index} className=' border border-1 border-solid border-[#eaeaea] pt-7 '>
                <div className='flex flex-col items-center'>
                  <h6 className='text-center text-lg roboto mb-4 uppercase tracking-widest'>{plan.name}</h6>
                  <h4 className='text-[60px] font-semibold mx-7 text-center relative table '>{plan.amount} <span className='text-base ml-[-5px] tracking-widest font-medium'>INR</span></h4>
                  <span className='text-lg roboto relative top-[-18px] text-[#363636]'>{plan.validity_period.value + " " + plan.validity_period.time_unit}</span>
                  <button className='text-base roboto text-[#EF6458] border border-1 border-solid border-[#f8e2db] py-[10px] w-[144px] rounded-full hover:bg-[#fd6a5e] hover:text-white hover:duration-500 mt-2 mb-9'>Sign Up</button>
                </div>
                <div className='border border-t border-b-0 border-r-0 border-l-0 pt-[39px] px-[29px]'>
                  <ul>
                    {plan.features && plan.features.map((feature: any) => {
                      return <li key={index} className='text-[15px] text-[#4d4d4d] roboto mb-7'><Image src={Tick} alt="img" className='inline-block mr-[13px]' />{feature}</li>
                    })}
                  </ul>
                </div>
              </div>
            ))}

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
