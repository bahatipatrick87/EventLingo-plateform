"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans selection:bg-primary selection:text-white transition-colors duration-300">
            <Navbar />

            {/* Contact Section */}
            <section id="contact" className="pt-32 pb-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400">We'd love to hear from you. Here is how you can reach us.</p>
                    </div>

                    <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/50 flex flex-col md:flex-row dark:border-gray-800">

                        {/* Contact Info Side */}
                        <div className="md:w-2/5 bg-gradient-to-br from-primary to-secondary p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <p className="text-indigo-100 mb-10 leading-relaxed">
                                    Have a question, proposal, or just want to say hello? Fill out the form or use the contact details below.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">✉️</div>
                                        <div>
                                            <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-1">Email</p>
                                            <p className="font-medium hover:text-white/90 transition-colors">contact@enventlingo.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">📍</div>
                                        <div>
                                            <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-1">Location</p>
                                            <p className="font-medium">123 Innovation Drive, Tech City</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-sm text-indigo-200 mb-4">Connect with us</p>
                                <div className="flex gap-4">
                                    {['Li', 'Tw', 'In'].map((social) => (
                                        <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Side */}
                        <div className="md:w-3/5 p-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="How can we help?"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Tell us a bit more..."
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
            {status === 'error' && <p className="text-red-500 text-center">Something went wrong. Please try again.</p>}
        </form>
    );
}
