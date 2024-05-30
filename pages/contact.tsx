/* ------ CONTACT US PAGE ------ */
import React from "react";
import { NextSeo } from "next-seo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pathline from "../pages/images/Pathline.png";
import Call_to_action from "./Calltoaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Locationicon from "./images/location-contact.svg";
import Messageicon from "./images/message-contact.svg";
import Image from "next/image";
import Whatsappicon from "./images/whatsapp.png";
import Link from "next/link";
import InstagramIcon from "./images/instaLogo.png";
import WhatsappIcon from "./images/whatsapps.png";
// import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <NextSeo
        title="Contact Us | Streamway"
        description="Get in touch with Streamway by visiting our location, sending us an email, or contacting us through WhatsApp. We'd love to hear from you!"
      />
      <div>
        <div className="bg-[#ecf6ff] md:h-[850px] lg:h-[570px] py-1">
          {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Navbar />
          {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}

          {/* /* ------ CONTACT US ------ */}
          <div className="container mx-auto">
            <div>
              <h3 className="px-2 mx-auto text-center max-w-[800px] font-bold leading-[55px] lg:leading-[75px] tracking-tight text-[50px] lg:text-[70px] text-[#101621]">
                Feel free to contact us or just say hi!
              </h3>
            </div>
            <div className="relative  md:before:content-[url(../pages/images/Rectangleicon.png)] md:before:absolute md:before:animate-animation-bouncii md:before:top-[-12%] md:before:left-[4%] md:before:h-[57px] md:before:z-[-1]">
              <div className="flex justify-evenly my-[90px]  max-w-[1080px] mx-auto flex-wrap relative z-10 lg:before:content-[url(../pages/images/Groupiconn.png)] before:animate-animation-rotatee md:before:absolute md:before:bottom-[4%] md:before:right-[-1%] md:before:h-[57px] md:before:z-[-1]">
                <Link
                  href={"https://maps.app.goo.gl/XX5aG4NLcdp3y6Ag7"}
                  target="_blank"
                >
                  <div className=" max-w-[300px] h-[286px]  shadow-lg shadow-black-500/50  pt-[20px] pb-[45px]  md:mx-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center cursor-pointer mb-5 md:mb-0 mr-4 mt-4">
                    <div className="w-[100px] h-[100px] flex justify-center items-center">
                      {" "}
                      <Image
                        src={Locationicon}
                        width={70}
                        alt="img"
                        className="inline-block"
                      />
                    </div>
                    <span className="roboto text-xl text-[#8E8E8E] leading-[22px] pt-[17px] mb-[22px] border-b-4 rounded-[5%] border-solid border-b-[#ffb840]">
                      Location
                    </span>
                    <p className=" w-[265px] font-medium text-xl text-center  relative bottom-2">
                      iStart Nest, W-6, Residency Road, Jodhpur
                    </p>
                  </div>
                </Link>
                <Link href={"mailto:Contact@streamway.in"} target="_blank">
                  <div className="max-w-[300px] h-[286px] shadow-lg shadow-black-500/50  pt-[20px] pb-[15px] md:mx-5 px-5 md:px-[41.5px] rounded-lg bg-white flex flex-col items-center cursor-pointer mb-5 md:mb-0 mr-4 mt-4">
                    <div className="w-[100px] h-[100px] flex justify-center items-center">
                      {" "}
                      <Image
                        src={Messageicon}
                        width={70}
                        alt="img"
                        className="inline-block relative z-10"
                      />
                    </div>
                    <span className="roboto text-xl text-[#8E8E8E] leading-[22px] pt-[17px] mb-[22px] border-b-4 rounded-[5%] border-solid border-b-[#ffb840]">
                      Contact
                    </span>
                    <p className=" w-[265px] font-medium text-xl  text-center relative bottom-2">
                      Contact@streamway.in <br />{" "}
                      <Link href={"tel:+919256862779"}>+919256862779</Link>{" "}
                      <br />
                      <Link href={"tel:+7229997799"}>+91-7229997799</Link>
                    </p>
                  </div>
                </Link>
                <div className="max-w-[300px] h-[286px] shadow-lg shadow-black-500/50  pt-[20px] pb-[45px] mt-5 md:mx-5 px-[41.5px] rounded-lg bg-white flex flex-col place-items-center">
                  <div className="w-[100px] h-[100px] flex justify-center items-center">
                    {" "}
                    <Image
                      src={Whatsappicon}
                      width={180}
                      alt="img"
                      className="w-[90]"
                    />
                  </div>
                  <span className="roboto text-xl text-[#8E8E8E] leading-[22px] pt-[17px] mb-[22px] border-b-4 rounded-[5%] border-solid border-b-[#ffb840]">
                    Whatsapp
                  </span>
                  {/* <p className=' w-[265px] font-medium text-xl  text-center relative bottom-2'>Find on social media</p> */}
                  <Link
                    href={"https://chat.whatsapp.com/DaQX7Hf5S13E7ACAfDNsvX"}
                    target={"_blank"}
                  >
                    {" "}
                    <button className="w-[220px] text-xl font-semibold bg-[#00c33d] rounded-xl py-3 text-white hover:text-[#00c33d] hover:bg-white duration-700">
                      For help
                      <FontAwesomeIcon
                        className="text-[25px] relative left-[10px] top-[2px]  duration-200 "
                        icon={faWhatsapp}
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/*-------- Join Community -------- */}
        <div className="md:container mx-auto p-9 md:p-4 my-28 ">
          <div>
            <h3 className="text-xl sm:text-4xl md:text-5xl font-bold text-center tracking-normal">
              Join The StreamWay Community{" "}
            </h3>
            <p className="text-center text-xl md:text-3xl py-4 tracking-wide font-medium">
              Want to connect with other live streamer! Join than on Social{" "}
            </p>
          </div>
          <div className="">
            <ul className="flex justify-between mx-auto py-16 max-w-[700px] flex-wrap">
              <Link
                href={"https://chat.whatsapp.com/DaQX7Hf5S13E7ACAfDNsvX"}
                target={"_blank"}
              >
                <li className="flex flex-col items-center cursor-pointer mb-5 md:mb-0 mr-4 mt-4">
                  <span>
                    <Image src={WhatsappIcon} alt="instagram" width={36} />
                  </span>
                  <b className="tracking-wider mt-4 text-base">Whatsapp</b>
                </li>
              </Link>
              <Link
                href={"https://www.facebook.com/groups/5982593718453831/"}
                target={"_blank"}
              >
                <li className="flex flex-col items-center cursor-pointer mb-5 md:mb-0 mr-4 mt-4">
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="text-4xl text-blue-600 block"
                  />
                  <b className="tracking-wider mt-4 text-base">
                    Facebook Group
                  </b>
                </li>
              </Link>
              <Link
                href={"https://www.instagram.com/streamway.in/"}
                target={"_blank"}
              >
                <li className="flex flex-col items-center cursor-pointer mb-5 md:mb-0 mr-4 mt-4">
                  <span>
                    <Image src={InstagramIcon} alt="instagram" width={36} />
                  </span>
                  <b className="tracking-wider mt-4 text-base">Instagram</b>
                </li>
              </Link>
              <Link href={"https://twitter.com/streamwayin"} target={"_blank"}>
                <li className="flex flex-col items-center cursor-pointer mb-5 md:mb-0 mr-4 mt-4">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-4xl text-[#1da1f2] block"
                  />
                  <b className="tracking-wider mt-4 text-base">Twitter</b>
                </li>
              </Link>
              <Link
                href={"https://www.youtube.com/@streamwayin"}
                target={"_blank"}
              >
                <li className="flex flex-col items-center cursor-pointer mb-5 md:mb-0 mr-4 mt-4">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-4xl text-red-600 block"
                  />
                  <b className="tracking-wider mt-4 text-base">Youtube</b>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Have a great idea for a new feature? Tell us about it */}

        <div className="py-9 bg-[#ecf6ff]">
          <p className=" text-center">
            Have a great idea for a new feature?
            <Link
              href={"https://forms.gle/Fqrw3ucvZucsgPRr8"}
              target={"_blank"}
              className="underline font-extrabold tracking-wide"
            >
              {" "}
              Tell us about it
            </Link>
          </p>
        </div>
        {/*-------- MAP --------- */}
        <div className="container mx-auto relative bg-black ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0465924257887!2d73.0255196!3d26.2601512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d2889f347a7%3A0xd325219c5a9fa730!2sStreamway!5e0!3m2!1sen!2sin!4v1672663793184!5m2!1sen!2sin"
            width="100%"
            height="550"
            loading="lazy"
            className="mx-auto mt-20 opacity-80"
          ></iframe>
          <div className="hidden md:block absolute rounded top-[14%] left-[20%] shadow-lg shadow-black-500/50  bg-white max-w-[440px] pr-[30px] py-[35px] pl-[50px]">
            <h3 className="text-[#101621] text-[42px] leading-[50px] font-bold ">
              Come say Hi!
            </h3>
            <p className="text-lg roboto text-[#2A2A2A] pt-[5px] pb-[25px]">
              We&#39;re based in Pink City{" "}
              <Link
                href={"https://en.wikipedia.org/wiki/Jodhpur"}
                target={"_blank"}
                className="font-semibold "
              >
                {" "}
                Jodhpur{" "}
              </Link>{" "}
              @ Heart of the land of the Kings Rajasthan
            </p>
            <Link
              href={"https://maps.app.goo.gl/XX5aG4NLcdp3y6Ag7"}
              target="_blank"
            >
              {" "}
              <span className=" text-lg  roboto text-[#000000A1] bg-[#ffb840] cursor-pointer py-4 px-7 rounded-2xl hover:bg-yellow-900 duration-700 hover:text-white">
                WE ARE HERE
              </span>{" "}
            </Link>
          </div>
        </div>

        {/*--------- Call To Action ---------- */}
        <Call_to_action />

        {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Footer />
        {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
      </div>
    </>
  );
};
export default ContactUs;
