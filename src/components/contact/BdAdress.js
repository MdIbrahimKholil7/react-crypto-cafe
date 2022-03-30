import React from 'react';

const BdAdress = () => {
    return (
        <div className='px-16'>
            <div className=' mx-auto border-solid border-2 border-slate-300-600 py-8 md:flex justify-between items-center max-w-4xl px-3 md:px-[80px] '>
                <div className='text-left mx-auto w-[230px] mb-5 md:mb-0  '>
                    <h1>Street: 17/4 Dhanmondi.</h1>
                    <h1>City: Dhaka</h1>
                    <h1>Phone: +8801622222456</h1>
                    <h1>Email: contact.bd@cc.com</h1>
                </div>
                <div className='md:order-2 order-1'>
                    <h1 className='text-2xl'>BANGLADESH OFFICE</h1>
                </div>
            </div>
        </div>
    );
};

export default BdAdress;