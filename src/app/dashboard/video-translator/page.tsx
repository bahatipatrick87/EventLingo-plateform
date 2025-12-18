"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Upload, FileVideo, CheckCircle2, Languages, ArrowRight, Video, Play, Download, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LanguageSelector } from '@/components/language-selector';
import { Progress } from '@/components/ui/progress';
import { useRealtimeTranslation } from '@/hooks/use-realtime-translation';

export default function VideoTranslatorPage() {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // Process state
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isReadyToPlay, setIsReadyToPlay] = useState(false);

    // Playback state
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [targetLang, setTargetLang] = useState('es');

    // Simulation hook
    const {
        startStreaming,
        stopStreaming,
        streamedText
    } = useRealtimeTranslation(targetLang);

    // Cleanup object URL
    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    // Dubbing effect
    useEffect(() => {
        if (isPlaying && streamedText.length > 0) {
            const lastLine = streamedText[streamedText.length - 1];

            // Cancel previous speech to avoid queue buildup if too fast
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(lastLine);

            // Map simple lang codes to full locale codes for better TTS
            const langMap: Record<string, string> = {
                'es': 'es-ES',
                'fr': 'fr-FR',
                'it': 'it-IT',
                'de': 'de-DE',
                'ja': 'ja-JP'
            };

            utterance.lang = langMap[targetLang] || 'en-US';
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            window.speechSynthesis.speak(utterance);
        }
    }, [streamedText, isPlaying, targetLang]);

    // Volume effect
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const uploadedFile = e.dataTransfer.files[0];
            setFile(uploadedFile);
            setPreviewUrl(URL.createObjectURL(uploadedFile));
            setIsReadyToPlay(false);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const uploadedFile = e.target.files[0];
            setFile(uploadedFile);
            setPreviewUrl(URL.createObjectURL(uploadedFile));
            setIsReadyToPlay(false);
        }
    }

    const handleProcess = () => {
        setIsProcessing(true);
        // Simulate processing
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 10;
            setProgress(currentProgress);
            if (currentProgress >= 100) {
                clearInterval(interval);
                setIsProcessing(false);
                setIsReadyToPlay(true);
            }
        }, 300);
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                stopStreaming();
                window.speechSynthesis.cancel(); // Stop talking
            } else {
                videoRef.current.play();
                startStreaming();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
        stopStreaming();
        window.speechSynthesis.cancel();
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            videoRef.current.volume = volume; // Set initial volume
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleDownload = (type: 'srt' | 'video') => {
        const content = type === 'srt'
            ? "1\n00:00:01,000 --> 00:00:04,000\n[Translated Subtitles]\n\n2\n00:00:05,000 --> 00:00:09,000\n[More translated text...]"
            : "Mock Video Content";

        const blob = new Blob([content], { type: type === 'srt' ? 'text/plain' : 'video/mp4' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = type === 'srt' ? `subtitles_${targetLang}.srt` : `translated_video_${targetLang}.mp4`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                    <Video className="w-8 h-8" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Video Translator</h1>
                    <p className="text-gray-500">AI-powered dubbing and subtitling for your event recordings.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-black">
                {/* Upload Section */}
                <div className="space-y-6">
                    <Card className={`border-2 border-dashed transition-all duration-200 ${dragActive ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-200 dark:border-gray-700'
                        }`}>
                        <CardContent
                            className="flex flex-col items-center justify-center py-20 text-center cursor-pointer relative"
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                accept="video/*"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleFileSelect}
                            />
                            {!file ? (
                                <>
                                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                                        <Upload className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Upload your video</h3>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
                                        Drag and drop your event recording here, or click to browse. Supports MP4, MOV, and AVI up to 2GB.
                                    </p>
                                    <Button variant="outline" className="pointer-events-none">Browse Files</Button>
                                </>
                            ) : (
                                <div className="space-y-4 w-full max-w-md">
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                        <div className="p-3 bg-white dark:bg-gray-700 rounded-md">
                                            <FileVideo className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <p className="font-medium truncate">{file.name}</p>
                                            <p className="text-sm text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="z-10"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setFile(null);
                                                setPreviewUrl(null);
                                                setIsReadyToPlay(false);
                                            }}
                                        >
                                            Change
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Target Language</label>
                            <p className="text-xs text-gray-500">Select language for dubbing & subtitles</p>
                        </div>
                        <LanguageSelector value={targetLang} onChange={setTargetLang} />
                    </div>

                    <Button
                        size="lg"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-14 text-lg shadow-lg shadow-purple-200 dark:shadow-none"
                        disabled={!file || isProcessing || isReadyToPlay}
                        onClick={handleProcess}
                    >
                        {isProcessing ? 'Processing Video...' : isReadyToPlay ? 'Ready to Play' : 'Start Translation'}
                        {!isProcessing && !isReadyToPlay && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                </div>

                {/* Status/Preview Section */}
                <div className="space-y-6">
                    {previewUrl ? (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Video Player */}
                            <div className="aspect-video bg-black relative group">
                                <video
                                    ref={videoRef}
                                    src={previewUrl}
                                    className="w-full h-full object-contain"
                                    onEnded={handleVideoEnded}
                                    onTimeUpdate={handleTimeUpdate}
                                    onLoadedMetadata={handleLoadedMetadata}
                                    onClick={togglePlay}
                                />

                                {/* Overlay Subtitles */}
                                {isReadyToPlay && (
                                    <div className="absolute bottom-16 left-0 w-full text-center px-8 z-20 pointer-events-none">
                                        <span className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-lg md:text-xl font-medium shadow-lg transition-all">
                                            {streamedText.length > 0
                                                ? streamedText[streamedText.length - 1]
                                                : "Translated subtitles appear here..."}
                                        </span>
                                    </div>
                                )}

                                {/* Custom Controls */}
                                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${isReadyToPlay ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="flex flex-col gap-2">
                                        {/* Seek Bar */}
                                        <input
                                            type="range"
                                            min="0"
                                            max={duration || 100}
                                            value={currentTime}
                                            onChange={handleSeek}
                                            className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                                        />

                                        <div className="flex items-center justify-between text-white">
                                            <div className="flex items-center gap-4">
                                                <button onClick={togglePlay} className="hover:text-purple-400 transition-colors">
                                                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                                                </button>

                                                <div className="flex items-center gap-2 group/vol">
                                                    <Volume2 className="w-5 h-5" />
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="1"
                                                        step="0.1"
                                                        value={volume}
                                                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                                                        className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>

                                                <span className="text-sm font-mono">{formatTime(currentTime)} / {formatTime(duration)}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="text-xs bg-purple-600 px-2 py-0.5 rounded text-white">{targetLang.toUpperCase()} Dubbing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Start Overlay */}
                                {!isPlaying && !isProcessing && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 pointer-events-none">
                                        {isReadyToPlay ? (
                                            <Play className="w-16 h-16 text-white opacity-80" />
                                        ) : isProcessing ? (
                                            <div className="text-center space-y-4">
                                                <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto" />
                                                <p className="text-white font-medium drop-shadow-md">AI is generating subtitles...</p>
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <span>Status</span>
                                    <span className={isReadyToPlay ? "text-green-600" : isProcessing ? "text-purple-600" : "text-gray-500"}>
                                        {isReadyToPlay ? "Translation Ready" : isProcessing ? "Processing..." : "Waiting to start"}
                                    </span>
                                </div>
                                {isProcessing && <Progress value={progress} className="h-2" />}

                                {isReadyToPlay && (
                                    <div className="pt-4 flex gap-4">
                                        <Button
                                            className="flex-1"
                                            variant="outline"
                                            onClick={() => handleDownload('srt')}
                                        >
                                            Download Subtitles (.srt)
                                        </Button>
                                        <Button
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                            onClick={() => handleDownload('video')}
                                        >
                                            <Download className="mr-2 w-4 h-4" /> Download Video
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center p-12 space-y-4 text-gray-400">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                <Languages className="w-8 h-8 opacity-50" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Preview Area</h3>
                                <p className="text-sm">Your translated video will appear here.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Loader2({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    )
}
