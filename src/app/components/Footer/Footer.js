'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-sky-950 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    {/* Company Info */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                        <Link href="/">
                            <div className="flex items-center gap-2 mb-3">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Trek Explore Travel Logo"
                                    width={100}
                                    height={30}
                                    style={{ maxWidth: '130px', maxHeight: '45px' }} // Debugging: Ensure sizes are applied
                                    className="logo"
                                />
                                <h1 className="text-xl lg:text-2xl font-bold poppins">Trek Explore Travel</h1>
                            </div>
                        </Link>
                        <p className="text-gray-200 px-3">
                            Explore the world with us. Join our adventures and create unforgettable memories.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Privacy</h3>
                        <ul>


                            <li className="mb-2"><a href="/aboutus" className="text-gray-200 hover:text-gray-400">About Us</a></li>
                            <li className="mb-2"><a href="/privacypolicy" className="text-gray-200 hover:text-gray-400">Privacy Policy</a></li>

                            <li className="mb-2"><a href="/terms-conditions" className="text-gray-200 hover:text-gray-400">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="/contactus" className="text-gray-200 hover:text-gray-400">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-200">Email: info@trekexploretravel.com</p>
                        <p className="text-gray-200">Phone: +123 456 7890</p>
                    </div>
                    {/* Social Media */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">
                                <FaYoutube size={24} />
                            </a>
                            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom Line */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-gray-200">&copy; 2024 Trek Explore Travel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
