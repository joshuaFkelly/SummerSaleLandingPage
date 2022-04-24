import Logo from "../../Images/independent-logo.png"

export default function NavBar() {
    return (
        <header className=" text-black">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top" >
                <div className="w-full py-6 flex items-center justify-start sm:justify-center ">
                    <div className="flex items-center">
                        <img
                            className="h-20 w-auto sm:h-28 bg-black rounded-full p-[1.5px]"
                            src={Logo}
                            alt="Independent MMA & Fitness Logo"
                        />
                        <div className="text-3xl font-bold text-center ml-1 sm:text-3xl md:text-5xl">
                            <h1>INDEPENDENT <span className="font-light">MMA & Fitness</span> </h1>
                        </div>
                    </div>

                </div>

            </nav >
        </header >
    )
}
