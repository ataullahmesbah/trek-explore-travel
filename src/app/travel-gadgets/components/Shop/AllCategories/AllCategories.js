'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Initialize Swiper with modules
const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/categories.json');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="relative container mx-auto mb-10 px-4 sm:px-6 lg:px-8 py-10">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 }
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                className="my-swiper"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-between bg-gray-200 pt-5">
                            <Link href={category.category} legacyBehavior>
                                <a className="text-xl md:text-lg font-bold poppins mb-2">{category.title}</a>
                            </Link>
                            <div className="border-b border-sky-900 w-1/2 mb-2"></div>
                            <p className="text-sm text-gray-600 py-5">{category.sub_category}</p>
                            <div className="flex flex-col items-center">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    width={300}
                                    height={300}
                                    className="object-contain w-64 h-52"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
                .my-swiper .swiper-button-next,
                .my-swiper .swiper-button-prev {
                    color: #000; /* Change this to the color you want for the navigation buttons */
                }
                .my-swiper .swiper-pagination-bullet {
                    background-color: #000; /* Change this to the color you want for the pagination bullets */
                }
                .my-swiper .swiper-pagination-bullet-active {
                    background-color: #ff0000; /* Change this to the color you want for the active pagination bullet */
                }
            `}</style>
        </div>
    );
};

export default AllCategories;
