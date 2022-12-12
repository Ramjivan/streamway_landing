import React from "react";

const CEO = () => {
  return (
    <div className=" container w-full h-[80%] bg-white md:flex text-2xl md:pl-48 pt-32 leading-[35px]">
      <div className="md:w-[40%]">
        <img
          src="https://html.creativegigstf.com/deski/deski/images/media/img_57.png"
          alt=""
        />
      </div>
      <div className="md:w-[40%] pt-12 pl-10 ">
        <div className="h-4 w-[34%] mt-28 bg-[#f9e3b1] md:absolute z-20 "></div>
        <p className="z-20 md:w-[36%] md:absolute">
        <span className="text-slate-500">Over</span> <span className="underline font-[600]">150,000+ client</span><br/><br/><span className="text-6xl "> Best event
        & online ticket platform.</span><br/><br/> Things go wrong. You'll have questions. We
        understand. So we have people, not bots, on hand to help.<br/><br/> We aim to
        answer any query in less than 10 minutes.<br/><br/><span className="flex"><hr className="mt-5 mr-2 border-none w-[12px] h-[2px] bg-black"/>Mitchell Garner</span>
        </p>
        
      </div>
    </div>
  );
};

export default CEO;
