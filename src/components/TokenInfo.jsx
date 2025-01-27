import React from 'react'
import { GILD_TOKEN_INFO_LIST } from '../utils/helper'

const TokenInfo = () => {
  return (
    <div className='bg-token-info bg-cover bg-center bg-no-repeat pt-8 max-lg:pt-0'>
      <div className='max-w-[1352px] px-4 mx-auto pb-[136px] max-lg:pb-20 max-md:pb-[60px] max-sm:pb-10'>
        <h2 className='text-white text-5xl leading-[61.2px] font-bold text-center max-md:text-3xl max-md:leading-8 pt-[130px] max-lg:pt-20 max-md:pt-[60px] max-sm:pt-10 pb-[19px]'>
          <span className='text-gradient'>$GILD</span> Token Info
        </h2>
        <div className='flex items-center flex-wrap -mx-3 justify-center'>
          {GILD_TOKEN_INFO_LIST.map((item, i) => (
            <div
              key={i}
              className='w-1/4 max-md:w-1/2 max-sm:w-full px-3 pt-10 max-md:pt-5 max-sm:pt-4'
            >
              <div className='bg-gradient-to-b h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                <div className='flex items-center justify-center flex-col py-[18px] rounded-[13px] bg-gradient-to-b from-custom-gray to-custom-dark-gray h-[181px] max-sm:h-36 hover:bg-gradient-to-br cursor-pointer hover:from-custom-purple hover:to-custom-blue max-h-[181px] hover:shadow-[0px_8px_30px_0px] hover:shadow-custom-blue'>
                  <img
                    src={item.image}
                    alt='logo'
                    className='h-[70px] max-lg:h-12 pointer-events-none'
                  />
                  <p className='font-bold text-3xl max-lg:text-2xl max-sm:text-xl leading-[38.25px] text-white pt-[10px] pb-1 max-lg:pb-0 text-center'>
                    {item.title}
                  </p>
                  <p className='text-lg max-lg:text-base max-sm:text-sm max-sm:leading-2 leading-[23px] text-white'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TokenInfo
