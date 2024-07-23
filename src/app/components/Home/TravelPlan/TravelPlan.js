
import Image from "next/image";
import Link from "next/link";
import ContainerPage from "../../container/page";

const TravelPlan = () => {
    return (

        <div className="">
            <ContainerPage>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto py-10 lg:py-16 px-4 sm:px-6 lg:px-8 ">
                    {/* Left side */}

                    <div className='space-y-5 lg:space-y-6'>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Explore the World’s Best Destinations with Expert Guides on our Adventure Tours</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 ">Adventure awaits when you set off on the trail less traveled. Explore the best of the world’s most beautiful destinations – from the well-known to the well-hidden – and get an up-close view at local life. Discover the natural wonders and dynamic cultures of our world with expert guides leading the way and every detail handled from start to finish.</p>

                        <Link href='/' legacyBehavior>
                            <button className="bg-sky-900 text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-md shadow-md hover:bg-sky-700 transition duration-300">
                                Plan Your Adventure Tour Now
                            </button>
                        </Link>

                    </div>

                    {/* <div>
                        <h1 className="text-3xl font-bold mb-4">
                            
                        </h1>
                        <p className="mb-6 text-lg">
                            
                        </p>

                        


                    </div> */}

                    {/* Right side */}
                    <div className="flex justify-center">
                        <Image
                            src='https://i.ibb.co/sKdpBNk/lakes.jpg'
                            width={800}
                            height={600}
                            alt="Travel Plan Image"
                            className="rounded-lg"
                            placeholder="blur"
                            blurDataURL="https://i.ibb.co/Jpc3b47/image.png"
                        />
                    </div>
                </div>
            </ContainerPage>
        </div>

    );
};

export default TravelPlan;
