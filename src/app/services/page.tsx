"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesPage() {
    useScrollReveal();

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans selection:bg-primary selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 hero-bg opacity-70"></div>
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm mb-6 reveal">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">New Features Available</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 reveal active tracking-tight leading-tight">
                        Our <span className="gradient-text relative inline-block">
                            Services
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7509 2.99999 55.4542 3.49999 89.2625 4.99999C123.071 6.5 163.633 8.30005 197.667 3.50005" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 reveal reveal-delay-100 active leading-relaxed font-light">
                        Empower your events with a comprehensive suite of tools designed for inclusivity, accessibility, and global connection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-200">
                        <a href="#features" className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1">
                            Explore Features
                        </a>
                        <a href="/about-us#contact" className="px-8 py-4 bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-full font-bold transition-all border border-gray-200 dark:border-white/10 transform hover:-translate-y-1">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>

            {/* Feature 1: Event Creation Platform */}
            <section id="features" className="py-32 px-6 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="reveal order-2 md:order-1">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-primary dark:text-indigo-300 font-bold text-sm mb-6 tracking-wide uppercase">
                                Event Management
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">Effortless Event Creation</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                Launch your event in minutes with our intuitive dashboard. Whether it's a small seminar or a massive global conference, our platform gives you full control with zero friction.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Customizable branding & landing pages",
                                    "Manage speakers and sessions easily",
                                    "Multi-track support for complex schedules",
                                    "Real-time analytics and reporting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 dark:border-white/5">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mt-0.5 shrink-0">✓</div>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="reveal reveal-delay-200 order-1 md:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-800 p-3 transform hover:rotate-1 transition-all duration-500">
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-gray-200 dark:border-white/5 group">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=2573&ixlib=rb-4.0.3')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Live Now</span>
                                            </div>
                                            <p className="text-2xl font-bold">Tech Summit 2024</p>
                                            <div className="flex items-center gap-4 mt-4 text-sm text-white/70">
                                                <span>👥 2,450 Attendees</span>
                                                <span>🔴 Live Translation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Real-Time Translation */}
            <section className="py-32 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40 dark:opacity-10"></div>
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="reveal">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-12 text-white min-h-[500px] flex flex-col justify-center">
                                <div className="space-y-8">
                                    <div className="flex gap-4 items-start bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg transform hover:scale-[1.02] transition-transform">
                                        <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold text-lg shrink-0">EN</div>
                                        <div>
                                            <p className="text-xs text-indigo-100 uppercase font-bold mb-2">Speaker Audio</p>
                                            <p className="text-xl font-medium leading-relaxed">"Technology connects us in ways we never imagined possible."</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center text-white/50 text-3xl animate-bounce">
                                        ⬇
                                    </div>
                                    <div className="flex gap-4 items-start bg-white text-gray-900 p-6 rounded-2xl shadow-xl transform translate-x-4 md:translate-x-8 hover:translate-x-6 transition-transform border border-gray-100">
                                        <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg shrink-0">ES</div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-bold mb-2">Participant View</p>
                                            <p className="text-xl font-medium leading-relaxed text-primary">"La tecnología nos conecta de formas que nunca imaginamos posibles."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reveal reveal-delay-200">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 text-secondary dark:text-purple-300 font-bold text-sm mb-6 tracking-wide uppercase">
                                Core Technology
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">Real-Time AI Translation</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                Break down language barriers instantly. Our advanced AI engine transcribes and translates speech in real-time with over 98% accuracy.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">⚡️</div>
                                    <h4 className="text-lg font-bold mb-2 dark:text-white">Low Latency</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Sub-second delivery ensures the conversation flows naturally without awkward pauses.</p>
                                </div>
                                <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🌐</div>
                                    <h4 className="text-lg font-bold mb-2 dark:text-white">50+ Languages</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">From Spanish to Mandarin, we cover the globe so no one is left out.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Integrations */}
            <section className="py-32 px-6 relative">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="reveal mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 font-bold text-sm mb-6 tracking-wide uppercase">
                            Connectivity
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Seamless Integrations</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            EventLingo fits perfectly into your existing workflow. We integrate with the tools you already use every day.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal reveal-delay-100">
                        {[
                            { name: 'Zoom', icon: '📹', color: 'bg-blue-500', shadow: 'shadow-blue-500/30' },
                            { name: 'Teams', icon: '👥', color: 'bg-indigo-600', shadow: 'shadow-indigo-600/30' },
                            { name: 'Slack', icon: '#️⃣', color: 'bg-purple-600', shadow: 'shadow-purple-600/30' },
                            { name: 'Custom API', icon: '🔌', color: 'bg-gray-800', shadow: 'shadow-gray-800/30' }
                        ].map((item) => (
                            <div key={item.name} className="group relative">
                                <div className={`absolute inset-0 ${item.color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                <div className="relative bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center justify-center gap-4 group-hover:-translate-y-2">
                                    <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center text-3xl shadow-lg ${item.shadow} transform group-hover:rotate-6 transition-all duration-300`}>
                                        {item.icon}
                                    </div>
                                    <p className="font-bold text-gray-700 dark:text-gray-200">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 relative reveal reveal-delay-200">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 transform translate-y-4"></div>
                        <div className="relative p-12 rounded-3xl bg-gray-900 text-white overflow-hidden text-left flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                            <div className="relative z-10 max-w-xl">
                                <h3 className="text-3xl font-bold mb-4">Ready to transform your events?</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">Join thousands of event organizers who are already using EventLingo to connect with global audiences.</p>
                            </div>
                            <div className="relative z-10 whitespace-nowrap">
                                <a href="/about-us#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-white/20 transform hover:-translate-y-1">
                                    <span>Contact Sales</span>
                                    <span className="text-xl">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
