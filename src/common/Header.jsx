import { useEffect, useState } from 'react'
import { HEADER_LIST } from '../utils/helper'
import { DiscordIcon } from '../utils/icons'
import PageLogo from '../assets/images/webp/page-logo.webp'

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  const closeHandler = () => {
    setOpen(false)
  }

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
    handleOverflow()
    window.addEventListener('resize', handleOverflow)
    return () => {
      window.removeEventListener('resize', handleOverflow)
    }
  }, [open])

  return (
    <div className='bg-black/80'>
      <div className='max-w-[1355px] px-4 mx-auto flex items-center justify-between py-5 w-full'>
        <a href='/'>
          <img
            src={PageLogo}
            alt='page-logo'
            className='max-w-[286px] pointer-events-none max-xl:max-w-[180px]'
          />
        </a>
        <div
          className={`flex gap-[29px] max-xl:gap-5 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-black max-lg:z-10 ${
            open ? 'max-lg:!right-0' : ''
          }`}
        >
          <div className='flex gap-10 max-xl:gap-6 max-lg:flex-col items-center'>
            {HEADER_LIST.map((item, i) => (
              <a
                key={i}
                onClick={closeHandler}
                href={item.link}
                className='text-white !whitespace-nowrap text-[22px] max-xl:text-base font-normal hover:text-blue-400 transition-all duration-300'
              >
                {item.title}
              </a>
            ))}
          </div>
          <button
            onClick={closeHandler}
            className='text-white flex gap-2.5 items-center text-2xl leading-6 rounded-[79px] cursor-pointer outline-none common-button hover:scale-105 transition-all duration-300 py-3.5 px-[34px] max-sm:text-lg max-sm:py-2.5 max-sm:px-6'
          >
            <DiscordIcon />
            Discord
          </button>
        </div>
        <button
          onClick={handleClick}
          className='flex flex-col items-center justify-between relative z-20 overflow-hidden size-6.5 lg:hidden'
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg ${
              open ? ' translate-x-10' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg relative after:absolute after:top-0 after:left-0 after:w-6 after:h-0.5 after:bg-white after:rounded-lg ${
              open ? 'after:rotate-90 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg ${
              open ? ' -translate-x-10' : ''
            }`}
          ></span>
        </button>
      </div>
    </div>
  )
}

export default Header
