import React from 'react'
import { products } from '../constants'
import { Link } from 'react-router-dom'

export let productCart = []
console.log(productCart)


const HomeMenu = () => {
    const tenProducts = products.slice(0, 6)

  return (
    <div className={`pt-20 flex flex-col justify-center items-center`}>
        <div>
            <h3 className='text-primary-gradient text-[22px] text-center sm:mb-6 mb-4'>
                Our Products
            </h3>
            <h2 className='sm:text-[2.8rem] text-[2.5rem] text-primary-gradient font-semibold sm:leading-[65px] text-center vs:mb-8 sm:mb-14 mb-4'>
                Choose from our large store of recipes
            </h2>
        </div>
        <div className='flex justify-center items-center flex-wrap vs:gap-[4rem] gap-[2rem]'>
            {tenProducts.map((product, index) => (
                <div key={index} className='bg-[#fff] product-shadow w-[90%] vs:w-[350px] flex flex-col justify-center items-center mt-5 sm:p-4 p-3 rounded-[20px] relative'>
                    <h3 className='text-[#00d888] font-semibold text-[1.3rem]'>
                        {product.name}
                    </h3>
                    <div className='sm:w-[340px] w-[80%] h-[300px] p-5 '>
                        <img src={product.img} alt={product.name} className='h-[100%] w-[100%] object-contain' />
                    </div>
                    <button className='w-[80%] rounded-full p-3 bg-[#00d084] skew-x-6 mb-5' onClick={() => {
                        if(!productCart.includes(product)){productCart.push(product)}
                        product.quantity = 1
                        console.log('product pushed to cart')
                        console.log(productCart)
                    }}>
                        Add to cart
                    </button>
                    <Link to='/cart' className='w-[80%] p-3 rounded-full product-shadow bg-[#fff] skew-x-6 flex justify-center items-center' onClick={() => {
                        if(!productCart.includes(product)){productCart.push(product)}
                        product.quantity = 1
                        console.log('product pushed to cart')
                        console.log(productCart)
                    }}>
                        Order Now
                    </Link>
                </div>
            ))}
        </div>
        <div className='flex flex-wrap sm:justify-around justify-center items-center gap-[2rem] bg-[#c5f0ca] vs:w-[85%] sm:w-[80%] w-[90%] mt-7 mb-4 p-5 sm:p-8 rounded-[10px]'>
            <h3 className='sm:text-[30px] text-[24px] text-[#538d22]'>
                Can&apos;t find what you are looking for? 
            </h3>
            <button className='w-[200px] sm:p-7 p-4 bg-[#00d084] rounded-[10px] text-[#fff] text-[1.3rem]'>
                <a href="/menu">
                    See more
                </a>
            </button>
        </div>
    </div>
  )
}

export default HomeMenu