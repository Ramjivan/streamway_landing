"use client"
import React, { useState } from "react";

const FAQ = () => {
    const [hideAnswer , setHideAnswer] = useState(false)


  return (
    <div className="  bg-[#dff1ee] justify-center relative min-h-[1000px] md:h-auto w-screen">
      <div className="container mx-auto">
        <div className="justify-between mt-56">
        <img className="absolute z-[-1]  top-44" src={'https://html.creativegigstf.com/deski/deski/images/shape/120.svg'} alt="nothing"  />
        <img className="absolute z-[-1]  right-0 bottom-1" src={'https://html.creativegigstf.com/deski/deski/images/shape/121.svg'} alt="nothing"  />
        </div>
      <div className="container w-[300px] md:w-[1170px] mx-auto">
        <div className=" w-full  text-center mb-20 ">
          <h1>FAQ</h1>
          <h1 className="f text-[38px]">
            <span className="relative z-[1] ">
              <div className="md:bg-[#e7dba8] w-full absolute h-3 left-0 bottom-2 -z-[1]"></div>
              Question & Answer
            </span>
          </h1>
        </div>

        <div className="w-full md:w-[1200px] h-[796px] ">
          <div className="md:m-auto md:w-[870px] h-[796px] opacity-[1]">
            <div className=" md:w-full h-[796px] ">
              <div className="bg-white mb-3  flex flex-col h-[186] w-80 md:w-[700px] md:mx-auto">
                <div>
                  <h1 className="mb-0 text-left ">
                    <button className="w-full  md:md:text-xl text-left px-5 py-5 flex justify-between" onClick={()=>setHideAnswer(!hideAnswer)}>
                    <span>How does the free trial work?</span>
                    <span className=" right-5 top-[40%] ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                      
                    </button>
                  </h1>
                </div>
                <div>
                  <div className={`px-5 mb-10 pt-3 ${hideAnswer?`block`:'hidden'}`} id={'1'}>
                    <p className="mb-10 text-xs text-gray-500">
                      mea case duis tollit et. Etiam nusquam set minium eu sea,
                      ei tale paulo elab. Noluisse mnesarch Et is vero
                      incorrupte eos deserunt quaeren.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3  flex flex-col h-[186] w-80 md:w-[700px] md:mx-auto">
                <div>
                  <h1 className="mb-0 text-left ">
                    <button className="w-full  md:text-xl text-left px-5 py-5 flex justify-between" onClick={()=>setHideAnswer(!hideAnswer)}>
                    <span>How does the free trial work?</span>
                    <span className=" right-5 top-[40%] ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                      
                    </button>
                  </h1>
                </div>
                <div>
                  <div className={`px-5 mb-10 pt-3 ${hideAnswer?`block`:'hidden'}`} id={'1'}>
                    <p className="mb-10 text-xs text-gray-500">
                      mea case duis tollit et. Etiam nusquam set minium eu sea,
                      ei tale paulo elab. Noluisse mnesarch Et is vero
                      incorrupte eos deserunt quaeren.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3  flex flex-col h-[186] w-80 md:w-[700px] md:mx-auto">
                <div>
                  <h1 className="mb-0 text-left ">
                    <button className="w-full  md:text-xl text-left px-5 py-5 flex justify-between" onClick={()=>setHideAnswer(!hideAnswer)}>
                    <span>How does the free trial work?</span>
                    <span className=" right-5 top-[40%] ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                      
                    </button>
                  </h1>
                </div>
                <div>
                  <div className={`px-5 mb-10 pt-3 ${hideAnswer?`block`:'hidden'}`} id={'1'}>
                    <p className="mb-10 text-xs text-gray-500">
                      mea case duis tollit et. Etiam nusquam set minium eu sea,
                      ei tale paulo elab. Noluisse mnesarch Et is vero
                      incorrupte eos deserunt quaeren.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3  flex flex-col h-[186] w-80 md:w-[700px] md:mx-auto">
                <div>
                  <h1 className="mb-0 text-left ">
                    <button className="w-full  md:text-xl text-left px-5 py-5 flex justify-between" onClick={()=>setHideAnswer(!hideAnswer)}>
                    <span>How does the free trial work?</span>
                    <span className=" right-5 top-[40%] ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                      
                    </button>
                  </h1>
                </div>
                <div>
                  <div className={`px-5 mb-10 pt-3 ${hideAnswer?`block`:'hidden'}`} id={'1'}>
                    <p className="mb-10 text-xs text-gray-500">
                      mea case duis tollit et. Etiam nusquam set minium eu sea,
                      ei tale paulo elab. Noluisse mnesarch Et is vero
                      incorrupte eos deserunt quaeren.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3  flex flex-col h-[186] w-80 md:w-[700px] md:mx-auto">
                <div>
                  <h1 className="mb-0 text-left ">
                    <button className="w-full  md:text-xl text-left px-5 py-5 flex justify-between" onClick={()=>setHideAnswer(!hideAnswer)}>
                    <span>How does the free trial work?</span>
                    <span className=" right-5 top-[40%] ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                      
                    </button>
                  </h1>
                </div>
                <div>
                  <div className={`px-5 mb-10 pt-3 ${hideAnswer?`block`:'hidden'}`} id={'1'}>
                    <p className="mb-10 text-xs text-gray-500">
                      mea case duis tollit et. Etiam nusquam set minium eu sea,
                      ei tale paulo elab. Noluisse mnesarch Et is vero
                      incorrupte eos deserunt quaeren.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3  flex flex-col h-[186] w-80 md:w-[700px] md:mx-auto">
                <div>
                  <h1 className="mb-0 text-left ">
                    <button className="w-full  md:text-xl text-left px-5 py-5 flex justify-between" onClick={()=>setHideAnswer(!hideAnswer)}>
                    <span>How does the free trial work?</span>
                    <span className=" right-5 top-[40%] ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                      
                    </button>
                  </h1>
                </div>
                <div>
                  <div className={`px-5 mb-10 pt-3 ${hideAnswer?`block`:'hidden'}`} id={'1'}>
                    <p className="mb-10 text-xs text-gray-500">
                      mea case duis tollit et. Etiam nusquam set minium eu sea,
                      ei tale paulo elab. Noluisse mnesarch Et is vero
                      incorrupte eos deserunt quaeren.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3  flex flex-col h-[186] w-80 md:w-[700px] md:mx-auto">
                <div>
                  <h1 className="mb-0 text-left ">
                    <button className="w-full  md:text-xl text-left px-5 py-5 flex justify-between" onClick={()=>setHideAnswer(!hideAnswer)}>
                    <span>How does the free trial work?</span>
                    <span className=" right-5 top-[40%] ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                      
                    </button>
                  </h1>
                </div>
                <div>
                  <div className={`px-5 mb-10 pt-3 ${hideAnswer?`block`:'hidden'}`} id={'1'}>
                    <p className="mb-10 text-xs text-gray-500">
                      mea case duis tollit et. Etiam nusquam set minium eu sea,
                      ei tale paulo elab. Noluisse mnesarch Et is vero
                      incorrupte eos deserunt quaeren.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-2xl mx-8 md:text-4xl text-center mt-5">Don’t find your answer?</p>
              <div className="relative w-40 h-10 group bg-[#655c97] text-white mx-16 md:mx-auto mt-5">
              <div className="absolute bg-[#973c56]  z-10 left-0 w-0 h-10  group-hover:w-full   duration-700"></div>
              <button className="absolute  w-40 h-10 bg-transparent z-20 ">
                Create Your Event
              </button>
            </div>
            </div>
            
          </div>

        <div className="absolute">
          
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
