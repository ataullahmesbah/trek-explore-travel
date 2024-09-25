


import Image from 'next/image';
import banner from '/public/images/about.png'
import CEO from '/public/images/ceo.jpg'
import nature1 from '/public/images/nature22.png'
import nature2 from '/public/images/nature.png'
import nature3 from '/public/images/nature2.png'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import Link from 'next/link';

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
                style={{ backgroundImage: `url(${banner.src})` }} // Corrected path for the background image
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center z-10">
                    Welcome to Trek Explore Travel
                </h1>
            </div>


            {/* 2nd Section - About 'Trek Explore Travel' */}
            <div className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-sky-700 after:mt-2 after:mx-auto">
    About Trek Explore Travel
</h2> */}

                    <div className="flex items-center space-x-4  justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                            <span className="relative z-10">About</span>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-sky-700 to-sky-300"></span>
                        </h2>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Trek Explore Travel
                        </h2>
                    </div>




                    <p className="text-lg text-gray-700 mb-6">
                        Trek Explore Travel is more than just a travel platform—it’s a gateway to discovering the hidden gems of nature across the globe. We are dedicated to exploring the world’s most untouched and breathtaking landscapes, from towering mountains to secluded natural wonders. Our platform not only showcases these magnificent destinations but also offers a full eCommerce experience with top-quality travel gear, allowing travelers to equip themselves for their next adventure.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        We host bi-annual photo and video <Link href="/obk" className="text-blue-500 hover:underline">
                            contests
                        </Link>, where adventurers can share their travel experiences and win exciting prizes. With our blog and newsletter, we keep you updated on the latest travel tips, stories, and insights from explorers worldwide. Join us as we celebrate the beauty of nature and uncover the hidden treasures the world has to offer.
                    </p>
                    <p className="text-lg text-gray-700">
                        Whether you’re a seasoned explorer or just starting your journey, Trek Explore Travel is your go-to source for travel gear, inspiration, and community. Dive into our blog, shop the latest travel essentials, or participate in our yearly contests to make your mark in the world of adventure.
                    </p>
                </div>
            </div>


            {/* 3rd Section - CEO Details */}
            <div className="py-16 px-6 md:px-20 lg:px-32 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* CEO Image */}
                    <div className="flex justify-center">
                        <Image
                            src={CEO} // Ensure the CEO image path is correct
                            alt="CEO Image"
                            width={150} // Adjusted dimensions for better responsiveness
                            height={150}
                            className="w-48 h-48 rounded-full shadow-lg object-cover"
                        />
                    </div>

                    {/* CEO Information */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Ataullah Mesbah
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">CEO & Founder</p>
                        <p className="text-lg text-gray-700">
                            Ataullah has over 8 years of experience in the travel industry and is passionate about helping others experience the beauty and adventure of the world. His vision is to make Trek Explore Travel a trusted partner in all your journeys.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4th Section - Why Choose Trek Explore Travel */}
            <div className="bg-gray-200 py-16 px-6 md:px-20 lg:px-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Section Title */}
                    <div className="flex items-center space-x-4 justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                            <span className="relative z-10">More About</span>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-sky-700 to-sky-300"></span>
                        </h2>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Trek Explore Travel
                        </h2>
                    </div>

                    {/* Section Description */}
                    <p className="text-lg text-gray-700 mb-6">
                        Discover breathtaking landscapes, hidden gems, and untold stories of nature with Trek Explore Travel. Hereu’s why adventurers choose us for their ultimate outdoor experiences:
                    </p>

                    {/* Key Reasons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Expert Destination Guides */}
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Expert Destination Guides</h4>
                            <p className="text-gray-700">
                                Our experienced guides unlock the secrets of the wild, taking you to off-the-beaten-path destinations and natureu’s hidden wonders.
                            </p>
                        </div>

                        {/* Exclusive Nature Spots */}
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Exclusive Nature Spots</h4>
                            <p className="text-gray-700">
                                We uncover the worldu’s hidden natural beauty, from remote mountain peaks to secret beaches and uncharted forests.
                            </p>
                        </div>

                        {/* Sustainable Adventure */}
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Sustainable Adventure</h4>
                            <p className="text-gray-700">
                                We prioritize eco-friendly travel, ensuring minimal impact on the environment while immersing you in the heart of natureu’s splendor.
                            </p>
                        </div>

                        {/* Authentic Cultural Experiences */}
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Authentic Cultural Experiences</h4>
                            <p className="text-gray-700">
                                Connect with local communities and cultures as we guide you through natural wonders and their fascinating human histories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto py-10 px-2">
                {/* First image covering 2 columns */}
                <div className="col-span-1 md:col-span-2">
                    <div className="relative w-full h-64 group">
                        <Image
                            src={nature1}
                            alt="Nature 1"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        />
                    </div>
                </div>

                {/* Two images, each covering 1 column */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image 2 */}
                    <div className="relative w-full h-64 group">
                        <Image
                            src={nature2}
                            alt="Nature 2"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="relative w-full h-64 group">
                        <Image
                            src={nature3}
                            alt="Nature 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        />
                    </div>
                </div>
            </div>




            {/* more section */}
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 py-12">
                {/* Social Media */}
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0 text-center lg:text-left">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <a href="https://www.facebook.com/mesbahoffwego" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.youtube.com/@mesbahoffwego" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
                            <FaYoutube size={24} />
                        </a>
                        <a href="https://www.instagram.com/mesbahoffwego" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.twitter.com/ataullah_mesbah" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                {/* Middle Divider (Vertical on larger screens) */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-center">
                    <div className="border-l border-gray-400 h-12 lg:h-20"></div>
                </div>

                {/* Additional Information */}
                <div className="w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Learn More</h2>
                    <p className="text-lg text-gray-700">
                        For more information about our terms & services, please visit our
                        <a href="/terms-conditions" className="text-blue-600 hover:underline ml-1">Terms & Services</a> page. For details on our policies, you can view our
                        <a href="/privacypolicy" className="text-blue-600 hover:underline ml-1">Policy</a> page.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
