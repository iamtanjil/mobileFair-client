import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductsCard from './ProductsCard';

const Products = () => {
    const products = useLoaderData();
    const [booking, setBooking] = useState(null);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 ml-2 mb-5'>
            {
                products.map(product => <ProductsCard
                    key={product._id}
                    product={product}
                    setBooking={setBooking}
                ></ProductsCard>)
            }
            {
                booking &&
                <BookingModal
                    booking={booking}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;