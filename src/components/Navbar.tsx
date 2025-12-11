"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isLoggedIn } = useAuth();
    const { theme, setTheme } = useTheme();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
                        <Image
                            src="/eventlingo-logo.png"
                            alt="EventLingo Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                            priority
                        />
                        <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">
                            EventLingo
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium">Home</Link>
                        <Link href="/about-us" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium">About Us</Link>
                        <Link href="/services" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium">Services</Link>
                        <Link href="/contact" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium">Contact</Link>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>

                        {isLoggedIn ? (
                            <Link href="/dashboard" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Dashboard
                            </Link>
                        ) : (
                            <Link href="/login" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" onClick={closeMobileMenu} className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium px-4 py-2">Home</Link>
                            <Link href="/about-us" onClick={closeMobileMenu} className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium px-4 py-2">About Us</Link>
                            <Link href="/services" onClick={closeMobileMenu} className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium px-4 py-2">Services</Link>
                            <Link href="/contact" onClick={closeMobileMenu} className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium px-4 py-2">Contact</Link>

                            {isLoggedIn ? (
                                <Link href="/dashboard" onClick={closeMobileMenu} className="mx-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all text-center">
                                    Dashboard
                                </Link>
                            ) : (
                                <Link href="/login" onClick={closeMobileMenu} className="mx-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all text-center">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
