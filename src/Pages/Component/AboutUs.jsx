import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <section id="about-us" className="py-16 w-11/12 m-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-black mb-8">About Us</h2>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                        <h3 className="text-xl font-semibold text-black">Welcome to DreamCraft Events</h3>
                        <p className="text-gray-600 leading-loose">
                            DreamCraft Events is a leading event management company dedicated to creating memorable experiences. With a passion for creativity and a commitment to excellence, we specialize in planning and executing events that exceed expectations.
                        </p>
                        <p className="text-gray-600 leading-loose">
                            Our team of experienced professionals works tirelessly to bring your vision to life. Whether it's weddings, corporate events, birthday parties, music festivals, charity fundraisers, or art exhibitions, we have the expertise to make it unforgettable.
                        </p>
                        <p className="text-gray-600 leading-loose">
                            DreamCraft Events believes in the power of every detail. We take care of everything so you can enjoy the event stress-free. Let us turn your dreams into reality.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img src="https://i.ibb.co/Kr9SC7F/pexels-rdne-stock-project-6519898.jpg" alt="About Us Image" className="rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default AboutUs;