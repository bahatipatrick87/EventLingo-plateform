"use client";

import Link from 'next/link';

export default function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed w-full z-50 glass transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={scrollToTop}>
                        <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">
                            EventLingo
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <button onClick={scrollToTop} className="text-gray-600 hover:text-primary transition-colors font-medium">Home</button>
                        <Link href="#about" className="text-gray-600 hover:text-primary transition-colors font-medium">About</Link>
                        <Link href="#services" className="text-gray-600 hover:text-primary transition-colors font-medium">Services</Link>
                        <Link href="#business-model" className="text-gray-600 hover:text-primary transition-colors font-medium">Strategy</Link>
                        <Link href="#contact" className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
