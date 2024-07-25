'use client'

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: "Nino Rossi Women's Sandal",
    price: "৳ 790",
    image: "https://i.ibb.co/Jpc3b47/image.png", // Update with actual paths to your images
  },
  {
    id: 2,
    name: "Nino Rossi Women's Sandal",
    price: "৳ 790",
    image: "https://i.ibb.co/Jpc3b47/image.png",
  },
  {
    id: 3,
    name: "Sprint Men's Canvas",
    price: "৳ 2,290",
    image: "/path/to/canvas.jpg",
  },
  {
    id: 4,
    name: "Nino Rossi Women's Pumpy",
    price: "৳ 1,690",
    image: "/path/to/pumpy.jpg",
  },
  {
    id: 5,
    name: "Nino Rossi Women's Block Heel",
    price: "৳ 1,990",
    image: "/path/to/heel1.jpg",
  },
  {
    id: 6,
    name: "Nino Rossi Women's Block Heel",
    price: "৳ 1,990",
    image: "/path/to/heel2.jpg",
  },
];

const LatestProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 flex gap-3 justify-between items-center">
        <p className="border-t border-black flex-grow"></p>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">New Arrivals</h1>
        <p className="border-t border-black flex-grow"></p>
      </div>
      <div className="relative flex items-center">
        <FaChevronLeft
          onClick={prevSlide}
          className="absolute left-0 cursor-pointer z-10 text-2xl bg-white p-2 rounded-full shadow-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition transform duration-500 ease-in-out ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
              <h2 className="mt-4 text-sm sm:text-base md:text-lg font-medium">{product.name}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
        <FaChevronRight
          onClick={nextSlide}
          className="absolute right-0 cursor-pointer z-10 text-2xl bg-white p-2 rounded-full shadow-md"
        />
      </div>
    </div>
  );
};

export default LatestProducts;
