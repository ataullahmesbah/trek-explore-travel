'use client';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const News = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleIframeLoad = () => {
        setIsLoading(false);
        toast.success('You have successfully subscribed to our newsletter'); // Show toast immediately after iframe load
    };

    const handleSubmit = () => {
        setIsLoading(true);
        // Removed the delay to show the toast message as soon as possible
    };

    return (
        <div className="w-full py-8 flex justify-center items-center px-2">
            <div className="relative w-full max-w-xs h-20">
                {/* Loading indicator */}
                {isLoading && (
                    <div className="loading-container">
                        <div className="loader"></div>
                        <p>Submitting...</p>
                    </div>
                )}

                {/* Responsive iframe container */}
                <div className="iframe-container">
                    <iframe
                        src="https://embeds.beehiiv.com/f91447f0-fc0e-440f-941d-f76da1988119?slim=true"
                        data-test-id="beehiiv-embed"
                        frameBorder="0"
                        scrolling="no"
                        onLoad={handleIframeLoad}
                        onClick={handleSubmit}
                    />
                </div>
            </div>

            {/* Toast container to show notifications */}
            <ToastContainer />
        </div>
    );
};

export default News;
