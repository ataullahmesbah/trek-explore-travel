'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {

        const fetchEvents = async () => {
            try {
                const response = await fetch('/events.json');
                const eventData = await response.json();
                setEvents(eventData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className='text-center space-y-5 lg:space-y-6 mb-12'>
            <h1 className="title">Upcoming Events</h1>
            <p className="subtitle">Discover events throughout Taranaki and all around the world</p>
            </div>

                {/* <h1 className="title"></h1>
                <p className="text-center mb-12 text-base sm:text-lg md:text-xl text-gray-700"></p> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative w-full h-64 group">
                            <Image
                                src={events.length > 0 ? events[0].imageUrl : ''}
                                alt={events.length > 0 ? events[0].title : ''}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            />
                            <div className="absolute bottom-0 left-0 p-4  text-white w-full">
                                <h2 className="text-xl font-semibold">{events.length > 0 ? events[0].title : ''}</h2>
                                <p className="text-sm">{events.length > 0 ? events[0].date : ''}</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform ">
                                <h2 className="text-2xl font-semibold mb-2">{events.length > 0 ? events[0].title : ''}</h2>
                                <p className="mb-2">{events.length > 0 ? events[0].description : ''}</p>
                                <span>{events.length > 0 ? events[0].date : ''}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.slice(1).map((event, index) => (
                            <div key={index} className="relative w-full h-64 group">
                                <Image
                                    src={event.imageUrl}
                                    alt={event.title}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    quality={100}
                                    blurDataURL={event.imageUrl}
                                    className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                />
                                <div className="absolute bottom-0 left-0 p-4  text-white w-full">
                                    <h2 className="text-xl font-semibold">{event.title}</h2>
                                    <p className="text-sm">{event.date}</p>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform ">
                                    <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                                    <p className="mb-2">{event.description}</p>
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center justify-center pt-12">
                    <button className="bg-sky-900 text-white px-6 py-3 sm:py-3 sm:px-8 font-medium rounded-md shadow-md hover:bg-sky-700 transition duration-300">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
