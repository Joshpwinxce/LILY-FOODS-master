import React from 'react'
import { ohaLeaf, nzu, ogbono, oporo, bigSmokedFish, deal } from '../assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center lg:flex-row flex-col '>
      <div>
        <h2 className='sm:text-[2.8rem] text-[2.5rem] text-primary-gradient font-semibold sm:leading-[65px] lg:mt-10'>
          Your Number 🥗ne Choice <br className='sm:flex hidden' /> For African
          Indegenious<br className='sm:flex hidden' /> Dishes in Raw Form.<br className='sm:flex hidden' />
        </h2>
        <p className='text-[20px] sm:text-[24px] text-[#538d22] leading-[38px] sm:leading-[42px]'>
          Welcome to Lilly Foods where we Offer varieties <br className='sm:flex hidden' />
          of African soup Recipes at unimaginable prices, <br className='sm:flex hidden' />
          to satisfy your cravings for local dishes.
        </p>
        <div className='flex flex-wrap sm:gap-[2rem] gap-[1rem] mt-7'>
        <button className=' sm:p-5 sm:px-9 px-7 p-4 bg-gradient text-[#fff] text-[1.3rem] rounded-tl-[40%] rounded-br-[40%]'><a href="/">Order Now</a></button>
        <button className=' sm:p-5 sm:px-9 px-7 p-4 bg-[#dbfeb8] text-primary-gradient font-semibold border-[3px] border-solid border-[#38E54D] text-[1.3rem] rounded-tl-[40%] rounded-br-[40%]'><Link to="/menu">Products</Link></button>
        </div>
      </div>
      <div className='md:mt-0 lg:mt-10 mt-[5rem] hero-radius sm:p-7 md:p-10 p-3 rounded-tl-[30%] rounded-br-[30%]'>
        <img src={deal} alt="deal" className='rounded-full' />
      </div>
      <span className='absolute top-[200px] left-[50%] md:left-[40%] text-[2rem] z-[-2] opacity-[10%] emoji-animate'>🥗</span>
      <span className='absolute top-[310px] left-[30%] md:left-[20%] text-[2rem] z-[-2] opacity-[10%] emoji-animate'>🥙</span>
      <span className='absolute bottom-[130px] right-[20%] md:right-[80%] text-[2rem] z-[-2] opacity-[10%] emoji-animate animate-pulse'>🥗</span>
    </div>
  )
}

export default Hero