


'use client'




import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const EventsSummary = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  // according data
  const accordingData = [
    {
      title: "Overview",
      description:
        "Spend a fun filled family vacation to the 3 crowned jewels in the paradise of all amidst the lofty green Himalayas hailed all over the world to glittering lakes surrounded by stationary houseboats in the Heaven on Earth - Kashmir",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design",
      description: `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description: `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },

    {
      title: `What is the significance of color theory in design`,
      description: `Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.`,
    },
  ];

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <article key={index} className="border-b border-[#e5eaf2] rounded py-3">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleClick(index)}>
            <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
              {according.title}
            </h2>
            <p>
              <FaChevronDown
                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${
                  isAccordingOpen === index && "rotate-[180deg] !text-[#3B9DF8]"
                }`}
              />
            </p>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isAccordingOpen === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}>
            <p className="text-[#424242] text-[0.9rem] overflow-hidden">
              {according.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EventsSummary;
              