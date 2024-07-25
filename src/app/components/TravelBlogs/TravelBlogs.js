'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '../loader/loader';

const TravelBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/blog.json');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const latestBlogs = blogs.slice(0, 3);

    if (loading) {
        return <Loader />;
    }


    return (


        <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

            <div className='text-center space-y-5 lg:space-y-6 mb-12'>
            <h1 className="title">Featured Blog Posts</h1>
            <p className="subtitle">A small sampling of expert advice and insight from Trek Explore Travel blog.</p>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-4">
                                {blog.description.slice(0, 100)}...
                            </p>
                            <Link href={`/blog/${blog._id}`} legacyBehavior>
                                <a className="text-sky-900 bottom-0 left-0 hover:underline">Read More</a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center justify-center pt-12">
                <Link href='/blogs' >
                    <button className="bg-sky-900 text-white px-6 py-3 sm:py-3 sm:px-8 font-medium rounded-md shadow-md hover:bg-sky-700 transition duration-300">
                        More Blogs
                    </button>
                </Link>
            </div>

        </div>

    );
};

export default TravelBlogs;
