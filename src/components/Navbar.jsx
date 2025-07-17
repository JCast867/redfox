import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import redfox from '../images/redfox.svg';
import redfoxText from '../images/redfoxtext.svg';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header className="bg-[#eeeeee] sm:bg-green-500 md:bg-blue-600 lg:bg-red-700 xl:bg-amber-300">
            <div className="mx-auto px-8 lg:px-20 py-2 flex justify-between items-center">
                {/* logo */}
                <div className="flex items-center cursor-pointer">
                    <img
                        alt="RedFox Construction Logo"
                        src={redfox}
                        className="h-16 w-14 md:h-20 md:w-20"
                    />
                    <img
                        alt="RedFox Text Logo"
                        src={redfoxText}
                        className="h-16 md:h-20 ml-1"
                    />
                </div>

                {/* for screens big enough */}
                <nav aria-label="Main Navigation" className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li><a href="#about" className="text-gray-700 hover:bg-zinc-200 py-2 px-2 rounded">About Us</a></li>
                        <li><a href="#services" className="text-gray-700 hover:bg-zinc-200 py-2 px-2 rounded">Services</a></li>
                        <li><a href="#projects" className="text-gray-700 hover:bg-zinc-200 py-2 px-2 rounded">Projects</a></li>
                        <li><a href="#book" className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded">Book Now!</a></li>
                    </ul>
                </nav>

                {/* smaller screens */}
                {/* menu icon */}
                <div className="md:hidden">
                    <button
                        aria-expanded={menuOpen}
                        aria-label="Toggle Menu"
                        aria-controls="mobile-menu" 
                        className="cursor-pointer" 
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <IoIosMenu className="text-3xl text-gray-800" />
                    </button>
                </div>

            </div>
        </header>
        <nav id="mobile-menu" aria-label="Mobile Navigation" className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        } bg-[#eeeeee] px-8 py-4 shadow`}>
            <ul className="flex flex-col p-2 space-y-2">
                <li><a onClick={() => setMenuOpen(false)} href="#about" className="text-gray-700 hover:bg-zinc-200 py-2 px-2 rounded block">About Us</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#services" className="text-gray-700 hover:bg-zinc-200 py-2 px-2 rounded block">Services</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#projects" className="text-gray-700 hover:bg-zinc-200 py-2 px-2 rounded block">Projects</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#book" className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded block text-center">Book Now!</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;
