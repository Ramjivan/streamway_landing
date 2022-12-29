import React from "react";
import c1 from "./images/client2.png";
import c2 from "./images/client1.png";
import Image from "next/image";

const Ourclient = () => {
  return (
    <div className="tb:container w-full roboto ">
      <div className="md:w-[75%] w-[90%] mx-auto "><p className="md:text-xl text-md">Over <span className="md:text-3xl text-xl text-[#ff6559] border-b-2 border-[#ff6559] font-bold"> 3,580+ Client </span> all over the world</p></div>
      <div className="relative flex overflow-hidden 2xl:w-[80%] w-[90%] mx-auto">
        <div className="py-12 flex 2xl:gap-x-60 xl:gap-x-48 lg:gap-x-[163px] md:gap-x-28 sml:gap-x-16 smm:gap-x-12 gap-x-9 animate-marquee whitespace-nowrap overflow-hidden">
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          {/* <Image src={c1} alt="" />
          <Image src={c2} alt="" /> */}
        </div>

        <div className="absolute flex 2xl:gap-x-60 xl:gap-x-48 lg:gap-x-[163px] md:gap-x-28 sml:gap-x-16 smm:gap-x-12 gap-x-9 top-0 py-12 animate-marquee2 whitespace-nowrap overflow-hidden">
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          {/* <Image src={c1} alt="" />
          <Image src={c2} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Ourclient;
