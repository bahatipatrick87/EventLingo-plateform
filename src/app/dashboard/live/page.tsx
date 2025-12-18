"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRealtimeTranslation } from '@/hooks/use-realtime-translation';
import { LanguageSelector } from '@/components/language-selector';
import {
    Mic,
    MicOff,
    Video,
    VideoOff,
    PhoneOff,
    Users,
    MessageSquare,
    Share,
    Settings,
    MoreVertical,
    Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LiveStudioPage() {
    const { user } = useAuth();
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [targetLang, setTargetLang] = useState('es');

    // Simulations
    const {
        startStreaming,
        stopStreaming,
        isStreaming,
        streamedText
    } = useRealtimeTranslation(targetLang);

    useEffect(() => {
        // Auto-start streaming for demo effect
        startStreaming();
        return () => stopStreaming();
    }, [targetLang]);

    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col bg-gray-950 text-white overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="font-bold text-red-500 tracking-wider text-sm">LIVE</span>
                    </div>
                    <div className="h-6 w-px bg-gray-700 mx-2"></div>
                    <h1 className="text-lg font-semibold">Tech Summit 2025: Keynote</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-800 rounded-full px-4 py-1.5 gap-2 border border-gray-700">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="font-mono text-sm font-medium">1,248</span>
                    </div>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                        <Settings className="w-5 h-5 text-gray-400" />
                    </Button>
                </div>
            </div>

            {/* Main Stage */}
            <div className="flex-1 flex overflow-hidden">
                {/* Video Area */}
                <div className="flex-1 relative bg-black flex items-center justify-center">
                    {/* Mock Video Placeholder */}
                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                        {isVideoOn ? (
                            <div className="text-center space-y-4">
                                <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center text-4xl mx-auto ring-4 ring-indigo-500/30">
                                    {user?.name?.[0] || 'U'}
                                </div>
                                <p className="text-gray-400">Camera is active (Simulated)</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-gray-500">
                                <VideoOff className="w-16 h-16 mb-4 opacity-50" />
                                <p>Camera is off</p>
                            </div>
                        )}

                        {/* Live Caption Overlay */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl">
                            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 shadow-2xl transition-all duration-300">
                                <div className="text-xs text-indigo-400 font-bold mb-2 uppercase tracking-widest text-left flex justify-between">
                                    <span>Real-time Translation ({targetLang.toUpperCase()})</span>
                                    <Activity className="w-4 h-4 animate-pulse" />
                                </div>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                                    {streamedText.length > 0
                                        ? streamedText[streamedText.length - 1]
                                        : <span className="text-gray-500 italic">Waiting for speech...</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Chat & Settings) */}
                <div className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
                    <div className="p-4 border-b border-gray-800">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Translation Target</label>
                        <LanguageSelector value={targetLang} onChange={setTargetLang} />
                    </div>

                    <div className="flex-1 p-4">
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" /> Live Chat
                        </h3>
                        <div className="space-y-4 text-sm text-gray-300">
                            <div className="flex gap-3">
                                <Avatar className="w-8 h-8"><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>JD</AvatarFallback></Avatar>
                                <div>
                                    <span className="font-bold text-white text-xs block">John Doe</span>
                                    <p>Is the recording going to be available?</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Avatar className="w-8 h-8"><AvatarFallback>AM</AvatarFallback></Avatar>
                                <div>
                                    <span className="font-bold text-white text-xs block">Alice Miller</span>
                                    <p>The real-time translation is amazing! 👏</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Avatar className="w-8 h-8"><AvatarFallback>RK</AvatarFallback></Avatar>
                                <div>
                                    <span className="font-bold text-white text-xs block">Raj Kumar</span>
                                    <p>Greetings from India!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls Bar */}
            <div className="h-20 bg-gray-900 border-t border-gray-800 flex items-center justify-between px-8">
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 font-mono">00:45:12</span>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        variant={isMicOn ? "secondary" : "destructive"}
                        size="icon"
                        className="rounded-full w-12 h-12"
                        onClick={() => setIsMicOn(!isMicOn)}
                    >
                        {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                    </Button>
                    <Button
                        variant={isVideoOn ? "secondary" : "destructive"}
                        size="icon"
                        className="rounded-full w-12 h-12"
                        onClick={() => setIsVideoOn(!isVideoOn)}
                    >
                        {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <Share className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-gray-800 border-gray-700 hover:bg-gray-700">
                        <MoreVertical className="w-5 h-5" />
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="destructive" className="px-6 rounded-full font-bold">
                        <PhoneOff className="w-4 h-4 mr-2" /> End Event
                    </Button>
                </div>
            </div>
        </div>
    );
}
