import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export const MySkills = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-6xl text-white mt-36 pb-8 font-serif">My Skills</h1>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {/* Java */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <FaJava className="text-yellow-400 text-5xl mb-2" />
                    <h1 className="text-xl text-white text-center">Java</h1>
                </div>
                
                {/* React */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <FaReact className="text-red-400 text-5xl mb-2 animate-spin" />
                    <h1 className="text-xl text-white text-center">React</h1>
                </div>

                {/* SpringBoot */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <BiLogoSpringBoot className="text-green-400 text-5xl mb-2" />
                    <h1 className="text-xl text-white text-center">Spring Boot</h1>
                </div>

                {/* HTML & CSS */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <div className="flex gap-2 mb-2">
                        <FaHtml5 className="text-red-400 text-4xl" />
                        <FaCss3Alt className="text-blue-400 text-4xl" />
                    </div>
                    <h1 className="text-xl text-white text-center">HTML & CSS</h1>
                </div>

                {/* JavaScript */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <IoLogoJavascript className="text-yellow-400 text-5xl mb-2" />
                    <h1 className="text-xl text-white text-center">JavaScript</h1>
                </div>

                {/* MySQL */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <SiMysql className="text-blue-400 text-6xl mb-2" />
                    <h1 className="text-xl text-white text-center">MySQL</h1>
                </div>

                {/* MongoDB */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <SiMongodb className="text-green-400 text-6xl mb-2" />
                    <h1 className="text-xl text-white text-center">MongoDB</h1>
                </div>

                {/* Git */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <FaGitAlt className="text-red-400 text-6xl mb-2" />
                    <h1 className="text-xl text-white text-center">Git</h1>
                </div>

                {/* Tailwind CSS */}
                <div className="bg-gray-700 w-52 h-52 rounded-2xl flex flex-col justify-center items-center">
                    <RiTailwindCssFill className="text-blue-400 text-6xl mb-2" />
                    <h1 className="text-xl text-white text-center">Tailwind CSS</h1>
                </div>
            </div>
        </div>
    );
};
