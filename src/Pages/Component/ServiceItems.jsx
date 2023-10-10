import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItems = ({card}) => {
    const { id, name,price, image,description,buttonText, } = card || {};
    return (
        <div>
            <div class="relative flex  flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md h-96 ">
                <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    class="h w-full object-cover"
                    />
                </div>
                <div class="p-6">
                    <div class="mb-2 flex items-center justify-between">
                    <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {name}
                    </p>
                    <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {price}
                    </p>
                    </div>
                    <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                   {description}
                    </p>
                </div>
                <div class=" flex justify-center items-center p-6 pt-0">
                    <Link to={`/seeMore/${id}`}>
                    <button
                    class=" btn-primary block  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                   {buttonText}
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;