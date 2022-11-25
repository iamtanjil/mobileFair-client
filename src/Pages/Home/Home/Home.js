import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import HomeDescripton from '../HomeDescription/HomeDescripton';
import RecentProduct from '../RecentProduct/RecentProduct';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentProduct></RecentProduct>
            <HomeDescripton></HomeDescripton>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;