"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutUsPage() {
    useScrollReveal();

    const teamMembers = [
        {
            name: "Tinomuvonga Gupure",
            role: "Chief Executive Officer",
            image: "/team/tinomuvonga-gupure.jpg",
            initials: "TG",
            bio: "Visionary leader driving innovation in global communication."
        },
        {
            name: "Andrea Fascì",
            role: "Chief Commercial Officer",
            image: "/team/andrea-fasci.png",
            initials: "AF",
            bio: "Expert in strategic partnerships and market expansion."
        },
        {
            name: "Patrick Bahati",
            role: "Chief Financial Officer",
            image: "/team/patrick-bahati.jpg",
            initials: "PB",
            bio: "Ensuring sustainable growth and financial health."
        },
        {
            name: "Yoshan Mendis",
            role: "Quality Assurance & Operational Manager",
            image: "/team/yoshan-mendis.png",
            initials: "YM",
            bio: "Dedicated to operational excellence and product quality."
        },
        {
            name: "Vijayraj Chaugule",
            role: "Chief Technical Officer",
            image: "/team/vijayraj.png",
            initials: "VC",
            bio: "Leading the technical architecture and engineering teams."
        }
    ];

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans selection:bg-primary selection:text-white transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 reveal tracking-tight">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">EventLingo</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 reveal reveal-delay-100 leading-relaxed">
                        We are a passionate team of innovators dedicated to breaking down language barriers in events worldwide.
                    </p>
                    <div className="reveal reveal-delay-200">
                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
                            <span className="block px-8 py-3 bg-white dark:bg-dark rounded-full text-lg font-semibold">
                                🚀 Building the Future of Communication
                            </span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Team Section */}
            <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Minds</span> Behind EventLingo
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Meet the passionate individuals working to break down language barriers across the globe.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.name}
                                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                                <div className="p-8 flex flex-col items-center">
                                    <div className="relative w-48 h-48 mb-6 rounded-full p-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 group-hover:from-primary group-hover:to-secondary transition-colors duration-500">
                                        <div className="w-full h-full rounded-full overflow-hidden relative bg-white dark:bg-gray-800">
                                            {member.image ? (
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
                                                    {member.initials}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{member.name}</h3>
                                    <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest mb-4">{member.role}</p>
                                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-white dark:bg-gray-900">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to get started?</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join us in transforming how the world communicates at events.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-primary text-white font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
