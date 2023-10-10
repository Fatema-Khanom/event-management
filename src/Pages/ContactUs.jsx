import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <section id="contact-us" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-200 rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Send us a message</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" placeholder="Your Name" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" placeholder="Your Email" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" rows="4" placeholder="Your Message" required />
                            </div>
                            <div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
                            </div>
                        </form>
                    </div>
                    {/* Contact Information */}
                    <div className="bg-gray-200 rounded-lg shadow-lg p-6 ">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
                        <ul className="text-gray-600">
                            <li className="mb-2">
                                <strong>Address:</strong> 1210,panthapath,Dhaka
                            </li>
                            <li className="mb-2">
                                <strong>Email:</strong> <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">dreamcraft@events.com</a>
                            </li>
                            <li className="mb-2">
                                <strong>Phone:</strong> <a href="tel:+123456789" className="text-blue-500 hover:underline">+123 456 789</a>
                            </li>
                            <li className="mb-2">
                                <strong>Follow Us: </strong>
                                <a href="#" className="text-blue-500 hover:underline">Facebook</a>
                                <a href="#" className="text-blue-500 hover:underline ml-2">Twitter</a>
                                <a href="#" className="text-blue-500 hover:underline ml-2">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ContactUs;
