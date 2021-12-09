import React from 'react';
import Companies from './Companies/Companies';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import OurService from './OurService/OurService';
import OurWorks from './OurWorks/OurWorks';
import Review from './Review/Review';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <OurService></OurService>
            <OurWorks></OurWorks>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;