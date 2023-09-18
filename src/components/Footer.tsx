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
                            <a href="#aboutme" target='_blank' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Sobre mi</a>
                            <a href="#technologies" target='_blank' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Tecnologías</a>
                            <a href="#projects" target='_blank' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Proyectos y experiencia</a>
                            <a href="#contact" target='_blank' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contacto</a>
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
                            <a href="#" target='_blank' className="text-gray-600 flex items-center transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Twitter</a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="flex items-center justify-between">
                    <p className='font-semibold text-[1em] text-gray-300'>Powered by Next.js.</p>
                    <p className='text-center font-bold text-[1em] text-gray-200'>Copyright © 2023 <a href='/'>Álvaro Roberto Villaló</a></p>
                </div>
            </div>
        </footer>
    )
}
