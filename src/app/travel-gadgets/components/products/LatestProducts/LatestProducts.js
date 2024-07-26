'use client'

import Image from 'next/image';

import Link from 'next/link';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Adidas Adi Trend 2.0 Shoe - Kids",
    price: 5592,
    originalPrice: 6990,
    image: "https://i.ibb.co/Jpc3b47/image.png",
    discount: 23, // 20% discount
  },
  {
    id: 2,
    name: "Adidas Adi Trend 2.0 Shoe - Kids",
    price: 5592,
    originalPrice: 6990,
    image: "https://i.ibb.co/Jpc3b47/image.png",
    discount: 25, // 25% discount
  },
  {
    id: 3,
    name: "Adidas Prohiker - Men",
    price: 11200,
    originalPrice: 14000,
    image: "https://i.ibb.co/Jpc3b47/image.png",
    discount: 20,
  },
  {
    id: 4,
    name: "Adidas Ford Up - Men",
    price: 11200,
    originalPrice: 14000,
    image: "https://i.ibb.co/Jpc3b47/image.png",
    discount: 20,
  },
  {
    id: 5,
    name: "Adidas Epik Comfort Shoe - Men",
    price: 11200,
    originalPrice: 14000,
    image: "https://i.ibb.co/Jpc3b47/image.png",
    discount: 27,
  },
  {
    id: 6,
    name: "Adidas Adi Trend 2.0 Shoe - Kids",
    price: 5592,
    originalPrice: 6990,
    image: "https://i.ibb.co/Jpc3b47/image.png",
    discount: 25,
  },
  {
    id: 7,
    name: "Adidas Prohiker - Men",
    price: 11200,
    originalPrice: 14000,
    image: "https://i.ibb.co/Jpc3b47/image.png",
    discount: 20,
  },
];


const LatestProducts = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (visibleIndex + itemsPerPage < products.length) {
      setVisibleIndex(visibleIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (visibleIndex - itemsPerPage >= 0) {
      setVisibleIndex(visibleIndex - itemsPerPage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 flex gap-3 justify-between items-center">
        <p className="border-t border-black flex-grow"></p>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase">International Brands</h1>
        <p className="border-t border-black flex-grow"></p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.slice(visibleIndex, visibleIndex + itemsPerPage).map((product) => {
            const discountedPrice = product.originalPrice * (1 - product.discount / 100);
            return (
              <div key={product.id} className="relative border border-gray-300 rounded-lg p-4">
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg text-xs">
                  {product.discount}% OFF
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
                <h2 className="mt-4 text-sm sm:text-base md:text-lg font-medium">{product.name}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 line-through">
                  ৳ {product.originalPrice}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">৳ {discountedPrice.toFixed(2)}</p>
              </div>
            );
          })}
          <div className="flex items-center justify-center">
            <Link href="/products" legacyBehavior>
              <a className="text-blue-500 hover:underline">View All</a>
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-2">
          <button onClick={handlePrevious} className="bg-gray-800 text-white px-2 py-1 rounded-lg">
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2">
          <button onClick={handleNext} className="bg-gray-800 text-white px-2 py-1 rounded-lg">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
