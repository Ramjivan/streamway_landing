"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Images/icon.png";


const Landing = () => {
  const [nevScroll, setNavScroll] = useState(false);
  // Mobile View
  const [mobileView, setMobileView] = useState(false);

  const changeNavScroll = () => {
    if (window.scrollY >= 60) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  const mobileSlideBar = () => {
    
    setMobileView(!mobileView) 
  };

  window.addEventListener("scroll", changeNavScroll);

  return (
    <>
      <div
        className={`z-50 justify-between w-[320px] md:w-full fixed scroll-smooth ${
          nevScroll ? "bg-[#fbf3ec] shadow-lg py-6" : "bg-transparent py-12"
        } duration-500`}
      >
        <nav className="space-x-[150px] flex justify-between">
          <div>
            <span className="flex ml-6 mb-9 absolute text-black">
              <Image src={Icon} alt="icon" width={50} height={50} />
              <Link className="f mt-1 text-2xl" href={"#"}>
                Streamway
              </Link>
            </span>
          </div>

          <div className="pl-56 hidden md:block ">
            <ul className="flex space-x-10 pt-2 text-black ">
              <Link className="hover:text-red-700  space-x-2" href={"#"}>
                <div className="flex">
                  Home
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mt-1 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </Link>
              <Link className="hover:text-red-700" href={"#"}>
                Porifolio
              </Link>
              <Link className="hover:text-red-700" href={"#"}>
                Pages
              </Link>
              <Link className="hover:text-red-700" href={"#"}>
                Blogs
              </Link>
              <Link className="hover:text-red-700" href={"#"}>
                Docs
              </Link>
            </ul>
          </div>

          <div className="space-x-4 hidden md:flex md:mr-16">
            <Link href={"#"} className="font-bold mt-2">
              Login
            </Link>
            <div className="relative w-40 h-10 group bg-[#655c97] text-white">
              <div className="absolute bg-[#973c56]  z-10 left-0 w-0 h-10  group-hover:w-full   duration-700"></div>
              <button className="absolute  w-40 h-10 bg-transparent z-20 ">
                Create Your Event
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile  View */}
        <div className="  md:hidden">
          <div className="flex flex-row-reverse">
            <svg
              onClick={() => {
                mobileSlideBar();
              }}
              className="w-10 h-10 stroke-white bg-[#973c56] rounded-md "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div
            className={`w-screen h-[340px] bg-[#fbf3ec] pt-5 ${
              mobileView ? "block" : "hidden "
            }`}
          >
            <ul className="divide-y-[1px] divide-opacity-10 divide-gray-400 space-y-4 ">
              <li></li>
              <li>
                <p className="ml-4 hover:text-text-red-700 mt-2">Home</p>
              </li>
              <li>
                <p className="ml-4 hover:text-text-red-700 mt-2">Porifolio</p>
              </li>
              <li>
                <p className="ml-4 hover:text-text-red-700 mt-2">Pages</p>
              </li>
              <li>
                <p className="ml-4 hover:text-text-red-700 mt-2">Blog</p>
              </li>
              <li>
                <p className="ml-4 hover:text-text-red-700 mt-2">Dose</p>
              </li>
              
              <li className="grid place-items-center">
                <div className="space-x-4 flex mt-5">
                  <Link href={"#"} className="font-bold mt-2">
                    Login
                  </Link>
                  <div className="relative w-40 h-10 group bg-[#655c97] text-white">
                    <div className="absolute bg-[#973c56]  z-10 left-0 w-0 h-10  group-hover:w-full   duration-700"></div>
                    <button className="absolute  w-40 h-10 bg-transparent z-20 ">
                      Create Your Event
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;


