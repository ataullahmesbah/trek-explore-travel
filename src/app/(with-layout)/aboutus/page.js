// File: app/about/page.jsx (or pages/about.jsx if using the Pages Directory)
import React from 'react';
import ContainerPage from "../../components/container/page";
import Image from 'next/image';


import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export const metadata = {
    title: 'About Us - Trek Explore Travel',
    description: 'Learn more about Trek Explore Travel, our mission, our affiliate programs, business partnerships, and travel gadget offerings.'
};

const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-12">
            {/* 1st Section - Background Image with Text */}
            <div
                className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url('/')` }} // Updated to use the correct path
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center z-10">
                    Welcome to Trek Explore Travel
                </h1>
            </div>

            <ContainerPage>
                {/* 2nd Section - About 'Trek Explore Travel' */}
                <div className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About Trek Explore Travel
                        </h2>
                        <p className="text-lg text-gray-700">
                            Trek Explore Travel is your ultimate travel companion, offering exceptional travel experiences, gear, gadgets, and more. Our mission is to provide you with the tools and insights needed to explore the world with confidence and excitement.
                        </p>
                    </div>
                </div>

                {/* 3rd Section - CEO Details */}
                <div className="py-16 px-6 md:px-20 lg:px-32 bg-white">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* CEO Image */}
                        <div className="flex justify-center">
                            <Image
                                src='g' // Ensure the CEO image path is correct
                                alt="CEO Image"
                                width={150} // Adjusted dimensions for better responsiveness
                                height={150}
                                className="w-48 h-48 rounded-full shadow-lg object-cover"
                            />
                        </div>

                        {/* CEO Information */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                John Doe
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">CEO & Founder</p>
                            <p className="text-lg text-gray-700">
                                John has over 15 years of experience in the travel industry and is passionate about helping others experience the beauty and adventure of the world. His vision is to make Trek Explore Travel a trusted partner in all your journeys.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4th Section - Why Choose Trek Explore Travel */}
                <div className="bg-gray-200 py-16 px-6 md:px-20 lg:px-32">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            At Trek Explore Travel, we strive to provide unparalleled service and quality. Here’s why our customers trust us:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 shadow-lg rounded-md">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Expert Guides</h4>
                                <p className="text-gray-700">
                                    Our team of experts ensures that your travel experience is seamless, memorable, and exciting.
                                </p>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-md">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Top-Notch Gear</h4>
                                <p className="text-gray-700">
                                    We offer the latest and most reliable travel gear, gadgets, and essentials to make your journey smooth.
                                </p>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-md">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Unique Destinations</h4>
                                <p className="text-gray-700">
                                    We bring you to some of the most unique and untouched destinations around the world.
                                </p>
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-md">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Customer Satisfaction</h4>
                                <p className="text-gray-700">
                                    Our primary goal is your satisfaction, and we work tirelessly to exceed your expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="py-12">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Follow Us</h2>
                    <div className="flex justify-center space-x-8 mb-12">
                        <a href="https://www.facebook.com/mesbahoffwego" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaFacebook size={36} />
                        </a>
                        <a href="https://youtube.com/@mesbahoffwego4045?si=d2XQbd4F8Hn9FKM5" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                            <FaYoutube size={36} />
                        </a>
                        <a href="https://www.instagram.com/mesbahoffwego" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FaInstagram size={36} />
                        </a>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="pb-12">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Learn More</h2>
                    <p className="text-lg text-gray-700">
                        For more information about our terms & services, please visit our
                        <a href="/terms" className="text-blue-500 hover:underline ml-1">Terms & Services</a>
                        page. For details on our policies, you can view our
                        <a href="/policy" className="text-blue-500 hover:underline ml-1">Policy</a>
                        page.
                    </p>
                </div>
            </ContainerPage>
        </div>
    );
};

export default AboutUs;
