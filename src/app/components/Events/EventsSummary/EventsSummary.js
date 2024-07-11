'use client';

import { useState } from "react";
import { FaGlobe, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const EventsSummary = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(null);

    const accordingData = [
        {
            summary: "Embark on a captivating journey through the wonder of Cox's Bazar with the Cox’s Bazar Tour Package, spanning 2 days and 1 night. On the first day, explore the underworld and its magnificent creatures with the large underwater aquarium Radiant Fish World, the first live fish aquarium in Bangladesh. After a comfortable night's stay, day two promises an entire day of nature retreat starting with the scenic beauty of Himchari on the longest Marine Drive road in the world with breathtaking views of sea and hills to finally ending the trip with the calming breeze of Teknaf Jetty. A relaxing long drive around Marine Drive makes the perfect day out with friends and family. With reserved transportation ensuring seamless travel, this tour offers an ideal blend of adventure and relaxation, leaving you with unforgettable memories of the World's Longest sea beach and its surrounding natural beauty.",
            location: "From Accommodation Hotel.",
            timing: "6 Nights 7 Days",
        },
    ];

    const handleClick = (index) =>
        setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="flex gap-3 flex-col w-full">
            {accordingData.map((data, dataIndex) => (
                <>
                    {/* Summary Accordion */}
                    <article key={`summary-${dataIndex}`} id="summary" className=" border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`summary-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaGlobe className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Overview</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `summary-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `summary-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.summary}
                            </p>
                        </div>
                    </article>

                    {/* Location Accordion */}
                    <article key={`location-${dataIndex}`} className="border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`location-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Location</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `location-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `location-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.location}
                            </p>
                        </div>
                    </article>

                    {/* Timing Accordion */}
                    <article key={`timing-${dataIndex}`} className="border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`timing-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaClock className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Timing</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `timing-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `timing-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.timing}
                            </p>
                        </div>
                    </article>
                </>
            ))}
        </div>
    );
};

export default EventsSummary;
