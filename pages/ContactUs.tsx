/* ------ CONTACT US PAGE ------ */
import React from "react";
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Locationicon from './images/location-contact.svg'
import Messageicon from './images/message-contact.svg'
import Image from 'next/image';
import Whatsappicon from './images/whatsapp.png'
import Link from "next/link";
// import Link from "next/link";

const ContactUs = () => {
  return (

    <div className="bg-[#ecf6ff] h-[580px]">
      {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
      <Navbar />
      {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}


      {/* /* ------ Page Title ------ */}
      <div className="container mx-auto">
        <div>
          <p className='roboto uppercase text-lg tracking-widest text-center text-[#878c90] mb-2'>contact us</p>
          <h1 className=" mx-auto text-center max-w-[800px] font-bold leading-[75px] tracking-tight text-[70px] text-[#101621]">Feel free to contact us or just say hi!</h1>
        </div>
        <div className='relative  md:before:content-[url(../pages/images/Rectangleicon.png)] md:before:absolute md:before:animate-animation-bouncii md:before:top-[-12%] md:before:left-[4%] md:before:h-[57px] md:before:z-[-1]'>
          <div className='flex justify-evenly mt-[90px]  max-w-[1080px] mx-auto flex-wrap px-5 relative z-10 md:before:content-[url(../pages/images/Groupiconn.png)] before:animate-animation-rotatee md:before:absolute md:before:bottom-[4%] md:before:right-[-1%] md:before:h-[57px] md:before:z-[-1]'>
            <Link href={'https://maps.app.goo.gl/XX5aG4NLcdp3y6Ag7'} target='_blank' >
              <div className=' max-w-[300px]  shadow-lg shadow-black-500/50  pt-[20px] pb-[45px] mt-5 mx-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center'>
                <div className="w-[100px] h-[100px] flex justify-center items-center">   <Image src={Locationicon} width={70} alt="img" className='inline-block' /></div>
                <span className="roboto text-xl text-[#8E8E8E] leading-[22px] pt-[17px] mb-[22px] border-b-4 rounded-[5%] border-solid border-b-[#ffb840]">Location</span>
                <p className=' w-[265px] font-medium text-xl text-center  relative bottom-2'>iStart Nest, W-6, Residency Road, Jodhpur</p>
              </div>
            </Link>
            <Link href={'mailto:Contact@streamway.in'} target='_blank'>
            <div className='max-w-[300px] shadow-lg shadow-black-500/50  pt-[20px] pb-[45px] mt-5 mx-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center '>
              <div className="w-[100px] h-[100px] flex justify-center items-center"> <Image src={Messageicon} width={70} alt="img" className='inline-block relative z-10' /></div>
              <span className="roboto text-xl text-[#8E8E8E] leading-[22px] pt-[17px] mb-[22px] border-b-4 rounded-[5%] border-solid border-b-[#ffb840]">Contact</span>
              <p className=' w-[265px] font-medium text-xl  text-center relative bottom-2'>Contact@streamway.in <br /> <Link href={'tel:+918386853447'}>+91-8386853447</Link> <br /><Link href={'tel:+918764588825'}>+91-8764588825</Link></p>
            </div>
            </Link>
            <div className='max-w-[300px] shadow-lg shadow-black-500/50  pt-[20px] pb-[45px] mt-5 mx-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center'>
              <div className="w-[100px] h-[100px] flex justify-center items-center">  <Image src={Whatsappicon} width={180} alt="img" className="w-[90]" /></div>
              <span className="roboto text-xl text-[#8E8E8E] leading-[22px] pt-[17px] mb-[22px] border-b-4 rounded-[5%] border-solid border-b-[#ffb840]">Whatsapp</span>
              {/* <p className=' w-[265px] font-medium text-xl  text-center relative bottom-2'>Find on social media</p> */}
              <button className="w-[220px] text-xl font-semibold bg-[#00c33d] rounded-xl py-3 text-white hover:text-[#00c33d] hover:bg-white duration-700">For help<FontAwesomeIcon className='text-[25px] relative left-[10px] top-[2px] text-[#00c33d] duration-700 ' icon={faWhatsapp} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
