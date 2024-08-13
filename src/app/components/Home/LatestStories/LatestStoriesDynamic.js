'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ContainerPage from '../../container/page';

const LatestStoriesDynamic = () => {
    const router = useRouter();
    const { id } = router.query;
    const [story, setStory] = useState(null);

    useEffect(() => {
        if (id) {
            fetch('/stories.json')
                .then(response => response.json())
                .then(data => {
                    const fetchedStory = data.find(story => story._id === id);
                    setStory(fetchedStory);
                });
        }
    }, [id]);

    if (!story) return <div>Loading...</div>;

    return (
        <ContainerPage>
            <div className="max-w-7xl mx-auto mt-16 mb-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
                <Image
                    src={story.imageUrl}
                    alt={story.title}
                    width={800}
                    height={500}
                    className="w-full h-80 object-cover mb-4"
                />
                <p className="text-lg mb-4">{story.shortDescription}</p>
                <p className="text-base text-gray-700">{story.description}</p>
            </div>
        </ContainerPage>
    );
};

export default LatestStoriesDynamic;
