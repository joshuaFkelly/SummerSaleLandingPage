import { CheckIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Free Boxing Gloves',
        description: 'Sign Up today and get a FREE pair of boxing gloves!',
    },
    { name: 'Free Handwraps', description: 'Sign Up today and get a FREE pair of handwraps!' },
    { name: '1 Free Month', description: '1 FREE MONTH when you sign up today!' },
    {
        name: 'Access to our BandApp',
        description: 'We post daily workouts, and techniques, so you can follow our program wherever you are!',
    },
    { name: 'Group Discount', description: 'Join as a family or with friends and get a discount on your membership!' },
    { name: 'Family Friendly', description: 'Kids can participate, watch, or join a class of their own while you workout!' },
    { name: 'A Workout For Anyone', description: 'You do not need to be a pro kickboxer, or cardio master to enjoy our classes!' },
    { name: 'Full Classes', description: 'Teamamtes are a great way to keep your motivation high, so you can reach your next fitness goal!' },
]

export default function Features() {
    return (
        <div className="bg-gradient-to-b from-dark-blue to-light-blue">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div>
                    <h2 className="text-base font-semibold text-gray-900 uppercase tracking-wide">THIS SUMMER</h2>
                    <p className="mt-2 text-3xl font-extrabold text-orange">Go beyond your limits</p>
                    <p className="mt-4 text-lg text-gray-100">
                        Checkout the benefits that come with joining Team Independent Mixed Martial Arts & Fitness!
                    </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-100">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
