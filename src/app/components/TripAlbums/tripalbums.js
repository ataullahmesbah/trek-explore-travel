'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TripAlbums = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [zoomedImage, setZoomedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 12; // Number of images per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/gallery.json');
                const data = await res.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching gallery data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleZoom = (image) => {
        setZoomedImage(zoomedImage === image ? null : image);
    };

    // Calculate the images to display for the current page
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setIsLoading(true);
        setCurrentPage(pageNumber);
        setTimeout(() => setIsLoading(false), 500); // Adding a small delay for loader
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!images.length) {
        return <div>No images found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg cursor-pointer"
                        style={{ width: '100%', height: '250px' }}
                        onClick={() => toggleZoom(image)}
                    >
                        <Image
                            src={image.url}
                            alt={`${image.name} - ${image.location}`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                            placeholder="blur"
                            blurDataURL={image.url}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-white bg-opacity-75 rounded-full p-2">
                                {/* Optional: Add an icon or text here */}
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-blue-200 p-1 text-center">
                            <h2 className="font-medium">{image.name}</h2>
                            {/* <p className="text-sm">{image.location}</p> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-8 space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                    className="px-3 py-1 border rounded bg-sky-800 text-white flex items-center"
                >
                    <FaArrowLeft />
                </button>

                {Array.from({ length: Math.ceil(images.length / imagesPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 border rounded flex items-center justify-center ${
                            index + 1 === currentPage ? 'bg-sky-600 text-white' : 'bg-sky-800 text-white'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() =>
                        handlePageChange(
                            currentPage < Math.ceil(images.length / imagesPerPage)
                                ? currentPage + 1
                                : Math.ceil(images.length / imagesPerPage)
                        )
                    }
                    className="px-3 py-1 border rounded bg-sky-900 text-white flex items-center"
                >
                    <FaArrowRight />
                </button>
            </div>

            {zoomedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
                    onClick={() => toggleZoom(null)}
                >
                    <div className="relative bg-black bg-opacity-75 p-1 shadow-3xl rounded-lg max-w-full max-h-full overflow-auto">
                        <button
                            className="absolute top-2 right-2 bg-black bg-opacity-75 rounded-full p-2"
                            onClick={() => toggleZoom(null)}
                        >
                            {/* Optional: Add an "X" icon or text here */}
                        </button>
                        <div className="flex items-center justify-center">
                            <Image
                                src={zoomedImage.url}
                                alt={`${zoomedImage.name} - ${zoomedImage.location}`}
                                width={580}
                                height={250}
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="mt-2 text-center">
                            <h2 className="text-sm text-white">{zoomedImage.name}</h2>
                            <p className="text-sm text-white">{zoomedImage.location}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TripAlbums;
