"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';

const AboutMe = () => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ description: '', image: '', resume: '' });

    useEffect(() => {
        async function updatePersonalInfoData() {
            const personalInfoData = await axios.get(`${BASE_URL}/api/personalInfo/`)
            if (personalInfoData) {
                setPersonalInfo(personalInfoData.data[0]);
            } else {
                console.log('Error');
            }
        }
        updatePersonalInfoData();
    }, [])

    return (
        <section className="bg-#161617 border-2 rounded-lg border-#5c5c5c my-5 flex" id="AboutMe">
            <div className="lg:max-w-7xl sm:w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-auto w-full">
                        <Image
                            src={`${BASE_URL}/${personalInfo?.image}`}
                            alt="Profile picture"
                            height={1024}
                            width={1024}
                            className="rounded-lg object-cover max-w-full h-auto"
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
                            {personalInfo?.description}
                        </p>
                        <div className='hvr hvr-grow w-max'>
                            <a
                                href={`${BASE_URL}/${personalInfo?.resume}`}
                                download={"Alvaro_Villalo_Resume"}
                                target="_blank"
                                className="inline-flex items-center px-4 py-2 z-10 border border-transparent text-sm md:text-base font-medium max-w-max rounded-md shadow-sm text-white bg-#00609c hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        </section>
    )
}

export default AboutMe