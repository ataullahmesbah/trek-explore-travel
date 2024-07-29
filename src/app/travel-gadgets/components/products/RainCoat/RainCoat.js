'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';

const RainCoat = () => {
    const [raincoats, setRaincoats] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchRaincoats = async () => {
            try {
                const response = await fetch('/raincoat.json');
                const data = await response.json();
                setRaincoats(data);
            } catch (error) {
                console.error('Failed to fetch raincoat data:', error);
            }
        };

        fetchRaincoats();
    }, []);

    return (
        <div className="py-20 container mx-auto px-2">
            <div className="mb-12 lg:px-8">
                <div className="flex poppins items-center justify-between px-2">
                    <p className="title">Rain Coat</p>
                    <Link href="/raincoat">
                        <p className="font-semibold hover:underline text-sky-950">View All</p>
                    </Link>
                </div>
                <p className="border-b-2 border-gray-400 flex-grow"></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {raincoats.map((raincoat) => (
                    <div
                        key={raincoat._id}
                        className="bg-gray-100 border rounded-lg flex flex-col items-center justify-between shadow-lg relative"
                    >
                        <div className="relative w-full h-48 mb-2">
                            <Image
                                src={raincoat.image}
                                alt={raincoat.name}
                                width={400}
                                height={400}
                                className="object-cover w-full h-full rounded-t-sm cursor-pointer"
                                onClick={() => setSelectedImage(raincoat.image)}
                            />
                            {raincoat.discount && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs rounded-bl-lg">
                                    {raincoat.discount}% OFF
                                </span>
                            )}
                        </div>
                        <h2 className="text-lg font-semibold poppins mt-2 text-center">{raincoat.name}</h2>
                        <div className="text-center p-2">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600 line-through">৳ {raincoat.originalPrice}</p>
                                <p className="text-xl font-semibold">৳ {raincoat.price}</p>
                            </div>
                            <Link href={`/raincoat/${raincoat._id}`} legacyBehavior>
                                <a className="text-white bg-sky-950 px-5 p-2 mt-4 inline-block rounded-md hover:underline">
                                    Order Now
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <Modal
                    isOpen={!!selectedImage}
                    onRequestClose={() => setSelectedImage(null)}
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                    ariaHideApp={false} // to avoid accessibility warning in development
                >
                    <div className="relative flex flex-col items-center justify-center">
                        <Image
                            src={selectedImage}
                            alt="Full-size image"
                            width={400}
                            height={400}
                            className="object-contain rounded-md max-w-full max-h-full"
                        />
                        <button
                            className="text-red-600 text-2xl mt-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default RainCoat;
