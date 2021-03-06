import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function ContactForm() {
    return (
        <div className='bg-gradient-to-b from-light-blue to-gray-200'>
            <div className="relative ">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 " />
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                    <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-2xl font-extrabold tracking-tight text-orange sm:text-3xl">Come meet us!</h2>
                            <p className="mt-3 text-lg leading-6 text-white">
                                When you sign up you'll receive a text showing you further instructions. Our sales reps are always available over the phone
                                or in person during gym hours.
                            </p>
                            <dl className="mt-8 text-base text-white">
                                <div>
                                    <dt className="sr-only">Postal address</dt>
                                    <dd>
                                        <p>40 Greenway Court</p>
                                        <p>Newnan, GA 30265</p>
                                    </dd>
                                </div>
                                <div className="mt-6">
                                    <dt className="sr-only">Store Hours</dt>
                                    <dd>
                                        <p>Mon-Fri: 6AM-9AM, 4PM-8:30PM</p>
                                        <p>Saturday: 10AM-12PM</p>
                                        <p>Sunday: Closed</p>
                                    </dd>
                                </div>
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-pink" aria-hidden="true" />
                                        <span className="ml-3 underline">(678) 590-5959</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className=" py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="max-w-lg mx-auto lg:max-w-none">
                            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="full-name" className="sr-only">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        name="full-name"
                                        id="full-name"
                                        autoComplete="name"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-gray-50 bg-pink hover:bg-rose-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
