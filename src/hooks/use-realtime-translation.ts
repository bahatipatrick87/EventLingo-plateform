import { useState, useEffect, useRef } from 'react';

type RealtimeTranslationState = {
    streamedText: string[];
    isStreaming: boolean;
    error: string | null;
};

export function useRealtimeTranslation(targetLanguage: string) {
    const [state, setState] = useState<RealtimeTranslationState>({
        streamedText: [],
        isStreaming: false,
        error: null,
    });

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Mock source text stream
    const mockStreamSource = [
        "Welcome everyone to this event.",
        "We are excited to share our updates.",
        "EventLingo enables real-time connection.",
        "Thank you for joining us today."
    ];

    const startStreaming = () => {
        if (state.isStreaming) return;

        setState(prev => ({ ...prev, isStreaming: true, streamedText: [] }));

        let index = 0;

        intervalRef.current = setInterval(async () => {
            if (index >= mockStreamSource.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setState(prev => ({ ...prev, isStreaming: false }));
                return;
            }

            const text = mockStreamSource[index];
            index++;

            // Simulate network request for translation
            try {
                const response = await fetch('/api/translate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text, targetLanguage, sourceLanguage: 'en' })
                });
                const data = await response.json();

                setState(prev => ({
                    ...prev,
                    streamedText: [...prev.streamedText, data.translatedText || text]
                }));
            } catch (err) {
                // Fallback to original if fail
                setState(prev => ({
                    ...prev,
                    streamedText: [...prev.streamedText, text]
                }));
            }

        }, 2000); // New sentence every 2 seconds
    };

    const stopStreaming = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setState(prev => ({ ...prev, isStreaming: false }));
    };

    useEffect(() => {
        return () => stopStreaming();
    }, []);

    return {
        ...state,
        startStreaming,
        stopStreaming
    };
}
