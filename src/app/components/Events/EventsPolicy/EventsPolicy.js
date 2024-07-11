'use client';

import { useState } from "react";
import { FaGlobe, FaMapMarkerAlt, FaClock, FaInfoCircle, FaLightbulb } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const EventsPolicy = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(null);

    const accordingData = [
        {
            cancellation: "To cancel any tour, an email has to be sent to tours@gozayaan.com mentioning the tour booking ID and details about the cancellation. Travelers are responsible for notifying GoZayaan of any cancellations as soon as possible. The email acts as the final application for cancellation. Phone calls to GoZayaan's hotline or contacting any team member directly will not be considered as cancellation requests. The time of sending the email will be considered as the time of cancellation. In cases of exceptional circumstances, such as acts of God, natural disasters, or mandatory government closures, GoZayaan Limited may offer alternative dates for the tour or a full refund, at GoZayaan's discretion. If a tour is cancelled by the tour operator due to unforeseen circumstances, travelers will be entitled to a full refund of the tour fee. This policy is subject to change without prior notice. Please refer to the website or booking confirmation voucher/invoice for the most up-to-date information. Tours booked for blackout dates, government holidays, and festival periods are non-refundable and non-cancellable. This cancellation policy may not be applicable in case of national emergency/ lockdown/ political unrest/ natural disaster etc. This policy is applicable to all tour cancellations, regardless of the reason for cancellation.",
            refund: "80% of the fees will be refunded if the booking is canceled more than Thirty-Five (35) days before the beginning of the experience/tour. Refund will not be provided if the tour is cancelled less than Thirty-Five (35) days before the beginning of the experience/tour. Convenience fees and insurance fees are non-refundable and will be deducted from the paid amount. All refunds will be processed within five (5) working days.",
            childPolicy: "• Anyone who is above ten (10) years old will be considered as an adult and full price has to be paid for that traveler. • Maximum one (1) child can be accommodated with two (2) adults in a single room."
        }
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
                                <p className="text-xl font-semibold">Cancellation</p>
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
                                {data.cancellation}
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
                                <p className="text-xl font-semibold">Refund</p>
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
                                {data.refund}
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
                                <p className="text-xl font-semibold">Child Policy</p>
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
                                {data.childPolicy}
                            </p>
                        </div>
                    </article>


                </>
            ))}
        </div>
    );
};

export default EventsPolicy;
