'use client';

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full z-50 ${scroll ? 'navbar scrolled' : 'navbar transparent'}`}>
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href='/'>Home</Link></li>
                            <li>
                                <Link href='/'>Parent</Link>
                                <ul className="p-2">
                                    <li><Link href='/'>Submenu 1</Link></li>
                                    <li><Link href='/'>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link href='/'>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost text-xl">Trek Explore Travel</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/'>Home</Link></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><Link href='/'>Submenu 1</Link></li>
                                    <li><Link href='/'>Submenu 2</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href='/'>Item 3</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href='/' className="btn">Button</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
