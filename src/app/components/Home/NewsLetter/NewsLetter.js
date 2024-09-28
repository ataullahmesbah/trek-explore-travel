
import News from '../News/News';

const NewsLetter = () => {
    

    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32">
        
            <div className="max-w-5xl mx-auto text-center poppins">
                {/* Newsletter Header */}
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-gray-700 ">
                    Get the latest updates, travel tips, and exclusive offers from <span className="font-semibold">Trek Explore Travel</span> right in your inbox.
                </p>

                {/* Newsletter Form */}
                <News />
            </div>
        </section>
    );
};

export default NewsLetter;
