import React from 'react'
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    message: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name] : value})
  }
  const handleSubmit = () => {} //For the backend guy


  return (
    <div className='sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center flex-col mb-10'>
      <div className='flex justify-center flex-col items-center mb-5'>
        <h1 className='sm:text-[2.8rem] text-[2.5rem] text-primary-gradient font-semibold lg:mt-10'>
          Contact Us
        </h1>
        <p className='text-[20px] text-center sm:text-[24px] text-[#248d22]'>
          Have a message for us? fill the form below <br className='sm:flex hidden' /> to contact us
        </p>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col bg-[#eff6f3] product-shadow p-4 sm:p-7 ss:w-[600px] w-full rounded-[20px]' >
        <label htmlFor="name" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
          <span className='text-[#00d084] font-semibold'>Name</span>
          <input type="text" name='name' placeholder='e.g Idan' value={form.name} onChange={handleChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
        </label>
        <label htmlFor="email" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
          <span className='text-[#00d084] font-semibold'>Email Address</span>
          <input type="tel" name='email' placeholder='e.g idan2023@gmail.com' value={form.email} onChange={handleChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
        </label>
        <label htmlFor="phone" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
          <span className='text-[#00d084] font-semibold'>Phone Number</span>
          <input type="number" name='phone' placeholder='e.g +2349160649124' value={form.number} onChange={handleChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
        </label>
        <label htmlFor="message" className='flex flex-col gap-[1rem] p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
          <span className='text-[#00d084] font-semibold'>Name</span>
          <textarea rows={5} name='name' placeholder='What you have to say' value={form.email} onChange={handleChange} className='p-3 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-5' />
        </label>
        <button type='submit' className='p-3 bg-[#00d084] mt-5 text-[#fff] font-semibold rounded-[10px] vs:w-[32%] w-[36%] vs:ml-[34%] ml-[32%]'>Send</button>
      </form>
    </div>
  )
}

export default Contact