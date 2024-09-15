'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const BannerEco = () => {
    // Define state for banners
    const [banners, setBanners] = useState([]);

    // Fetch banners data dynamically
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch('/ecommercebanner.json'); // Replace with your banners data endpoint
                const data = await response.json();
                setBanners(data);
            } catch (error) {
                console.error('Failed to fetch banners:', error);
            }
        };

        fetchBanners();
    }, []);

    return (
        <div className="relative h-[calc(100vw*(2/3))] max-h-[500px] overflow-hidden pt-16">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="my-swiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <Link href={banner.link}>
                            <div className="relative h-[calc(100vw*(2/3))] max-h-[500px] w-full cursor-pointer">
                                <Image
                                    src={banner.image}
                                    alt={banner.title}
                                    fill
                                    style={{ objectFit: 'cover' }} 
                                    placeholder="blur"
                                    blurDataURL={banner.image} 
                                />
                                <div className="absolute inset-0 text-center bg-black bg-opacity-50 flex flex-col justify-center items-center">
                                    <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">{banner.title}</h1>
                                    <button className="px-6 py-3 border border-sky-800 hover:bg-sky-900 text-white text-lg font-semibold rounded-lg">
                                        {banner.buttonText}
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerEco;
