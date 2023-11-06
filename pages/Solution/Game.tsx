import React from "react";
import { NextSeo } from "next-seo";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";
import BePresentEverywhere from "../BePresentEverywhere";
import RTMP_Img from "../images/rtmp-game-solution.png";
import gameCaptions_Img from "../images/gameCaptions_Img.png";
import gameScreenSharing from "../images/gameScreenSharing.png";
import HighlightCommentsss_Img from "../images/highlightCommentsss.png";

const Game = () => {
  return (
    <div>
      <NextSeo title="Solution Fitness | Streamway" description="" />
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-Solution-Game-Banner  bg-right bg-contain bg-no-repeat pb-16">
          {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Navbar />
          {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div className="container mx-auto h-full">
            <div className=" h-full max-w-[700px] py-4 flex flex-col items-start justify-center text-left">
            <h2 className="font-extrabold text-5xl text-[#1b1d25] leading-[58px] capitalize py-6">
              Begin streaming your game effortlessly
              </h2>
              <p className="text-[22px] font-medium text-[#232532e4]">
              Easily show your video game play to a bigger audience by streaming it online on Twitch, Facebook, YouTube, and over 40 other streaming sites.
              </p>
              <button className="cursor-pointer capitalize bg-[#f65849] hover:bg-[#c93f33] duration-300 px-14 mt-10 rounded-lg h-[60px] text-[#fff] text-xl font-bold ">
                get started for free
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="my-5">
          <h2 className="text-lg md:text-2xl font-bold mx-auto text-center max-w-[870px]">
          Upgrade your game live streams with our powerful streaming features!
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
                RTMP Passthrough    
                </h2>
                <p className="text-left  w-full font-medium opacity-90 py-4">
                Streamway allows you to stream your game in high-quality 4K resolution by connecting it to any software encoder. The bitrate that Streamway passes through is the same as the one it receives, ensuring top-notch streaming quality.
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
              {/* <Image
                style={{ maxWidth: "inherit" }}
                src={FitnessMonetization_Img}
                className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]"
                alt="img"
              /> */}
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
                Screen Sharing
                </h2>
                <p className="text-left w-full font-medium opacity-90 py-4 max-w-[850px]">
                Streamline your gaming experience by sharing your screen with viewers during online gameplay.
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
                src={gameScreenSharing}
                className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]  h-[400px] object-cover rounded-3xl"
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
                  Keep the viewers acquainted by adding necessary information
                  about the class, upcoming session details, etc as captions
                  during your live.
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
                src={gameCaptions_Img}
                className="w-full sm:w-[500px] md:w-[400px] lg:w-[600px]  h-[400px] object-cover rounded-3xl"
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
                  Highlighting an interesting comment, question, or suggestion
                  while live streaming your session is an amazing way to
                  interact with your viewers.
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
                className="vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px] h-[400px] object-fill rounded-3xl"
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

export default Game;
