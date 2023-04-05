import React from "react";
import c1 from "./images/photo_studio.jpg";
import c2 from "./images/live-from-a.tv.jpg";
import c3 from "./images/skillonation.png";
import c4 from "./images/sanskar.png";
import c5 from "./images/bhakti-tv.jpg";
import Image from "next/image";

const Ourclient = () => {
  return (
    <div className="w-full roboto ">
      {/* TITLE HERE */}

      <div className="md:w-[75%] w-[90%] mx-auto ">
        <p className="md:text-xl text-md">
          Over{" "}
          <span className="md:text-3xl text-xl text-[#ff6559] border-b-2 border-[#ff6559] font-bold">
            {" "}
            3,580+ Client{" "}
          </span>{" "}
          all over the world
        </p>
      </div>

      {/* Company Logos */}

      {/* smm,sml,md,lg,xl,2xl are screen sizes from tailwing.config.js */}

      <div className="pause relative cursor-pointer flex overflow-hidden container mx-auto  ">
        {/* First Layer of div */}

        <div className="py-0 w-screen flex justify-between  items-center   animate-marquee overflow-hidden ">
          <div className="mx-5">
            <Image
              src={c1}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c2}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c3}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c4}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c5}
              alt=""
              className=""
              width={300}
            />
          </div>
        </div>

        {/* Second Hidden layer of div */}

        <div className="py-0 w-screen flex justify-between  items-center whitespace-nowrap  overflow-hidden animate-marquee2 ">
          <div className="mx-5">
            <Image
              src={c1}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c2}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c3}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c4}
              alt=""
              className=""
              width={300}
            />
          </div>
          <div className="mx-5">
            <Image
              src={c5}
              alt=""
              className=""
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourclient;
