import React from 'react';
import ServiceItems from './ServiceItems';

const OurSurvices = ({ourServices}) => {
    return (

        <div className="py-">
            <div className="text-4xl font-bold text-black">
                Our Services
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 m-auto pt-10 mb-24">
            {
                ourServices?.map (card => <ServiceItems key={card.id} card={card} ></ServiceItems>)
            }
        </div>
        </div>
    );
};

export default OurSurvices;