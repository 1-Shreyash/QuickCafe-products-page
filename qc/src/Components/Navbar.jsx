import React from 'react'

import {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="shadow-lg sticky absolute top-2 flex justify-between items-center h-16 mx-auto px-4 text-white bg-[#2874f0]  rounded-xl w-[99%] text-l">
      {/* <Image src={zetlogo} className='h-10 -ml-5'/> */}
      <div className="flex justify-center items-center mx-6 text-4xl text-white lemon-regular max-md:mx-10 font-[lobster]">
          Quick Cafe
      </div>
      <ul className='hidden md:flex'>
        <li className='p-2'><Link to="/">Products</Link></li>
        <li className='p-2'><Link to="/About">About us</Link></li>
        <li className='p-2'><Link to="/Contact">Contact us</Link></li>
        <li className='p-1'><button className='rounded p-1'>Login</button></li>
        <li className='p-1'><button className='rounded p-1'>Sign Up</button></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30} className='fixed right-5 top-6'/> : <AiOutlineMenu size={30} className='fixed left-5 top-6'  />  }
      </div>

      <div className={(nav) ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-white text-black border-r-gray-900 ease-in-out duration-500 z-2 ' : 'fixed left-[-100%] text-black top-0 w-[60%] h-full border-r bg-white border-r-gray-900 ease-in-out duration-500 z-2 '}>
        <ul className='pt-12 uppercase p-4'>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}><Link to="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}><Link to="/About">About us</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}><Link to="/Contact">Contact us</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}>Log In</li>
          <li className='p-2'><button className='rounded p-2' onClick={() => handleNav()}>Sign Up</button></li>
        </ul>
      </div>
    </div>
  )
}
