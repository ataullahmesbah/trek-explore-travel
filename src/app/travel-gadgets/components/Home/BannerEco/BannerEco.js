import Image from "next/image";


const BannerEco = () => {

    return (

        <div className="relative h-[calc(100vw*(2/3))] max-h-[500px] overflow-hidden">
            <Image
                src="https://i.ibb.co/svM1TLR/image.png"
                layout="fill"
                objectFit="cover"
                alt="Banner"
                placeholder="blur"
                blurDataURL="https://i.ibb.co/svM1TLR/image.png" // Update this if you have a separate low-res image
                className=""
            />
            <div className="absolute inset-0 text-center bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">PLAN YOUR ADVENTURE</h1>
                <button className="px-6 py-3 border border-sky-800 hover:bg-sky-900 text-white text-lg font-semibold rounded-lg">SHOP NOW</button>
            </div>
        </div>

    );
};

export default BannerEco;
