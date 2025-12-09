"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Services() {
    useScrollReveal();

    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        How EventLingo Works
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group reveal reveal-delay-100">
                        <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-primary mb-6 text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                            🎙️
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Real-Time Translation</h4>
                        <p className="text-gray-500 leading-relaxed">
                            Instant speech-to-text translation in multiple languages, displaying captions on any device.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group reveal reveal-delay-200">
                        <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-primary mb-6 text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                            📱
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Simple Access</h4>
                        <p className="text-gray-500 leading-relaxed">
                            Join via QR code or link. No app download needed. Works seamlessly in any mobile browser.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group reveal reveal-delay-300">
                        <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-primary mb-6 text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                            📊
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Organizer Dashboard</h4>
                        <p className="text-gray-500 leading-relaxed">
                            Manage languages, customize sessions, and monitor live engagement from one intuitive hub.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group reveal reveal-delay-300">
                        <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-primary mb-6 text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                            📈
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Post-Event Insights</h4>
                        <p className="text-gray-500 leading-relaxed">
                            Download full transcripts and analyze translation accuracy and audience participation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
