import { FaTruck, FaBoxOpen, FaTags, FaClock } from 'react-icons/fa';

const FeatureSection = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex items-center space-x-4">
                        <FaTruck className="text-gray-500  text-4xl" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Curb-side pickup</h3>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaBoxOpen className="text-gray-500 text-4xl" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Free shipping on orders over $50</h3>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaTags className="text-gray-500 text-4xl" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Low prices guaranteed</h3>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaClock className="text-gray-500 text-4xl" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Available to you 24/7</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
