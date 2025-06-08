import { BsLinkedin } from "react-icons/bs"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoLogoWhatsapp } from "react-icons/io5"

export const Contact = ()=>{
    return(
        <div className="mt-36">
            <h1 className="text-5xl text-center text-white">Contact Me</h1>
                <section className="text-white body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-medium text-3xl text-gray-200">Get In Touch</h1>
                            <p className="leading-relaxed mt-4">
                                <div>
                                    <div className="flex lg:space-x-4 space-x-2">
                                        <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><BsLinkedin className="size-8 text-blue-600"/></div>
                                        <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><FaGithub className="size-8 text-white"/></div>
                                        <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><FaSquareXTwitter className="size-8 text-black bg-white"/></div>
                                        <div className="border-2 border-green-300 bg-green-600 p-3 rounded-full cursor-pointer"><IoLogoWhatsapp className="size-8 text-white"/></div>
                                        <div className="border-2 border-green-300 p-3 rounded-full cursor-pointer"><FaInstagram  className="size-8 gradient bg-gradient-to-tr from-violet-500 to-pink-700 text-white rounded-md"/></div>
                                        
                                    </div>
                                    <p className="mt-2">Mail : bodduyaswanth09@gmail.com</p>
                                </div>
                            </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">send</button>
                            <p className="text-xs text-gray-500 mt-3">The form is not developed yet. Can you contact with Mail.</p>
                        </div>
                    </div>
                </section>

                <footer className="text-center text-white text-5xl pb-10">
                    "Thanks For Scrolling ... hahaha !!!"
                </footer>
        </div>
    )
}