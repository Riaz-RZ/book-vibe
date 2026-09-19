
import Image from "next/image";
import bannerimage from "@/assets/banner-logo.png";

const Banner = () => {
    return (
        <section className="relative z-0 overflow-hidden rounded-3xl mt-6 bg-linear-to-br from-green-50 via-white to-emerald-100 shadow-sm">
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-green-200/30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-emerald-200/30 blur-3xl"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 lg:px-16 py-10 md:py-14">

                {/* Left Content */}
                <div className="text-center md:text-left">
                    
                    <p className="text-green-600 font-semibold text-sm md:text-base uppercase tracking-widest mb-3">
                        Discover Your Next Read
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                        Books to{" "}
                        <span className="text-green-600">
                            freshen up
                        </span>
                        <br />
                        your bookshelf
                    </h2>

                    <p className="mt-5 max-w-lg text-gray-600 text-base md:text-lg leading-relaxed">
                        Explore amazing books, discover new stories, and find
                        something special to add to your personal collection.
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:-translate-y-1 hover:shadow-xl">
                        View The List
                        <span className="text-xl">→</span>
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                    <Image
                        src={bannerimage}
                        alt="Books Banner"
                        priority
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
