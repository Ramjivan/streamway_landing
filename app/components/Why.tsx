import React from 'react'

const Why = () => {

  // const [isActive, setIsActive] = React.useState(false);

  // const myfun = () => {
    
  // }
  return (
    <div className='mt-[250px] relative'>
    <div className='container w-[80%] mx-auto'>
        <div className='lg:flex '>
            <div className='lg:w-[40%] w-[50%] mx-7 sm:w-full sm:block'>
                <div className='mb-[35px]'>
                    <h6 className='text-slate-400 tracking-[.1rem] text-xl mb-5'>WHY CHOOSE US</h6>
                    <h2 className='text-5xl leading-[3.25rem]'>
                    <span className='ww relative'>
                      <span>Why you should</span>
                    </span>
                    <p>choose us?</p>
                    </h2>
                </div>

                <div className='divide-y-2 divide-black'>
                <div className='pr-[5px]'>
                  <div className='crd py-2'>
                    <div className='crdheader'>
                      <p>
                        <button className='text-3xl text-left py-[22px] pr-[70px]'>
							            Register and create your first seller portal.
							          </button>
                      </p>
                    </div>
                    <div className='hidcrd hidden'>
                      <div className='pr-[70px] pb-[30px] text-lg'>
                        <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pr-[5px]'>
                  <div className='crd py-2'>
                    <div className='crdheader'>
                      <p>
                        <button className='text-3xl text-left py-[22px] pr-[70px]'>
							            Manage your client easily
							          </button>
                      </p>
                    </div>
                    <div className='hidcrd hidden'>
                      <div className='pr-[70px] pb-[30px] text-lg'>
                        <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pr-[5px]'>
                  <div className='crd py-2'>
                    <div className='crdheader'>
                      <p>
                        <button className='text-3xl text-left py-[22px] pr-[70px]' >
							            Start selling ticket
							          </button>
                      </p>
                    </div>
                    <div className='hidcrd hidden'>
                      <div className='pr-[70px] pb-[30px] text-lg'>
                        <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className='md:w-[60%] w-[50%] relative'>
              <div className='flex justify-end '>
              <img src="https://html.creativegigstf.com/deski/deski/images/media/img_58.png" className='absolute z-10' alt="" />
              <img src="https://html.creativegigstf.com/deski/deski/images/shape/113.svg" className='absolute z-0 top-48 left-[510px]' alt="" />
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Why