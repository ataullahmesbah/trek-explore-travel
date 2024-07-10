import Image from "next/image";

import EventTabs from '../../components/EventTabs/EventTabs'
import TourConsultationForm from '../../components/TourConsultationForm/TourConsultationForm';
import { FaBrush, FaRegClock, FaTimes } from "react-icons/fa";

const EventDetails = () => {


    return (
        <div className="bg-blue-50">
            <div className="mx-auto max-w-7xl pt-20 px-4">

                {/* Section --- 1 start */}

                <div className="space-y-5">
                    <h1 className="text-center text-4xl">Events</h1>
                    <p className="text-center">Home - Events - Kiwi Link South East Asia 2024</p>
                    <div className=" ">
                        <p className="text-center bg-gray-300 p-5">Monday, July 15, 2024</p>
                    </div>
                </div>

                {/* Section --- 2 start */}

                <div className="container mx-auto mt-5 rounded-md bg-white">
                    <div className="grid grid-cols-6 gap-4">
                        {/* First part with 4/6 width */}
                        <div className="col-span-6 md:col-span-4 space-y-5 relative">
                            <div className="relative w-full h-0 pb-[66.67%]">
                                <Image
                                    src="https://i.ibb.co/C6dKgkv/image.jpg"
                                    alt="Banner"
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    quality={100}
                                    blurDataURL="data"
                                    className="rounded-s-md"

                                />
                            </div>
                        </div>

                        {/* Second part with 2/6 width */}
                        <div className="col-span-6 md:col-span-2 space-y-5 px-2">
                            <h1 className=" text-3xl">Kiwi Link South East Asia 2024</h1>

                            <div className="space-y-5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <FaRegClock className="text-blue-900" />
                                        <p>6 Nights 7 Days</p>
                                    </div>
                                    <div className="border-l h-6 border-black hidden md:block"></div>
                                    <p className="gap-2 mt-2 md:mt-0">
                                        <span className="font-medium">Durations:</span> 7 Days
                                    </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="">
                                        <FaRegClock className="text-blue-900 mt-1" />
                                    </div>
                                    <p>
                                        80% of the fees will be refunded if the booking is canceled more than Thirty-Five (35) days before the beginning of the experience/tour.
                                    </p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* addd */}

            <div className="mx-auto max-w-7xl pt-5 px-4">
                <div className="grid grid-cols-6 gap-4 bg-white rounded-md">
                    <div className="col-span-6 md:col-span-4 space-y-5 relative">

                        {/* First part with 4/6 width */}

                        <div className="relative w-full h-0 pb-[66.67%]">


                            <EventTabs />




                        </div>
                    </div>


                    {/* Second part with 2/6 width */}
                    <div className="col-span-6 md:col-span-2 space-y-5 px-2">

                        <TourConsultationForm />

                    </div>


                </div>
            </div>

        </div>
    );
};

export default EventDetails;