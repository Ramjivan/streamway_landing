"use client";
import React, { useState } from "react";

const Test = () => {
  const [hideFirstPera, setHideFirstPera] = useState(true);
  const [hideSecondPera, setHideSecondPera] = useState(false);
  let i = 700;
  const Leftslide = () => {
    setHideFirstPera(false);
    setHideSecondPera(true);
    
    while(i>0){
      i--;
    }
  };

  const Rightslide = () => {
    setHideFirstPera(true);
    setHideSecondPera(false);
  };

  return (
    <div className="container mx-auto mt-28 relative">
      <div>
        <div className="text-center md:p-10 p-5 w-[90%] m-auto md:w-[50%] ">
          <span className="text-4xl md:text-6xl tracking-wide f font-normal leading-[40px]">
            <span className="tehead relative">Check what's our client</span> say
            about us.
          </span>
          <img
            src="https://html.creativegigstf.com/deski/deski/images/icon/65.svg"
            className="m-auto mt-24 h-20 w-20"
            alt=""
          />
          <div className="flex w-[700px] h-96 overflow-hidden relative">
            <div className={`${hideFirstPera ? `w-full left-0` : ` animate-fade left-[-700px] w-[700px]`}  absolute `}>
              <p className=" md:text-2xl text-xl f leading-[35px] md:leading-[48px] text-slate-600 mt-5">
                Havin a home based business is a wonderful asset to your life.
                The problem still stands it comes time advertise your business
                for a cheap cost. I know you have looked answer everywhere.
              </p>
              <h6 className="name font-semibold text-2xl f mt-10">
                Rashed kabir
              </h6>
              <span className="desig f text-xl font-medium text-slate-400">
                Designer
              </span>
            </div>

            <div className={`${hideSecondPera ? `animate-fadeRight right-[-700px] w-[700px]` : `w-full`} absolute`}>
              <p className="md:text-2xl text-xl f leading-[35px] md:leading-[48px] text-slate-600 mt-5">
                Having a home based business is a wonderful asset to your life.
                The problem still stands it comes time advertise your business
                for a cheap cost. I know you have looked answer everywhere.
              </p>
              <h6 className="name font-semibold text-2xl f mt-10">
                Rashed kabir
              </h6>
              <span className="desig f text-xl font-medium text-slate-400">
                Designer
              </span>
            </div>
          </div>

          <ul className="flex place-content-center mt-10 ">
            <li className="prevT slick-arrow" onClick={() => Leftslide()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </li>
            <li className="nextT slick-arrow" onClick={() => Rightslide()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="invisible md:visible">
          <img
            src="https://html.creativegigstf.com/deski/deski/images/media/img_59.png"
            className="absolute top-[5%] left-60 -z-10 w-20 h-20"
            alt=""
          />
          <img
            src="https://html.creativegigstf.com/deski/deski/images/media/img_60.png"
            className="absolute top-[45%] left-28 -z-10 w-12 h-12"
          />
          <img
            src="https://html.creativegigstf.com/deski/deski/images/media/img_61.png"
            className="absolute top-[88%] left-48 -z-10 w-20 h-20"
            alt=""
          />
          <img
            src="https://html.creativegigstf.com/deski/deski/images/media/img_62.png"
            className="absolute top-[5%] right-60 -z-10 w-12 h-12"
            alt=""
          />
          <img
            src="https://html.creativegigstf.com/deski/deski/images/media/img_63.png"
            className="absolute top-[45%] right-28 -z-10 w-24 h-24"
          />

          <img
            src="https://html.creativegigstf.com/deski/deski/images/media/img_59.png"
            className="absolute top-[88%] right-60 -z-10 w-12 h-12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
