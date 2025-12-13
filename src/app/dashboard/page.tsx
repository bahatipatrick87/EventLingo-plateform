"use client";

import { useAuth } from '@/context/AuthContext';

export default function DashboardPage() {
    const { user } = useAuth();

    const stats = [
        { label: 'Total Events', value: '12', change: '+3 this month', color: 'from-blue-500 to-blue-600' },
        { label: 'Active Users', value: '1,234', change: '+12% from last month', color: 'from-green-500 to-green-600' },
        { label: 'Languages', value: '24', change: '50+ supported', color: 'from-purple-500 to-purple-600' },
        { label: 'Translations', value: '45.2K', change: '+8.3K this week', color: 'from-orange-500 to-orange-600' },
    ];

    const recentActivity = [
        { event: 'Tech Conference 2025', action: 'Translation completed', time: '2 hours ago', status: 'success' },
        { event: 'Global Summit', action: 'New attendee joined', time: '5 hours ago', status: 'info' },
        { event: 'Workshop Series', action: 'Captions generated', time: '1 day ago', status: 'success' },
        { event: 'Annual Meeting', action: 'Event created', time: '2 days ago', status: 'pending' },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
                <p className="text-indigo-100">Here's what's happening with your events today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-2xl mb-4`}>
                            📊
                        </div>
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{stat.label}</h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{stat.change}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    {recentActivity.map((activity, index) => (
                        <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{activity.event}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.action}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${activity.status === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                            activity.status === 'info' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        }`}>
                                        {activity.status}
                                    </span>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{activity.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary transition-all text-left group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4 group-hover:scale-110 transition-transform">
                        ➕
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Create Event</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Start a new multilingual event</p>
                </button>

                <button className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary transition-all text-left group">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-4 group-hover:scale-110 transition-transform">
                        📈
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">View Analytics</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Check your event performance</p>
                </button>

                <button className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary transition-all text-left group">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 text-2xl mb-4 group-hover:scale-110 transition-transform">
                        ⚙️
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Settings</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Manage your preferences</p>
                </button>
            </div>
        </div>
    );
}
