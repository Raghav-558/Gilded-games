import React from 'react'
import Line from '../assets/images/webp/roadmap-line.webp'
import { ROADMAP_LIST } from '../utils/helper'

const Roadmap = () => {
  return (
    <div
      id='about'
      className='max-w-[1952px] mx-auto max-2xl:pl-4 pt-[92px] pb-[75px] max-lg:py-[60px] max-sm:py-10 overflow-hidden'
    >
      <h2 className='text-white text-5xl leading-[61.2px] font-bold max-md:text-3xl max-md:leading-8 text-center pb-[128px] max-md:pb-10 max-lg:pb-20'>
        <span className='text-gradient'>Road</span>map
      </h2>
      <div className='max-w-[1620px] w-full ml-auto relative max-lg:justify-center max-lg:items-center max-lg:flex'>
        <div className='w-full max-lg:relative max-lg:max-w-[760px] max-md:max-w-[375px] lg:mx-auto'>
          <div className='flex max-lg:hidden absolute max-w-[1620px] w-full right-0'>
            <div className='max-w-[972px] w-full pb-0.5 bg-white/20'></div>
            <img src={Line} alt='line' />
          </div>
          <div className='absolute bg-white/20 left-[25.5%] w-0.5 h-[75%] max-md:left-[0%] max-[460px]:left-[5%] top-0 lg:hidden'></div>
          <div className='max-w-[1246px] justify-between w-full lg:pt-[69px] flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-y-10'>
            {ROADMAP_LIST.map((item, i) => (
              <div
                key={i}
                className='relative max-w-[300px] max-lg:ml-[100px] w-full'
              >
                <div className='absolute top-[-95px] w-[53px] h-[50px] roadmap-color rounded-full max-lg:left-[-105px] max-[460px]:left-[-80px] max-lg:size-10 max-md:left-[-108px] max-md:top-[1px] max-[460px]:size-[41px] max-lg:top-0'></div>
                <p className='text-lg font-semibold font-poppins text-white leading-[23.22px]'>
                  {item.step}
                </p>
                <h3 className='text-white font-bold font-poppins text-4xl leading-[46.44px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>
                  {item.question}
                </h3>
                <ul className='flex flex-col gap-3 pt-3 max-sm:pt-1 text-white/70 list-inside list-disc '>
                  {item.list.map((list, i) => (
                    <li
                      key={i}
                      className='text-lg max-sm:text-sm leading-[18.75px] font-montserrat'
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
