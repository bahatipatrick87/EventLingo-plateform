"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BusinessModel() {
    useScrollReveal();

    return (
        <section id="business-model" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Strategy</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Business Model Overview
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-8 rounded-3xl reveal reveal-delay-100">
                    {/* Col 1 */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-2">Key Partners</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Universities & Research Labs</li>
                                <li>Event Tech Providers</li>
                                <li>Language Service Providers</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-2">Key Activities</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Platform Development</li>
                                <li>Event Onboarding</li>
                                <li>Translation Optimization</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-2">Key Resources</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>AI Speech Tech</li>
                                <li>Development Team</li>
                                <li>Academic Data</li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-b from-indigo-600 to-purple-700 p-6 rounded-xl shadow-lg text-white h-full">
                            <h4 className="font-bold uppercase text-xs tracking-wider mb-4 opacity-80">Value Proposition</h4>
                            <p className="text-lg font-medium leading-relaxed mb-4">
                                Making events accessible for everyone through real-time multilingual communication.
                            </p>
                            <p className="text-indigo-100 text-sm mb-2">✔ Inclusive tools for all attendees</p>
                            <p className="text-indigo-100 text-sm mb-2">✔ Improve engagement & understanding</p>
                            <p className="text-indigo-100 text-sm">✔ Easy implementation for organizers</p>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-2">Customer Segments</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Universities & Schools</li>
                                <li>Student Associations</li>
                                <li>NGOs</li>
                                <li>Corporate Event Teams</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-2">Channels</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Direct Website</li>
                                <li>University Partnerships</li>
                                <li>Social Media</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="text-green-600 font-bold uppercase text-xs tracking-wider mb-2">Revenue Streams</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Subscriptions (SaaS)</li>
                                <li>Enterprise Contracts</li>
                                <li>Per-event Add-ons</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
