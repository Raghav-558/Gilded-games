import React from 'react'
import PlayToEarn from '../assets/images/gif/gildes-world.gif'
import LeftShadow from '../assets/images/webp/white-shadow-left.webp'
import RightShadow from '../assets/images/webp/white-shadow-right.webp'

const Earn = () => {
  return (
    <div>
      <div className='pb-[110px] max-lg:pb-20 max-md:pb-[60px] max-sm:pb-10 overflow-hidden'>
        <div className='max-w-[1352px] max-2xl:px-4 mx-auto relative'>
          <img
            className='absolute top-[70%] -translate-y-1/2 -left-[23.8%] max-2xl:hidden'
            src={LeftShadow}
            alt='shadow-image'
          />
          <img
            className=' absolute  top-[70%] -translate-y-1/2 rotate-y-180 -right-[22%] max-2xl:hidden'
            src={RightShadow}
            alt='shadow-image'
          />
          <h2 className='text-white text-5xl leading-[61.2px] font-bold text-center max-md:text-3xl max-md:leading-8'>
            Play To <span className='text-gradient'>Earn</span>
          </h2>
          <p className='text-xl leading-[35.9px] font-poppins text-white/70 max-w-[1024px] mx-auto text-center pt-4 max-lg:max-w-none max-md:text-base max-md:leading-7 max-sm:text-base'>
            Gilded World will be the first game released by Gilded Games. It is
            an MMORPG, browser based game that is unlike any other. We have
            taken inspiration from some of the most popular and successful
            MMORPG and RPG games and have boiled it down to the best online
            gameplay that people will actually want to play!
          </p>
          <div className='max-w-[1320px] w-full rounded-[13px] p-[5px] border-play-to-earn max-md:p-[3px] mx-auto mt-12 max-lg:mt-10 max-md:mt-8 max-sm:mt-6'>
            <img
              className='w-full max-h-[551px] rounded-[13px] object-cover'
              src={PlayToEarn}
              alt='play to earn'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earn
