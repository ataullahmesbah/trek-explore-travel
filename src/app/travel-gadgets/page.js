import Link from "next/link";
import GadgetsHome from "./components/GadgetsHomePage/GadgetsHome/GadgetsHome";
import BannerEco from "./components/Home/BannerEco/BannerEco";
import GadgetsNavbar from "./components/GadgetsNavbar/GadgetsNavbar";


const TravelGadgets = () => {
    return (
        <div>

            <GadgetsNavbar />
            <BannerEco />
            <GadgetsHome />

        </div>
    );
};

export default TravelGadgets;