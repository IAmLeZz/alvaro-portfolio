
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-400">
                    Logo
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-gray-400 hover:text-white">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-400 hover:text-white">
                            Sobre mi
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-gray-400 hover:text-white">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-400 hover:text-white">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
