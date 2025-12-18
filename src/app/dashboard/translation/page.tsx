"use client";
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { useRealtimeTranslation } from '@/hooks/use-realtime-translation';
import { LanguageSelector } from '@/components/language-selector';
import { Button } from '@/components/ui/button';
import { Loader2, Mic, MicOff, Play, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function TranslationPage() {
    const [targetLang, setTargetLang] = useState('es');
    const [inputText, setInputText] = useState('');

    // Hooks
    const { translate, translatedText, isLoading: isTranslating } = useTranslation();
    const {
        startStreaming,
        stopStreaming,
        isStreaming,
        streamedText
    } = useRealtimeTranslation(targetLang);

    const handleStaticTranslate = async () => {
        if (!inputText.trim()) return;
        await translate(inputText, targetLang);
    };

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Translation Tools</h1>
                    <p className="text-gray-500 dark:text-gray-400">Test static and real-time translation capabilities.</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Target Language:</span>
                    <LanguageSelector value={targetLang} onChange={setTargetLang} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Static Translation */}
                <Card>
                    <CardHeader>
                        <CardTitle>Text Translation</CardTitle>
                        <CardDescription>Translate text using our IDP engine.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Input (English)</label>
                            <Textarea
                                placeholder="Enter text to translate..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                rows={4}
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button
                                onClick={handleStaticTranslate}
                                disabled={isTranslating || !inputText}
                            >
                                {isTranslating ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Translating...
                                    </>
                                ) : (
                                    'Translate'
                                )}
                            </Button>
                        </div>

                        <div className="space-y-2 pt-4 border-t">
                            <label className="text-sm font-medium">Result ({targetLang.toUpperCase()})</label>
                            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md min-h-[100px] text-gray-900 dark:text-gray-100">
                                {translatedText || <span className="text-gray-400 italic">Translation will appear here...</span>}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Real-time Translation */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            Real-time Interpretation
                            {isStreaming && <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>}
                        </CardTitle>
                        <CardDescription>Simulate live event captioning and translation.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="h-[300px] overflow-y-auto p-4 bg-gray-900 rounded-md text-gray-100 font-mono text-sm space-y-2">
                            {streamedText.length === 0 ? (
                                <div className="h-full flex items-center justify-center text-gray-500">
                                    Click Start to simulate live audio stream...
                                </div>
                            ) : (
                                streamedText.map((line, i) => (
                                    <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <span className="text-indigo-400 mr-2">[{new Date().toLocaleTimeString()}]</span>
                                        {line}
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="flex gap-4">
                            {!isStreaming ? (
                                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={startStreaming}>
                                    <Mic className="mr-2 h-4 w-4" />
                                    Start Live Stream
                                </Button>
                            ) : (
                                <Button className="w-full bg-red-600 hover:bg-red-700" onClick={stopStreaming}>
                                    <MicOff className="mr-2 h-4 w-4" />
                                    Stop Stream
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
