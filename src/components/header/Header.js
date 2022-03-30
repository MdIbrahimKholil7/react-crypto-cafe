import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full bg-cyan-800 py-4 sticky top-0'>
            <nav className='max-w-4xl mx-auto flex justify-between items-center text-white'>
                <div className="logo">
                    <h1 className='text-3xl font-mono'>Marvel Crypto</h1>
                </div>
                <div className="menu flex justify-between items-center text-lg font-thin font-bold">
                    <Link className='ml-4' to={'/'}>Home</Link>
                    <Link className='ml-4' to ={'/coins'}>Coins</Link>
                    <Link className='ml-4' to ={'/contact'}>Contact</Link>
                    <Link className='ml-4' to ={'/about'}>About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;