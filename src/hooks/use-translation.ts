import { useState } from 'react';

type TranslationState = {
    translatedText: string;
    isLoading: boolean;
    error: string | null;
};

export function useTranslation() {
    const [state, setState] = useState<TranslationState>({
        translatedText: '',
        isLoading: false,
        error: null,
    });

    const translate = async (text: string, targetLanguage: string, sourceLanguage: string = 'en') => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));

        try {
            const response = await fetch('/api/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text, targetLanguage, sourceLanguage }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Translation failed');
            }

            setState({
                translatedText: data.translatedText,
                isLoading: false,
                error: null,
            });
            return data.translatedText;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error instanceof Error ? error.message : 'An error occurred',
            }));
            return null;
        }
    };

    return {
        ...state,
        translate,
    };
}
