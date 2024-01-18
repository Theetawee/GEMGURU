import Timer from "../components/Timer";
import Bg from "../assets/bg.svg";
import Logo from "../assets/logo.webp"
import Modal from "../components/Modal";



import { IoSparklesOutline } from "react-icons/io5";
import { useState } from "react";
const HomePage = () => {


    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }



    return (
        <>
            <Modal func={toggleModal} isOpen={showModal} />
            <section
                className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                <div className="w-full h-full p-4 flex flex-col items-center justify-center bg-gray-900/80 text-center">
                    <div className="absolute mb-4 top-0 left-0">
                        <img src={Logo} alt="Logo" className="w-32 h-32 object-cover" />
                    </div>
                    <h1 className=" text-3xl md:text-6xl font-bold text-gray-100 animate__animated animate__zoomInDown mb-4">
                        Embrace the Brilliance: Welcome to <br />
                        <div className="flex items-center justify-center">
                            <span className="text-white relative">
                                Gem
                                 </span>
                            <span className="relative text-[#BD9851]">
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

                    <button onClick={toggleModal} className="bg-transparent hover:bg-white text-white hover:text-gray-900 py-2 px-4 border border-white rounded">
                        Notify Me When We Open
                        </button>
                        </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
