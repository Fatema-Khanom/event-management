import React from 'react';
import Navbar from './Component/Navbar';
import Bannar from './Component/Bannar';
import Footer from './Component/Footer';

const Home = () => {
    return (
        <div>
            
          <div>
          <Navbar></Navbar>
          </div>
            <div><Bannar></Bannar></div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Home;