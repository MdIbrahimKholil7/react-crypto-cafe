import React from 'react';
import { FaFacebook,FaGithub,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    
    return (
        <div className='py-10 bg-gray-800 text-white'>
            <div className='grid grid-cols-4 gap-4 mx-auto w-40 text-xl'>
                <FaFacebook></FaFacebook>
                <FaGithub/>
                <FaTwitter/>
                <FaLinkedinIn/>
            </div>
            <div className='mt-5 text-sm text-center sm:text-base md:text-xl '>
                <h1>All Right Reserved By &copy; Marvel Crypto 2022 | 2030</h1>
            </div>
        </div>
    );
};

export default Footer;