import React from "react";
import Image from "next/image";
import Flag from "./images/Flag.png";

const Footer = () => {
  return (
    <div className="container mb-10">
      <div className="tb:flex md:mx-auto md:w-[95%] md:mt-10">
        <div className="tb:flex md:space-x-14 md:pl-28">
          <div className="p-10">
            <p className="md:text-4xl">Services</p>
            <div className="pt-10 md:leading-loose">
              <p>Web Design</p>
              <p>Development</p>
              <p>Wordpress</p>
              <p>Online Marketing</p>
              <p>Content</p>
            </div>
          </div>
          <div className="p-10">
            <p className="md:text-4xl">About us</p>
            <div className="pt-10 md:leading-loose">
              <p>About us</p>
              <p>Work Portfolio</p>
              <p>Team</p>
              <p>Plan & Pricing</p>
              <p>News</p>
            </div>
          </div>
          <div className="p-10">
            <p className="md:text-4xl">Address</p>
            <div className="pt-10 md:leading-loose">
              <p>companyinfo@mail.com</p>
              <p>+91-8386853447</p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={Flag}
            alt=""
            className="w-full p-10"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>
      <div className="flex gap-10 w-[5%] ml-10 md:mx-auto">
        <p>Privacy</p>
        <p>Security</p>
        <p>Terms</p>
      </div>
    </div>
  );
};

export default Footer;
