'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GiDetour } from 'react-icons/gi';



const AdventureStories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        // Fetch the stories from the JSON file
        fetch('/stories.json')
            .then(response => response.json())
            .then(data => setStories(data));
    }, []);

    const latestStories = stories.slice(0, 3);
    const allStories = stories.slice(3);

    return (
        <div className="bg-gray-50 mt-14">
            {/* Banner Section */}
            <div className="relative w-full h-[50vh]">
                <Image
                    src="https://i.ibb.co/Jpc3b47/image.png"
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    quality={100}
                    blurDataURL="data:..."
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-white text-4xl font-semibold border-b-2 border-white">Adventure Stories</h1>
                </div>
            </div>

            {/* Latest Stories */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="title text-center mb-3">Latest Stories</h1>
                <div className="flex items-center justify-center mb-9">
                    <div className="border-b-2 w-1/3"></div>
                    <GiDetour className="mx-4 text-2xl text-gray-500" />
                    <div className="border-b-2 w-1/3"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {latestStories.map((story, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={story.imageUrl}
                                alt={story.title}
                                width={600}
                                height={400}
                                placeholder="blur"
                                quality={100}
                                blurDataURL={story.imageUrl}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold mb-2">{story.title}</h2>
                                <p className="text-gray-700">{story.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider with Icon */}
                <div className="flex items-center justify-center">
                    <div className="border-b-2 w-1/3"></div>
                    <FaGlobeAmericas className="mx-4 text-2xl text-gray-500" />
                    <div className="border-b-2 w-1/3"></div>
                </div>
            </div>

            {/* All Stories */}
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h2 className="title mb-6 text-center">All Stories</h2>
                <div className="flex justify-center mt-4 mb-10">
                    <div className="border-b-2 w-3/4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allStories.map((story, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={story.imageUrl}
                                alt={story.title}
                                width={600}
                                height={400}
                                placeholder="blur"
                                blurDataURL={story.imageUrl}
                                quality={100}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
                                <p className="text-gray-700">
                                    {story.description.split(' ').slice(0, 20).join(' ')}...
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-500 hover:underline mt-4 inline-block"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdventureStories;
