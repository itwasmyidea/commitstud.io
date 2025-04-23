import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of available doc pages
const AVAILABLE_DOCS = [
  '/docs',
  '/docs/installation',
  '/docs/prerequisites',
  '/docs/authentication',
  '/docs/quick-start',
  '/docs/standard-mode',
  '/docs/yolo-mode',
  '/docs/environment-variables',
  '/docs/credentials-management',
  '/docs/repository-detection',
  '/docs/caching',
  '/docs/github-oauth-configuration',
  '/docs/using-with-cicd',
  '/docs/filtering-commits',
  '/docs/cache-management',
  '/docs/common-issues',
  '/docs/nodejs-deprecation-warnings',
  '/docs/github-api-rate-limits',
  '/docs/git-operation-errors',
  '/docs/command-line-reference',
  '/docs/api-reference',
  '/docs/configuration-options',
]

// Check if a pathname is under docs but not in the available list
function isUnavailableDocsPage(pathname: string): boolean {
  if (!pathname.startsWith('/docs/')) {
    return false
  }
  
  // These are special paths that should always be allowed
  if (pathname === '/docs/coming-soon' || pathname === '/docs') {
    return false
  }
  
  return !AVAILABLE_DOCS.includes(pathname)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only handle /docs/* routes
  if (!pathname.startsWith('/docs/')) {
    return NextResponse.next()
  }

  // Check if the page exists
  if (isUnavailableDocsPage(pathname)) {
    // Redirect to coming soon page
    const url = request.nextUrl.clone()
    url.pathname = '/docs/coming-soon'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/docs/:path*',
} 