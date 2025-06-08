
export const Projects = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-white text-4xl lg:text-6xl font-serif mt-24 pb-10">Projects</h1>
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative border-1 border-amber-500  ">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/e-commerce.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">E-Commerce</h2>
                        <h1 className="title-font text-lg font-medium text-green-600 mb-3">- Springboot, Reactjs, MySQL</h1>
                        <p className="leading-relaxed">I built a full-stack E-Commerce web app using React.js, Bootstrap, Spring Boot, and MySQL with core features like product management, shopping cart, and image upload.</p>
                        <a href="https://github.com/yaswanthbodd/E-Commerce" className="bg-blue-400 p-1 rounded mt-1" target="_blank">Get Code</a>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative border-1 border-amber-500">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/student-management-system.png"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Student Management System</h2>
                        <h1 className="title-font text-lg font-medium text-green-600 mb-3">- Springboot, Angular, MySQL</h1>
                        <p className="leading-relaxed">I developed a Full-Stack Student Management System using Angular, Bootstrap, Spring Boot, and MySQL, featuring complete CRUD operations with a clean and responsive UI.</p>
                        <a href="https://github.com/yaswanthbodd/Student-Management-System" className="bg-blue-400 p-1 rounded mt-1" target="_blank">Get Code</a>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative border-1 border-amber-500">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/todolist.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Todo List</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">- ReactJs, Tailwind, MaterialUI</h1>
                        <p className="leading-relaxed">I developed a responsive To-Do List app using React.js, styled with Tailwind CSS and enhanced with Material UI components for a modern look and feel.</p>
                        <a href="https://github.com/yaswanthbodd/ReactJS-/tree/main/todolist" className="bg-blue-400 p-1 rounded mt-1" target="_blank">Get Code</a>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative border-1 border-amber-500">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/mern-blockchain.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Land Record Management</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Mern & Blockchain</h1>
                        <p className="leading-relaxed">Developed User Friendly website to store the Land Records. To implement features like user authentication, security, transparent land record, smart contracts for transaction validation. We are using Hyperledger fabric in blockchain. </p>
                        <a href="https://github.com/yaswanthbodd/landManagement" className="bg-blue-400 p-1 rounded mt-1" target="_blank">Get Code</a>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative border-1 border-amber-500">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/tourism-analytics.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Tourism Analytics</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">- Association Analysis, Front-End</h1>
                        <p className="leading-relaxed">Using models like SARIMA and Ridge Regression, we forecast visitor trends at the regional level, along with providing each operator with an analysis for strategic planning in the tourism sector.</p>
                        <a href="#" className="bg-blue-400 p-1 rounded mt-1">Get Code</a>
                    </div>
                    </div>
                </div>

                </div>
            </div>  
        </div>
    );
}
