import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Main = ()=>{
    return(
        <div className="text-white container mx-auto">
            <div className="lg:px-12 flex flex-col items-center small:ml-5 lg:flex-row justify-between mt-5">
                <div className="m-10 small:m-2 text-left">
                <div className="py-8 small:py-4">
                    <h1 className="text-2xl md:text-4xl font-serif text-white small:text-lg">Do You Know Me</h1>
                    <p className="text-3xl md:text-4xl small:text-xl text-white">
                        Hey, I'm <span className="md:text-6xl text-amber-400 small:text-3xl">Boddu Yaswanth</span>
                    </p>
                    <p className="lg:text-lg py-5 font-light font-mono text-white small:text-sm small:mr-6 small:leading-5">
                        A Computer Science student passionate about building smart, secure, and user-friendly applications. With a solid foundation in full-stack development & machine learning. I've gained hands-on experience through internships, hackathons, and real-world projects using Java, React, Spring Boot, and the MERN stack. I'm a quick learner and collaborative team player.
                    </p>
                </div>

                    <div className="py-5">
                        <div className="flex space-x-3 items-center justify-center">
                            <div className="hidden small:block w-[1px] h-16 bg-amber-200 mr-3"></div>
                            <div className="flex flex-wrap md:gap-4 gap-2 small:gap-1">
                                <div className="border-2 border-green-300 p-2 small:p-1.5 rounded-full cursor-pointer">
                                    <BsLinkedin className="text-blue-600 md:text-2xl small:text-xl" />
                                </div>
                                <div className="border-2 border-green-300 p-2 small:p-1.5 rounded-full cursor-pointer">
                                    <FaGithub className="text-white md:text-2xl small:text-xl" />
                                </div>
                                <div className="border-2 border-green-300 p-2 small:p-1.5 rounded-full cursor-pointer">
                                    <FaSquareXTwitter className="text-black bg-white md:text-2xl small:text-xl rounded-full" />
                                </div>
                                <div className="border-2 border-green-300 bg-green-600 p-2 small:p-1.5 rounded-full cursor-pointer">
                                    <IoLogoWhatsapp className="text-white md:text-2xl small:text-xl" />
                                </div>
                                <div className="border-2 border-green-300 p-2 small:p-1.5 rounded-full cursor-pointer">
                                    <FaInstagram className="bg-gradient-to-tr from-violet-500 to-pink-700 text-white md:text-2xl small:text-xl rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 relative small:ml-0 ml-5">
                    <div className="p-5 mt-5 size-2 rounded-s-2xl border-2 border-amber-500 animate-bounce opacity-70"></div>
                    <div className="p-5 mt-5 size-2 rounded-se-2xl border-2 border-green-500 absolute right-10 animate-spin opacity-70"></div>
                    <div className="p-5 mt-5 size-2 rounded-es-2xl border-2 border-red-500 absolute bottom-5 animate-ping"></div>
                    <div className="p-5 mt-5 size-2 rounded-es-2xl border-2 border-lime-200 absolute left-20 top-40 animate-pulse"></div>
                    <div>
                        <img className="small:size-64 max-w-sm lg:size-96 md:max-w-md rounded-full mt-32 shadow-2xl shadow-emerald-400 brightness-75" src="/images/Yaswanth.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}