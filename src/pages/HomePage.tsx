import Timer from "../components/Timer";
import Bg from "../assets/bg.svg";
import { IoSparklesOutline } from "react-icons/io5";
const HomePage = () => {
    return (
        <>
            <section
                className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/80 text-center">
                    <h1 className="text-6xl font-bold text-white animate__animated animate__zoomInDown mb-4">
                        Embrace the Brilliance: Welcome to <br />
                        <div className="flex items-center justify-center">
                            <span className="text-[#C0C0C0] relative">
                                Gem
                                <IoSparklesOutline className="animate-pulse text-[#D4AF37] absolute left-0 bottom-0 w-4 h-4"/>
                            </span>
                            <span className="relative text-[#D4AF37]">
                                <IoSparklesOutline className="absolute animate-pulse text-white w-4 h-4 top-2 -right-1" />
                                Guru
                            </span>
                        </div>
                    </h1>
                    <div className="max-w-xl mx-auto">
                        <p className="text-lg animate__animated animate__zoomInLeft animate__delay-1s	 text-gray-300 mb-8">
                            Unveil the tapestry of time, where elegance whispers
                            and sophistication resonates, in the intricate dance
                            of jewelry and ornaments, each piece a verse in a
                            timeless ode.
                        </p>
                    </div>
                    <div className="animate__animated animate__backInDown animate__delay-2s">
                        <Timer />
                    
                    <button className="bg-transparent hover:bg-white text-white hover:text-gray-900 py-2 px-4 border border-white rounded">
                        Notify Me When We Open
                        </button>
                        </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
