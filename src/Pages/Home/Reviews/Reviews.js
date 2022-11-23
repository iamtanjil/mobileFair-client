import React from 'react';
import user1 from '../../../assest/user/user1.jpg';
import user2 from '../../../assest/user/user2.jpg';
import user3 from '../../../assest/user/user3.jpg';

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
        <div>
            
        </div>
    );
};

export default Reviews;