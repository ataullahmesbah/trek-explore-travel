'use client';

import React from 'react';
import Image from 'next/image';

const TravelClub = () => {
    return (
        <div className="relative w-full h-[calc(100vh/3*1)] mb-16">
            <Image
                src="https://i.ibb.co/0BGP9m0/sea.jpg"
                alt="Travel Club"
                layout="fill"
                placeholder="blur"
                quality={100}
                blurDataURL="data:..."
                objectFit="cover"
                className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row justify-between items-center p-1 sm:p-8 md:p-16 max-w-7xl mx-auto">
                    <div className="text-white md:w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-center md:text-left">Join Our Travel Club</h1>
                        <p className="text-base sm:text-lg md:text-xl mb-6 text-center md:text-left">Become a member of our exclusive travel club and enjoy amazing benefits and unforgettable experiences.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                        <button className="border-2 bg-sky-900 bg-opacity-20 border-sky-900 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-md shadow-2xl hover:bg-sky-900 transition duration-300">
                            Join The Club
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelClub;
