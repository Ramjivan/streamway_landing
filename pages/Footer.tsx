/* -------- Footer Section --------- */

import React from "react";
import Image from "next/image";
import Flag from "./images/Flag.png";

const Footer = () => {
  return (

    <div className="mx-auto container mb-10">

      {/* Links div and Image div  */}

      <div className="xl:flex place-content-center "> {/* parent div*/}
        <div className="md:flex tb:w-[75%] tb:mx-auto">{/* Link main div */}
          <div className="md:p-10 p-5">
            <p className="md:text-4xl text-2xl font-semibold">Services</p>
            <div className="md:pt-10 pt-2 md:leading-loose">
              <p>Web Design</p>
              <p>Development</p>
              <p>Wordpress</p>
              <p>Online Marketing</p>
              <p>Content</p>
            </div>
          </div>
          <div className="md:p-10 p-5">
            <p className="md:text-4xl text-2xl font-semibold">About us</p>
            <div className="md:pt-10 pt-2 md:leading-loose">
              <p>About us</p>
              <p>Work Portfolio</p>
              <p>Team</p>
              <p>Plan & Pricing</p>
              <p>News</p>
            </div>
          </div>
          <div className="md:p-10 p-5">
            <p className="md:text-4xl text-2xl font-semibold">Address</p>
            <div className="md:pt-10 pt-2 md:leading-loose">
              <p>companyinfo@mail.com</p>
              <p>+91-8386853447</p>
            </div>
          </div>
        </div>
        <div className=""> {/* Image div */}
          <Image
            src={Flag}
            alt=""
            className="xl:w-full md:w-[50%] md:mx-auto p-10"
          ></Image>
        </div>
      </div>

      {/* End of Footer */}

      <div className="flex gap-10 place-content-center">
        <p>Privacy</p>
        <p>Security</p>
        <p>Terms</p>
      </div>
    </div>
  );
};

export default Footer;
