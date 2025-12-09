"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
    useScrollReveal();

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 hero-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left z-10 reveal">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
                        🚀 The Future of Events
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                        Events Without <br />
                        <span className="gradient-text">Language Barriers</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed reveal reveal-delay-100">
                        Empower your international audience with real-time AI translation and captions. Make every voice
                        heard, in every language.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start reveal reveal-delay-200">
                        <button className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-primary/40 transform hover:-translate-y-1">
                            Try It Now
                        </button>
                        <button className="px-8 py-4 rounded-full bg-white text-gray-800 border border-gray-200 font-bold text-lg hover:border-primary hover:text-primary transition-all shadow-sm transform hover:-translate-y-1">
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-16 md:mt-0 relative z-10 w-full reveal reveal-delay-300">
                    <div className="relative w-full max-w-lg mx-auto animate-float">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/50">
                            {/* Mock Interface */}
                            <div className="flex items-center space-x-2 mb-4 border-b border-gray-200 pb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="ml-2 text-xs text-gray-400 font-mono">live-session.eventlingo.com</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                                    <div className="bg-gray-100 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl w-full">
                                        <p className="text-sm font-semibold text-gray-800">Speaker (English)</p>
                                        <p className="text-gray-600">&quot;Welcome everyone to our annual innovation summit.&quot;</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                        ES
                                    </div>
                                    <div className="bg-indigo-50 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl w-full border border-indigo-100">
                                        <p className="text-sm font-semibold text-primary">Translation (Spanish)</p>
                                        <p className="text-gray-800">&quot;Bienvenidos a todos a nuestra cumbre anual de innovación.&quot;</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                        FR
                                    </div>
                                    <div className="bg-amber-50 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl w-full border border-amber-100">
                                        <p className="text-sm font-semibold text-amber-700">Translation (French)</p>
                                        <p className="text-gray-800">&quot;Bienvenue à tous à notre sommet annuel sur l&apos;innovation.&quot;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
