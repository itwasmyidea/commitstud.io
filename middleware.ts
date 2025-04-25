import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define docs redirect map for specific paths
const DOCS_REDIRECT_MAP: Record<string, string> = {
  '/docs': 'https://docs.commitstud.io',
  '/docs/installation': 'https://docs.commitstud.io/docs/1-getting-started/quick-start',
  '/docs/prerequisites': 'https://docs.commitstud.io/docs/1-getting-started/quick-start',
  '/docs/authentication': 'https://docs.commitstud.io/docs/1-getting-started/quick-start',
  '/docs/quick-start': 'https://docs.commitstud.io/docs/1-getting-started/quick-start',
  '/docs/standard-mode': 'https://docs.commitstud.io/docs/2-usage/standard-mode',
  '/docs/yolo-mode': 'https://docs.commitstud.io/docs/2-usage/yolo-mode',
  '/docs/environment-variables': 'https://docs.commitstud.io/docs/3-configuration/options',
  '/docs/credentials-management': 'https://docs.commitstud.io/docs/3-configuration/options',
  '/docs/repository-detection': 'https://docs.commitstud.io/docs/3-configuration/options',
  '/docs/caching': 'https://docs.commitstud.io/docs/3-configuration/options',
  '/docs/github-oauth-configuration': 'https://docs.commitstud.io/docs/3-configuration/options',
  '/docs/using-with-cicd': 'https://docs.commitstud.io/docs/4-advanced-usage/cicd',
  '/docs/filtering-commits': 'https://docs.commitstud.io/docs/4-advanced-usage/filters',
  '/docs/cache-management': 'https://docs.commitstud.io/docs/4-advanced-usage/cache',
  '/docs/common-issues': 'https://docs.commitstud.io/docs/6-troubleshooting/common-issues',
  '/docs/nodejs-deprecation-warnings': 'https://docs.commitstud.io/docs/6-troubleshooting/common-issues',
  '/docs/github-api-rate-limits': 'https://docs.commitstud.io/docs/6-troubleshooting/common-issues',
  '/docs/git-operation-errors': 'https://docs.commitstud.io/docs/6-troubleshooting/common-issues',
  '/docs/command-line-reference': 'https://docs.commitstud.io/docs/5-reference/commands',
  '/docs/api-reference': 'https://docs.commitstud.io/docs/5-reference/api',
  '/docs/configuration-options': 'https://docs.commitstud.io/docs/3-configuration/options',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle specific doc redirects
  if (DOCS_REDIRECT_MAP[pathname]) {
    return NextResponse.redirect(DOCS_REDIRECT_MAP[pathname], { 
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    })
  }

  // Handle generic /docs/ paths - redirect to the docs site root
  if (pathname.startsWith('/docs/')) {
    return NextResponse.redirect('https://docs.commitstud.io', { 
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/docs/:path*',
} 