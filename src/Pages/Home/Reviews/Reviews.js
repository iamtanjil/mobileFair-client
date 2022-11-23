import React from 'react';
import user1 from '../../../assest/user/user1.jpg';
import user2 from '../../../assest/user/user2.jpg';
import user3 from '../../../assest/user/user3.jpg';
import quote from '../../../assest/quote.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'William James',
            img: user1,
            review: 'This is a aweseome website for buying resell product these people are very trustful and proffeisonal on their business.',
            location: 'Washinton'
        },
        {
            _id: 2, 
            name: 'Grayson Brookshire',
            img: user2,
            review: 'This is a aweseome website for buying resell product these people are very trustful and proffeisonal on their business.',
            location: 'NewYork'
        },
        {
            _id: 3, 
            name: 'John Doe',
            img: user3,
            review: 'This is a aweseome website for buying resell product these people are very trustful and proffeisonal on their business.',
            location: 'Florida'
        },
    ];
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-orange-600 font-bold">Reviews</h4>
                    <h2 className="text-4xl">What Our Buyers Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;