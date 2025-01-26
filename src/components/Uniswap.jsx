import React from 'react'
import { UNISWAP_LIST } from '../utils/helper'
import GoldImage from '../assets/images/webp/gold-box.webp'
import { UnicornIcon } from '../utils/icons'

const Uniswap = () => {
  return (
    <div className='bg-uniswap bg-cover bg-no-repeat pt-[300px] pb-[220px] max-lg:py-20 max-md:py-[60px] max-sm:py-10 relative'>
      <div className='absolute h-[539px] rounded-tl-full rounded-bl-full max-lg:hidden bg-white/10 w-[50%] right-0 top-[25%]'></div>
      <div className='max-w-[1352px] px-4 mx-auto flex items-center justify-between max-sm:flex-wrap gap-10 max-sm:gap-14'>
        <div className='w-full'>
          <h2 className='text-white text-5xl leading-[61.2px] font-bold max-md:text-3xl max-md:leading-8 pb-[21px] max-sm:text-center'>
            Buy On <span className='text-gradient'>Uniswap</span>
          </h2>
          <ul className='list-disc pl-6'>
            {UNISWAP_LIST.map((obj, i) => (
              <li
                key={i}
                className='text-xl max-md:text-lg max-md:pb-2 max-sm:pb-1 leading-[25.5px] text-white pb-[11px]'
              >
                {obj}
              </li>
            ))}
          </ul>
          <div className='max-sm:flex max-sm:justify-center'>
            <button className='px-[27.5px] py-3.5 items-center max-md:px-8 max-md:py-3 max-md:text-xl common-button rounded-[79px] text-white flex text-2xl leading-6 gap-2.5 hover:scale-105 transition-all duration-300 cursor-pointer mt-[30px] max-md:mt-4'>
              <UnicornIcon />
              Buy Now
            </button>
          </div>
        </div>
        <img
          src={GoldImage}
          alt='gold'
          className='h-[365px] max-lg:h-72 max-md:h-60 mr-[188px] max-xl:mr-0 max-sm:mx-auto object-cover pointer-events-none'
        />
      </div>
    </div>
  )
}

export default Uniswap
