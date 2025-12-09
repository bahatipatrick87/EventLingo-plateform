"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
    useScrollReveal();

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-50 blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-purple-50 blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="reveal">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Get in touch</h2>
                        <h3 className="mt-2 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 mb-6">
                            Ready to make your next event <span className="gradient-text">truly inclusive?</span>
                        </h3>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            We did love to hear from you! Whether you are a student organization, a university, or a large
                            conference organizer, EventLingo has a solution for you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-primary text-xl">
                                    📧
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</p>
                                    <p className="text-lg font-semibold text-gray-900">info@eventlingo.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-primary text-xl">
                                    📍
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Location</p>
                                    <p className="text-lg font-semibold text-gray-900">University of Messina</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 reveal reveal-delay-200">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you! This is a demo form.'); }}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4 bg-gray-50" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4 bg-gray-50" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4 bg-gray-50" placeholder="Tell us about your event..."></textarea>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:-translate-y-0.5 transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
