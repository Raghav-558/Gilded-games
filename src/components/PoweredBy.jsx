import React from 'react'
import { POWERED_LIST } from '../utils/helper'

const PoweredBy = () => {
  return (
    <div id='nodes' className='pt-[58px] pb-[192px] max-lg:pb-20 max-md:py-[60px] max-sm:py-10'>
      <div className='max-w-[1349px] px-4 mx-auto'>
        <h2 className='text-white text-5xl leading-[61.2px] font-bold max-md:text-3xl max-md:leading-8 text-center max-2xl:pb-[19px]'>
           <span className='text-gradient'>Powered </span>By:
        </h2>
        <div className='flex flex-wrap -mx-3 justify-center'>
          {POWERED_LIST.map((obj, i) => (
            <div
              key={i}
              className='w-1/4  max-md:!w-1/2 max-sm:!w-full px-[10.5px] pt-[68px] max-2xl:pt-[21px] max-md:pt-5 max-sm:pt-4'
            >
              <div className='bg-gradient-to-r h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                <div className='flex items-center justify-center py-[18px] rounded-[13px] bg-gradient-to-r px-5 from-custom-gray to-custom-dark-gray h-[181px] max-sm:h-36 hover:bg-gradient-to-br cursor-pointer hover:from-custom-purple hover:to-custom-blue max-h-[181px] hover:shadow-[0px_8px_30px_0px] hover:shadow-custom-blue'>
                  <img
                    src={obj.logo}
                    alt={obj.logoAlt}
                    className={`${
                      i === 0
                        ? 'h-20 max-lg:h-14'
                        : i === 1
                        ? 'h-24 max-lg:h-16'
                        : i === 2
                        ? 'h-[65px] max-lg:h-12'
                        : 'h-11 max-lg:h-9'
                    } object-cover pointer-events-none`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
