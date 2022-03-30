import React from 'react';

const UsaAddress = () => {
    return (
        <div className='px-16'>
            <div className=' mx-auto border-solid border-2 border-slate-300-600 py-8 md:flex justify-between items-center max-w-4xl px-3 md:px-[80px] '>
                <div className='text-left mx-auto w-[230px] mb-5 md:mb-0  '>
                    <h1>Street: 1203 SN Street</h1>
                    <h1>City: New York</h1>
                    <h1>Phone: +1(607)2333333</h1>
                    <h1>Email: contact.usa@cc.com</h1>
                </div>
                <div className='md:order-2 order-1'>
                    <h1 className='text-2xl'>USA OFFICE</h1>
                </div>
            </div>
        </div>
    );
};

export default UsaAddress;