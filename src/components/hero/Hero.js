import React from 'react';
import { Link } from 'react-router-dom';
import { FaMugHot } from 'react-icons/fa';
// import { faCakeCandles, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className='w-full h-[100vh] bg-slate-800 grid place-items-center'>
            <div className='text-white'>
                <h1 className='text-4xl flex items-centerfont-serif leading-[4rem]'>Welcome to Marvel Crypto <span className='ml-8 flex items-center'><FaMugHot/></span></h1>
                <Link className='bg-slate-600 py-3 px-6 rounded-lg mt-6 inline-block duration-300 text-lg hover:bg-slate-500'  to={'/coins'}>Explore Coins</Link>
            </div>
        </div>
    );
};

export default Hero;