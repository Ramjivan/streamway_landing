/* -------- Footer Section --------- */

import React from "react";
import Image from "next/image";
import Flag from "./images/Flag.png";
import Link from "next/link";

const Footer = () => {
  return (

    <div className="tb:mx-auto container mb-10">

      {/* Links div and Image div  */}

      <div className="xl:flex place-content-center md:pt-20 "> {/* parent div*/}
        <div className="md:flex w-[100%] lg:w-[75%] 2xl:pl-40 text-center md:text-left xl:w-[60%] xl:mx-0 tb:mx-auto">{/* Link main div */}
          <div className="md:p-10 p-5">
            <p className="md:text-3xl text-2xl font-semibold">Services</p>
            <div className="md:pt-10 pt-4 flex flex-col md:text-xl lg:space-y-2">
              <Link href={'#'}>Web Design</Link>
              <Link href={'#'}>Development</Link>
              <Link href={'#'}>Wordpress</Link>
              <Link href={'#'}>Online Marketing</Link>
              <Link href={'#'}>Content</Link>
            </div>
          </div>
          <div className="md:p-10 p-5">
            <p className="md:text-3xl text-2xl font-semibold">About us</p>
            <div className="md:pt-10 pt-4 flex flex-col md:text-xl lg:space-y-2">
              <Link href={"AboutUs"}>About us</Link>
              <Link href={"#"}>Work Portfolio</Link>
              <Link href={"#"}>Team</Link>
              <Link href={"#"}>Plan & Pricing</Link>
              <Link href={"#"}>News</Link>
            </div>
          </div>
          <div className="md:p-10 p-5">
            <p className="md:text-3xl text-2xl font-semibold">Address</p>
            <div className="md:pt-10 pt-4 flex flex-col md:text-xl lg:space-y-2">
              <Link href={'#'}>companyinfo@mail.com</Link>
              <Link href={'#'}>+91-8386853447</Link>
            </div>
          </div>
        </div>
        <div className=""> {/* Image div */}
          <Image
            src={Flag}
            alt=""
            className="md:mx-auto p-10 "
          ></Image>
        </div>
      </div>

      {/* End of Footer */}

      <div className="flex gap-10 text-base text-gray-500 place-content-center">
        <Link href={'Privacypolicy'}>Privacy</Link>
        <Link href={'#'}>Security</Link>
        <Link href={'#'}>Terms</Link>
      </div>
    </div>
  );
};

export default Footer;
