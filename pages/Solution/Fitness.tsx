import React from 'react'
import { NextSeo } from 'next-seo'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Image from 'next/image'
import BePresentEverywhere from '../BePresentEverywhere'
import FitnessMonetization_Img from '../images/fitnessMonetization.png'
import fitnessCaptions_Img from '../images/fitness Captions.png'
import TicketEvent_Img from '../images/ticket event.png'
import HighlightCommentsss_Img from '../images/highlight commentsss.png'

const Fitness = () => {
    return (
        <div>
            <NextSeo
                title="Solution Fitness | Streamway"
                description=""
            />
            <div className="bg-Solution-Fitness-Banner bg-right bg-[#f0f0f0] bg-contain md:bg- bg-no-repeat h-[600px] md:h-[850px] lg:h-screen">
                {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Navbar />
                {/* Navbar >.>>>>>>>>>>>>>>>>>>>>>>>> */}``
                <div className='container mx-auto h-full'>
                    <div className=' h-full max-w-[700px] flex flex-col items-start justify-center text-left'>
                        <h2>Bring Complete Fitness Experience Online Via Live Streaming</h2>
                        <p>Proritize wellness & well-being by streaming fitness classes from the comfort of your home. Multistream your classes on leading social media platforms & reach a wider audience.</p>
                        <button className='capitalize bg-white hover:bg-[#ffffffda] duration-200 px-14 mt-10 rounded-lg h-[60px] text-[#7b56ff] font-bold '>get started for free</button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='my-5'>
                    <h2 className='text-lg md:text-2xl font-bold mx-auto text-center max-w-[870px]'>Powerful streaming features to create engaging, professional & high-quality fitness live streams.</h2>
                </div>

                <div>


                <div className='flex flex-col md:flex-row gap-6 justify-between my-20'>
                        <div>
                            <div>
                                <h4 className='text-left   text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]'>StreamWay Feature</h4>
                                <h2 className='text-left  font-bold p-0  w-full text-3xl'>Monetization</h2>
                                <p className='text-left  w-full font-medium opacity-90 py-4'>Monetize your live fitness classes & earn bucks. Host receive virtual tips, paid requests & more from your viewers.</p>
                            </div>
                            <div className='flex'>
                                <button type="button" className="text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase">Start Streaming</button>
                                <button type="button" className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase ">Learm MOre</button>
                            </div>
                        </div>
                        <div>
                            <Image style={{ maxWidth: 'inherit' }} src={FitnessMonetization_Img} className='vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]' alt="img" />
                        </div>
                    </div>

                    {/*  */}

                    <div className='flex justify-between flex-col md:flex-row-reverse gap-6 my-20 w-full'>
                        <div>
                            <div>
                                <h4 className='text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]'>StreamWay Feature</h4>
                                <h2 className='text-left font-bold p-0 w-full text-3xl'>Ticketed Event</h2>
                                <p className='text-left w-full font-medium opacity-90 py-4 max-w-[850px]'>Monetize your live by creating ticketed events for special training sessions & earn money by promoting the event.</p>
                            </div>
                            <div className='my-5'>
                                <button type="button" className=" text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase">Start Streaming</button>
                                <button type="button" className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase ">Learm MOre</button>
                            </div>
                        </div>
                        <div>
                            <Image style={{ maxWidth: 'inherit' }} src={TicketEvent_Img} className='vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]' alt="img" />
                        </div>
                    </div>

                    {/*  */}

                    <div className='flex justify-between flex-col md:flex-row gap-6 my-20 w-full'>
                        <div>
                            <div>
                                <h4 className='text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]'>StreamWay Feature</h4>
                                <h2 className='text-left font-bold p-0  w-full text-3xl'>Captions</h2>
                                <p className='text-left  w-full font-medium opacity-90 py-4'>Keep the viewers acquainted by adding necessary information about the class, upcoming session details, etc as captions during your live.</p>
                            </div>
                            <div className='my-5'>
                                <button type="button" className=" text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase">Start Streaming</button>
                                <button type="button" className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase ">Learm MOre</button>
                            </div>
                        </div>
                        <div>
                            <Image style={{ maxWidth: 'inherit' }} src={fitnessCaptions_Img} className='w-full sm:w-[500px] md:w-[400px] lg:w-[600px]' alt="img" />
                        </div>
                    </div>

                    {/*  */}

                    <div className='flex justify-between flex-col md:flex-row-reverse gap-6 my-20'>
                        <div>
                            <div>
                                <h4 className='text-left text-[#fca93c] font-extrabold tracking-wide text-[14px] md:text-[20px]'>StreamWay Feature</h4>
                                <h2 className='text-left font-bold p-0  w-full text-3xl'>Highlight Comment</h2>
                                <p className='text-left  w-full font-medium opacity-90 py-4'>Highlighting an interesting comment, question, or suggestion while live streaming your session is an amazing way to interact with your viewers.</p>
                            </div>
                            <div className='my-5'>
                                <button type="button" className=" text-white bg-[#EF6458] hover:bg-[#ff3e2d] duration-200 shadow-lg font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase">Start Streaming</button>
                                <button type="button" className=" text-[#EF6458] bg-[#fff] hover:text-white hover:bg-[#EF6458] duration-1000  shadow-lg shadow-[#5d5b5b4a]  font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 uppercase ">Learm MOre</button>
                            </div>
                        </div>
                        <div>
                            <Image style={{ maxWidth: 'inherit' }} src={HighlightCommentsss_Img} className='vsm:w-[300px] sm:w-[500px] md:w-[400px] lg:w-[600px]' alt="img" />
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
    )
}

export default Fitness
