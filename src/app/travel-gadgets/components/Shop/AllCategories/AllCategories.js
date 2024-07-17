'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch data from categories.json
        fetch('/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="container mx-auto m-12 space-y-4">
                <p className="text-center text-base sm:text-lg md:text-xl text-gray-700">Choose your desired Collection</p>
                <h1 className="text-3xl font-semibold text-center">Shop By Category</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
                {categories.slice(0, 6).map((category, index) => (
                    <div key={index} className="relative overflow-hidden group">
                        <Image
                            src={category.image}
                            alt={category.title}
                            layout="responsive"
                            width={400}
                            height={300}
                            className="object-cover w-full h-[200px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h2 className="text-white text-lg md:text-xl font-semibold">{category.title}</h2>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCategories;
