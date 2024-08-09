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
        <div className="bg-gray-50 py-20">
            <ContainerPage>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-10 text-gray-800">About Us</h1>
                    <p className="mb-12 text-lg leading-relaxed text-gray-700">
                        Welcome to Trek Explore Travel! We are committed to providing the best travel experiences, inspiring adventures, and unforgettable memories. Our mission is to explore the world and bring you along on our journey through stunning visuals, detailed guides, and immersive content.
                    </p>

                    <div className="relative w-full mb-12">
                        <Image
                            src="https://i.ibb.co/Jpc3b47/image.png"
                            alt="Our Team"
                            width={800}
                            height={450}
                            placeholder="blur"
                            blurDataURL="/"
                            className="rounded-lg mx-auto"
                            style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
                        />
                    </div>
                    
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our E-Commerce and Affiliate Programs</h2>
                    <p className="mb-12 text-lg leading-relaxed text-gray-700">
                        At Trek Explore Travel, we have expanded our platform to include a comprehensive e-commerce section where you can find the best travel gear, gadgets, and adventure equipment. We have partnered with leading brands to bring you high-quality products that will enhance your travel experiences. Additionally, we offer an affiliate program that allows you to earn by promoting our products. We believe in the power of community and collaboration, and our affiliate program is designed to benefit both our business partners and our loyal followers.
                    </p>

                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Business Partnerships</h2>
                    <p className="mb-12 text-lg leading-relaxed text-gray-700">
                        We are always open to forming new business partnerships that align with our vision of promoting sustainable and adventurous travel. If you're a brand that shares our passion, we would love to collaborate and bring our audiences the best products and experiences.
                    </p>

                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Travel Gadgets & Gear</h2>
                    <p className="mb-12 text-lg leading-relaxed text-gray-700">
                        Our selection of travel gadgets is curated with the modern explorer in mind. Whether you're looking for the latest in travel tech, durable camping gear, or essential tools for your next adventure, we have you covered. Our products are tested and reviewed by our team to ensure they meet the highest standards.
                    </p>

                    

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
