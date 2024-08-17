
import ContainerPage from '../../components/container/page'
import TripAlbums from '../../components/TripAlbums/tripalbums';
import VideoGallery from "../../components/videoGallery/videogallery";



// Static metadata export
export const metadata = {
    title: 'Trek Explore Travel | Video and Photo Gallery',
    description: 'Explore our video and photo gallery showcasing our amazing trips and adventures. Discover breathtaking views, unforgettable moments, and travel inspiration.'
};

const TripAlbum = () => {
    return (
        <div className="bg-gray-50 p-10">
           <ContainerPage>
                <div className="mt-10">
                    <h1 className="title poppins text-center">Video Album</h1>
                    {/* underline */}
                    <div className="flex justify-center mt-7">
                        <div className="border-b-2 w-2/5"></div>
                    </div>
                    <VideoGallery />
                </div>

                {/* Images Album */}
                <div className="py-10">
                    <h1 className="title poppins text-center">All Images From Trip Album</h1>
                    {/* underline */}
                    <div className="flex justify-center py-5">
                        <div className="border-b-2 border-gray-300 w-3/4"></div>
                    </div>
                    <TripAlbums />
                </div>
                </ContainerPage>
        </div>
    );
};

export default TripAlbum;
