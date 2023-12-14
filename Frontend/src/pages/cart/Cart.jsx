import React from 'react'
import { productCart } from '../../components/HomeMenu'
import { useState, useRef } from 'react'
import { close } from '../../assets'
import PlacedOrder from '../../components/PlacedOrder'

const Cart = () => {
  const [realProductCart, setRealProductCart] = useState(productCart)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const incrementQuantity = (index) => {
    const updatedProductCart = [...realProductCart]
    updatedProductCart[index] = {
      ...updatedProductCart[index], quantity: updatedProductCart[index].quantity + 1
    }
    console.log(updatedProductCart[index].quantity)

    setRealProductCart(updatedProductCart)
  }

  const decrementQuantity = (index) => {
    const updatedProductCart = [...realProductCart]
    if(updatedProductCart[index].quantity > 1) {
      updatedProductCart[index] = {
        ...updatedProductCart[index], quantity: updatedProductCart[index].quantity - 1
      }
    } else {
      updatedProductCart.splice(index, 1)
    }

    setRealProductCart(updatedProductCart)
  }
  
  if (realProductCart.length > 0) return (
    <div className='sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center flex-col min-h-[70vh]'>
      <div className={` ${showOrderForm ? 'blur-[5px]' : 'blur-0'} bg-[#c5f0ca] gap-[1rem] flex flex-col vs:p-4 rounded-[20px] product-shadow`}>
        {realProductCart.map((cartProduct, index) => (
          <div key={index} className={`flex vs:w-[80vw] ss:w-[450px] w-[95vw] sm:p-3 justify-between items-center`}>
            <div className=' p-2'>
            <img src={cartProduct.img} alt="product" className='h-[70px] w-[70px] rounded-full' />
            </div>
          <div>
            <h3 className='font-semibold'>{cartProduct.name}</h3>
            <p className='italic'>price: $15</p>
          </div>
          <div className='flex justify-center items-center vs:gap-[1rem] gap-[.3rem] font-semibold p-2'>
            <div className='h-[30px] w-[30px] bg-[#00d084] rounded-full text-white font-semibold text-[1.2rem] flex justify-center items-center cursor-pointer' onClick={() => incrementQuantity(index)}>+</div>
            <span className='text-[#00d084] text-[1.4rem]'>{cartProduct.quantity}</span>
            <div className='h-[30px] w-[30px] bg-[#00d084] rounded-full text-white font-semibold text-[1.2rem] flex justify-center items-center cursor-pointer' onClick={() => decrementQuantity(index)}>-</div>
          </div>
          </div>
        ))}
        <button className='p-2 vs:p-3 w-[90%] ml-[5%] bg-[#00d084] rounded-[10px]' onClick={() => setShowOrderForm((prev) => (!prev))}>place order</button>
      </div>
      <div className={`absolute sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center flex-col mb-10 top-0 ${showOrderForm ? 'flex' : 'hidden'}`}>
        <div className={`h-[40px] w-[40px] bg-[#fff] rounded-full ss:ml-[510px] ml-[240px] flex justify-center items-center mb-2 product-shadow cursor-pointer`}>
          <img src={close} alt="close" className={`h-[25px] w-[25px] object-contain`} onClick={() => setShowOrderForm((prev) => (!prev))} />
        </div>
          <PlacedOrder />
      </div> 
    </div>
  ) 
  else return (
    <div className='sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center flex-col min-h-[70vh]'>
      <div className='flex flex-wrap sm:justify-around justify-center items-center gap-[2rem] bg-[#c5f0ca] vs:w-[85%] sm:w-[80%] w-[90%] mt-7 mb-4 p-5 sm:p-8 rounded-[10px]'>
        <h3 className='sm:text-[30px] text-[24px] text-[#538d22]'>
          Oops you don't have any products on your cart would you love to add some products
        </h3>
        <button className='w-[200px] sm:p-7 p-4 bg-[#00d084] rounded-[10px] text-[#fff] text-[1.3rem]'>
          <a href="/menu">
            See Products
          </a>
        </button>
      </div>
    </div>
  )
}

export default Cart