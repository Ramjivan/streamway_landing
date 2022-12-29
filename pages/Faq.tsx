import React, { useState } from 'react'
import Image from 'next/image'
import Dropdown from './images/dropdown.png'
import Faq_question_answer from './Faq-question-answer'

const Faq = () => {
  const [data, setData] = useState(Faq_question_answer);
  const [show, setShow] = useState(false)
  return (
    <div className='container mx-auto'>
      <div>
        <p className='roboto text-xl text-[#8A8A8A] tracking-widest text-center uppercase pb-2 leading-[28px]'>FAQ</p>
        <h1 className='text-[58px] text-[#101621] text-center capitalize font-bold pb-2 leading-[28px]'>Question & Answer</h1>
        <div className='py-10'>
          {/*  faq */}
          {
            data.map((curElement) => {
              const { id, question, answer } = curElement;
              return (

                <div className='max-w-[900px] mx-auto my-10'>
                  <h2 onClick={() => setShow(!show)} className='cursor-pointer shadow-lg shadow-cyan-500/50  text-2xl text-left py-8 px-7 relative'>
                    {curElement.question}
                    <Image src={Dropdown} alt="img" className={`inline-block w-[25px] absolute right-[3%] top-[40%] ${show ? `rotate-180` : `rotate-0`}`} />
                  </h2>
                  {
                    show && <p className='shadow-lg shadow-cyan-500/50 duration-1000 text-2xl text-left pt-3 pb-8 px-7'> {curElement.answer} </p>
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
