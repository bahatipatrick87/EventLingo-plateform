"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Link from 'next/link';

export default function Pricing() {
    useScrollReveal();

    return (
        <section id="pricing" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Plans</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                        Flexible Pricing for Every Event
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Free */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors reveal reveal-delay-100">
                        <h4 className="text-lg font-bold text-white mb-2">Free</h4>
                        <p className="text-gray-400 text-sm mb-6">Student Clubs & Basic Needs</p>
                        <div className="text-3xl font-bold mb-6">$0</div>
                        <ul className="space-y-3 mb-8 text-sm text-gray-300">
                            <li className="flex items-center">✨ Limited translations</li>
                            <li className="flex items-center">✨ 1 Language supported</li>
                            <li className="flex items-center">✨ Basic captions</li>
                        </ul>
                        <Link href="#" className="block w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 text-center rounded-xl font-semibold transition-colors">
                            Select Plan
                        </Link>
                    </div>

                    {/* Standard */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-indigo-500 relative transform scale-105 shadow-2xl reveal reveal-delay-200">
                        <div className="absolute top-0 right-0 bg-indigo-500 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                            POPULAR
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Standard</h4>
                        <p className="text-gray-400 text-sm mb-6">Mid-size Events</p>
                        <div className="text-3xl font-bold mb-6">$49<span className="text-sm font-normal text-gray-500">/mo</span></div>
                        <ul className="space-y-3 mb-8 text-sm text-gray-300">
                            <li className="flex items-center text-white font-medium">✨ Full translation features</li>
                            <li className="flex items-center">✨ Session transcripts</li>
                            <li className="flex items-center">✨ Basic Analytics</li>
                        </ul>
                        <Link href="#" className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-center rounded-xl font-semibold transition-colors">
                            Get Standard
                        </Link>
                    </div>

                    {/* Premium */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors reveal reveal-delay-300">
                        <h4 className="text-lg font-bold text-white mb-2">Premium</h4>
                        <p className="text-gray-400 text-sm mb-6">Professional Conferences</p>
                        <div className="text-3xl font-bold mb-6">$199<span className="text-sm font-normal text-gray-500">/mo</span></div>
                        <ul className="space-y-3 mb-8 text-sm text-gray-300">
                            <li className="flex items-center">✨ Unlimited events</li>
                            <li className="flex items-center">✨ Multiple languages</li>
                            <li className="flex items-center">✨ Priority Support</li>
                        </ul>
                        <Link href="#" className="block w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 text-center rounded-xl font-semibold transition-colors">
                            Select Plan
                        </Link>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors reveal reveal-delay-300">
                        <h4 className="text-lg font-bold text-white mb-2">Enterprise</h4>
                        <p className="text-gray-400 text-sm mb-6">Large Organizations</p>
                        <div className="text-3xl font-bold mb-6">Custom</div>
                        <ul className="space-y-3 mb-8 text-sm text-gray-300">
                            <li className="flex items-center">✨ Custom Integration (SoS)</li>
                            <li className="flex items-center">✨ Dedicated Manager</li>
                            <li className="flex items-center">✨ Custom SLAs</li>
                        </ul>
                        <Link href="#" className="block w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 text-center rounded-xl font-semibold transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
