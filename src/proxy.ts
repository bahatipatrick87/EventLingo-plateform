import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/',
    '/about-us',
    '/services',
    '/contact'
])

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth()
    const url = req.nextUrl

    // If user is signed in and trying to access sign-in or sign-up pages, redirect to dashboard
    if (userId && (url.pathname.startsWith('/sign-in') || url.pathname.startsWith('/sign-up'))) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Protect non-public routes (but allow signed-in users to access them)
    if (!isPublicRoute(req) && !userId) {
        // Only redirect to sign-in if user is NOT signed in
        return NextResponse.redirect(new URL('/sign-in', req.url))
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}