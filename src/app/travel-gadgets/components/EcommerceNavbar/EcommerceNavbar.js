'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaAtlas, FaLocationArrow, FaCaretDown, FaCaretUp } from 'react-icons/fa';

const EcommerceNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const submenuRef = useRef(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSubmenuToggle = () => {
        setSubmenuOpen(!submenuOpen);
    };

    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                setSubmenuOpen(false);
            }
        };

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 
    return (
        <nav className="bg-gray-300 border-b fixed w-full z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Side Links */}
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <Link href="/platform" className="hover:text-blue-700 flex items-center gap-2">
                                    <FaAtlas />
                                    All Categories
                                </Link>
                                <Link href="/solutions" className="hover:text-blue-700">T-Shirt</Link>
                                <Link href="/developers" className="hover:text-blue-700">Men</Link>
                                <Link href="/resources" className="hover:text-blue-700">Backpacks</Link>
                                <Link href="/resources" className="hover:text-blue-700">Kids</Link>
                                <Link href="/about-us" className="hover:text-blue-700">New Arrivals</Link>
                                <Link href="/pricing" className="hover:text-blue-700">Flash Sale</Link>
                                <div className="relative" ref={submenuRef}>
                                    <button onClick={handleSubmenuToggle} className="hover:text-blue-700 focus:outline-none flex items-center gap-1">
                                        Travel Gear {submenuOpen ? <FaCaretUp /> : <FaCaretDown />}
                                    </button>
                                    {submenuOpen && (
                                        <div className="absolute left-0 w-48 bg-white shadow-lg mt-2 z-20">
                                            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                                            <Link href="/support" className="block px-4 py-2 hover:bg-gray-100">Support</Link>
                                            <Link href="/documentation" className="block px-4 py-2 hover:bg-gray-100">Documentation</Link>
                                            <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Delivery Info */}
                    <div className="flex gap-2 items-center">
                        <FaLocationArrow />
                        <h6>
                            <span className='font-semibold'>Delivery: </span>
                            <span className='font-semibold text-gray-800'>Bangladesh</span>
                        </h6>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={handleMenuToggle}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 pt-4 pb-3 space-y-1">
                    <Link href="/platform" className="block px-4 py-2 hover:bg-gray-100">All Categories</Link>
                    <Link href="/solutions" className="block px-4 py-2 hover:bg-gray-100">T-Shirt</Link>
                    <Link href="/developers" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                    <Link href="/resources" className="block px-4 py-2 hover:bg-gray-100">Backpacks</Link>
                    <Link href="/resources" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
                    <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-100">New Arrivals</Link>
                    <Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Flash Sale</Link>
                    <div className="relative" ref={submenuRef}>
                        <button onClick={handleSubmenuToggle} className="flex items-center gap-1 w-full px-4 py-2 hover:bg-gray-100">
                            Travel Gear {submenuOpen ? <FaCaretUp /> : <FaCaretDown />}
                        </button>
                        {submenuOpen && (
                            <div className="bg-white shadow-lg">
                                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                                <Link href="/support" className="block px-4 py-2 hover:bg-gray-100">Support</Link>
                                <Link href="/documentation" className="block px-4 py-2 hover:bg-gray-100">Documentation</Link>
                                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default EcommerceNavbar;
