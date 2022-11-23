import React from 'react';
import image from '../../../assest/ecommerce-1706103_1280 .jpg';

const HomeDescripton = () => {
    return (
        <div className="hero bg-base-100 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt='' className="rounded-lg shadow-2xl w-[450px] h-[500px]" />
                <div>
                    <h1 className="text-5xl font-bold">Click and Buy</h1>
                    <p className="py-6 text-xl mr-7">Our website have multiple functionality you just need to choose a product and prcced to pay. <br /> We are 100% trusted all of our product information 100% legit. We also have return policy. <br /> If you dont like your desire product then you can refund it to us</p>
                </div>
            </div>
        </div>
    );
};

export default HomeDescripton;