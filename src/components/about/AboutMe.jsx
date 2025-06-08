import { BiLogoSpringBoot } from "react-icons/bi"
import { FaJava, FaReact } from "react-icons/fa"
import { SiMysql } from "react-icons/si"

export const AboutMe = () => {
    return(
        <div className="small:mt-12 mt-32 h-full container mx-auto">
            <h1 className="text-white text-3xl text-center">About Me</h1>
            <div className="lg:px-12 flex flex-col lg:flex-row justify-center items-center small:mt-12 mt-32 text-white">
                <div className="text-left">
                    <div className="items-center ml-20 small:ml-5">
                        <p className="small:text-3xl md:text-5xl font-serif font-bold">Boddu Yaswanth</p>
                        <div className="small:mt-8 mt-24 flex">
                            <div className="w-20 h-0.5 mt-3 mr-2 bg-amber-300"></div>
                            <p className="small:text-sm small:mr-2 lg:text-xl font-serif">
                                I'm a passionate and curious Computer Science student, currently pursuing my B.Tech at LakiReddy Bali Reddy College of Engineering. I love building real-world projects and experimenting with technologies that bridge the gap between users and solutions. I’m also an NCC ‘A’ certificate holder, a kho-kho player, and someone who believes in lifelong learning and collaborative growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex mt-10 ml-20">
                        <div className="small:w-5 w-10 h-0.5 mt-3 mr-2 bg-amber-300"></div> <p>Your's B.Y</p>
                    </div>  
                </div>
                <div className="lg:ml-0">
                    <div className="relative">
                        <div className="border-4 border-rose-600 rounded-full border-dotted p-5">
                            <img className="max-w-sm small:size-56 md:size-96 md:max-w-md rounded-full shadow-2xl  brightness-75" src="/images/Yaswanth.jpg"/>
                            <div className="absolute p-2 bg-slate-300 rounded-full small:right-14 md:right-20 bottom-0">
                                <FaJava className="text-yellow-700 small:text-lg md:text-4xl"/>
                            </div>
                            <div className="absolute p-2 bg-slate-300 rounded-full small:top-14 right-0 md:top-20">
                                <FaReact className="text-red-700 small:text-lg md:text-4xl animate-spin"/>
                            </div>
                            <div className="absolute p-2 bg-slate-300 rounded-full small:left-14 md:left-20 bottom-0">
                                <BiLogoSpringBoot className="text-green-700 small:text-lg md:text-4xl "/>
                            </div>
                            <div className="absolute p-2 bg-slate-300 rounded-full small:top-14 left-0 md:top-20">
                                <SiMysql className="text-blue-700 small:text-lg md:text-4xl "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}