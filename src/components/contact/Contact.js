import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='h-[90vh] bg-zinc-800 text-white'>
            <div className='pt-10 text-center'>
                <h1 className='text-3xl mb-10'>Contact Us Our Office Address Down Below</h1>
                <Link to='BdAdress ' className='py-3 px-5 bg-slate-600 text-sm mr-5 rounded-lg '>Bd Office</Link>
                <Link to='UsaAddress' className='py-3 px-5 bg-slate-600 text-sm mr-5 rounded-lg'>USA Office</Link>
            </div>
            <div className='mt-[100px] '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;