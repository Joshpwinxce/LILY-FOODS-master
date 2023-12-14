import React from "react"
import { useState, useRef } from "react"

const PlacedOrder = () => {
    const deliveryFormRef = useRef()
    const [deliveryForm, setDeliveryForm] = useState({
      deliveryAddress: '',
      phone: '',
      deliveryMessage: '',
    })
  
    const handleSubmit = (e) => {}
    const handleChange = (e) => {
      const {name, value} = e.target
      setDeliveryForm({...deliveryForm, [name] : value})
    }
    return (
      <div>
        <div>
  
        </div>
        <form ref={deliveryFormRef} onSubmit={handleSubmit} className='flex flex-col bg-[#eff6f3] product-shadow p-4 sm:p-7 ss:w-[600px] w-full rounded-[20px]' >
          <label htmlFor="deliveryAddress" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
            <span className='text-[#00d084] font-semibold'>Delivery Address</span>
            <input type="text" name='deliveryAddress' placeholder='delivery address' value={deliveryForm.deliveryAddress} onChange={handleChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
          </label>
          <label htmlFor="phone" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
            <span className='text-[#00d084] font-semibold'>Phone Number</span>
            <input type="tel" name='phone' placeholder='e.g +2349160649124' value={deliveryForm.phone} onChange={handleChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
          </label>
          <label htmlFor="deliveryMessage" className='flex flex-col gap-[1rem] p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
            <span className='text-[#00d084] font-semibold'>Delivery Message</span>
            <textarea rows={5} name='deliveryMessage' placeholder='What you have to say' value={deliveryForm.deliveryMessage} onChange={handleChange} className='p-3 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-5' />
          </label>
          <button type='submit' className='p-3 bg-[#00d084] mt-5 text-[#fff] font-semibold rounded-[10px] vs:w-[32%] w-[44%] vs:ml-[34%] ml-[28%]'>Check Out</button>
        </form>
      </div>
    )
}

export default PlacedOrder