import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CheckOutForm = ({ bookings }) => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();


    const { offeringPrice, buyerName, buyerEmail, _id } = bookings;
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://assignment-12-server-mu.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ offeringPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [offeringPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                bookingId: _id,
                price: offeringPrice,
                transactionId: paymentIntent.id,
                email: buyerEmail
            }
            fetch('https://assignment-12-server-mu.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setSuccess('Congratulation! Your Payment is Successful.');
                    setTransactionId(paymentIntent.id);
                })
        }
        setProcessing(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-orange-600 text-white hover:bg-orange-700 border-none mt-5 mb-3' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                <p className="text-red-600">{cardError}</p>
                {
                    success &&
                    <div>
                        <p className='text-green-600'>{success}</p>
                        <p className='text-green-600'>Trx ID: <strong>{transactionId}</strong></p>

                        <p>Check Here:<Link className='btn btn-link' to='/dashboard/orders'>
                            My Orders </Link> </p>

                    </div>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;