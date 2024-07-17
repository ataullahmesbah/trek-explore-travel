

import BannerEco from "./components/Home/BannerEco/BannerEco";
import GadgetsNavbar from "./components/GadgetsNavbar/GadgetsNavbar";
import FeatureSection from "./components/Home/FeatureSection/FeatureSection";
import AllCategories from "./components/Shop/AllCategories/AllCategories";
import GadgetBanner from "./components/Home/GadgetBanner/GadgetBanner";


const TravelGadgets = () => {
    return (
        <div>

            <GadgetsNavbar />
            <BannerEco />
            <FeatureSection />
            <AllCategories />
            <GadgetBanner/>


        </div>
    );
};

export default TravelGadgets;