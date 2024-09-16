'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaAtlas, FaLocationArrow, FaCaretDown, FaCaretUp, FaSearch, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

const EcommerceNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const submenuRef = useRef(null);

    // Handle scroll event for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle functions
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSubmenuToggle = () => {
        setSubmenuOpen(!submenuOpen);
    };

    const handleSearchToggle = () => {
        setSearchOpen(!searchOpen);
    };

    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (submenuRef.current && !submenuRef.current.contains(event.target)) {
                setSubmenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`bg-gray-300 border-b fixed w-full z-50 ${isScrolled ? 'top-0 shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Left Side: Logo and Title */}
                <div className="flex items-center">
                    {isScrolled && (
                        <Link href="/travel-gadgets">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Trek Explore Travel Logo"
                                    width={100}
                                    height={30}
                                    style={{ maxWidth: '100px', maxHeight: '40px' }}
                                    className="logo"
                                />
                                <h4 className="font-bold ">Trek Explore Travel</h4>
                            </div>
                        </Link>
                    )}
                </div>

                {/* Center Links */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/platform" className="hover:text-blue-700 flex items-center gap-2">
                        <FaAtlas /> All Categories
                    </Link>
                    <Link href="/solutions" className="hover:text-blue-700">T-Shirt</Link>
                    <Link href="/developers" className="hover:text-blue-700">Men</Link>
                    <Link href="/resources" className="hover:text-blue-700">Backpacks</Link>
                    <Link href="/resources" className="hover:text-blue-700">Kids</Link>
                    <Link href="/about-us" className="hover:text-blue-700">New Arrivals</Link>
                    <Link href="/pricing" className="hover:text-blue-700">Flash Sale</Link>
                    <div className="relative" ref={submenuRef}>
                        <button onClick={handleSubmenuToggle} className="hover:text-blue-700 flex items-center gap-1">
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


                {/* Right Side Delivery Info */}
                <div className="flex gap-2 items-center">
                    <FaLocationArrow />
                    <h6>
                        <span className='font-semibold'>Delivery: </span>
                        <span className='font-semibold text-gray-800'>Bangladesh</span>
                    </h6>
                </div>


                {/* Right Side: Search and Cart */}
                {isScrolled && (
                    <div className="flex items-center gap-4">
                        {/* Search Bar */}

                        <div className="relative">
                            <button onClick={handleSearchToggle} className="hover:text-blue-700 focus:outline-none">
                                <FaSearch />
                            </button>
                            {searchOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg p-2">
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded"
                                        placeholder="Search products..."
                                    />
                                </div>
                            )}
                        </div>

                        {/* Cart Icon */}
                        <Link href="/cart" className="hover:text-blue-700 flex items-center gap-2">
                            <FaShoppingCart />
                            {/* Example cart count */}
                            <span className="text-sm bg-red-500 text-white rounded-full px-2 py-0.5">3</span>
                        </Link>
                    </div>
                )}


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
