'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/products.json');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mb-10 px-4 sm:px-6 lg:px-8 py-20 group relative">
      <div className="text-center mb-12 flex gap-3 justify-between items-center">
        <p className="border-t border-black flex-grow"></p>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">New Arrivals</h1>
        <p className="border-t border-black flex-grow"></p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          }

        }}
      >
        {products.map((product) => {
          const discountedPrice = product.originalPrice * (1 - product.discount / 100);
          return (
            <SwiperSlide key={product.id}>
              <div className=" h-[400px] border border-gray-300 rounded-lg p-1 flex flex-col justify-between relative">
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg text-xs">
                  {product.discount}% OFF
                </div>
                <div className="w-full h-48 mb-2 flex justify-center items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h2 className="mt-2 px-2 text-black font-semibold">{product.name}</h2>
                <div className='px-2 space-y-2 flex-grow flex flex-col justify-between'>
                  <div className='flex mt-auto mb-5 md:gap-2 gap-5 text-center pt-5'>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 line-through">
                      ৳ {product.originalPrice}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">৳ {discountedPrice.toFixed(0)}</p>
                  </div>
                  <div className='mt-auto pb-2 text-center'>
                    <Link href={`/products/${product.id}`} legacyBehavior>
                      <a className="text-white bg-sky-950 px-5 p-2 rounded-md hover:underline">Add to Cart</a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <div className="flex items-center justify-center text-center-38 pt-44">
            <Link href="/products" legacyBehavior>
              <a className="text-blue-500 hover:underline text-center">View All</a>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="custom-prev bg-gray-800 text-white px-2 py-1 rounded-lg">
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="custom-next bg-gray-800 text-white px-2 py-1 rounded-lg">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default LatestProducts;
