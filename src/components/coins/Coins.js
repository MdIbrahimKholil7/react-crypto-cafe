import React, { useEffect, useState } from 'react';
import Coin from './coin/Coin';

const Coins = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div>
            <div>
                <div className='mt-9'>
                    <h1 className='text-3xl mb-3 font-mono'>Available Crypto Currencies</h1>
                    <h3 className='text-gray-400 text-xl mb-5'>Total Coins:{coins.length}</h3>
                </div>
                <div className='max-w-4xl px-3 md:px-0 mx-auto w- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {
                        coins.map(coin => <Coin coin={coin}></Coin>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Coins;