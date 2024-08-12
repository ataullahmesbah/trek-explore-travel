'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { useThemeSwitch } from '../../hooks/useThemeSwitch'; // 

import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useThemeSwitch();
  const [subMenuOpen, setSubMenuOpen] = useState({
    destination: false,
    customer: false,
  });

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubMenuToggle = (menu) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      setSubMenuOpen((prevState) => ({
        ...prevState,
        [menu]: true,
      }));
    }
  };

  const handleMouseLeave = (menu) => {
    if (window.innerWidth >= 768) {
      setSubMenuOpen((prevState) => ({
        ...prevState,
        [menu]: false,
      }));
    }
  };

  return (
    <nav className="bg-sky-950 text-white p-2 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="Trek Explore Travel Logo"
              width={100}
              height={30}
              style={{ maxWidth: '130px', maxHeight: '45px' }}
              className="logo"
            />
            <h1 className="text-xl lg:text-2xl font-bold poppins">Trek Explore Travel</h1>
          </div>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" legacyBehavior><a>Home</a></Link>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('destination')}
            onMouseLeave={() => handleMouseLeave('destination')}
          >
            <button
              className="flex items-center text-white py-2 px-4 focus:outline-none"
              onClick={() => handleSubMenuToggle('destination')}
            >
              Destination
              {subMenuOpen.destination ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
            </button>
            {subMenuOpen.destination && (
              <div className="absolute left-0 top-full bg-sky-900 opacity-85 shadow-lg rounded-lg text-white w-56 z-50 poppins">
               
                <div className="py-2">
                  <Link href="/obk" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-sky-950 text-white rounded-md">Odekha Banglar Khoje</a>
                  </Link>
                  <Link href="/destination/nepal" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-sky-950 text-white rounded-md">Nepal</a>
                  </Link>
                  <Link href="/destination/india" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-sky-950 text-white rounded-md">India</a>
                  </Link>
                  <Link href="/destination/maldives" legacyBehavior>
                    <a className="block px-4 py-2 hover:bg-sky-950 text-white rounded-md">Maldives</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/travel-gadgets" legacyBehavior><a className="block px-4 py-2">Travel Gadgets</a></Link>
          <Link href="/trip-album" legacyBehavior><a>Trip Album</a></Link>
          <Link href="/travelstories" legacyBehavior><a>Travel Stories</a></Link>
          <Link href="/blogs" legacyBehavior><a>Blogs</a></Link>
          <Link href="/aboutus" legacyBehavior><a>About Us</a></Link>
          <Link href="/contactus" legacyBehavior><a>Contact</a></Link>
          <Link href="/login" legacyBehavior>
            <button className="bg-sky-800 hover:bg-sky-900 px-3 py-2 rounded text-white font-medium">
              Log In
            </button>
          </Link>


          <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className="text-white">
            <MdOutlineWbSunny />
          </button>


        </div>
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" legacyBehavior><a className="block px-4 py-2">Home</a></Link>
          <div className="relative">
            <button
              onClick={() => handleSubMenuToggle('destination')}
              className="flex items-center px-4 py-2 focus:outline-none"
            >
              Destination
              {subMenuOpen.destination ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
            </button>
            {subMenuOpen.destination && (
              <div className="bg-sky-800 text-white p-2 rounded shadow-lg">
                <Link href="/obk" legacyBehavior><a className="block py-1 hover:bg-sky-700 rounded-md">Odekha Banglar Khoje</a></Link>
                <Link href="/destination/nepal" legacyBehavior><a className="block py-1 hover:bg-sky-700 rounded-md">Nepal</a></Link>
                <Link href="/destination/india" legacyBehavior><a className="block py-1 hover:bg-sky-700 rounded-md">India</a></Link>
                <Link href="/destination/maldives" legacyBehavior><a className="block py-1 hover:bg-sky-700 rounded-md">Maldives</a></Link>
              </div>
            )}
          </div>
          <Link href="/travel-gadgets" legacyBehavior><a className="block px-4 py-2">Travel Gadgets</a></Link>
          <Link href="/trip-album" legacyBehavior><a className="block px-4 py-2">Trip Album</a></Link>
          <Link href="/travelstories" legacyBehavior><a className="block px-4 py-2">Travel Stories</a></Link>
          <Link href="/blogs" legacyBehavior><a className="block px-4 py-2">Blogs</a></Link>
          <Link href="/aboutus" legacyBehavior><a className="block px-4 py-2">About Us</a></Link>
          <Link href="/contactus" legacyBehavior><a className="block px-4 py-2">Contact</a></Link>
          <Link href="/login" legacyBehavior>
            <button className="block bg-sky-800 hover:bg-sky-900 px-4 py-2 rounded">
              Log In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
