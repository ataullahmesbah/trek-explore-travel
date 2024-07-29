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
                <p className="subtitle text-center">Choose your desired Collection</p>
                <h1 className="title text-center">Shop By Category</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
                {categories.slice(0, 8).map((category, index) => (
                    <div key={index} className="relative overflow-hidden group">
                        <Image
                            src={category.image}
                            alt={category.title}
                            layout="responsive"
                            width={200}
                            height={200}
                            className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 rounded-md"
                        />
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCategories;
