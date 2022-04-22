import Logo from "../../Images/independent-logo.png"

export default function NavBar() {
    return (
        <header className="bg-indigo-600">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center gap-x-2">
                        <img
                            className="h-20 w-auto sm:h-28 "
                            src={Logo}
                            alt="Independent MMA & Fitness Logo"
                        />
                        <div className="text-3xl text-center sm:text-3xl md:text-5xl">
                            <h1>Independent MMA & Fitness</h1>
                        </div>
                    </div>

                </div>

            </nav>
        </header>
    )
}
