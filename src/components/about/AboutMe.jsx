import { BiLogoSpringBoot } from "react-icons/bi"
import { FaJava, FaReact } from "react-icons/fa"
import { SiMysql } from "react-icons/si"

export const AboutMe = () => {
    return(
        <div className="mt-32 h-full container mx-auto">
            <div className="flex">
                <div className="h-0.5 w-2xl mt-5 bg-amber-400"></div>
                <h1 className="text-left text-white text-md md:text-2xl">AboutMe</h1>
                <div className="h-0.5 w-2xl mt-5 bg-amber-400"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-32 text-white">
                <div className="text-left">
                    <div className="items-center ml-20">
                        <p className="text-5xl font-serif font-bold">Boddu Yaswanth</p>
                        <div className="mt-24 flex">
                            <div className="w-20 h-0.5 mt-3 mr-2 bg-amber-300"></div>
                            <p className="text-xl font-serif">
                                I'm a passionate and curious Computer Science student, currently pursuing my B.Tech at LakiReddy Bali Reddy College of Engineering. I love building real-world projects and experimenting with technologies that bridge the gap between users and solutions.
                                <br/>
                                I’m also an NCC ‘A’ certificate holder, a kho-kho player, and someone who believes in lifelong learning and collaborative growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex mt-10 ml-20">
                        <div className="w-10 h-0.5 mt-3 mr-2 bg-amber-300"></div> <p>Your's B.Y</p>
                    </div>  
                </div>
                <div className="lg:ml-52">
                    <div className="relative">
                        <div className="border-4 border-rose-600 rounded-full border-dotted p-5">
                            <img className="max-w-sm size-96 md:max-w-md rounded-full shadow-2xl  brightness-75" src="/images/Yaswanth.jpg"/>
                            <div className="absolute p-2 bg-slate-300 rounded-full right-20 bottom-0">
                                <FaJava className="text-yellow-700 text-4xl"/>
                            </div>
                            <div className="absolute p-2 bg-slate-300 rounded-full right-0 top-20">
                                <FaReact className="text-red-700 text-4xl animate-spin"/>
                            </div>
                            <div className="absolute p-2 bg-slate-300 rounded-full left-20 bottom-0">
                                <BiLogoSpringBoot className="text-green-700 text-4xl "/>
                            </div>
                            <div className="absolute p-2 bg-slate-300 rounded-full left-0 top-20">
                                <SiMysql className="text-blue-700 text-4xl "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}