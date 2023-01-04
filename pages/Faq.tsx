import React, { useState } from 'react'
import Image from 'next/image'
import Dropdown from './images/dropdown.png'

const Faq = () => {


  const Faq_question_answer = [
    {
      id: 1,
      question: 'How does the free trial work?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exer minus placeat sequi distinctio architecto atque soluta sunt odio iusto quod.',
    },
    {
      id: 2,
      question: 'How to set up two-factor authentication (2FA)',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exercitationem rem unde minus accusantium, doloribus inventore mollitia soluta repudiandae nesciunt placeat placeat sequi distincti atque soluta sunt odio iustorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exercitationem rerem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exercitationem rerem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exercitationem re quod.',
    },
    {
      id: 3,
      question: 'How do you weigh different criteria in your process?',
      answer: 'Lorem ipsum, dolor s vdknvkas minus placeat sequi distinctio architecto atque soluta sunt odio iusto quod.',
    },
    {
      id: 4,
      question: 'What does First Round look for in an idea?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exercitationem rem unde minus accusantium, doloribus inventore mollitia soluta repudiandae nesciunt placeat itaque adipisci. Odit vitae laboriosam, mollitia, sit quis aliquid numquam commodi cum dignissimos laborum exercitationem voluptas minus placeat sequi distinctio architecto atque soluta sunt odio iusto quod.aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit aceat itaque adipisci. Odit  ',
    },
    {
      id: 5,
      question: 'What do you look for in a founding team?',
      answer: 'Lorem ipsum, dolor sit ameitationem voluptas minus placeat sequi distinctio architecto atque soluta sunt odio iusto quod.',
    },
    {
      id: 6,
      question: 'Do you recommend Pay as you go or Pre pay?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exercitationem rem unde minus accusantium, doloribus inventore mollitia soluta repudiandae nesciunt placeat itaque adipisci. Odit vitae laboriosam, mollitia, sit quis aliquid numquam commodi cum dignissimos laborum exercitationem voluptas minus placeat sequi distinctio architecto atque soluta sunt odio iusto quod.aceat itaque adipisci. Odit vitae laboriosam, mollitia, sit quis aliquid numquam commodi cum dignissimos laborum exercitationem v',
    },
    {
      id: 7,
      question: 'Can I pass the fees on to my customers?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exercitatientore mollitia soluta repudiandae nesciunt ploluptas minus placeat sequi distinctio architecto atque soluta sunt odio iusto quod.',
    },
    {
      id: 8,
      question: 'How do I edit the ticket types?',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis commodi illo quia corporis cupiditate exeuis aliquid numquam commodi cum dignissimos laborum exercitationem voluptas minus placeat sequi distinctio architecto atque soluta sunt odio iusto quod.',
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
        <h1 className='text-[40px] md:text-[58px] text-[#101621] text-center capitalize font-bold pb-2 leading-[40px] md:leading-[58px]'>Question & Answer</h1>
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
                    <Image src={Dropdown} alt="img" className={`inline-block w-[25px] absolute right-[3%] top-[40%] ${show === index ? `rotate-180` : `rotate-0`}`} />
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