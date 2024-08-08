
'use client'
import React, { useState } from 'react';

const YouTubeEmbed = ({ videoIds, facebookVideoUrls }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="container mx-auto px-4 lg:px-16 py-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Render YouTube videos */}
                {videoIds.map((id) => (
                    <div key={id} className="video-item cursor-pointer">
                        <iframe
                            className="w-full h-52 sm:h-56 md:h-64 rounded-md"
                            src={`https://www.youtube.com/embed/${id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
                {/* Render Facebook videos */}
                {facebookVideoUrls.map((url) => (
                    <div key={url} className="video-item cursor-pointer">
                        <iframe
                            className="w-full h-52 sm:h-56 md:h-64 rounded-md" // Adjust the height to match YouTube videos
                            src={`https://www.facebook.com/plugins/video.php?href=${url}&show_text=0&width=560`}
                            width="560"
                            height="315"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                ))}
                {/* Render selected video */}
                {selectedVideo && (
                    <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center mt-4">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full max-w-xl"
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default YouTubeEmbed;
