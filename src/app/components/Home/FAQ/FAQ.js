'use client'


import Link from 'next/link';
import React, { useState } from 'react';

const FAQ = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleAccordion = (id) => {
        switch (id) {
            case 'faq1':
                setIsOpen1(!isOpen1);
                break;
            case 'faq2':
                setIsOpen2(!isOpen2);
                break;
            case 'faq3':
                setIsOpen3(!isOpen3);
                break;
            case 'faq4':
                setIsOpen4(!isOpen4);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-16">

            <div className='text-center space-y-5 lg:space-y-6 mb-12'>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Frequently Asked Questions</h1>
            </div>
           
            <div className="accordion">
                <div className="accordion-item border-b border-gray-200">
                    <button
                        onClick={() => toggleAccordion('faq1')}
                        className="accordion-title flex justify-between items-center w-full py-4 text-lg font-semibold text-left focus:outline-none"
                    >
                        What is Trek Explore Travel?
                        <span className="text-2xl">{isOpen1 ? '▲' : '▼'}</span>
                    </button>
                    {isOpen1 && (
                        <div className="accordion-content px-4 pb-4">
                            <p className="text-gray-700">Trek Explore Travel is a premier travel agency specializing in curated travel experiences. We offer personalized travel packages, guided tours, adventure trips, and much more to ensure you have an unforgettable journey..

                                <Link href='/aboutus' legacyBehavior>
                                    <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">more</a>
                                </Link>

                            </p>
                        </div>
                    )}
                </div>
                <div className="accordion-item border-b border-gray-200">
                    <button
                        onClick={() => toggleAccordion('faq2')}
                        className="accordion-title flex justify-between items-center w-full py-4 text-lg font-semibold text-left focus:outline-none"
                    >
                        What events do you organize?
                        <span className="text-2xl">{isOpen2 ? '▲' : '▼'}</span>
                    </button>
                    {isOpen2 && (
                        <div className="accordion-content px-4 pb-4">
                            <p className="text-gray-700">We organize a variety of events throughout the year, including travel expos, adventure meetups, and cultural immersion experiences. Our events are designed to connect like-minded travelers and provide valuable insights into various destinations.</p>
                        </div>
                    )}
                </div>
                <div className="accordion-item border-b border-gray-200">
                    <button
                        onClick={() => toggleAccordion('faq3')}
                        className="accordion-title flex justify-between items-center w-full py-4 text-lg font-semibold text-left focus:outline-none"
                    >
                        Do you offer customized travel packages?
                        <span className="text-2xl">{isOpen3 ? '▲' : '▼'}</span>
                    </button>
                    {isOpen3 && (
                        <div className="accordion-content px-4 pb-4">
                            <p className="text-gray-700">Yes, we specialize in creating personalized travel packages tailored to your preferences and interests. Contact our team to discuss your travel requirements.</p>
                        </div>
                    )}
                </div>
                <div className="accordion-item border-b border-gray-200">
                    <button
                        onClick={() => toggleAccordion('faq4')}
                        className="accordion-title flex justify-between items-center w-full py-4 text-lg font-semibold text-left focus:outline-none"
                    >
                        What gadgets do you offer for travelers?
                        <span className="text-2xl">{isOpen4 ? '▲' : '▼'}</span>
                    </button>
                    {isOpen4 && (
                        <div className="accordion-content px-4 pb-4">
                            <p className="text-gray-700">We offer a range of travel gadgets carefully selected to enhance your travel experience. From high-quality backpacks to advanced navigation tools, our products ensure convenience and safety during your travels.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
