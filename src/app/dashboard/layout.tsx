"use client";

import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user } = useUser();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Top Navigation */}
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                EventLingo
                            </Link>
                            <div className="hidden md:flex gap-6">
                                <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                                    Dashboard
                                </Link>
                                <Link href="/dashboard/events" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                                    Events
                                </Link>
                                <Link href="/dashboard/analytics" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                                    Analytics
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {user?.firstName} {user?.lastName}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {user?.primaryEmailAddress?.emailAddress}
                                </p>
                            </div>
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
}