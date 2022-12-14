import React from "react";
import Im1 from "./Images/210.svg"
import Im2 from "./Images/211.svg"
import Image from "next/image";
const CAB = () => {
  return (
    <div className="container my-52 bg-[#f5fbff] relative z-10 mx-auto bg-no-repeat p-10 md:p-16 pt-0 bg-cover bg-center ">
      
        <Image
        src={Im2}
        className="absolute -z-10 w-[15%] left-0 top-0"
        alt="nothing"
        ></Image>
        <Image
        src={Im1}
        className="absolute -z-10 w-[15%] bottom-0 right-0"
        alt=""
        ></Image>
      <div className="container text-center pt-5 md:p-16 z-10">
        <div>
          <span className="f text-4xl md:text-6xl font-semibold relative tracking-wider inline-block">
            Try Streamway Free
            {/* <img
              src="https://deskireact.ibthemespro.com/images/shape/line-shape-3.svg"
              className="w-[100%] absolute left-0 -z-1 "
              alt=""
            /> */}
          </span>
          </div>
          <span className=" text-xl md:text-3xl tracking-wider block mt-8">
            After your 14-day trial of our Professional plan,<span className="hidden md:inline"><br/></span> enjoy the Free
            version of Calendly - forever.
          </span>
        
      </div>
      <div className="container w-fit md:w-[80%] text-center mx-auto md:flex mt-5 md:mt-0 space-y-2 md:space-y-0 ">
          <input
            type="tel"
            className="md:w-[400px] border-[3px] inline-block mr-2 text-black text-lg md:text-xl p-1 md:p-5 border-black rounded-3xl"
            placeholder="Your Mobile Number"
          />
        <button
          type="submit"
          className="text-white bg-[#fd6a5e] border-[3px] p-2 md:px-5 md:text-2xl tracking-tighter font-semibold  rounded-full hover:border-[#fd6a5e] hover:bg-white hover:text-[#fd6a5e]"
        >
          Boost My Views
        </button>
      </div>
    </div>
  );
};

export default CAB;