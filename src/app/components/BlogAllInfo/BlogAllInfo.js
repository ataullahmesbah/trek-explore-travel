'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GiDetour } from 'react-icons/gi';
import Link from 'next/link';



const BlogallInfo = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetch('/blog.json')
            .then(response => response.json())
            .then(data => setBlogs(data));
    }, []);

    const latestBlogs = blogs.slice(0, 3);
    const allBlogs = blogs.slice(3);


    return (
        <div>

            {/* Latest Blogs */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="title mb-6 text-center">Latest Blogs</h1>
                <div className="flex items-center justify-center mb-9">
                    <div className="border-b-2 w-1/3"></div>
                    <GiDetour className="mx-4 text-2xl text-gray-500" />
                    <div className="border-b-2 w-1/3"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {latestBlogs.map((blog, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden border-l-8 border-b-4 border-b-sky-500 border-sky-900 hover:border-sky-800 shadow-md hover:shadow-xl">
                            <Image
                                src={blog.image}
                                width={400}
                                height={250}
                                objectFit="cover"
                                placeholder="blur"
                                quality={100}
                                blurDataURL={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                                <p className="text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                                <p className="text-gray-700 mb-4">
                                    {blog.description.slice(0, 60)}...
                                </p>
                                <Link href={`/blog/${blog._id}`} legacyBehavior>
                                    <a className="text-sky-900 bottom-0 left-0 font-semibold hover:underline">Read More</a>
                                </Link>
                            </div>
                        </div>


                    ))}
                </div>

                {/* Divider with Icon */}
                <div className="flex items-center justify-center">
                    <div className="border-b-2 w-1/3"></div>
                    <FaGlobeAmericas className="mx-4 text-2xl text-gray-500" />
                    <div className="border-b-2 w-1/3"></div>
                </div>
            </div>

            {/* All Blogs */}

            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h2 className="title mb-6 text-center">Features Blogs</h2>
                <div className="flex justify-center mt-4 mb-10">
                    <div className="border-b-2 w-3/4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allBlogs.map((blog, index) => (

                        <div key={index} className="bg-white rounded-lg overflow-hidden border-l-8 border-b-4 border-b-sky-500 border-sky-900 hover:border-sky-800 shadow-md hover:shadow-xl">
                            <Image
                                src={blog.image}
                                width={400}
                                height={250}
                                objectFit="cover"
                                placeholder="blur"
                                quality={100}
                                blurDataURL={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                                <p className="text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                                <p className="text-gray-700 mb-4">
                                    {blog.description.slice(0, 60)}...
                                </p>
                                <Link href={`/blog/${blog._id}`} legacyBehavior>
                                    <a className="text-sky-900 bottom-0 left-0 font-semibold hover:underline">Read More</a>
                                </Link>
                            </div>
                        </div>


                    ))}
                </div>
            </div>


        </div>
    );
};

export default BlogallInfo;