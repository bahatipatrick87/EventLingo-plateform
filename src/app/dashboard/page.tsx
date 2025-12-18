"use client";
import React, { useState } from 'react';
import { UserButton } from "@clerk/nextjs";
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from '@/hooks/use-translation';
import { LanguageSelector } from '@/components/language-selector';
import {
    BarChart3,
    Calendar,
    Globe2,
    Languages,
    Mic2,
    Play,
    Plus,
    Settings,
    Users,
    ArrowRight,
    Loader2,
    Sparkles,
    Video
} from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
    const { user } = useAuth();

    // Quick Translate State
    const [quickText, setQuickText] = useState('');
    const [targetLang, setTargetLang] = useState('es');
    const { translate, translatedText, isLoading: isTranslating } = useTranslation();

    const handleQuickTranslate = async () => {
        if (!quickText.trim()) return;
        await translate(quickText, targetLang);
    };

    // EventLingo specific stats
    const stats = [
        {
            label: 'Active Sessions',
            value: '3',
            change: 'Live now',
            color: 'from-green-500 to-emerald-600',
            icon: <Mic2 className="w-6 h-6 text-white" />
        },
        {
            label: 'Total Attendees',
            value: '1,234',
            change: '+12% vs last event',
            color: 'from-blue-500 to-indigo-600',
            icon: <Users className="w-6 h-6 text-white" />
        },
        {
            label: 'Languages Supported',
            value: '50+',
            change: '5 new added',
            color: 'from-purple-500 to-violet-600',
            icon: <Globe2 className="w-6 h-6 text-white" />
        },
        {
            label: 'Words Translated',
            value: '45.2K',
            change: 'Today',
            color: 'from-orange-500 to-red-600',
            icon: <Languages className="w-6 h-6 text-white" />
        },
    ];

    const recentActivity = [
        { event: 'Tech Summit 2025', action: 'Real-time Spanish interpretation started', time: '2 mins ago', status: 'live' },
        { event: 'Global All-Hands', action: 'Live captioning active (EN, FR, DE)', time: '1 hour ago', status: 'success' },
        { event: 'Product Launch', action: 'Event scheduled for tomorrow', time: '5 hours ago', status: 'upcoming' },
        { event: 'Workshop A', action: 'Japanese translation download ready', time: '1 day ago', status: 'info' },
    ];

    return (
        <div className="space-y-8 p-8 max-w-7xl mx-auto h-full">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Dashboard
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Manage your multilingual events and real-time translations.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </div>

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 opacity-10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'Organizer'}! 👋</h2>
                    <p className="text-indigo-100 max-w-2xl text-lg">
                        You have <span className="font-bold text-white">3 active events</span> running with real-time translation.
                        System performance is optimal with <span className="font-bold text-green-300">99.9% uptime</span>.
                    </p>
                    <a href="/dashboard/live" className="inline-flex mt-6 px-6 py-3 bg-white text-indigo-600 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 items-center gap-2">
                        <Play className="w-4 h-4 fill-current" />
                        Go to Live Control Room
                    </a>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            {stat.change && (
                                <span className="bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full font-medium">
                                    {stat.change}
                                </span>
                            )}
                        </div>
                        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{stat.label}</h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Quick Translate Widget */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Quick Translate</h2>
                                <p className="text-sm text-gray-500">Instantly translate text for your attendees.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">English (Source)</label>
                                </div>
                                <Textarea
                                    placeholder="Type something to translate..."
                                    className="resize-none h-32 text-base"
                                    value={quickText}
                                    onChange={(e) => setQuickText(e.target.value)}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Target Language</label>
                                    <LanguageSelector value={targetLang} onChange={setTargetLang} />
                                </div>
                                <div className="h-32 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-md border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-base overflow-y-auto">
                                    {isTranslating ? (
                                        <div className="h-full flex items-center justify-center text-gray-400 gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Translating...
                                        </div>
                                    ) : translatedText ? (
                                        translatedText
                                    ) : (
                                        <span className="text-gray-400 italic">Translation will appear here...</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button onClick={handleQuickTranslate} disabled={!quickText || isTranslating} className="bg-indigo-600 hover:bg-indigo-700">
                                Translate Now <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-indigo-500" />
                                Live Activity Feed
                            </h2>
                            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View All</button>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-2 h-2 rounded-full ${activity.status === 'live' ? 'bg-red-500 animate-pulse' :
                                                activity.status === 'success' ? 'bg-green-500' :
                                                    activity.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-400'
                                                }`} />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{activity.event}</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.action}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activity.status === 'live' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                                                activity.status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                                    activity.status === 'upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                                        'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                                                }`}>
                                                {activity.status.toUpperCase()}
                                            </span>
                                            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
                        <div className="space-y-3">
                            <a href="/dashboard/live" className="w-full bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 p-4 rounded-xl flex items-center gap-4 transition-all group border border-indigo-100 dark:border-indigo-900/50">
                                <div className="p-2 bg-indigo-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                                    <Video className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <span className="block font-semibold">Start Live Event</span>
                                    <span className="text-xs opacity-75">With real-time captions</span>
                                </div>
                            </a>

                            <a href="/dashboard/video-translator" className="w-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 p-4 rounded-xl flex items-center gap-4 transition-all group border border-gray-100 dark:border-gray-700">
                                <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform">
                                    <Languages className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <span className="block font-semibold">Translate Video</span>
                                    <span className="text-xs opacity-75">Dubbing & Subtitles</span>
                                </div>
                            </a>

                            <button className="w-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 p-4 rounded-xl flex items-center gap-4 transition-all group border border-gray-100 dark:border-gray-700">
                                <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform">
                                    <Settings className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <span className="block font-semibold">Settings</span>
                                    <span className="text-xs opacity-75">Manage preferences</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
