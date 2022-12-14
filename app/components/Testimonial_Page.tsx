import React from "react";
import Image from "next/image";
import User from "./Images/User.png";
import Swastik from "./Images/swastik.png";
import OM from "./Images/OM.png"
const Testimonial_Page = () => {
  const styling = {
    backgroundImage: `url('http://deskireact.ibthemespro.com/static/media/bg.b81274dde6e4aad74b33.svg')`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    width: "100%",
    
  };

  return (
    <>
      <div className="container mx-auto">
      
        <div  style={styling} className="relative">
        <Image
              className="inline absolute top-36 left-24 rotate-12 animate-animation-bouncei "
              src={Swastik}
              alt="nothing"
              width={100}
              height={100}
            ></Image>

        <Image
              className="inline absolute top-36 left-24 rotate-12 animate-animation-bouncei "
              src={OM}
              alt="nothing"
              width={100}
              height={100}
            ></Image>
        

          <div className="p-[18px] md:p-24 md:pl-44 md:flex">
            <div>
            <Image
              className="inline"
              src={User}
              alt="nothing"
              width={480}
              height={480}
            ></Image>
</div>
            <div className="mx-auto md:w-[450px] mt-16">
            <label className="block text-2xl md:text-4xl leading-loose  text-gray-500 space-y-5 text-center md:text-left" >
              हमारी भारतीय परंपरा, संस्कृति एवं धर्म के प्रचार प्रसार और ज्यादा
              से ज्यादा लोगो तक सत्संग प्रवचन व संतो की वाणी को पहुंचने की
              टेक्नोलॉजी बनाने के लिए Streamway की टीम का हार्दिक साधुवाद{" "}
              <label>महंत परमहंस</label>
              <label className="block text-3xl text-blue-500 font-bold">
                {" "}
                श्री 108 श्री रामप्रसाद जी महाराज
              </label>
              <label className="block text-2xl text-red-500 font-bold"> धार्मिक गुरु</label>
            </label>
            <button className="text-white rounded-xl p-2 md:p-4 bg-red-500 hover:bg-red-400 mt-6 ml-28 md:ml-44">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial_Page;
