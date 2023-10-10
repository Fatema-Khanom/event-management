import React from 'react';
import Navbar from './Component/Navbar';
import Bannar from './Component/Bannar';
import Footer from './Component/Footer';
import Features from './Component/Features';
import AboutUs from './Component/AboutUs';

const Home = () => {
    return (
        <div>
            
          <div>
          <Navbar></Navbar>
          </div>
            <div><Bannar></Bannar></div>
            <div><Features></Features></div>
            <div><AboutUs></AboutUs></div>
            <div><Footer></Footer></div>

        </div>
    );
};

export default Home;