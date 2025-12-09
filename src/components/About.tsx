"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
    useScrollReveal();

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Introduction</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Welcome to EventLingo
                    </h3>
                    <p className="mt-4 text-lg text-gray-500">
                        Our mission is simple: help international students, professionals, and participants fully understand
                        and engage—no matter what language they speak.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden reveal reveal-delay-100">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full opacity-10"></div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We provide <span className="font-bold text-primary">real-time multilingual captions</span> and
                            translation tools that allow attendees to follow sessions smoothly and interact confidently.
                            Whether it’s a conference, workshop, or academic seminar, EventLingo ensures communication flows
                            naturally for everyone.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-primary text-xl">
                                🎓
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">University of Messina</p>
                                <p className="text-sm text-gray-500">Born from academic research</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 reveal reveal-delay-200">
                        <div className="bg-indigo-600 rounded-2xl p-6 text-white h-48 flex flex-col justify-end transform hover:scale-105 transition-transform">
                            <span className="text-4xl font-bold mb-2">99%</span>
                            <span className="text-indigo-100">Accuracy in standard speech</span>
                        </div>
                        <div className="bg-purple-500 rounded-2xl p-6 text-white h-48 flex flex-col justify-end transform hover:scale-105 transition-transform">
                            <span className="text-4xl font-bold mb-2">50+</span>
                            <span className="text-purple-100">Languages supported</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
