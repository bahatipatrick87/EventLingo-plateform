import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-gray-900 mb-4 block">
                            <span className="text-white">EventLingo</span>
                        </span>
                        <p className="text-gray-500 max-w-sm mb-6">
                            Making communication inclusive and boundless. Join us in breaking down language barriers.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">X</Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">in</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4"><span className="text-white">Contact</span></h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>info@eventlingo.com</li>
                            <li>University of Messina</li>
                            <li>Italy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4"><span className="text-white">Links</span></h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary">Student Program</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    &copy; 2024 EventLingo. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
