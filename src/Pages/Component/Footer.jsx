import React from 'react';

const Footer = () => {
    return (
        <div className='w-11/12 m-auto'>
            <footer class="w-full bg-gray-400 p-8 bg-gray-400">
            <div class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg- text-center md:justify-between">
                <img src="https://i.ibb.co/Vm8RhyN/removal-ai-abdcbf1f-981c-435e-83bd-f3afd789c7a4-champagne-glasses-with-bow-ribbon-under-wedding-tent.png" alt="logo-ct" class="w-28" />
                <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <a
                    href="#"
                    class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-500 focus:text-pink-500"
                    >
                    About Us
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-500 focus:text-pink-500"
                    >
                    License
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-500 focus:text-pink-500"
                    >
                    Contribute
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text--500 focus:text-pink-500"
                    >
                    Contact Us
                    </a>
                </li>
                </ul>
            </div>
            <hr class="my-8 border-blue-gray-50" />
            <p class="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                © 2023 DreamCraft Events
            </p>
            </footer>
        </div>
    );
};

export default Footer;