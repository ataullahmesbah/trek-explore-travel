'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellingProduct = () => {
    const [topSelling, setTopSelling] = useState([]);

    useEffect(() => {
        const fetchTopSelling = async () => {
            try {
                const response = await fetch('/topsellingproduct.json');
                const data = await response.json();
                setTopSelling(data);
            } catch (error) {
                console.error('Failed to fetch top-selling products:', error);
            }
        };

        fetchTopSelling();
    }, []);

    const settings = {
        dots: false, // Hide dots
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10  ">
            <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4 poppins">Top Selling Products</h1>
            <Slider {...settings} className="bg-gray-50 rounded-sm">
                {topSelling.map((topSell, index) => (
                    <div key={index} className="flex flex-col items-center p-4">
                       
                            <div className="flex flex-col items-center">
                                <Image
                                    src={topSell.img}
                                    alt={topSell.title}
                                    width={300}
                                    height={300}
                                    className="object-contain w-64 h-52"
                                />
                                <div className="pt-3 text-center">

                                    <h2 className="text-lg font-semibold">{topSell.title}</h2>

                                    

                                </div>
                                <div className="mt-3">
                                    <Link href={`/topSell/${topSell._id}`} legacyBehavior className="mt-5">
                                        <a className=" text-white hover:bg-sky-900 bg-sky-700 px-5 py-2 rounded-md ">Order</a>
                                    </Link>
                                    </div>
                            </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TopSellingProduct;
