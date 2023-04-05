import React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Pathline from "../images/Pathline.png";
import BePresentEverywhere from "../BePresentEverywhere";
import WebEmbedding_Img from "../images/webEmbedding.png";
import PreRecordeStreaming_Img from "../images/Pre_Recorded_Streaming.png";
import GuestInvite_Img from "../images/Guest_Invite.png";
import MultiStriming_Img from "../images/multi streaming.png";

const Church = () => {
  return (
    <div className="">
      <NextSeo title="Solution Religious | Streamway" description="" />
      <div>
        <div className="bg-Solution-Religious-Banner bg-right-top md:bg-top bg-auto md:bg-cover bg-no-repeat h-[600px] md:h-[850px] lg:h-[600px]">
          {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Navbar />
          {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div className="container mx-auto h-full">
            <div className="h-full max-w-[700px] flex flex-col items-start justify-start text-left">
              <h2 className="font-extrabold text-5xl text-[#1b1d25] leading-[58px] capitalize py-6">
                Get fit from home with our complete live streaming fitness
                experience.
              </h2>
              <p className="text-[22px] font-medium text-[#232532e4]">
                Improve your health and fitness by watching online fitness
                classes from the comfort of your own home. Share your classes on
                popular social media platforms to reach a larger audience.
              </p>
              <button className="cursor-pointer capitalize bg-[#f65849] hover:bg-[#c93f33] duration-300 px-14 mt-10 rounded-lg h-[60px] text-[#fff] text-xl font-bold ">
                get started for free
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="my-5">
            <h2 className="text-lg md:text-2xl font-bold mx-auto text-center max-w-[870px]">
              Live Katha, Bhajan, Astrologie, etc & reach out to the masses
              using StreamWay advanced streaming features.
            </h2>
          </div>

          <div>
            <div className="flex justify-between flex-col md:flex-row gap-6 my-32 w-full">
              <div>
                <div>
                  <h4 className="text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                    StreamWay Feature
                  </h4>
                  <h2 className="text-left font-bold p-0 w-full text-3xl">
                    Multi Streaming
                  </h2>
                  <p className="text-left w-full font-medium opacity-90 py-4 max-w-[850px]">
                    Multi-streaming allows you to expand your reach and grow
                    your audience by broadcasting to multiple platforms
                    simultaneously. By utilizing this powerful tool, you can
                    increase your visibility, engage with a wider audience, and
                    maximize your content&lsquo;s potential. With multi-streaming, you
                    can take your content to the next level and connect with
                    your audience like never before.
                  </p>
                </div>
                <div className="my-5">
                  <button
                    type="button"
                    className=" text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase"
                  >
                    Start Streaming
                  </button>
                  <button
                    type="button"
                    className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase "
                  >
                    Learm MOre
                  </button>
                </div>
              </div>
              <div>
                <Image
                  style={{ maxWidth: "inherit" }}
                  src={MultiStriming_Img}
                  className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                  alt="img"
                />
              </div>
            </div>
            <Image
              src={Pathline}
              alt="img"
              className="mx-auto min-w-full mt-20"
            />

            {/* ................ */}
            <div className="flex justify-between flex-col md:flex-row-reverse gap-6 my-32 w-full">
              <div>
                <div>
                  <h4 className="text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                    StreamWay Feature
                  </h4>
                  <h2 className="text-left font-bold p-0  w-full text-3xl">
                    Web Embedding
                  </h2>
                  <p className="text-left  w-full font-medium opacity-90 py-4">
                    Embed live stream to your website & start streaming live
                    Kathas, Bhajans, Astrologies services. Also, simulcast the
                    live event on other streaming platforms like Facebook,
                    Instagram, YouTube etc
                  </p>
                </div>
                <div className="my-5">
                  <button
                    type="button"
                    className=" text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase"
                  >
                    Start Streaming
                  </button>
                  <button
                    type="button"
                    className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase "
                  >
                    Learm MOre
                  </button>
                </div>
              </div>
              <div>
                <Image
                  style={{ maxWidth: "inherit" }}
                  src={WebEmbedding_Img}
                  className="w-full sm:w-[500px] md:w-[400px] lg:w-[600px]"
                  alt="img"
                />
              </div>
            </div>
            <Image
              src={Pathline}
              alt="img"
              className="mx-auto min-w-full mt-20"
            />

            {/* ................. */}
            <div className="flex flex-col md:flex-row gap-6 justify-between my-32">
              <div>
                <div>
                  <h4 className="text-left   text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                    StreamWay Feature
                  </h4>
                  <h2 className="text-left  font-bold p-0  w-full text-3xl">
                    Monetization
                  </h2>
                  <p className="text-left  w-full font-medium opacity-90 py-4">
                    Enabling monetization in your live stream to get paid
                    requests. You can also add tipping button to collect
                    donations while hosting charity events.
                  </p>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase"
                  >
                    Start Streaming
                  </button>
                  <button
                    type="button"
                    className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase "
                  >
                    Learm MOre
                  </button>
                </div>
              </div>
              <div>
                <Image
                  style={{ maxWidth: "inherit" }}
                  src={PreRecordeStreaming_Img}
                  className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                  alt="img"
                />
              </div>
            </div>
            <Image
              src={Pathline}
              alt="img"
              className="mx-auto min-w-full mt-20"
            />

            {/* ................... */}
            <div className="flex justify-between flex-col md:flex-row-reverse gap-6 my-32">
              <div>
                <div>
                  <h4 className="text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                    StreamWay Feature
                  </h4>
                  <h2 className="text-left font-bold p-0  w-full text-3xl">
                    Pre-Recorded Streaming
                  </h2>
                  <p className="text-left  w-full font-medium opacity-90 py-4">
                    Upload your recorded videos & start streaming them. You can
                    also schedule your live stream for later & promote it along
                    with your devotes.
                  </p>
                </div>
                <div className="my-5">
                  <button
                    type="button"
                    className=" text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase"
                  >
                    Start Streaming
                  </button>
                  <button
                    type="button"
                    className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase "
                  >
                    Learm MOre
                  </button>
                </div>
              </div>
              <div>
                <Image
                  style={{ maxWidth: "inherit" }}
                  src={PreRecordeStreaming_Img}
                  className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                  alt="img"
                />
              </div>
            </div>
            <Image
              src={Pathline}
              alt="img"
              className="mx-auto min-w-full mt-20"
            />

            {/* ................... */}
            <div className="flex flex-col md:flex-row gap-6 justify-between my-32">
              <div>
                <div>
                  <h4 className="text-left   text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                    StreamWay Feature
                  </h4>
                  <h2 className="text-left  font-bold p-0  w-full text-3xl">
                    Guest Invite (One-on-One)
                  </h2>
                  <p className="text-left  w-full font-medium opacity-90 py-4">
                    Conduct one-on-one session with pastors or religious leaders
                    by inviting them to your live stream & allowing them to join
                    from any device.
                  </p>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase"
                  >
                    Start Streaming
                  </button>
                  <button
                    type="button"
                    className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase "
                  >
                    Learm MOre
                  </button>
                </div>
              </div>
              <div>
                <Image
                  style={{ maxWidth: "inherit" }}
                  src={GuestInvite_Img}
                  className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Be Present Everywhere ............. */}
        <div>
          <BePresentEverywhere />
        </div>

        {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Footer />
        {/* Footer >.>>>>>>>>>>>>>>>>>>>>>>>> */}
      </div>
    </div>
  );
};

export default Church;
