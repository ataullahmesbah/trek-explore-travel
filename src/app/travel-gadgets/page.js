

import BannerEco from "./components/Home/BannerEco/BannerEco";
import GadgetsNavbar from "./components/GadgetsNavbar/GadgetsNavbar";
import FeatureSection from "./components/Home/FeatureSection/FeatureSection";
import AllCategories from "./components/Shop/AllCategories/AllCategories";
import GadgetBanner from "./components/Home/GadgetBanner/GadgetBanner";
import EcommerceNavbar from "./components/EcommerceNavbar/EcommerceNavbar";
import LatestProducts from "./components/products/LatestProducts/LatestProducts";
import RainCoat from "./components/products/RainCoat/RainCoat";


const TravelGadgets = () => {
    return (
        <div>

            <GadgetsNavbar />
            <EcommerceNavbar />
            <BannerEco />
            <FeatureSection />
            <AllCategories />
            <GadgetBanner />
            <LatestProducts />
            <RainCoat />


        </div>
    );
};

export default TravelGadgets;