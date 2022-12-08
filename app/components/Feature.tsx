import React from "react";

const Feature = () => {
  return (
    <div className=" bg-[#fbf3ec]    ">
      <div className="mx-auto container">
      <span className="z-0 absolute left-0">
          <img
            src="https://html.creativegigstf.com/deski/deski/images/shape/102.svg"
            alt=""
          />
        </span>
        <span className="z-0 absolute right-0">
          <img
            src="https://html.creativegigstf.com/deski/deski/images/shape/103.svg"
            alt=""
          />
        </span>
      <div className="z-40 relative  bg-white w-[85%] mx-auto  ">
        <div className="divide-x-[1px] md:flex  p-10 text-2xl text-center font-normal tracking-normalS">
          <span className="p-8 space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <p className="text-slate-400 text-lg">Smart popups</p>
            <p>Create customized popups and show the message at the lorem</p>
          </span>
          <span className="p-8 space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
            <p className="text-slate-400 text-lg">Embeded Forms</p>
            <p>
              Collect website leads with embedded forms and integrate easily.
            </p>
          </span>
          <span className="p-8 space-y-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            <p className="text-slate-400 text-lg">Autoresponder</p>
            <p>Send welcome email to your new subscribers with a code.</p>
          </span>
        </div>
      </div>
      <img className="w-8 h-8" src="https://html.creativegigstf.com/deski/deski/images/shape/99.svg" alt=""  />
      </div>
    </div>
  );
};

export default Feature;