import React from 'react';
import background from '../../../assest/e-commerce-shipping.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner-bg mt-5 p-10 rounded-lg'>
            <div className='banner-bg-overlay'></div>
            <div className="hero p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={background} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold lg:text-white">Looking For Used Mobile?</h1>
                        <p className="py-6 lg:text-white lg:text-2xl"> Hey good people, <br />Here we are create a impressive website where you can find a lots of used mobile. <br />We have a lots of collection. <br />Chose the desire mobile and put it on your pocket</p>
                        <button className="btn bg-orange-600 text-white hover:bg-orange-700 border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;