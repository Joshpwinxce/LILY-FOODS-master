import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { facebooklogo, instagramlogo, twitterlogo, linkedinlogo, location, call } from '../assets'

const Footer = () => {
    //+971524506575
  return (
    <div className='bg-[#00d084]'>
        <div className='bg-[#00d084] p-3 flex justify-around flex-wrap'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center gap-[1rem] p-2'>
                    <img src={logo} alt="LILY FOODS"  className='h-[50px] w-[50px] object-contain'/>
                    <p className='text-[1.5rem] text-[#fff]'>
                        LILY FOODS
                    </p>
                </div>
                <div className='flex gap-[1rem]'>
                    <img src={facebooklogo} alt="facebooklogo" className='h-[25px] w-[25px] object-contain' />
                    <img src={twitterlogo} alt="twitterlogo" className='h-[25px] w-[25px] object-contain' />
                    <img src={instagramlogo} alt="instagramlogo" className='h-[25px] w-[25px] object-contain' />
                    <img src={linkedinlogo} alt="linkedinlogo" className='h-[25px] w-[25px] object-contain' />
                </div>
            </div>
            <div className='flex flex-col text-[#fff] gap-[1rem]'>
                <h2 className='font-bold text-[1.2rem]'>
                    Support
                </h2>
                <Link>
                    Faqs
                </Link>
                <Link>
                    Delivery
                </Link>
                <Link to='/contact'>
                    Contact Us
                </Link>
            </div>
            <div className='flex flex-col text-[#fff] gap-[1rem]'>
                <h2 className='font-bold text-[1.2rem]'>
                        Contact
                </h2>
                <div className='flex gap-[1rem]'>
                    <img src={location} alt="location:" className={`h-[25px] w-[25px] object-contain`} />
                    <address>
                    Al wasan building teecom, Nigeria
                    </address>
                </div>
                <div className='flex gap-[1rem]'>
                    <img src={call} alt="call:" className={`h-[25px] w-[25px] object-contain`} />
                    <a href="tel:+971524506575">+971524506575</a>
                </div>
            </div>
        </div>
        <div className='text-center text-[#fff] border-t-2 border-dashed border-white p-4'>
            <p>
                &copy;2023 lily foods
            </p>
        </div>
    </div>
  )
}

export default Footer