import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const Payments = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    const bookings = useLoaderData();
    return (
        <div className='p-7'>
            <h2 className='text-3xl'>Payments for: <strong>{bookings.productName}</strong></h2>
            <h2 className='text-xl mt-2'>Price: <strong>{bookings.offeringPrice}TK</strong></h2>
            <div className=' max-w-sm shadow-md p-5 rounded mt-3'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                    bookings={bookings}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payments;