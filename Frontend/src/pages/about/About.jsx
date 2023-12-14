import React from 'react'
import Stats from '../../components/Stats'
import { groceryBag, womanGrocery } from '../../assets'

const About = () => {
  return (
    <div className={`sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center flex-col mb-10`}>
      <div className='flex justify-center flex-col items-center mb-5'>
        <h2 className='sm:text-[2.8rem] text-[2.5rem] text-primary-gradient font-semibold lg:mt-10'>
          About Us
        </h2>
        <p className='text-[20px] text-center sm:text-[24px] text-[#248d22]'>
          We offer a wide range of opportunity for you. See <br className='sm:flex hidden'/>what you will get and your benefits
        </p>
      </div>
      <div className='flex sm:flex-row flex-col w-full gap-[3rem] md:py-16 py-10'>
        <div className='bg-about-one p-3 rounded-[30px] flex-1 flex justify-center items-center'>
          <img src={womanGrocery} alt="womanGrocery" />
        </div>
        <div className='bg-about-two p-3 rounded-[30px] justify-center items-center md:flex hidden'>
          <img src={groceryBag} alt="groceryBag" />
        </div>

      </div>
      <div className='flex md:flex-row flex-col justify-around items-center w-full md:gap-[5rem] gap-[1rem] mt-10 mb-10 sm:mt-16 sm:mb-16'>
        <h2 className='sm:text-[2.8rem] text-[2.5rem] text-primary-gradient font-semibold whitespace-nowrap'>
          What We Do
        </h2>
        <p className='text-[20px] sm:text-[24px] text-[#248d22] sm:leading-[40px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum dolore iste fugiat cum maxime, mollitia libero quae iure exercitationem, animi ad. Ullam voluptatem hic voluptates minus earum maxime tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse quis quae tempore praesentium labore beatae tenetur amet, possimus autem dolorem fugit facere fugiat quasi maiores itaque porro. Eveniet, similique.
        </p>

      </div>
      <div className='bg-about-two p-3 rounded-[30px] flex justify-center items-center md:hidden '>
        <img src={groceryBag} alt="groceryBag" />
      </div>
      <div>
        <Stats />
      </div>
    </div>
  )
}

export default About