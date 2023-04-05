import React from "react";
import Image from "next/image";
import Maharaj_img from "./images/maharaj.png";
import Commaimg from "./images/comma.svg";
import Testimonal_Img from "./images/Ramjivan.jpg";

const testimonals = () => {
  return (
    <div className="container mx-auto  my-[80px] relative before:content-[url(../pages/images/fullopdot.svg)] before:animate-animation-bouncii before:absolute before:right-[10%] before:bottom-[0%] before:z-[]">
      <div className="flex flex-col lg:flex-row justify-evenly relative before:content-[url(../pages/images/fullopdot.svg)] before:opacity-30 before:animate-animation-bouncii-rev before:absolute before:left-[8%] before:bottom-0 before:z-[]">
        <div className="mx-auto lg:m-0 relative">
          <div className="w-[300px] h-[300px] relative overflow-hidden md:w-[441px] md:h-[441px] rounded-full z-30 before:content-[url(../pages/images/fullopdot.svg)] before:animate-animation-bouncii-rev before:z-10 before:absolute before:left-[-15%] before:top-0 ">
            <div className="w-[450px] h-[450px] bg-Testimonal-maharaj  bg-no-repeat relative z-10 "></div>
            <div className="z-[9] w-[450px] h-[450px] animate-animation-rotatee-rev   bg-Testimonal-bg-img bg-no-repeat bg-cover  rounded-full absolute top-0  text-black"></div>
          </div>
        </div>
        <div className="mx-auto lg:m-0 px-5 relative before:content-[url(../pages/images/lowopecitysq.svg)] before:animate-animation-bouncii before:absolute before:left-[-15%] before:top-[45%] before:z-[]">
          <Image src={Commaimg} alt="img" />
          <h3 className=" text-[30px] lg:text-[42px] max-w-[570px] roboto leading-[40px] lg:leading-[56px] pt-[22px] pb-[30px] relative before:content-[url(../pages/images/fullopdot.svg)] before:animate-animation-bouncii-rev before:absolute before:right-[-4%] before:top-[-5%] before:z-[65666]">
            As a content creator, I need to maximize my reach. Streamway allows
            me to do just that by multi-streaming to all my favorite platforms
            at once. StreamWay is a game-changer!
          </h3>
          <h6 className="text-xl text-[#101621] font-semibold leading-6 mt-5">
            Mike Lucas.
            <span className="block roboto text-[18px] text-[#9eadba] font-normal leading-[21.6px] pt-2">
              CEO & Founder deksi
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default testimonals;
