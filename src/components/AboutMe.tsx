import React from 'react'
import Image from 'next/image'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'

const AboutMe = () => {
    return (
        <div className="bg-#161617 border-2 rounded-lg border-#5c5c5c my-5 flex" id="AboutMe">
            <div className="lg:max-w-7xl sm:w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-96 w-full">
                        <img
                            src="https://placehold.co/500x400"
                            alt="Profile picture"
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-#d4d4d4 text-xl md:text-2xl lg:text-4xl font-bold">
                            Álvaro Villaló
                        </h1>
                        <h2 className="text-#5c5c5c text-sm md:text-base lg:text-lg">
                            Ingeniero de Software / Desarrollador Web
                        </h2>
                        <p className="text-#5c5c5c text-sm md:text-base lg:text-lg">
                            Description
                        </p>
                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm md:text-base font-medium max-w-fit rounded-md shadow-sm text-white bg-#00609c hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <DocumentArrowDownIcon
                                className="-ml-1 mr-3 h-5 w-5"
                                aria-hidden="true"
                            />
                            Currículum
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe