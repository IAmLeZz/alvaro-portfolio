"use client"

import React, { useEffect, useState } from 'react';
import { PageProps } from '../../../../.next/types/app/project/[id]/page';
import Image from 'next/image';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { GoLink } from 'react-icons/go';
import { TiArrowBack } from 'react-icons/ti';
import { BASE_URL } from '@/utils/constants';
import Link from 'next/link';


export const Project = ({ params }: PageProps) => {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState<Project>({
        id: 0,
        name: '',
        category: '',
        client: '',
        description: '',
        thumbnail: '',
        technologies: [],
        media: [],
    });


    useEffect(() => {
        const updateProjectData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/projects/${params.id}`);
                setProject(response.data);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(true);
                    setLoading(false);
                }
            }
        };
        updateProjectData();
    }, [params.id]);

    if (error) return <div><h2 className='text-red-600'>Ocurrió un error</h2></div>
    if (loading) return <div><h2 className='text-blue-200'>Cargando...</h2></div>
    return (
        <div className="my-5">
            {/* Header with Project Thumbnail */}
            <header className="relative">
                <Image
                    src={`${BASE_URL}/${project.thumbnail}`}
                    className="opacity-50 w-full lg:w-[80%] h-auto max-h-[1440px] m-auto shadow-lg shadow-#5c5c5c rounded-b-lg"
                    alt={project.name}
                    width={1920}
                    height={1080}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent opacity-50" />
                <div className='absolute top-0 left-0 m-5 w-full h-full bg-gradient-to-b from-transparent opacity-80 z-10 hidden md:block'>
                    <Link className="text-white text-xl font-bold border-2 flex items-center justify-center w-fit border-gray-300 bg-gray-700 p-2 rounded-md hover:text-gray-300 transition duration-300" href={'/'}>
                        Volver<TiArrowBack></TiArrowBack>
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center">
                    <div>
                        <h1 className="text-4xl font-bold animate-fade-in">{project.name}</h1>
                        <p className="text-lg line-height-8 animate-fade-in">{project.category} {project.client && `para ${project.client}`}</p>
                    </div>
                </div>
                <div className='absolute top-0 h-full w-full flex flex-col items-center justify-end text-white text-center'>
                    <div className="flex mb-2 lg:mb-5 z-10">
                        {project.repository && (
                            <a
                                href={project.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 py-1 px-2 text-white md:py-2 md:px-4 rounded-lg flex items-center justify-center mx-2 hover:bg-blue-600 transition duration-300"
                            >
                                Ver repositorio <AiFillGithub className="ml-2" />
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 py-1 px-2 text-white md:py-2 md:px-4 rounded-lg flex items-center justify-center mx-2 hover:bg-green-600 transition duration-300"
                            >
                                Sitio en vivo <GoLink className="ml-2" />
                            </a>
                        )}
                    </div>
                </div>
            </header>

            {/* Project Details Section */}
            <section className="container mx-auto my-8 px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-gray-100 decoration-6 underline decoration-#00609c">¿De qué se trata este proyecto?</h2>
                    <p className="text-gray-200">{project.description}</p>
                </div>
            </section>

            {/* Technologies Used Section */}
            <section className="bg-gray-800 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-200">Tecnologías utilizadas</h2>
                    <div className="flex flex-wrap justify-center">
                        {project.technologies.map((tech) => (
                            <div
                                key={tech.id}
                                className="bg-white shadow-md rounded-lg p-4 m-2 flex items-center"
                            >
                                <Image
                                    src={`${BASE_URL}/${tech.image}`}
                                    alt={tech.name}
                                    className="w-8 h-8 mr-2 object-contain"
                                    height={400}
                                    width={400}
                                />
                                <span className="text-gray-700">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Gallery Section */}
            <section className="container mx-auto mt-8 px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-100 decoration-6 underline decoration-#00609c">Galería</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.media.map((media) => (
                        <div key={media.id} className="rounded-lg overflow-hidden">
                            <a href={`${BASE_URL}/${media.url}`} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={`${BASE_URL}/${media.url}`}
                                    alt={media.caption || project.name}
                                    className="w-full h-auto rounded-md transition-transform transform hover:scale-105"
                                    height={1080}
                                    width={1920}
                                />
                            </a>
                            {media.caption && (
                                <p className="text-gray-400 text-center py-2">{media.caption}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};