import Poster from "../../Images/sale-poster.jpg"

export default function HeroSection() {
    return (
        <div className="bg-dark-blue">
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

                <aside className="h-fit sm:h-72 md:absolute md:inset-0 md:h-full md:w-1/2 md:pt-12">
                    <img
                        className="w-full h-full object-contain"
                        src={Poster}
                        alt="Poster for Summer Sale"
                    />
                </aside>

                <aside className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <main className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-900">Get involed with an</h2>
                        <p className="mt-2 text-orange text-3xl font-extrabold tracking-tight sm:text-4xl">ACTIVE LIFESTYLE</p>
                        <p className="mt-3 text-lg text-white">
                            This summer the masks are coming off!
                            Get your workout in with the best mixed martial arts and fitness gym in Newnan, Georgia!
                        </p>


                        <div className="mt-8">
                            <div className="inline-flex rounded-md gap-x-2 text-center">
                                <button
                                    type="button"
                                    className="shadow-lg shadow-rose-500/50 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-50 bg-pink hover:bg-rose-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300"
                                >
                                    Summer Special
                                </button>
                                <button
                                    type="button"
                                    className="shadow-md shadow-rose-400/50 opacity-90 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-100 bg-pink hover:bg-rose-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300"
                                >
                                    Free Trial
                                </button>
                            </div>
                        </div>
                    </main>
                </aside>
            </section>
        </div>
    )
}
