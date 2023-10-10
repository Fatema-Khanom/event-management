import React from 'react';
import { Outlet } from 'react-router-dom';

import ContactUs from '../Pages/ContactUs';
import Navbar from '../Pages/Component/Navbar';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;