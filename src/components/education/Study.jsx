import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";

export const Study = () => {
    return (
        <div>
            <h1 className="text-center text-5xl text-white py-5 font-mono">Education</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center py-10 text-white gap-4">
                <div className="border-1 border-pink-400 p-5 hover:shadow-lg hover:scale-105 transition-transform duration-1000 shadow-emerald-400">
                    <div className="w-80 h-52 flex flex-col justify-center items-center ">
                        <FaGraduationCap className="size-10"/>
                            <p>Bachelor Of Technology</p>
                            <p>Computer Science & Engineering(CSE)</p>
                            <p>CGPA : 8.63</p>
                            <p>LakiReddy Bali Reddy College Of Engineering</p>
                    </div>
                </div>
                <div className="border-1 border-pink-400 p-5 hover:shadow-lg hover:scale-105 transition-transform duration-1000 shadow-red-400">
                    <div className="w-80 h-52 flex flex-col justify-center items-center ">
                            <p>Intermediate</p>
                            <p>MPC</p>
                            <p>Marks : 948</p>
                            <p>Narayana Junior College</p>
                    </div>
                </div>
                <div className="border-1 border-pink-400 p-5 hover:shadow-lg hover:scale-105 transition-transform duration-1000 shadow-blue-400">
                    <div className="w-80 h-52 flex flex-col justify-center items-center ">
                            <p>10'th Standard</p>
                            <p>State Syllabus</p>
                            <p>CGPA : 9.2</p>
                            <p>B.B.H Junior College</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
