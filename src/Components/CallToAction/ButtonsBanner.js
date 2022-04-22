export default function ButtonsBanner() {
    return (
        <div className="bg-light-blue">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to make a real change?</span>
                    <span className="block ">Get <span className="text-orange">Fit.</span> < br></br> Stay <span className="text-orange">Healthy.</span></span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow-lg shadow-rose-500/50">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md   text-gray-50 bg-pink hover:bg-rose-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300"
                        >
                            Summer Special
                        </button>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow-md shadow-rose-400/50">
                        <button
                            type="button"
                            className="opacity-80 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-100 bg-pink hover:bg-rose-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300"
                        >
                            Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
