'use client'



import { useState } from 'react';
import Link from 'next/link';

const EcommerceNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSubmenuToggle = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <nav className="bg-white border-b shadow-sm fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <img className="h-8" src="/logo.png" alt="Logo" />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/platform" className="hover:text-blue-700">Platform</Link>
                                <Link href="/solutions" className="hover:text-blue-700">Solutions</Link>
                                <Link href="/developers" className="hover:text-blue-700">Developers</Link>
                                <Link href="/resources" className="hover:text-blue-700">Resources</Link>
                                <Link href="/about-us" className="hover:text-blue-700">About Us</Link>
                                <Link href="/pricing" className="hover:text-blue-700">Pricing</Link>
                                <div className="relative">
                                    <button onClick={handleSubmenuToggle} className="hover:text-blue-700 focus:outline-none">
                                        More
                                    </button>
                                    {submenuOpen && (
                                        <div className="absolute left-0 w-48 bg-white shadow-lg">
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
                    <div className="hidden md:block">
                        <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                            Sign Up for Free
                        </button>
                    </div>
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

            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/platform" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Platform</Link>
                    <Link href="/solutions" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Solutions</Link>
                    <Link href="/developers" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Developers</Link>
                    <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Resources</Link>
                    <Link href="/about-us" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">About Us</Link>
                    <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Pricing</Link>
                    <div className="relative">
                        <button onClick={handleSubmenuToggle} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-700 focus:outline-none">
                            More
                        </button>
                        {submenuOpen && (
                            <div className="px-3 py-2">
                                <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Contact</Link>
                                <Link href="/support" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Support</Link>
                                <Link href="/documentation" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Documentation</Link>
                                <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-700">Login</Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="px-5 pt-4 pb-5">
                    <button className="block w-full text-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Sign Up for Free
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default EcommerceNavbar;
