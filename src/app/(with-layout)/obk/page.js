import Image from "next/image";
import Head from 'next/head';
import CountDown from '../../components/CountDown/CountDown';

const Page = () => {
    return (
        <>
            <Head>
                <title>Trek Explore Travel Season 2</title>
                <meta name="description" content="Explore hidden beauties of Bangladesh in Season 2 of Trek Explore Travel. Join us to discover stunning travel spots." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Trek Explore Travel Season 2" />
                <meta property="og:description" content="Explore hidden beauties of Bangladesh in Season 2 of Trek Explore Travel. Join us to discover stunning travel spots." />
                <meta property="og:image" content="https://i.ibb.co/FWtThhD/cover.jpg" />
                <meta property="og:url" content="YOUR_PAGE_URL" />
                <meta name="robots" content="index, follow" />
            </Head>

            <div className="py-12">
                {/* First Image as Background */}
                <div
                    className="relative w-full h-[70vh] bg-cover bg-center flex justify-center items-center"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/FWtThhD/cover.jpg')",
                    }}
                >
                    <div className="flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
                        <Image
                            src='/images/logo.webp'
                            alt='Odekha Banglar Khoje Logo'
                            placeholder="blur"
                            quality={100}
                            width={200}
                            height={200}
                            blurDataURL="data:image/webp;base64,..." // Replace with actual base64 string
                            className="mb-4 object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                        />


                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-opacity-75 px-4 py-2 rounded-lg ">
                            ছবি অথবা ভিডিওতে তুলে ধরুন অদেখা বাংলার রূপ
                        </h1>

                        <div className="py-5">
                            <CountDown />
                        </div>

                        <button className="px-4 py-2 mt-4 bg-sky-700 text-white rounded hover:bg-sky-900 transition duration-300">
                            Vote Now
                        </button>
                    </div>
                </div>

                {/* 2nd Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start text-center lg:text-left space-y-10 lg:space-y-0 lg:space-x-20">
                        <div className="flex flex-col items-center">
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src='/images/logo.webp'
                                    alt='Odekha Banglar Khoje Logo'
                                    placeholder="blur"
                                    quality={100}
                                    width={200}
                                    height={200}
                                    blurDataURL="data:image/webp;base64,..." // Replace with actual base64 string
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white bg-sky-800 px-6 py-3 rounded-full">
                                Trek Explore Travel Season 2
                            </h3>
                        </div>

                        <div className="text-gray-800 font-semibold lg:text-base leading-relaxed max-w-xl">
                            <p className="mb-4 text-xl">
                                ‘দেখা হয় নাই চক্ষু মেলিয়া <br />
                                ঘর হইতে দুই পা ফেলিয়া <br />
                                একটি ধানের শিষের উপরে <br />
                                একটি শিশির বিন্দু...’
                            </p>
                            <p className="text-lg">
                                ‘দেখা হয় নাই চক্ষু মেলিয়া ঘর হইতে দুই পা ফেলিয়া একটি ধানের শিষের উপরে একটি শিশির বিন্দু...’
                                বাংলাদেশকে আমরা কতটা চিনি? ঘুরে ফিরে কতটা দেখা হয় এদেশের রূপ? দেশের বিভিন্ন অঞ্চলে ছড়িয়ে আছে অজস্র সুন্দর সুন্দর ট্যুরিস্ট স্পট, যা খুব বেশি মানুষ চেনে না। এমন সব জায়গার খোঁজে আবারও শুরু হয়েছে ‘রুচি অদখো বাংলার খোঁজে সিজন টু’।
                            </p>
                        </div>
                    </div>

                    <div className="py-12">
                        <h3 className="text-2xl font-semibold mb-8">বিচারক</h3>

                        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 text-center">
                            {/* Judge 1 */}
                            <div className="flex flex-col items-center">
                                <div className="flex justify-center items-center mb-4">
                                    <Image
                                        src='https://i.ibb.co/qCzrFnB/ataullah-mesbah.jpg'
                                        alt='Ataullah Mesbah'
                                        placeholder="blur"
                                        quality={100}
                                        width={500}
                                        height={400}
                                        blurDataURL="data:image/webp;base64,..." // Replace with actual base64 string
                                        className="bg-gray-200 lg:w-[400px] lg:h-[500px] object-cover"
                                    />
                                </div>
                                <h5 className="text-xl font-semibold mb-2">আতাউল্যাহ মেজবাহ</h5>
                                <p className="text-base leading-relaxed">
                                    প্রখ্যাত পাখি বিশারদ, ফটোগ্রাফার, লেখক ও ট্র্যাভেলার। পাখি নিয়ে গবেষণা করতে ছুটে বেড়িয়েছেন পৃথিবীর বিভিন্ন প্রান্তে। তিনি প্রথম এবং এখন পর্যন্ত একমাত্র বাংলাদেশী হিসেবে উত্তর মেরু এবং অ্যান্টার্কটিকা জয় করেছেন।
                                </p>
                            </div>

                            {/* Judge 2 */}
                            <div className="flex flex-col items-center">
                                <div className="flex justify-center items-center mb-4">
                                    <Image
                                        src='https://i.ibb.co/hKM0wtG/image.png'
                                        alt='Tarek Anu'
                                        placeholder="blur"
                                        quality={100}
                                        width={500}
                                        height={400}
                                        blurDataURL="data:image/webp;base64,..." // Replace with actual base64 string
                                       className="bg-gray-200 lg:w-[400px] lg:h-[500px] object-cover"
                                    />
                                </div>
                                <h5 className="text-xl font-semibold mb-2">তারেক অণু</h5>
                                <p className="text-base leading-relaxed">
                                    তারেক অণু একাধারে একজন ট্র্যাভেলার, পর্বতারোহী, ফটোগ্রাফার, লেখক এবং পাখি গবেষক। ২০০৭ সালে ইনাম আল হকের সাথে ‘নর্থ পোল ম্যারাথন’ দলের অংশ হয়ে উত্তর মেরু জয় করেন। এছাড়াও প্রথম বাংলাদেশী হিসেবে আল্পস পর্বতের সর্বোচ্চ শিখর মঁ ব্লাঁ জয় করেছেন তিনি। পাঠকের জন্য নিজের ভ্রমণের গল্পগুলোকে লিপিবদ্ধ করেছেন বইয়ে এবং ব্লগে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
