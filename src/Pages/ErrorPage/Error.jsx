import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="h-screen flex flex-col justify-center items-center">
            <div className="text-4xl font-bold text-red-500">Oops!</div>
            <div className="text-2xl text-gray-800 mb-4">Something went wrong</div>
            <p className="text-gray-600">We apologize for the inconvenience. The page you are looking for might be temporarily unavailable.</p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline">Go back to the homepage</Link>
        </div>
        </div>
    );
};

export default Error;