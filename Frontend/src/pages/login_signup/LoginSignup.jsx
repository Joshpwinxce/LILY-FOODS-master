import React from 'react'
import { useRef, useState } from 'react'

const LoginSignup = ({ activeOne }) => {
    const [activeForm, setActiveForm] = useState(0)
    const loginFormRef = useRef()
    const signupFormRef = useRef()
    const [loginForm, setLoginForm] = useState({
        emailPhone: '',
        password: '',
    })

    const [signupForm, setSignupForm] = useState({
        fullName: '',
        email:'',
        phone:'',
        password:'',
    })

    const handleChange = () => {}
    const handleLoginChange = (e) => {
        const { name, value } = e.target
        setLoginForm({...loginForm, [name] : value})
    }
    const handleSignupChange = (e) => {
        const { name, value } = e.target
        setSignupForm({...signupForm, [name] : value})
    }
    const handleSubmit = () => {}

  return (
    <div className='sm:px-20 md:px-28 p-3 pt-36 sm:pt-36 lg:pt-44 md:pt-56 flex md:justify-between justify-center items-center flex-col mb-10'>
        <div className='w-full flex md:justify-between justify-center items-center flex-col'>
            <div className='flex bg-white product-shadow ss:w-[600px] w-full rounded-t-[20px]'>
                <div className={`p-5 w-[50%] flex justify-center items-center rounded-tl-[20px] ${activeForm === 0 ? 'bg-[#00c084] cursor-default' : 'bg-[#fff] cursor-pointer'}`} onClick={() => setActiveForm(0)}>
                    Log in
                </div>
                <div className={`p-5 w-[50%] flex justify-center items-center rounded-tr-[20px] ${activeForm === 1 ? 'bg-[#00c084] cursor-default' : 'bg-[#fff] cursor-pointer'}`} onClick={() => setActiveForm(1)}>
                    Sign Up
                </div>
            </div>
            <form method='get' ref={loginFormRef} className={` ${activeForm === 0 ? 'flex' : 'hidden'} flex-col bg-[#eff6f3] form-shadow p-4 sm:p-7 ss:w-[600px] w-full rounded-b-[20px]`}>
                <label htmlFor="emailPhone" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
                <span className='text-[#00d084] font-semibold'>Email or Phone</span>
                <input type="text" name='emailPhone' placeholder='idan@gmail.com' value={loginForm.emailPhone} onChange={handleLoginChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
                </label>
                <label htmlFor="password" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
                <span className='text-[#00d084] font-semibold'>Password</span>
                <input type="password" name='password' placeholder='password' value={loginForm.password} onChange={handleLoginChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
                </label>
                <button type='submit' className='p-3 bg-[#00d084] mt-5 text-[#fff] font-semibold rounded-[10px] vs:w-[32%] w-[36%] vs:ml-[34%] ml-[32%]'>Log in</button>
            </form>
            <form method='get' ref={loginFormRef} className={` ${activeForm === 1 ? 'flex' : 'hidden'} flex flex-col bg-[#eff6f3] form-shadow p-4 sm:p-7 ss:w-[600px] w-full rounded-b-[20px]`}>
                <label htmlFor="fullName" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
                <span className='text-[#00d084] font-semibold'>Full Name</span>
                <input type="text" name='fullName' placeholder='e.g Idan Vawulence' value={signupForm.fullName} onChange={handleSignupChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
                </label>
                <label htmlFor="email" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
                <span className='text-[#00d084] font-semibold'>Email Address</span>
                <input type="email" name='email' placeholder='e.g idan2023@gmail.com' value={signupForm.email} onChange={handleSignupChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
                </label>
                <label htmlFor="phone" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
                <span className='text-[#00d084] font-semibold'>Phone Number</span>
                <input type="tel" name='phone' placeholder='e.g +2349160649124' value={signupForm.phone} onChange={handleSignupChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
                </label>
                <label htmlFor="password" className='flex flex-col gap-[1rem] mb-5 p-5 py-7 bg-[#63d7ad3c] rounded-[20px]'>
                <span className='text-[#00d084] font-semibold'>Password</span>
                <input type="password" name='password' placeholder='password' value={signupForm.password} onChange={handleSignupChange} className='p-2 px-5 border-b-2 border-[#00d084] border-solid rounded-[10px] outline-none focus:p-3' />
                </label>
                <button type='submit' className='p-3 bg-[#00d084] mt-5 text-[#fff] font-semibold rounded-[10px] vs:w-[32%] w-[36%] vs:ml-[34%] ml-[32%]'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default LoginSignup