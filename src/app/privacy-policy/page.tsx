import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans">
            <Navbar />

            <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Last updated: December 11, 2025</p>

                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction</h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                        At EventLingo, we respect your privacy and are committed to protecting it through our compliance with this policy.
                        This policy describes the types of information we may collect from you or that you may provide when you visit the website
                        and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                        We collect several types of information from and about users of our website, including information:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 mb-6">
                        <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number.</li>
                        <li>That is about you but individually does not identify you.</li>
                        <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
                    </ul>

                    {/* Add more sections as needed */}
                </div>
            </section>

            <Footer />
        </div>
    );
}
