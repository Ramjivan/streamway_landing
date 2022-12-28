/* ------ CONTACT US PAGE ------ */

import React from "react";
import Navbar from './Navbar'
import logo from "./images/icon.png";
import fb from "./images/fb.svg";
import ig from "./images/ig.svg";
import tt from "./images/tt.svg";
import yt from "./images/yt.svg";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
    {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
      <Navbar />
    {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}


      {/* /* ------ Page Title ------ */ }

      <div className="xl:container md:w-[90%] lg:w-[80%] mx-auto mb-96">
        <div className="text-center notosans">
          <h1 className="xl:text-6xl text-4xl font-bold pb-5 xl:pb-14 lg:tracking-wide">
            Contact customer support
          </h1>
          <h4 className="xl:text-xl text-slate-600 ">
            Have a question? Need help? Click this button to chat with our support
            team! <span className="hidden xl:inline"><br /></span>
            You can also email us at contact@streamway.com
          </h4>
          <button className="bg-blue-600 text-white px-6 py-4 text-center rounded-full font-bold mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            Help
          </button>
        </div>

        {/* COMPANY DETAILS */}

        <div className="container lg:w-[880px] p-5 mx-auto flex flex-col-reverse lg:flex lg:flex-row mt-[30px] notosans">
          <div className="flex flex-col gap-3 lg:gap-5 leading-5 lg:tracking-wide mr-[136px] pt-10 lg:pt-10">
            <Image src={logo} alt="Hello" className="xl:w-52 w-44 mb-5" />
            <h3 className="text-2xl font-bold ">Contact info</h3>
            <h5 className="text-slate-500 xl:text-md text-sm">
              StreamWay, Inc <br />
              2810 N. Church St.
              <br />
              Wilmington DE 19802
            </h5>
            <h5 className="text-slate-500 xl:text-md text-sm">
              https://streamway.in <br />
              contact@streamway.com
            </h5>
          </div>
          <div className="flex gap-5 flex-col xl:tracking-wide">
            <div>
              <h2 className="xl:text-2xl text-2xl font-semibold pb-4">Suggest a feature</h2>
              <h4 className="xl:text-xl text-lg text-slate-500">
                Have a great idea for a new feature?{" "}
                <Link href="/" legacyBehavior>
                  <a className="underline text-blue-700">Tell us about it.</a>
                </Link>
              </h4>
            </div>
            <div>
              <h2 className="xl:text-2xl text-2xl font-semibold pb-3">
                Join the StreamWay Community
              </h2>
              <h4 className="xl:text-xl text-lg text-slate-500">
                Want to connect with other live streamers? Join them on social
                media.
              </h4>
              <div className="flex lg:gap-7 gap-5 mt-10">
                <Link href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>

                </Link>
                <Link href='/'>
                  <Image src={fb} alt=""></Image>
                </Link>
                <Link href='/'>
                  <Image src={yt} alt=""></Image>
                </Link>
                <Link href='/'>
                  <Image src={ig} alt=""></Image>
                </Link>
                <Link href='/'>
                  <Image src={tt} alt=""></Image>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="xl:text-2xl text-2xl font-semibold pb-3">Write for StreamWay</h2>
              <h4 className="xl:text-xl text-lg text-slate-500">
                Are you passionate about live streaming and want to share your
                knowledge with the StreamWay community?{" "}
                <Link href="/" legacyBehavior>
                  <a className="underline text-blue-700">Get in touch.</a>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
