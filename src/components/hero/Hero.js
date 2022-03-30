import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='w-full h-[100vh] bg-slate-800 grid place-items-center'>
            <div className='text-white'>
                <h1 className='text-4xl font-serif leading-[4rem]'>Welcome to Marvel Crypto</h1>
                <Link className='bg-slate-600 py-3 px-6 rounded-lg mt-6 inline-block'  to={'/coins'}>Explore Coins</Link>
                
            </div>
        </div>
    );
};

export default Hero;