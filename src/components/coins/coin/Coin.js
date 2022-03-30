import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ coin }) => {
    const { image, name, symbol,id } = coin
    return (
        <Link to={`/coins/${id}`}>
            <div className='flex justify-between rounded-lg items-center shadow-lg py-5 px-5 cursor-pointer'>
                <img className='w-[50px] h-[50px] object-cover' src={image} alt="coin image" />
                <div>
                    <h1>{name}</h1>
                    <p className='text-gray-300 text-sm'>{symbol}</p>
                </div>
            </div>
        </Link>
    );
};

export default Coin;