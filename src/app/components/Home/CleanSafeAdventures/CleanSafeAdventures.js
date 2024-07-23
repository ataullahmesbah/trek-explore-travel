'use client';

import React from 'react';
import Image from 'next/image';

const CleanSafeAdventures = () => {
    const images = [
        'https://i.ibb.co/VYFG0ZY/image.png',
        'https://i.ibb.co/LhVjkR6/image.png',
        'https://i.ibb.co/Jpc3b47/image.png',
    ];

    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <div className='text-center space-y-5 lg:space-y-6 mb-12'>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Clean & Safe Adventures</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 px-3">Our mission is to safeguard and maintain the stunning landscapes and exhilarating adventure spots we cherish. By keeping these areas clean and secure, we pledge to protect their natural beauty and ensure they remain a source of joy and inspiration for future generations.</p>
            </div>

                {/* <h1 className="title">
                    
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 text-gray-700 lg:px-4">
                    
                </p> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 lg:mb-16">
                    {images.map((url, index) => (
                        <div key={index} className="relative group">
                            <Image
                                src={url}
                                alt={`Image ${index + 1}`}
                                width={600}
                                height={400}
                                placeholder="blur"
                                quality={100}
                                blurDataURL="data:..."
                                className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-300">
                                <p className="text-white font-semibold text-base sm:text-lg">
                                    Keep It Clean
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="bg-sky-900 text-white py-2 px-6 sm:py-3 sm:px-8 font-medium rounded-md shadow-md hover:bg-sky-700 transition duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default CleanSafeAdventures;
