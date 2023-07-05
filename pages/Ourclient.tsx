import React from "react";
import c1 from "./images/photo_studio.jpg";
import c2 from "./images/live-from-a.tv.jpg";
import c3 from "./images/skillonation.png";
import c4 from "./images/sanskar.png";
import c5 from "./images/bhakti-tv.jpg";
import c6 from "./images/Client/BabaProduction.png"
import c7 from "./images/Client/BhaktiMedia.png"
import c8 from "./images/Client/Brahvani.png"
import c9 from "./images/Client/BrijvaniH.png"
import c10 from "./images/Client/DeeptiVideo.png"
import c11 from "./images/Client/Dharampath.png"
import c12 from "./images/Client/JairamJiMaharaj.png"
import c13 from "./images/Client/Kamadgiri.png"
import c14 from "./images/Client/KrishnaDS.png"
import c15 from "./images/Client/Premanjali.png"
import c16 from "./images/Client/RaghavBhakti.png"
import c17 from "./images/Client/SantDarshan.png"
import c18 from "./images/Client/Santvani.png"

import Image from "next/image";
import Marquee from "react-fast-marquee";

const Ourclient = () => {
  return (
    <div className="w-full roboto ">
      {/* TITLE HERE */}

      <div className="md:w-[75%] w-[90%] mx-auto ">
        <p className="md:text-xl text-md">
          Over{" "}
          <span className="md:text-3xl text-xl text-[#ff6559] border-b-2 border-[#ff6559] font-bold">
            {" "}
            3,50+ Client{" "}
          </span>{" "}
          all over the world
        </p>
      </div>

      {/* Company Logos */}

      {/* smm,sml,md,lg,xl,2xl are screen sizes from tailwing.config.js */}

      <div className="pause relative cursor-pointer flex overflow-hidden container mx-auto  ">
        {/* First Layer of div */}

        {/* <div className="py-0 w-screen flex justify-between h-24 items-center overflow-hidden "> */}
        <Marquee className="py-6 space-x-10">
          <div className="mx-5 h-full">
            <Image
              src={c1}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c2}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c3}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          {/* <div className="mx-5 h-full">
            <Image
              src={c4}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c5}
              alt=""
              className="h-full"
              width={100}
            />
          </div> */}
          <div className="mx-5 h-full">
            <Image
              src={c6}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c7}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c8}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c9}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c10}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c11}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c12}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c13}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c14}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c15}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c16}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c17}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c18}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          </Marquee>
        {/* </div> */}

        {/* Second Hidden layer of div */}

        {/* <div className="py-0 w-screen flex justify-between  items-center whitespace-nowrap  overflow-hidden animate-marquee2 ">
          <div className="mx-5 h-full">
            <Image
              src={c1}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c2}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c3}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c4}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c5}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
           <div className="mx- h-full5">
            <Image
              src={c6}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c7}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c8}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c9}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c10}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c11}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c12}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c13}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c14}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c15}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c16}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c17}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
          <div className="mx-5 h-full">
            <Image
              src={c18}
              alt=""
              className="h-full"
              width={100}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Ourclient;
