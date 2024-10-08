'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

// Example placeholder for blur effect
const placeholder = 'data:image/svg+xml;base64,...'; // Replace with the actual base64-encoded placeholder image

const EcommerceStore = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/visiteco.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }

    const { title, description, highlightPoints, buttonText, images } = data;

    return (
        <section className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center p-8 justify-center gap-10 dark:bg-gray-800 py-10">
            {/* Left Side */}
            <div className="md:w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-lg mb-4">{description}</p>
                <div className="flex flex-col mb-4">
                    {highlightPoints.map((point, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <IoMdCheckmarkCircleOutline className="text-sky-800 text-2xl mr-2" />
                            <span className="text-lg font-semibold">{point}</span>
                        </div>
                    ))}
                </div>
                <Link href="/travel-gadgets">
                    <button className="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
                        {buttonText}
                    </button>
                </Link>
            </div>
            {/* Right Side */}
            <div className="md:w-1/2 w-full relative h-96 sm:h-64">
                {/* Image Containers */}
                <div className="relative w-full h-full">
                    {/* Top-left image */}
                    <div className="absolute top-0 left-0 w-full h-full md:w-3/4 md:h-3/4">
                        <Image
                            src={images[0]}
                            alt={`Gadget 1`}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={placeholder}
                            className="rounded-md"
                        />
                    </div>
                    {/* Bottom-right image */}
                    <div className="absolute bottom-0 right-0 w-full h-full md:w-3/6 md:h-1/2">
                        <Image
                            src={images[1]}
                            alt={`Gadget 2`}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={placeholder}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcommerceStore;
