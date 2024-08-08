import React from 'react';
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';

const VideoGallery = () => {
    const videoIds = [
        'i1Ms7lmRD3c?si=OnZ0Tz18AkNz2p0I',
        'y0wXQ5EdW_0?si=KYXyerD86qgi7Ro-',
        'wFn-jqLc10k?si=93liFfdFnBE3rb4U',
    ];

    const facebookVideoUrls = [
        'https://www.facebook.com/100023260389958/videos/1378739092700870/',
        'https://www.facebook.com/reel/6987489514710138',
        'https://www.facebook.com/reel/494426556580965',
        // Add more Facebook video URLs as needed
    ];

    return (
        <div className="p-4">
            <YouTubeEmbed videoIds={videoIds} facebookVideoUrls={facebookVideoUrls} />
        </div>
    );
};

export default VideoGallery;
