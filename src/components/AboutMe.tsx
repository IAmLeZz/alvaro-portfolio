"use client"

import React, { useEffect, useState } from 'react'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';

export const AboutMe = () => {
    const [resume, setResume] = useState<PersonalInfo>({ description: '', image: '', resume: '' });

    useEffect(() => {
        async function updatePersonalInfoData() {
            const personalInfoData = await axios.get(`${BASE_URL}/api/personalInfo/resume`)
            if (personalInfoData) {
                setResume(personalInfoData.data.resume);
            } else {
                console.log('Error');
            }
        }
        updatePersonalInfoData();
    }, [])

    return (
        <section className="bg-#161617 border-2 rounded-lg border-#5c5c5c my-5 flex animate__animated animate__fadeIn animate__duration-2s" id="aboutme">
            <div className="lg:max-w-2xl sm:w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 gap-8 items-center">

                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-#d4d4d4 text-xl md:text-2xl lg:text-4xl font-bold">
                            Álvaro Villaló
                        </h1>
                        <h2 className="text-[#a0a0a0] font-bold text-sm md:text-base lg:text-lg">
                            Desarrollador Web Full-Stack
                        </h2>
                        <p className="text-#5c5c5c text-sm md:text-base lg:text-lg">¡Hola! Soy Álvaro Villaló, un desarrollador web que reside en Argentina. Mi experiencia abarca una amplia gama de tecnologías, incluyendo .NET, Node.js, React y Next.js. Hace cuatro años, escribí mi primer programa en C#, un momento que marcó mi decisión de dedicarme a crear soluciones que superen las expectativas de mis clientes.
                            Mi trayectoria incluye el diseño y desarrollo de sistemas de diversa complejidad, lo que me ha brindado la versatilidad para abordar proyectos de cualquier envergadura. Estoy comprometido a aplicar mis habilidades y conocimientos en cada desafío que emprendo. ¡Espero con interés poder colaborar contigo!</p>
                        <div className='hvr hvr-grow w-max'>
                            <a
                                href={`${BASE_URL}/${resume}`}
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
