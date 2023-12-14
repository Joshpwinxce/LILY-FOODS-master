import React from 'react'
import { arrowUp } from '../assets'

const BackToTop = () => {
  return (
    <div className={`fixed bottom-[30px] right-[20px] h-[40px] w-[40px] justify-center items-center bg-[#fff] rounded-[5px] product-shadow cursor-pointer ${document.body.scrollTop < 10 ? 'hidden' : 'flex'}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={arrowUp} alt="arrow up"  className='h-[30px] w-[40px] object-contain' />
    </div>
  )
}

export default BackToTop