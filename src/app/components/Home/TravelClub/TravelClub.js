'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast styling

// Modal component for email subscription
const SubscribeModal = ({ isOpen, onClose }) => {
    const modalRef = useRef();

    // Close modal when clicking outside the content
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div
                ref={modalRef}
                className="bg-gray-800 rounded-lg p-4 max-w-sm w-full shadow-xl mx-4"
            >
                <form
                    className="flex flex-col sm:flex-row gap-2 items-center justify-center text-center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        // Show a toast notification
                        toast.success('Successfully subscribed!');
                        onClose(); // Close the modal after submission
                    }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-sky-900 bg-opacity-20 text-white px-4 py-2 border rounded-md focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="border-2 bg-sky-900 bg-opacity-20 border-sky-900 text-white p-1 px-4 rounded-md shadow-2xl hover:bg-sky-900 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

const TravelClub = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                        <button
                            onClick={openModal}
                            className="border-2 bg-sky-900 bg-opacity-20 border-sky-900 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-md shadow-2xl hover:bg-sky-900 transition duration-300"
                        >
                            Join The Club
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />

            {/* ToastContainer for displaying toasts */}
            <ToastContainer />
        </div>
    );
};

export default TravelClub;
