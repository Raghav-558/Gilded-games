import React from 'react'
import Image1 from '../assets/images/webp/quote-left.webp'
import Image2 from '../assets/images/webp/quote-right.webp'

const GamingPlatform = () => {
  return (
    <div id='nodes' className='bg-gaming-platform bg-no-repeat bg-cover bg-center'>
      <div className='max-w-[972px] px-4 mx-auto relative pt-[229px] py-[228px] max-lg:py-[200px] max-md:py-[160px] max-sm:py-[100px]'>
        <h3 className='text-white text-[40px] leading-[62.4px] text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-sm:leading-8 max-lg:leading-[50px] max-md:leading-[40px] '>
          <span className='relative'>
            Gilded
            <img
              src={Image1}
              alt='Quotes-open'
              className='absolute left-[-80%] top-[-70px] max-lg:left-0 max-lg:top-[-100px] max-md:max-w-[80px]'
            />
          </span>
          Games is a new type of gaming platform, partially owned and operated
          by its players. Earn Gild tokens by playing and use them to decide the
          future of the
          <span className='relative'>
            game!
            <img
              className='absolute bottom-[-70px] right-[-110px] max-lg:bottom-[-100px] max-lg:right-0 max-md:max-w-[80px]'
              src={Image2}
              alt='Quotes-close'
            />
          </span>
        </h3>
      </div>
    </div>
  )
}

export default GamingPlatform
