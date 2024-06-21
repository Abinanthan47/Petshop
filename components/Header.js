import React from 'react';
import logo from '../public/img/header/logo.svg'
import Image from 'next/image';
import { IoIosPaw } from "react-icons/io";
const Header = () => {
  return (
  <header className=' py-6 lg:absolute lg:w-full lg:left-0'>
<div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative">
  <a href="#">
  <IoIosPaw />
    <Image src={logo}/>
  </a>
  <nav className='text-xl flex gap-x-4 lg:gap-x-12 '>
<a href="#" className='hover:text-orange-600'>Services</a>
<a href="#"className='hover:text-orange-600'>About</a>
<a href="#" className='hover:text-orange-600'>Blog</a>
<a href="#" className='hover:text-orange-600'>Contact</a>
  </nav>
  <button className='btn btn-primary lg:btn-outline'>Sign up</button>
</div>
  </header>
  
);
};

export default Header;
