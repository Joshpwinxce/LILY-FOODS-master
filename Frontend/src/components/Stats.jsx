import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div className='flex justify-center sm:justify-around flex-wrap items-center bg-[#abf0b3] sm:p-10 p-10 rounded-tl-[120px] rounded-br-[120px] sm:w-[80vw] gap-[2rem] my-10 sm:my-20'>
        {stats.map((stat, index) => (
            <div key={index} className='flex justify-center items-center flex-col p-5 gap-[1rem]'>
                <h1 className='text-[2rem] sm:text-[3rem] font-semibold'>
                    {stat.value}
                    <span className='text-[#38E54D]'>
                        {stat.unit}
                    </span>
                </h1>
                <h2 className='text-[1.3rem] sm:text-[1.5rem] text-center'>
                    {stat.name}
                </h2>
            </div>
        ))}
    </div>
  )
}

export default Stats