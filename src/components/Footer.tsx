import Link from 'next/link'
import React from 'react'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 shadow-xl shadow-blue-200">
            <div className="container px-6 py-12 mx-auto shadow-lg shadow-blue-900">
                <div className="grid grid-cols-1 relative z-10 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 ">
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Acceso rápido</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="/#aboutme" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Sobre mi</Link>
                            <Link href="/#technologies" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Tecnologías</Link>
                            <Link href="/#projects" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Proyectos y experiencia</Link>
                            <Link href="/#contact" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contacto</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Redes sociales</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="https://www.linkedin.com/in/alvaro-villalo-web-developer/" target='_blank' className="text-gray-600 flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                                LinkedIn <AiOutlineLinkedin style={{ marginLeft: '0.2rem' }}></AiOutlineLinkedin>
                            </a>
                            <a href="https://github.com/IAmLeZz" target='_blank' className="text-gray-600 flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                                GitHub <AiOutlineGithub style={{ marginLeft: '0.2rem' }}></AiOutlineGithub>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="relative flex items-center justify-between z-10">
                    <p className='font-semibold text-[1em] text-gray-300'>
                        Hosted on <a href='https://vercel.com/home' className='text-gray-100' target='_blank'>Vercel</a> and powered by <a href='https://nextjs.org/' className='text-gray-100' target='_blank'>Next.js</a>
                    </p>
                    <p className='text-center font-bold text-[1em] text-gray-200'>Copyright © 2024 <a href='/'>Álvaro Roberto Villaló</a></p>
                </div>
            </div>
        </footer>
    )
}
