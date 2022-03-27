import React, { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'

export default function ScrollTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      style={{ opacity: showTopBtn ? '1' : '0' }}
      onClick={goToTop}
      className='p-4 bg-red-500 fixed bottom-20 lg:bottom-6 right-6 z-10 rounded-full transition-all duration-200 hover:scale-110'
    >
      <FaAngleUp color='white' />
    </button>
  )
}
