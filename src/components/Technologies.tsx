"use client"

import { BASE_URL } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

export const Technologies = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {
        async function updateTechnologiesData() {
            const technologiesData = await axios.get(`${BASE_URL}/api/technologies/`)
            if (technologiesData) {
                setTechnologies(technologiesData.data);
            } else {
                console.log('Error');
            }
        }
        updateTechnologiesData();
    }, [])

    return (
        <section>
            <div className='grid lg:grid-cols-5 gap-7 md:gap-12 grid-cols-2 md:grid-cols-3 bg-#1c1c1c border-2 rounded-lg border-#5c5c5c my-5 p-5 lg:p-12 animate__animated animate__fadeIn animate__duration-2s animate__delay-1s'>
                {technologies.map((technology: any) => {
                    return (

                        <div key={technology.id} className='flex flex-col items-center'>
                            <Image
                                src={`${BASE_URL}/${technology.image}`}
                                alt={technology.name}
                                width={800}
                                height={800}
                                className="md:w-32 md:h-32 w-[50%] h-[100%] rounded-lg object-contain            
                                hvr hvr-bounce-in"
                            />
                            <p className='mt-5 text-center text-gray-300 font-bold'>{technology.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}