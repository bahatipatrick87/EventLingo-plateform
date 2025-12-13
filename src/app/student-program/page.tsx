import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StudentProgramPage() {
    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans selection:bg-primary selection:text-white transition-colors duration-300">
            <Navbar />
            <div className="container mx-auto px-6 pt-32 pb-20">
                <h1 className="text-4xl font-bold mb-8">Student Program</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Learn more about our student program opportunities here.
                </p>
            </div>
            <Footer />
        </div>
    );
}
