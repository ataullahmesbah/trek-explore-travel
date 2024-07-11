'use client';

import { useState } from "react";
import { FaGlobe, FaMapMarkerAlt, FaClock, FaInfoCircle, FaLightbulb } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const EventItinerary = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(null);

    const accordingData = [
        {
            itinerary: "Embark on a captivating journey through the wonder of Cox's Bazar with the Cox’s Bazar Tour Package, spanning 2 days and 1 night. On the first day, explore the underworld and its magnificent creatures with the large underwater aquarium Radiant Fish World, the first live fish aquarium in Bangladesh. After a comfortable night's stay, day two promises an entire day of nature retreat starting with the scenic beauty of Himchari on the longest Marine Drive road in the world with breathtaking views of sea and hills to finally ending the trip with the calming breeze of Teknaf Jetty. A relaxing long drive around Marine Drive makes the perfect day out with friends and family. With reserved transportation ensuring seamless travel, this tour offers an ideal blend of adventure and relaxation, leaving you with unforgettable memories of the World's Longest sea beach and its surrounding natural beauty.",
            inclusion: "From Accommodation Hotel.",
            description: "6 Nights 7 Days",
            additionalinfo: "Some additional information about the trip.",
            traveltips: "Some travel tips for the trip.",
        },
    ];

    const handleClick = (index) =>
        setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="flex gap-3 flex-col w-full">
            {accordingData.map((data, dataIndex) => (
                <>
                    {/* Itinerary Accordion */}
                    <article key={`itinerary-${dataIndex}`} id="itinerary" className="border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`itinerary-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaGlobe className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Itinerary</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `itinerary-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `itinerary-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.itinerary}
                            </p>
                        </div>
                    </article>

                    {/* Inclusion Accordion */}
                    <article key={`inclusion-${dataIndex}`} className="border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`inclusion-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Inclusion</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `inclusion-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `inclusion-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.inclusion}
                            </p>
                        </div>
                    </article>

                    {/* Description Accordion */}
                    <article key={`description-${dataIndex}`} className="border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`description-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaClock className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Description</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `description-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `description-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.description}
                            </p>
                        </div>
                    </article>

                    {/* Additional Info Accordion */}
                    <article key={`additionalinfo-${dataIndex}`} className="border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`additionalinfo-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaInfoCircle className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Additional Info</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `additionalinfo-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `additionalinfo-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.additionalinfo}
                            </p>
                        </div>
                    </article>


                    {/* Travel Tips Accordion */}
                    <article key={`traveltips-${dataIndex}`} className="border-b border-[#e5eaf2] rounded py-3">
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(`traveltips-${dataIndex}`)}
                        >
                            <div className="flex items-start gap-4">
                                <FaLightbulb className="text-sky-900 text-2xl mt-1" />
                                <p className="text-xl font-semibold">Travel Tips</p>
                            </div>
                            <FaChevronDown
                                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${isAccordionOpen === `traveltips-${dataIndex}` && "rotate-[180deg] !text-[#021f29]"}`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === `traveltips-${dataIndex}`
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-[#424242] text-[0.9rem] overflow-hidden px-10">
                                {data.traveltips}
                            </p>
                        </div>
                    </article>
                </>
            ))}
        </div>
    );
};

export default EventItinerary;
