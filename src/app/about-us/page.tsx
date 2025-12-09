import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutContactPage() {
    const teamMembers = [
        {
            name: "Tinomuvonga Gupure",
            role: "Chief Executive Officer",
            image: "/team/tinomuvonga-gupure.jpg",
            initials: "TG"
        },
        {
            name: "Andrea Fascì",
            role: "Chief Commercial Officer",
            image: "/team/andrea-fasci.png",
            initials: "AF"
        },
        {
            name: "Patrick Bahati",
            role: "Chief Financial Officer",
            image: "/team/patrick-bahati.jpg",
            initials: "PB"
        },

        {
            name: "Yoshan Mendis",
            role: "Quality Assurance & Operational Manager",
            image: "/team/yoshan-mendis.png",
            initials: "YM"
        },

        {
            name: "Vijayraj Chaugule",
            role: "Chief Technical Officer",
            image: "/team/vijayraj.png",
            initials: "VC"
        }
    ];

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden hero-bg">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700"></div>

                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 reveal active tracking-tight">
                        Meet the <span className="gradient-text">Minds</span> Behind EventLingo
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 reveal reveal-delay-100 active leading-relaxed">
                        We are a passionate team of innovators dedicated to breaking down language barriers in events worldwide.
                    </p>
                    <div className="reveal reveal-delay-200 active">
                        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
                            <span className="block px-8 py-3 bg-white dark:bg-dark rounded-full text-lg font-semibold">
                                🚀 Building the Future of Communication
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 relative">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.name}
                                className="glass rounded-3xl overflow-hidden p-8 text-center transform hover:scale-[1.02] transition-all duration-500 shadow-xl hover:shadow-2xl group border border-white/50"
                            >
                                <div className="relative w-40 h-40 mx-auto mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary/30 transition-all duration-500">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400">
                                                {member.initials}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">{member.role}</p>
                                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {/* Social Placeholders if needed */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/50 flex flex-col md:flex-row">

                        {/* Contact Info Side */}
                        <div className="md:w-2/5 bg-gradient-to-br from-primary to-secondary p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                            <div>
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-indigo-100 mb-10 leading-relaxed">
                                    Have a question, proposal, or just want to say hello? We did love to hear from you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">✉️</div>
                                        <div>
                                            <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest">Email</p>
                                            <p className="font-medium">contact@enventlingo.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">📍</div>
                                        <div>
                                            <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest">Location</p>
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
                        <div className="md:w-3/5 p-12 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Tell us a bit more..."
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
