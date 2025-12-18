"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
    useScrollReveal();
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 bg-gray-200 dark:bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left z-10 reveal">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-gray-700 font-bold text-sm mb-6 tracking-wide uppercase">
                        The Future of Events
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                        Events Without <br />
                        <span className="gradient-text">Language Barriers</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed reveal reveal-delay-100">
                        Empower your international audience with real-time AI translation and captions. Make every voice
                        heard, in every language.
                    </p>
                    <Link
                        href="/sign-up"
                        className="px-8 py-4 rounded-full bg-primary text-gray-800 font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-primary/40 transform hover:-translate-y-1 inline-block text-center"
                    >
                        Try It Now
                    </Link>
                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="px-8 py-4 rounded-full bg-blue-500 text-gray-800 border border-gray-200 font-bold text-lg hover:border-primary hover:text-primary transition-all shadow-sm transform hover:-translate-y-1 inline-block text-center"
                    >
                        Watch Demo
                    </button>
                </div>
                <div className="md:w-1/2 mt-16 md:mt-0 relative z-10 w-full reveal reveal-delay-300">
                    <div className="relative w-full max-w-lg mx-auto">
                        <div className="absolute top-4 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute bottom-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/hero_conference.png"
                                alt="Conference attendees using EventLingo"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="text-white font-medium text-sm">Live Translation Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {
                isVideoOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300">
                        <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl">
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                aria-label="Close video"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="aspect-video w-full">
                                <video
                                    src="/video.mp4"
                                    controls
                                    autoPlay
                                    muted
                                    className="w-full h-full object-contain"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        {/* Click outside to close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setIsVideoOpen(false)}
                        ></div>
                    </div>
                )
            }
        </section >
    );
}
