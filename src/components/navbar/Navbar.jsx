export const Navbar = ()=>{
    return(
        <div className="bg-neutral-800 text-gray-300 text-xl">
            <div className="p-5 flex justify-between">
                <div >
                    <h1 className="flex">
                        <div className="size-8 gradient bg-gradient-to-br from-blue-500 to-green-700 rounded-s-full bg-yellow-300 ml-10"></div>
                        <div className="">
                            <span className="text-red-600 font-extrabold font-sans ml-2">Yas</span>wanth
                        </div>
                    </h1>
                </div>
                <div className="hidden sm:block">
                    <ul className="flex sm:space-x-3 lg:space-x-8 font-sans">
                        <li className="navbar-li" tabIndex="0">Home</li>
                        <li className="navbar-li" tabIndex="0">Skills</li>
                        <li className="navbar-li" tabIndex="0">Projects</li>
                        <li className="navbar-li" tabIndex="0">Contact</li>
                        <li className="navbar-li" tabIndex="0">About Me</li>
                    </ul>
                </div>
                <hr />
            </div>
            
        </div>
    )
}