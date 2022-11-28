import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BookingModal from '../../Products/BookingModal';

const RecentProduct = () => {
    const [booking, setBooking] = useState(null);
    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-mu.vercel.app/recentlyadded')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='mt-20'>
            <h2 className="text-5xl text-center">Recently Added</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12'>
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
                                    <label onClick={() => setBooking(product)} htmlFor='booking-modal' className="btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-5 mb-3">Book Now</label>
                                </div>
                            </div>
                        </div>
                    )
                }
                {booking &&
                    <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default RecentProduct;