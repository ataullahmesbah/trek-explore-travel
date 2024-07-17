
"use client";

import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";

export default function BannerDemo() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
      fetch('/bannereco.json')
        .then(response => response.json())
        .then(data => setSlides(data.slice(0, 3))); // Get the first 3 slides
    }, []);
  
    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pb-36">
        <Carousel leftControl="left" rightControl="right">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full w-full">
              <img src={slide.imageUrl} alt={slide.title} className="object-cover h-full w-full" />
              <div className="absolute inset-0 text-center bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">{slide.title}</h1>
                <button className="px-6 py-3 border border-sky-800 hover:bg-sky-900 text-white text-lg font-semibold rounded-lg">SHOP NOW</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }