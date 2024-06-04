'use client'


import Image from "next/image";
import { useEffect, useState } from "react";
import { GiDetour } from "react-icons/gi";
import ContainerPage from "../../container/page";


const LatestStories = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        // Fetch the stories from the JSON file
        fetch('/stories.json')
            .then(response => response.json())
            .then(data => setStories(data));
    }, []);

    const latestStories = stories.slice(0, 3);




    return (
        <div>
            <ContainerPage>
                {/* Latest Stories */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold mb-6 text-center">Latest Stories</h1>
                    <div className="flex items-center justify-center mb-9">
                        <div className="border-b-2 w-1/3"></div>
                        <GiDetour className="mx-4 text-2xl text-gray-500" />
                        <div className="border-b-2 w-1/3"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {latestStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={story.imageUrl}
                                    alt={story.title}
                                    width={600}
                                    height={400}
                                    placeholder="blur"
                                    quality={100}
                                    blurDataURL={story.imageUrl}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-2xl font-semibold mb-2">{story.title}</h2>
                                    <p className="text-gray-700">{story.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

            </ContainerPage>
        </div>
    );
};

export default LatestStories;