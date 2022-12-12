import React from "react";

const Steps = () => {
  return (
    <div className="w-full mt-44 bg-[#dff1ee] container ">
      <div className="  ">
        <div className="title pt-28 leading-[120px] text-center">
          <p className="text-slate-500 text-2xl tracking-wider ">GET STARTED IN MINUTES</p>
          <span className="text-5xl font-medium stpt relative z-0">
            3 simple & easy step to launch.
          </span>
        </div>
        <div className=" md:flex md:space-x-32 pt-20 w-full md:justify-center">
            <div className="img1 text-center md:w-1/5 space-y-5 ">
                <img className="mx-auto" src="https://html.creativegigstf.com/deski/deski/images/assets/ils_15.svg" alt="" />
                <p className="text-slate-500 text-xl  pt-6">Join Our Platform</p>
                <p className="text-xl w-full">It only takes 5 minutes. Set up is smooth and simple fully lorem qui.</p>
            </div>
            <div className="img2 relative text-center md:w-1/5 space-y-5">
                <img className="mx-auto" src="https://html.creativegigstf.com/deski/deski/images/assets/ils_16.svg" alt="" />
                <p className="text-slate-500 text-xl ">Manage you event</p>
                <p className="text-xl ">Choose a price package to suit you or pay per ticket. Sell on your website,</p>
            </div>
            <div className="img3 text-center md:w-1/5 space-y-5">
                <img className="mx-auto" src="https://html.creativegigstf.com/deski/deski/images/assets/ils_17.svg" alt="" />
                <p className="text-slate-500 text-xl  pt-6">Start selling ticket</p>
                <p className="text-xl ">Get payments, detailed data on tickets sales & message guests lorem</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;