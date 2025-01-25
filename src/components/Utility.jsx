import React from 'react'
import GirlImage from '../assets/images/webp/utility-girl.webp'

const Utility = () => {
  return (
    <div id='staking' className='bg-utility bg-no-repeat bg-cover bg-center'>
      <div className='max-w-[1232px] px-4 mx-auto pt-[105px] pb-[194px] max-lg:py-20 max-md:py-[60px] max-sm:py-10'>
        <div className='flex items-center justify-between max-xl:justify-center flex-wrap'>
          <div>
            <h2 className='text-white text-5xl leading-[61.2px] font-bold max-xl:text-center max-md:text-3xl max-md:leading-8'>
              <span className='text-gradient'>NFT</span> Utility
            </h2>
            <p className='text-xl leading-[35.9px] font-poppins text-white/70 max-w-[649px] pt-4 max-xl:text-center max-xl:max-w-none max-md:text-base max-md:leading-7'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              curabitur iaculis id cursus dignissim. Volutpat placerat volutpat
              commodo id ultricies volutpat vestibulum. Egestas venenatis
              dignissim fames maecenas. Blandit orci consectetur mauris, ipsum
              viverra quisque. Vulputate sollicitudin tellus eget consequat
              lectus dignissim integer in vitae. Commodo integer dis tortor cras
              maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat
              molestie nibh parturient lectus magna sed fusce diam urna. Quam
              magna duis imperdiet posuere iaculis.
            </p>
          </div>
          <div className='max-lg:pt-10 max-md:pt-5'>
            <img src={GirlImage} alt='cartoon-image' className='h-[638px] max-w-[442px] max-lg:h-[550px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utility
