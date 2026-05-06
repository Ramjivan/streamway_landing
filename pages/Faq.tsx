import React, { useState } from 'react'
import Image from 'next/image'
import Dropdown from './images/dropdown.png'

const Faq = () => {


  const Faq_question_answer = [
    {
      id: 1,
      question: "Can i go live on more than one YouTube channel ?",
      answer: "Yes, you can live stream on multiple YouTube channels, event on multiple Facebook pages or groups.",
    },
    {
      id: 2,
      question: "Will this require highspeed internet ?",
      answer: "No, with streamway you only need to have enough internet speed to live stream on single YouTube channel, and with that speed and data you can livestream on multiple destinations.",
    },
    {
      id: 3,
      question: "What happens if my internet breaks down, will my livestream stop ?",
      answer: "No, if you internet fails, your livestream will not stop and you'll not lose your precious viewers. As soon as internet recovers, you can start sending live. To stop livestream you can end it from dashboard.",
    },
    {
      id: 4,
      question: "After free trail expire, will i be able to use it ?",
      answer: "You need to buy a plan in order to continue using it.",
    },
    {
      id: 5,
      question: "Should I Buy a monthly plan or small pack like 3 or 7 day plan ?",
      answer: "If you're live streaming more frequently than we recommend monthly plan, because it's more cost effective. else for infrequent uses small packs are good.",
    },
    
  ]




  const [data, setData] = useState(Faq_question_answer);
  const [show, showToggle] = useState(10000)


  let toggleFAQ = (n: any) => {
    if (n === show) {
      showToggle(10000)
    }
    else {
      showToggle(n)
    }

  }
  return (
    <div className='container mx-auto mt-20'>
      <div>
        <p className='roboto text-xl text-[#8A8A8A] tracking-widest text-center uppercase pb-2 leading-[28px]'>FAQ</p>
        <h3 className='text-[40px] md:text-[58px] text-[#101621] text-center capitalize font-bold pb-2 leading-[40px] md:leading-[58px]'>Question & Answer</h3>
        <div className='py-10'>
          {/*  faq */}
          {
            data.map((curElement, index) => {
              console.log(curElement)
              return (
                <div key={index} className="max-w-[900px] mx-auto my-10 ">

                  <h2
                    onClick={() => toggleFAQ(index)}
                    className='cursor-pointer shadow-lg shadow-black-500/50  text-2xl text-left py-8 px-7 relative'
                  >
                    {curElement.question}
                    <Image src={Dropdown} alt="img" className={`inline-block w-[25px] absolute right-[3%] top-[40%] ${show === index ? `rotate-180 duration-500` : `rotate-0 duration-500`}`} />
                  </h2>
                  {
                    show === index
                      ?
                      <p className='shadow-lg shadow-black-500/50 duration-1000 text-2xl text-left pt-3 pb-8 px-7'> {curElement.answer} </p>
                      :
                      ''
                  }
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Faq