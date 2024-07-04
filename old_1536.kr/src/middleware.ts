import { NextResponse } from 'next/server'

export function middleware(request: NextResponse) {
    const currentUser = request.cookies.get('1536id')?.value
    return NextResponse.next()
    // if (currentUser) {
    //     return Response.redirect(new URL('/dashboard', request.url))
    // }

    // if (!currentUser) {
    //     return Response.redirect(new URL('/login', request.url))
    // }
}


export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!login2|fuck).*)',
    ],
}