import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Images/icon.png";


const Navbar = () => {
  const [NevScroll, setNavScroll] = useState(false);
  // Mobile View
  const [MobileView, setMobileView] = useState(false);
  const [CloseIcon , setCloseIcon] = useState(false)
  //GO To Top
  const [VisibleIcon, setVisibleIcon] = useState(false);

  const changeNavScroll = () => {
    if (window.scrollY >= 60) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  const mobileSlideBar = () => {
    setMobileView(!MobileView);
    setCloseIcon(!CloseIcon)
  };

 

  const hideTopIcon = () => {
    const onPoint = 250;
    const breakPoint =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (breakPoint > onPoint) {
      setVisibleIcon(true);
    } else {
      setVisibleIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideTopIcon);
    window.addEventListener("scroll", changeNavScroll);
  }, []);
  
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <>
      <div
        className={`w-screen  z-50 overflow-hidden   scroll-smooth ${
          NevScroll ? "backdrop-blur-[20px] border-l-indigo-100 bg-opacity-70 shadow-lg py-6 fixed" : "bg-transparent py-12"
        } duration-500 `}
      >
        <div className="container mx-auto ">
          <nav className=" flex justify-between ">
            <div>
              <span className="flex ml-6 mb-9 absolute text-black space-x-3">
                <Image src={Icon} alt="icon" width={45} height={45} />
                <Link className="f mt-1 text-2xl" href={"#"}>
                  Streamway
                </Link>
              </span>
            </div>

            <div className="pl-56 hidden md:block ">
              <ul className="flex space-x-10 pt-2 text-black ">
                <Link className="hover:text-red-700  space-x-2" href={"/"}>
                  <div className="flex">
                    Home
                   
                  </div>
                </Link>
                <Link className="hover:text-red-700" href={"ContactUs"}>
                  Contact
                </Link>
                <Link className="hover:text-red-700" href={""}>
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
        </div>

        {/* Mobile  View */}
        <div className="  md:hidden" onClick={()=>mobileSlideBar()}>
          <div className="flex flex-row-reverse mr-3">
          <button
      className="bg-[#973c56]  flex flex-col h-12 w-12 bg- rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
          </div>
          
          <div
            className={`w-screen mt-3 pb-6 ttransition ease transform duration-800 bg-[#fbf3ec] pt-5 ${
              MobileView ? "block" : "hidden "
            } `}
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
        <div
          className={`${VisibleIcon?'block':'hidden'}`}
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 fixed  z-[1] bottom-6 right-5 animate-bounce "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
