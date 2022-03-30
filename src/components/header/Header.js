import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import './Header.css'
const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className='w-full px-8 bg-gray-800 flex items-center justify-between h-[80px] sticky top-0 shadow-lg'>
            <nav className='w-full  mx-auto flex justify-between items-center text-white md:max-w-4xl'>
                <div className="logo">
                    <h1 className='text-[22px] sm:text-2xl md:text-3xl  font-mono'><Link to={'/'}>Marvel Crypto</Link></h1>
                </div>
                <div className='md:hidden' onClick={()=>setOpen(!open)}>
                    {
                        open ? <XIcon className='w-6 h-6'></XIcon>:<MenuIcon className='h-6 w-6'/>
                    }
                </div>
                <div className={`{md:flex  md:block ${open ? 'menu':'ul' }}`}>
                    <Link className='link ml-4' to={'/'}>Home</Link>
                    <Link className='link ml-4' to={'/coins'}>Coins</Link>
                    <Link className='link ml-4' to={'/contact'}>Contact</Link>
                    <Link className='link ml-4' to={'/about'}>About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;