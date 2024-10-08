'use client';

import emailjs from '@emailjs/browser';
import Link from 'next/link';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata = {
    // Metadata details
};

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!form.name.trim()) {
            errors.name = 'Full Name is required';
        }
        if (!form.email.trim()) {
            errors.email = 'Email Address is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'Email Address is invalid';
        }
        if (!form.message.trim()) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            emailjs.send(
                'service_2p9innf',
                'template_grt5q3s',
                {
                    to_name: form.name,
                    from_name: form.email,
                    message: form.message
                },
                '6i4BgDWrdCgrRbvt7'
            ).then((result) => {
                setFormSubmitted(true);
                setForm({ name: '', email: '', message: '' });
                setError('');

                // Show success toast when form is submitted
                toast.success('Message sent successfully!');
            }).catch((error) => {
                console.error('Error submitting form', error.text);
                setError('Failed to send message, please try again later.');

                // Show error toast if something goes wrong
                toast.error('Failed to send message.');
            });
        } else {
            setFormErrors(errors);
        }
    };


    return (
        <div className="bg-gray-50  py-14">
            {/* Toast Container */}
            <Toaster position="top-right" reverseOrder={false} />

            {/* Banner Section */}
            <div className='bg-gradient-to-r from-sky-800 via-sky-950 to-sky-700 py-16 shadow-md shad'>
                <div className="max-w-7xl mx-auto rounded-lg p-6 lg:p-12 space-y-6 poppins-regular">
                    {/* Breadcrumb Links */}
                    <div className=" mb-4 flex justify-center space-x-4 text-white">
                        {/* Add Next.js Links for Home and Contact */}
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <span>||</span>
                        <Link href="/contactus" className="hover:underline">
                            Contact
                        </Link>
                    </div>

                    {/* Title and Description */}
                    <div className="text-center mb-6 lg:mb-0 text-white space-y-6">
                        <h2 className="title">
                            Let’s Start a Conversation
                        </h2>
                        <p className="mt-4 text-lg lg:text-xl text-gray-100">
                            Have any questions or want to connect? Feel free to reach out. I’m here to help!
                        </p>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="title mb-6 text-center">Contact Us</h1>
                <p className="text-center mb-12 text-base sm:text-lg md:text-xl text-gray-700">
                    We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
                    {formSubmitted && (
                        <div className="mb-6 p-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                            Your message has been sent successfully!
                        </div>
                    )}
                    {error && (
                        <div className="mb-6 p-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={`mt-1 block px-4 py-2 w-full rounded-md border-l-8 shadow-sm focus:ring-sky-500 focus:border-sky-600 sm:text-sm ${formErrors.name ? 'border-red-500' : ''
                                    }`}
                            />
                            {formErrors.name && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={`mt-1 block px-4 py-2 w-full rounded-md border-l-8 shadow-sm focus:ring-sky-500 focus:border-sky-600 sm:text-sm ${formErrors.email ? 'border-red-500' : ''
                                    }`}
                            />
                            {formErrors.email && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className={`mt-1 block px-4 py-2 w-full rounded-md border-l-8 shadow-sm focus:ring-sky-500 focus:border-sky-600 sm:text-sm ${formErrors.message ? 'border-red-500' : ''
                                    }`}
                            ></textarea>
                            {formErrors.message && (
                                <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-sky-900 text-white py-3 px-8 rounded-md shadow-md hover:bg-sky-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* More Contact Info */}
            <div className='bg-gray-100 mt-10'>
                <div className=" py-16 px-6 md:px-20 lg:px-24 ">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Email Card */}
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <FaEnvelope className="text-3xl text-gray-800 mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                            <p className="text-gray-700 mb-4">info@trekexploretravel.com</p>
                            <button className="bg-black text-white py-2 px-4 rounded-full mb-2 mt-0">CONTACT</button>

                        </div>

                        {/* Phone Card */}
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <FaPhone className="text-3xl text-gray-800 mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
                            <p className="text-gray-700 mb-4">+8809638844036</p>
                            <button className="bg-black text-white py-2 px-4 rounded-full mb-2">CALL</button>

                        </div>

                        {/* Location Card */}
                        <div className="bg-white p-6 shadow-lg rounded-md">
                            <FaMapMarkerAlt className="text-3xl text-gray-800 mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Office</h4>
                            <p className="text-gray-700 mb-4">Road No. 08, 2/B J-Block Baridhara, Dhaka 1212</p>
                            <button className="bg-black text-white py-2 px-4 rounded-full mb-2">LOCATION</button>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactUs;
