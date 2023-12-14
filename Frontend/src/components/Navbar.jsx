import React from 'react'
import { navLinks } from '../constants'
import { NavLink, Link } from 'react-router-dom'
import { logo, cart, user, menu, close, uparrow, downarrow } from '../assets'
import { products } from '../constants'
import { useState } from 'react'
import { productCart } from './HomeMenu'

const Navbar = () => {
const [toggle, setToggle] = useState(false)
const [loginToolTip, setLoginToolTip] = useState(false)
const [searchItemBox, setSearchItemBox] = useState(false)
const [cartNumber, setCartNumber] = useState(productCart.length)
const [filteredProducts, setFilteredProducts] = useState([])

const littleTrick = () => {
  setCartNumber(productCart.length)
}

const filterSearch = (e) => {
  const { value } = e.target
  if(value == '') {
    setSearchItemBox(false)
  }else {
    setSearchItemBox(true)
  }

  const filteredProduct = products.filter((item) => {
    return item.name.toLowerCase().includes(value)
  })

  setFilteredProducts(filteredProduct)
}

  return (
    <nav className={`bg-[#c5f0ca] sm:py-7 sm:px-10 md:px-20 p-2 z-[100] fixed w-full top-0`}>
      <div>
        <div className='flex items-center justify-between '>
          <Link to='/' className='flex items-center'>
            <img src={logo} className='h-[45px] w-[45px]' />
            <h1 className='text-primary-gradient font-bold text-[1.8rem] ml-[1rem] sm:flex hidden'>
              LILY FOODS
            </h1>
            <h1 className='text-primary-gradient font-bold text-[1.8rem] ml-[1rem] sm:hidden flex'>
              LF
            </h1>
          </Link>
          <div className=' sm:flex hidden flex-col relative'>
            <input type="search" placeholder='search' className='h-[40px] px-7 mt-5 outline-none' onChange={filterSearch} />
            <div className={`w-full bg-[#fff] form-shadow ${searchItemBox ? 'flex' : 'hidden'} p-4 rounded-b-[10px] flex-col gap-[.5rem] h-[400px] overflow-auto absolute top-[60px]`}>
                  {filteredProducts.map((product, index) => (
                    <a key={index} href={`/menu#${product.name}`} onClick={() => setSearchItemBox(false)} className='flex justify-between items-center cursor-pointer'>
                      <img src={product.img} alt="product.name" className='h-[60px] w-[60px] rounded-full' />
                      <p>
                        {product.name}
                      </p>
                    </a>
                  ))}
            </div>
          </div>
          <div className='lg:justify-between justify-center items-center gap-[3rem] flex-wrap md:flex hidden'>
            <div className='gap-10'>
              {navLinks.map((link, index) => (
                <NavLink key={index} to={link.path} className={`mr-[3rem] font-semibold text-[1.2rem] text-[#2dbc3e]`} >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className='flex'>
              <Link to='/cart' onClick={littleTrick}>
                <div className='mr-[2.3rem] relative'>
                  <img src={cart} alt='cart' className='h-[60px] w-[60px] object-contain' />
                  <div className='h-[30px] w-[30px] flex justify-center items-center text-white absolute rounded-full bg-[#00d084] top-0 right-0 border-[3px] border-[#c5f0ca] border-solid'>{cartNumber}</div>
                </div>
              </Link>
              <div className='flex justify-center items-center relative' onMouseEnter={() => setLoginToolTip((prev) => (!prev))} onMouseLeave={() => setLoginToolTip((prev) => (!prev))}>
              <img src={user} alt="user" className='sm:h-[50px] sm:w-[50px] h-[50px] w-[50px] object-contain' />
              <img src={loginToolTip ? uparrow : downarrow} alt="" className='h-[20px] w-[15px] object-contain mt-[20px] ' />
              <div className={`${loginToolTip ? 'flex' : 'hidden'} absolute top-[60px] grid bg-[#fff] p-2 px-4 product-shadow rounded-[5px]`}>
                <Link to='/login_signup' className='py-1'>
                  Login
                </Link>
                <hr className='text-[#00d088]' />
                <Link to='/login_signup' className='whitespace-nowrap py-1 '>
                  Sign up
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className='md:hidden flex'>
            <Link to="/cart" onClick={littleTrick}>
              <div className='sm:mr-[2.3rem] mr-[0.5rem] relative'>
                <img src={cart} alt='cart' className='sm:h-[60px] sm:w-[60px] h-[50px] w-[50px] object-contain' />
                <div className='h-[25px] w-[25px] flex justify-center items-center text-white absolute rounded-full bg-[#00d084] top-0 right-0 border-[3px] border-[#c5f0ca] border-solid text-[13px]'>{productCart.length}</div>
              </div>
            </Link>
            <div className='flex justify-center items-center relative' onClick={() => setLoginToolTip((prev) => (!prev))}>
              <img src={user} alt="user" className='sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] object-contain' />
              <img src={loginToolTip ? uparrow : downarrow} alt="" className='h-[20px] w-[15px] object-contain mt-[20px] ' />
              <div className={`${loginToolTip ? 'flex' : 'hidden'} absolute top-[50px] grid bg-[#fff] p-2 px-4 product-shadow rounded-[5px]`}>
                <Link to='/login_signup' className='py-1'>
                  Login
                </Link>
                <hr className='text-[#00d088]' />
                <Link to='/login_signup' className='whitespace-nowrap py-1 '>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={toggle ? close : menu} className={`object-contain ${toggle ? 'w-[37px] h-[37px]' : 'w-[50px] h-[50px]'} md:hidden flex`} onClick={() => {setToggle((prev) => (!prev))}} />
          </div>
          <div className={`grid absolute top-[70px] w-[90%] right-[1%] bg-[#00c084] leading-[95px] ${toggle ? 'flex' : 'hidden'} mobile-navbar md:hidden flex`}>
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className={` font-semibold text-[1.2rem] text-[#dbfeb8] flex justify-center items-center border-t-2 border-solid border-[#dbfeb8]`} onClick={() => setToggle(false)} >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=' sm:hidden flex flex-col'>
        <input type="search" placeholder='search' className='w-[100%] h-[40px] px-7 mt-5 outline-none' onChange={filterSearch} />
        <div className={`w-full bg-[#fff] form-shadow ${searchItemBox ? 'flex' : 'hidden'} p-4 rounded-b-[10px] flex-col gap-[.5rem] h-[400px] overflow-auto`}>
              {filteredProducts.map((product, index) => (
                <a key={index} href={`/menu#${product.name}`} onClick={() => setSearchItemBox(false)} className='flex justify-between items-center cursor-pointer'>
                  <img src={product.img} alt="product.name" className='h-[60px] w-[60px] rounded-full' />
                  <p>
                    {product.name}
                  </p>
                </a>
              ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar