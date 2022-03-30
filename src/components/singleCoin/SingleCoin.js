import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCoin = () => {
    const id = useParams()
    const [coin, setCoin] = useState({})
    const { name, image, symbol, market_cap_rank, roi, high_24h, last_updated } = coin
    console.log(coin)
    useEffect(() => {
        const url=`https://api.coingecko.com/api/v3/coins/${id.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])
    return (
        <div className='bg-slate-300'>
            <div className='grid  h-[90vh] md:grid-cols-2 gap-14 place-items-center md:max-w-3xl mx-auto'>
                <div className="details">
                    <h1 className='text-left text-3xl mb-4'>General Info</h1>
                    <div className='text-left'>
                        <p>Coin Name:{name}</p>
                        <p>Market Cap Rank:{market_cap_rank}</p>
                        <p>Last Updated:{last_updated}</p>
                        <p>Currency:{roi?roi.currency:'No currency available'}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='w-[230px] h-[230px] object-contain' src={image?.large} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleCoin;