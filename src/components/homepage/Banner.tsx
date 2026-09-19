import Image from "next/image";
import bannerimage from "@/assets/banner-logo.png"

const Banner = () => {
    return (
        <div className="bg-gray-100 grid grid-cols-3 py-10 rounded-2xl mt-4">
            <div className="col-span-2">
                <h2 className="text-7xl ps-20 pt-8">Books to freshen up <br /> your bookself</h2>
                <button className="btn bg-green-500 text-white ms-20 mt-10 text-xl">View The List</button>
            </div>
            <div className="col-span-1">
                <Image src={bannerimage} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;