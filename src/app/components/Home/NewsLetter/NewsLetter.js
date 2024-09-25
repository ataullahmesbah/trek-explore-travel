'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the newsletter sign-up form submission
        toast.success(`Thank you for subscribing, ${name}!`, {
            position: "top-right",
            duration: 4000,
        });
        // Reset the form fields after submission
        setEmail('');
        setName('');
    };

    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32">
            <Toaster />
            <div className="max-w-5xl mx-auto text-center poppins">
                {/* Newsletter Header */}
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-gray-700 mb-12">
                    Get the latest updates, travel tips, and exclusive offers from <span className="font-semibold">Trek Explore Travel</span> right in your inbox.
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-700"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-700"
                    />
                    <button
                        type="submit"
                        className="w-full md:w-auto px-6 py-3 bg-sky-700 text-white font-bold rounded-md hover:bg-sky-900 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsLetter;
