import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 m-auto shadow-md rounded-full bg-gray-400">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                         Home
                        </NavLink></li>
                    <li><NavLink
                        to="/myevents"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "" : ""
                        }
                        
                        >
                       My Events
                        </NavLink></li>
                    <li><NavLink
                        to="/contactus"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        Contact Us
                        </NavLink></li>
                    
                </ul>
                </div>
                <img className='h-16 ml-4' src="https://i.ibb.co/Vm8RhyN/removal-ai-abdcbf1f-981c-435e-83bd-f3afd789c7a4-champagne-glasses-with-bow-ribbon-under-wedding-tent.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                         Home
                        </NavLink></li>
                    <li><NavLink
                        to="/myevents"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        
                        >
                       My Events
                        </NavLink></li>
                    <li><NavLink
                        to="/contactus"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        Contact Us
                        </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className=" mr-4">Login</a>
                <button>Login</button>
                <a className=" bg-white text-black rounded px-4 py-[4]">Register</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;