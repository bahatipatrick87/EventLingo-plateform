import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                subject: subject || 'No Subject',
                message,
            },
        });

        return NextResponse.json(submission, { status: 201 });
    } catch (error) {
        console.error('Contact submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
