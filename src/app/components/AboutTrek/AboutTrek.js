'use client';
import { useState, useEffect } from 'react';

// Your Component
const AboutTrek = () => {
    const [reasons, setReasons] = useState([]);

    // Fetch data from abouttrek.json using useEffect
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/abouttrek.json');
            const data = await response.json();
            setReasons(data);
        };

        fetchData();
    }, []);

    return (
        <div className="bg-gray-200 py-16 px-6 md:px-20 lg:px-32">
            <div className="max-w-5xl mx-auto text-center">
                {/* Section Title */}
                <div className="flex items-center space-x-4 justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                        <span className="relative z-10">More About</span>
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-sky-700 to-sky-300"></span>
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trek Explore Travel</h2>
                </div>

                {/* Section Description */}
                <p className="text-lg text-gray-700 mb-6">
                    Discover breathtaking landscapes, hidden gems, and untold stories of nature with Trek Explore Travel. Here’s why adventurers choose us for their ultimate outdoor experiences:
                </p>

                {/* Key Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 shadow-lg rounded-md transition-transform transform hover:scale-105 hover:rounded-lg duration-300 ease-in-out"
                        >
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutTrek;
