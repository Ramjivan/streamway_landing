import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./images/icon.png";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  const router = useRouter()
  const currentRoute = router.pathname

  const [NevScroll, setNavScroll] = useState(false);
  // Mobile View
  const [MobileView, setMobileView] = useState(false);
  const [CloseIcon, setCloseIcon] = useState(false)
  //GO To Top
  const [VisibleIcon, setVisibleIcon] = useState(false);

  const changeNavScroll = () => {
    if (window.scrollY >= 200) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  const mobileSlideBar = () => {
    setMobileView(!MobileView);
    setCloseIcon(!CloseIcon)
  };





  useEffect(() => {

    window.addEventListener("scroll", changeNavScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <>
      <div
        className={`w-screen h-[76px] flex items-center  z-50  scroll-smooth ${NevScroll ? "backdrop-blur-[20px]  border-l-indigo-100 bg-opacity-70 shadow-lg py-4 fixed top-0 duration-700" : "bg-transparent py-6"
          } duration-500 `}
      >
        <div className="container mx-auto ">
          <nav className=" flex justify-between items-center md:px-5">
            <div>
              <Link href={'/'} className="flex items-center text-black ">
                <Image src={Icon} alt="icon" className="w-12 md:w-16" />
                <span className="f text-lg lg:text-2xl ml-2 font-medium" >
                  StreamWay by JIVANM
                </span>
              </Link>
            </div>

            <div className="hidden md:block ">
              <ul className="flex space-x-6 lg:space-x-10 pt-2 text-black ">
                <Link href={"/"} className={`${currentRoute === '/' ? `text-red-900` : ``} hover:text-red-700  font-medium md:text-[14px] lg:text-[15px] xl:text-[17px]  `}>
                  <div className="flex">
                    Home
                  </div>
                </Link>
                <Link href={"../contact"} className={`${currentRoute === '/contact' ? `text-red-900` : ``} hover:text-red-700  font-medium md:text-[14px] lg:text-[15px] xl:text-[17px]  `}>
                  Contact
                </Link>
                <Link href={"../pricing"} className={`${currentRoute === '/pricing' ? `text-red-900` : ``} hover:text-red-700  font-medium md:text-[14px] lg:text-[15px] xl:text-[17px] `}>
                  Pricing
                </Link>
                <Link href={""} className={`${currentRoute === '/solution/religious' || currentRoute === '/solution/fitness' || currentRoute === '/Solution/game' ? `text-red-900` : ``} hover:text-red-700  font-medium md:text-[14px] lg:text-[15px] xl:text-[17px] dropdown-menu `}>
                  <div className="relative">
                    <span className="">Solution <FontAwesomeIcon icon={faAngleDown} className='relative top-[1px] w-5  inline' /></span>
                    <ul className="hidden bg-white absolute z-30 pt-2 top-[100%] shadow-lg w-[280px] p-1 rounded-md">
                      <Link href={'../solution/religious'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Religious</li></Link>
                      <Link href={'../solution/fitness'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Fitness</li></Link>
                      <Link href={'../solution/game'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Game</li></Link>
                      {/* <Link href={'../solution/religious'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Life Couch</li></Link>
                      <Link href={'../solution/religious'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Marketers</li></Link>
                      <Link href={'../solution/religious'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Online Learning</li></Link>
                      <Link href={'../solution/religious'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Music</li></Link>
                      <Link href={'../solution/religious'}><li className="text-black py-2 px-3 tracking-wide rounded-sm hover:bg-[#00d597]">Product Launch</li></Link> */}
                    </ul>
                  </div>
                </Link>

                {/* blog >>>>>>>>>>>>>>>>>>>>>>>>>>>>>................................................... */}

                {/* <Link href={"../MainBlog"} className={`${currentRoute === '/MainBlog' ? `text-red-900` : ``} hover:text-red-700  font-medium md:text-[14px] lg:text-[15px] xl:text-[17px]  `}>
                  Blogs & howTo
                </Link> */}
                {/* <Link href={"#"} className={`${currentRoute === '' ? `text-red-900` : ``} hover:text-red-700  font-medium md:text-[14px] lg:text-[15px] xl:text-[17px]  `} >
                  Docs
                </Link> */}
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="flex ">
                <Link href={"https://app.streamway.in/"} className="font-bold mt-2 mr-4">
                  <span className="px-4 lg:px-8 py-2 rounded-[5px] text-white bg-[#EF6458] hover:bg-[#aa1e12] duration-200 ">
                    Login
                  </span>
                </Link>
                <Link href={"https://app.streamway.in/signup"} className="font-bold mt-2">
                  <span>
                    SignUp
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile  View */}
        <div className=" md:hidden" onClick={() => mobileSlideBar()}>
          <div className=" inline-block mr-3">
            <button
              className="bg-[#973c56]  flex flex-col h-12 w-12  rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
              />
              <div
                className={`${genericHamburgerLine} ${isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                  }`}
              />
            </button>
          </div>

          <div
            className={`w-screen absolute left-0 z-50 mt-3 pb-6 px-6 transition ease transform duration-800 bg-[#fbf3ec] pt-5 ${MobileView ? "block" : "hidden "
              } `}
          >
            <ul className="divide-y-[1px] divide-opacity-10 divide-gray-400 space-y-4 ">
              <Link href={"/"} className={`${currentRoute === '/' ? `text-red-900` : ``}`}>
                <li className="flex">
                  Home
                </li>
              </Link>
              <Link href={"contact"} className={`${currentRoute === '/contact' ? `text-red-900` : ``} ml-4 hover:text-text-red-700 mt-2`} >
                <li>
                  Contact
                </li>
              </Link>
              <Link href={"pricing"} className={`${currentRoute === '/Pricing' ? `text-red-900` : ``} ml-4 hover:text-text-red-700 mt-2`} >
                <li>
                  Pricing
                </li>
              </Link>
              {/* <Link href={"solution"} className={`${currentRoute === '/solution' ? `text-red-900` : ``} ml-4 hover:text-text-red-700 mt-2`}>
                <li>
                  Solution
                </li>
              </Link> */}
              {/* <Link href={"MainBlog"} className={`${currentRoute === '/MainBlog' ? `text-red-900` : ``} ml-4 hover:text-text-red-700 mt-2`} >
                <li>
                  Blogs
                </li>
              </Link> */}
              {/* <Link href={"#"} className={` ml-4 hover:text-text-red-700 mt-2`}>
                <li>
                  Docs
                </li>
              </Link> */}

              <li className="grid place-items-center">
                <div className="space-x-4 flex mt-5">
                  <Link href={"#"} className="font-bold mt-2">
                    <span>
                      Login & SignUp
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
