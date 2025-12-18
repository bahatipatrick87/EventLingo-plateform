import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { text, targetLanguage, sourceLanguage } = await request.json();

        if (!text || !targetLanguage) {
            return NextResponse.json(
                { error: 'Missing required fields: text and targetLanguage' },
                { status: 400 }
            );
        }

        // MOCK TRANSLATION LOGIC
        // In a real app, this would call OpenAI or a Translation API.
        // For now, we simulate a delay and return a mocked response.

        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate latency

        let translatedText = ``;

        // Mock translation logic
        const mockTranslations: Record<string, Record<string, string>> = {
            es: {
                'hello': 'Hola',
                'welcome': 'Bienvenido',
                'event': 'Evento',
                'good morning': 'Buenos días',
                'good evening': 'Buenas noches',
                'thank you': 'Gracias'
            },
            fr: {
                'hello': 'Bonjour',
                'welcome': 'Bienvenue',
                'event': 'Événement',
                'good morning': 'Bonjour',
                'good evening': 'Bonsoir',
                'thank you': 'Merci'
            },
            it: {
                'hello': 'Ciao',
                'welcome': 'Benvenuto',
                'event': 'Evento',
                'good morning': 'Buongiorno',
                'good evening': 'Buonasera',
                'thank you': 'Grazie'
            }
        };

        const targetDict = mockTranslations[targetLanguage];
        const lowerText = text.toLowerCase().trim();

        if (targetDict && targetDict[lowerText]) {
            translatedText = targetDict[lowerText];
        } else {
            // Fallback for demo: just prefix with language to show it "worked"
            // In a real app, this would be the actual AI translation result
            const langNames: Record<string, string> = { es: 'Spanish', fr: 'French', it: 'Italian' };
            const langName = langNames[targetLanguage] || targetLanguage;
            translatedText = `[${langName} Translation] ${text}`;
        }

        return NextResponse.json({ translatedText });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
