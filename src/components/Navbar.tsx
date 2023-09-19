
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4 w-full relative shadow-md shadow-blue-900">
            <div className="container mx-auto flex justify-between items-center">
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
        </nav>
    );
};

