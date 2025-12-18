"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAuth, UserButton } from '@clerk/nextjs';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isSignedIn } = useAuth();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

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
                            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none ring-1 ring-gray-200 dark:ring-gray-700"
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        {isSignedIn ? (
                            <>
                                <Link href="/dashboard" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                    Dashboard
                                </Link>
                                <UserButton afterSignOutUrl="/" />
                            </>
                        ) : (
                            <Link href="/sign-in" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {isSignedIn && (
                            <UserButton afterSignOutUrl="/" />
                        )}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none ring-1 ring-gray-200 dark:ring-gray-700"
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
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

                            {isSignedIn ? (
                                <Link href="/dashboard" onClick={closeMobileMenu} className="mx-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all text-center">
                                    Dashboard
                                </Link>
                            ) : (
                                <Link href="/sign-in" onClick={closeMobileMenu} className="mx-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:shadow-lg transition-all text-center">
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