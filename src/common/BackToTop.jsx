import React, { useState } from 'react'
import { BackToTopIcon } from '../utils/icons'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  window.onscroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 z-30 rounded-lg flex justify-center'
        >
          <BackToTopIcon myClass={'min-[1440px]:w-12 min-[1440px]:h-12'} />
        </button>
      )}
    </div>
  )
}

export default BackToTop
