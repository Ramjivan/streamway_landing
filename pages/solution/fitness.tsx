import React from "react";
import { NextSeo } from "next-seo";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";
import BePresentEverywhere from "../BePresentEverywhere";
import FitnessMonetization_Img from "../images/fitnessMonetization.png";
import fitnessCaptions_Img from "../images/fitness Captions.png";
import TicketEvent_Img from "../images/ticket event.png";
import HighlightCommentsss_Img from "../images/highlight commentsss.png";

const Fitness = () => {
  return (
    <div>
      <NextSeo title="Solution Fitness | Streamway" description="" />
      <div className="bg-Solution-Fitness-Banner z-0 flex justify-center relative bg-right bg-[#f0f0f0] bg-contain bg-no-repeat h-[600px] md:h-[850px] lg:h-screen">
        {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Navbar />
        {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className="container mx-auto z-10 absolute top-0 ">
          <div className=" max-w-[700px] h-screen flex flex-col items-start justify-center text-left ">
            <h2 className="font-extrabold text-5xl text-[#2c2e3d] leading-[58px] capitalize py-6">
              Get fit from home with our complete live streaming fitness
              experience.
            </h2>
            <p className="text-[22px] font-medium text-[#232532e4]">
              Improve your health and fitness by watching online fitness classes
              from the comfort of your own home. Share your classes on popular
              social media platforms to reach a larger audience.
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
            Stream high-quality fitness videos with engaging and professional
            features.
          </h2>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-6 justify-between my-20">
            <div>
              <div>
                <h4 className="text-left   text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                  StreamWay Feature
                </h4>
                <h2 className="text-left  font-bold p-0  w-full text-3xl">
                  Monetization
                </h2>
                <p className="text-left  w-full font-medium opacity-90 py-4">
                  Make money from your live fitness classes and earn rewards.
                  You can receive virtual tips, paid requests, and other rewards
                  from your viewers who attend your classes.
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
                src={FitnessMonetization_Img}
                className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                alt="img"
              />
            </div>
          </div>

          {/*  */}

          <div className="flex justify-between flex-col md:flex-row-reverse gap-6 my-20 w-full">
            <div>
              <div>
                <h4 className="text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                  StreamWay Feature
                </h4>
                <h2 className="text-left font-bold p-0 w-full text-3xl">
                  Ticketed Event
                </h2>
                <p className="text-left w-full font-medium opacity-90 py-4 max-w-[850px]">
                  Make money by organizing exclusive training sessions and
                  selling tickets for them. You can also earn additional income
                  by promoting the event to interested parties.
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
                src={TicketEvent_Img}
                className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                alt="img"
              />
            </div>
          </div>

          {/*  */}

          <div className="flex justify-between flex-col md:flex-row gap-6 my-20 w-full">
            <div>
              <div>
                <h4 className="text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                  StreamWay Feature
                </h4>
                <h2 className="text-left font-bold p-0  w-full text-3xl">
                  Captions
                </h2>
                <p className="text-left  w-full font-medium opacity-90 py-4">
                  Keep your audience informed during your live stream by
                  including captions with important details such as class
                  information and upcoming session dates. This will help improve
                  engagement and keep your viewers engaged.
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
                src={fitnessCaptions_Img}
                className="w-full sm:w-[500px] md:w-[400px] lg:w-[600px]"
                alt="img"
              />
            </div>
          </div>

          {/*  */}

          <div className="flex justify-between flex-col md:flex-row-reverse gap-6 my-20">
            <div>
              <div>
                <h4 className="text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]">
                  StreamWay Feature
                </h4>
                <h2 className="text-left font-bold p-0  w-full text-3xl">
                  Highlight Comment
                </h2>
                <p className="text-left  w-full font-medium opacity-90 py-4">
                  Engage your audience during live streams by featuring their
                  interesting comments, questions, or suggestions.
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
                src={HighlightCommentsss_Img}
                className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                alt="img"
              />
            </div>
          </div>

          {/*  */}
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
  );
};

export default Fitness;
