import Head from 'next/head';
import Banner from "../components/Home/Banner";
import LatestStories from "../components/Home/LatestStories/LatestStories";
import TravelPlan from "../components/Home/TravelPlan/TravelPlan";
import UpcomingEvents from "../components/Home/UpcomingEvent/UpcomingEvent";
import EventSystem from "../components/Home/EventSystem/EventSystem";
import CleanSafeAdventures from "../components/Home/CleanSafeAdventures/CleanSafeAdventures";
import TravelClub from "../components/Home/TravelClub/TravelClub";
import FAQ from '../components/Home/FAQ/FAQ';
import TravelBlogs from '../components/TravelBlogs/TravelBlogs';
import EcommerceStore from '../components/Home/EcommerceStore/EcommerceStore';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
import News from '../components/Home/News/News';

export default function Home() {
    return (
        <>
            <Head>
                <title>Trek Explore Travel - Plan Your Adventure Tour Now</title>
                <meta name="description" content="Welcome to Trek Explore Travel! Discover and plan your next adventure with us. We offer personalized travel packages, expert guides, and unforgettable experiences to the most exciting destinations around the world. Explore, dream, and discover with Trek Explore Travel." />
                <meta name="keywords" content="Trek Explore Travel, adventure tours, travel packages, personalized travel, expert guides, travel experiences, trekking, travel destinations" />
                <meta name="author" content="Trek Explore Travel" />
                <meta property="og:title" content="Trek Explore Travel - Plan Your Adventure Tour Now" />
                <meta property="og:description" content="Welcome to Trek Explore Travel! Discover and plan your next adventure with us. We offer personalized travel packages, expert guides, and unforgettable experiences to the most exciting destinations around the world. Explore, dream, and discover with Trek Explore Travel." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.trekexploretravel.com/" />
                <meta property="og:image" content="https://www.trekexploretravel.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Trek Explore Travel - Plan Your Adventure Tour Now" />
                <meta name="twitter:description" content="Welcome to Trek Explore Travel! Discover and plan your next adventure with us. We offer personalized travel packages, expert guides, and unforgettable experiences to the most exciting destinations around the world. Explore, dream, and discover with Trek Explore Travel." />
                <meta name="twitter:image" content="https://www.trekexploretravel.com/twitter-image.jpg" />
            </Head>
            <main className="">
                <Banner />
                <LatestStories />
                <TravelPlan />
                <UpcomingEvents />
                <EcommerceStore />
                <CleanSafeAdventures />
                <EventSystem />
                <TravelClub />
                <FAQ />
                <TravelBlogs />
                <NewsLetter />
             
            </main>
        </>
    );
}
