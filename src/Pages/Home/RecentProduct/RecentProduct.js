import React from 'react';
import { useQuery } from '@tanstack/react-query';

const RecentProduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/recentlyadded')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='mt-12'>
            <h2 className="text-5xl text-center">Recently Added</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    products.map(product =>
                        <div key={product._id} className="card w-full h-[450px] bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.productImage} alt="Shoes" className="rounded-xl w-full h-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name:{product.productName}</h2>
                                <p className='text-xl'><strong>Price {product.productPrice}</strong> Taka</p>
                                <p className='text-lg'>Location: {product.location}</p>
                                <div className="card-actions">
                                    <button className="btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-5 mb-3">Book Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RecentProduct;