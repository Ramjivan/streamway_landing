import React from "react";
import c1 from "./images/client2.png";
import c2 from "./images/client1.png";
import Image from "next/image";

const Ourclient = () => {

  return (
    <div className="w-full roboto ">

      {/* TITLE HERE */}

      <div className="md:w-[75%] w-[90%] mx-auto "><p className="md:text-xl text-md">Over <span className="md:text-3xl text-xl text-[#ff6559] border-b-2 border-[#ff6559] font-bold"> 3,580+ Client </span> all over the world</p></div>

      {/* Company Logos */}

      {/* smm,sml,md,lg,xl,2xl are screen sizes from tailwing.config.js */}

      <div className="pause relative cursor-pointer  flex overflow-hidden 2xl:w-[85%] w-[90%] mx-auto">

        {/* First Layer of div */}

        <div className="py-12 flex animate-marquee whitespace-nowrap overflow-hidden">
          <Image src={c1} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c2} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c1} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c2} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c1} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          {/* <Image src={c2} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/> */}

        </div>

        {/* Second Hidden layer of div */}

        <div className="absolute flex top-0 py-12 animate-marquee2 whitespace-nowrap overflow-hidden">
          <Image src={c1} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c2} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c1} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c2} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          <Image src={c1} alt="" className="w-full 3xl:px-40 2xl:px-32 xl:px-28 lg:px-20 md:px-12 sml:px-8 smm:px-4 px-3"/>
          {/* <Image src={c2} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/>
          <Image src={c1} alt="" className="w-full"/>
          <Image src={c2} alt="" className="w-full"/> */}
        </div>
      </div>
    </div>
  );
};

export default Ourclient;
// 2xl:gap-x-60 xl:gap-x-48 lg:gap-x-[163px] md:gap-x-28 sml:gap-x-16 smm:gap-x-9 gap-x-6