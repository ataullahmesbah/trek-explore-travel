'use client';

import React, { useState } from 'react';
import EventsSummary from '../../components/Events/EventsSummary/EventsSummary';
import EventItinerary from '../../components/Events/EventItinerary/EventItinerary';
import EventsPolicy from '../../components/Events/EventsPolicy/EventsPolicy';

const EventTabs = () => {
    const [activeTab, setActiveTab] = useState('summary'); // State to manage active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            {/* Tab navigation */}
            <div className="flex flex-wrap  bg-gray-100 rounded-full  space-x-2">
                <TabItem label="Summary" tabName="summary" activeTab={activeTab} onClick={handleTabClick} />
                <TabItem label="Itinerary" tabName="itinerary" activeTab={activeTab} onClick={handleTabClick} />
                <TabItem label="Policies" tabName="policies" activeTab={activeTab} onClick={handleTabClick} />
                <TabItem label="Options" tabName="options" activeTab={activeTab} onClick={handleTabClick} />
            </div>

            {/* Content for each tab */}
            <div className="py-4">
                {activeTab === 'summary' && <div id="summary" className="py-4">
                    <EventsSummary />
                    
                </div>}
                {activeTab === 'itinerary' && <div className="py-4">
                    <EventItinerary />
                </div>}
                {activeTab === 'policies' && <div className="py-4">
                    <EventsPolicy />
                    </div>}
                {activeTab === 'options' && <div className="py-4">Options content goes here</div>}
            </div>
        </div>
    );
};

// TabItem component for individual tabs
const TabItem = ({ label, tabName, activeTab, onClick }) => {
    return (
        <div
            className={`flex-1 rounded-full text-xs md:text-xl lg:text-lg p-1 text-center cursor-pointer transition-colors duration-300 ${activeTab === tabName
                ? 'border-b-4 border-sky-300 font-bold text-white  bg-sky-900'
                : 'text-gray-700 font-semibold  bg-gray-100'
                }`}
            onClick={() => onClick(tabName)}
        >
            {label}
        </div>
    );
};

export default EventTabs;