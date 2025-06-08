import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Main = ()=>{
    return(
        <div className="text-white container mx-auto">
            <div className="flex flex-col items-center lg:flex-row justify-between mt-5">
                <div className="m-10 text-left">
                    <div className="py-12">
                        <h1 className="text-2xl md:text-4xl font-serif">Do You Know Me</h1>
                        <p className="text-3xl md:text-4xl">Hey, I'm <span className="md:text-6xl text-amber-400">Boddu Yaswanth</span> </p>
                        <p className="text-lg py-5 font-light font-mono">A Computer Science student passionate about building smart, secure, and user-friendly applications. With a solid foundation in full-stack development & machine learning. I've gained hands-on experience through internships, hackathons, and real-world projects using Java, React, Spring Boot, and the MERN stack. I'm a quick learner and collaborative team player.</p>
                    </div>
                    <div className="py-5">
                        <div className="flex space-x-3">
                            <div className="w-32 h-[1px] bg-amber-200 mt-6 mr-5"></div>
                            <div className="flex lg:space-x-4 space-x-2">
                                <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><BsLinkedin className="size-8 text-blue-600"/></div>
                                <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><FaGithub className="size-8 text-white"/></div>
                                <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><FaSquareXTwitter className="size-8 text-black bg-white"/></div>
                                <div className="border-2 border-green-300 bg-green-600 p-3 rounded-full cursor-pointer"><IoLogoWhatsapp className="size-8 text-white"/></div>
                                <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><FaInstagram  className="size-8 gradient bg-gradient-to-tr from-violet-500 to-pink-700 text-white rounded-md"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 relative ml-5">
                    <div className="p-5 mt-5 size-2 rounded-s-2xl border-2 border-amber-500 animate-bounce opacity-70"></div>
                    <div className="p-5 mt-5 size-2 rounded-se-2xl border-2 border-green-500 absolute right-10 animate-spin opacity-70"></div>
                    <div className="p-5 mt-5 size-2 rounded-es-2xl border-2 border-red-500 absolute bottom-5 animate-ping"></div>
                    <div className="p-5 mt-5 size-2 rounded-es-2xl border-2 border-lime-200 absolute left-20 top-40 animate-pulse"></div>
                    <div>
                        <img className="max-w-sm size-96 md:max-w-md rounded-full mt-32 shadow-2xl shadow-emerald-400 brightness-75" src="/images/Yaswanth.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}