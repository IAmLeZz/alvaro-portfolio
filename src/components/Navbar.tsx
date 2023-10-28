"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = isFixed ? 'navbar bg-gray-900 text-white py-1 md:py-3 w-full shadow-md shadow-blue-900 z-[100] fixed' : 'navbar bg-gray-900 text-white py-3 md:py-6 w-full shadow-md shadow-blue-900 z-[100] relative';

    return (
        <>
            <nav className={navbarClass}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="mr-4">
                            <Image src={'/../../logo.png'} alt='Logo' width={30} height={30} className='flex items-center justify-center'></Image>
                        </div>
                        <ul className="flex space-x-6 z-10">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white font-bold">
                                    INICIO
                                </Link>
                            </li>
                            <li>
                                <Link href="/#aboutme" className="text-gray-400 hover:text-white font-bold">
                                    SOBRE MI
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="text-gray-400 hover:text-white font-bold">
                                    PROYECTOS
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-gray-400 hover:text-white font-bold">
                                    CONTACTO
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{ height: isFixed ? '80px' : '0px' }}></div>
        </>
    );
};