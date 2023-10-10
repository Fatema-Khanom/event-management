import React from 'react';

import Bannar from './Component/Bannar';
import Footer from './Component/Footer';
import Features from './Component/Features';
import AboutUs from './Component/AboutUs';
import OurSurvices from './Component/OurSurvices';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const ourServices = useLoaderData()
    return (
        <div>
            
          
            <div><Bannar></Bannar></div>
            <div><OurSurvices ourServices={ourServices}></OurSurvices></div>
           
            <div><Features></Features></div>
            <div><AboutUs></AboutUs></div>
            <div><Footer></Footer></div>

        </div>
    );
};

export default Home;