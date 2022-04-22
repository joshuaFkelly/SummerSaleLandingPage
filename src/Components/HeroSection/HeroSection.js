/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Poster from "../../Images/sale-poster.jpg"

export default function HeroSection() {
    return (
        <section className="relative bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-0">
            <aside className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    className="w-full h-full object-contain"
                    src={Poster}
                    alt="Poster for Summer Sale"
                />
            </aside>
            <aside className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <main className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Get involed with an</h2>
                    <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">ACTIVE LIFESTYLE</p>
                    <p className="mt-3 text-lg text-gray-300">
                        This summer the masks are coming off!
                        Get your workout in with the best mixed martial arts and fitness gym in Newnan, Georgia!
                    </p>
                    <div className='mt-3'>
                        <p className='text-gray-50'>Sign Up with the Summer Special and you'll receive:</p>
                        <ul>
                            <li className='text-yellow-300'>Free Boxing Gloves</li>
                            <li className='text-yellow-300'>Free Hand Wraps</li>
                            <li className='text-yellow-300'>One Free Month</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow gap-x-2 text-center">
                            <a
                                href="#"
                                className="w-fit sm:w-fit inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                            >
                                Summer Special
                            </a>
                            <a
                                href="#"
                                className="w-fit sm:w-fit inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                            >
                                Free Trial
                            </a>
                        </div>
                    </div>
                </main>
            </aside>
        </section>
    )
}
