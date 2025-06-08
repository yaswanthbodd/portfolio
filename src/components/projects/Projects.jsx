export const Projects = () => {
    const projects = [
        {
            title: "E-Commerce",
            tech: "- Springboot, Reactjs, MySQL",
            desc: "I built a full-stack E-Commerce web app using React.js, Bootstrap, Spring Boot, and MySQL with core features like product management, shopping cart, and image upload.",
            img: "/images/e-commerce.png",
            link: "https://github.com/yaswanthbodd/E-Commerce"
        },
        {
            title: "Student Management System",
            tech: "- Springboot, Angular, MySQL",
            desc: "I developed a Full-Stack Student Management System using Angular, Bootstrap, Spring Boot, and MySQL, featuring complete CRUD operations with a clean and responsive UI.",
            img: "/images/student-management-system.png",
            link: "https://github.com/yaswanthbodd/Student-Management-System"
        },
        {
            title: "Todo List",
            tech: "- ReactJs, Tailwind, MaterialUI",
            desc: "I developed a responsive To-Do List app using React.js, styled with Tailwind CSS and enhanced with Material UI components for a modern look and feel.",
            img: "/images/todolist.png",
            link: "https://github.com/yaswanthbodd/ReactJS-/tree/main/todolist"
        },
        {
            title: "Land Record Management",
            tech: "MERN & Blockchain",
            desc: "Developed User Friendly website to store the Land Records. Features: user authentication, smart contracts, Hyperledger Fabric for blockchain validation.",
            img: "/images/mern-blockchain.png",
            link: "https://github.com/yaswanthbodd/landManagement"
        },
        {
            title: "Tourism Analytics",
            tech: "- Association Analysis, Front-End",
            desc: "Using SARIMA and Ridge Regression, we forecast visitor trends and provide strategic analysis for tourism sector stakeholders.",
            img: "/images/tourism-analytics.png",
            link: "#"
        }
    ];

    return (
        <div className="lg:px-20 w-full max-w-full mx-auto px-2 small:px-10">
            <h1 className="text-center text-white text-3xl sm:text-4xl lg:text-6xl font-serif mt-24 pb-10">
                Projects
            </h1>

            <div className="flex flex-wrap -mx-2">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="w-full sm:w-1/2 lg:w-1/3 px-2 pb-4"
                    >
                        <div className="relative border border-amber-500 rounded-lg overflow-hidden shadow-md">
                            <img
                                alt={project.title}
                                src={project.img}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            <div className="px-6 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h2 className="tracking-widest text-sm font-medium text-indigo-500 mb-1">
                                    {project.title}
                                </h2>
                                <h1 className="text-md font-semibold text-green-600 mb-2">
                                    {project.tech}
                                </h1>
                                <p className="text-gray-700 text-sm">{project.desc}</p>
                                <a
                                    href={project.link}
                                    className="inline-block mt-3 text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 text-sm"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Get Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
