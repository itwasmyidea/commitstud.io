"use client"

import React, { useState } from "react"
import { Inter as FontSans } from "next/font/google"
import Link from "next/link"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import "./mobile.css"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeToggle from "@/components/ui/theme-toggle"
import { usePathname } from "next/navigation"
import { Menu, X, Github } from "lucide-react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

interface DocsLayoutProps {
  children: React.ReactNode
}

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Prerequisites", href: "/docs/prerequisites" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Authentication", href: "/docs/authentication" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Usage Modes",
    items: [
      { title: "Standard Mode", href: "/docs/standard-mode" },
      { title: "YOLO Mode", href: "/docs/yolo-mode" },
    ],
  },
  {
    title: "Configuration",
    items: [
      { title: "Configuration Options", href: "/docs/configuration-options" },
      { title: "Environment Variables", href: "/docs/environment-variables" },
      { title: "Credentials Management", href: "/docs/credentials-management" },
      { title: "Repository Detection", href: "/docs/repository-detection" },
      { title: "Caching", href: "/docs/caching" },
      { title: "GitHub OAuth", href: "/docs/github-oauth-configuration" },
      { title: "CI/CD Integration", href: "/docs/using-with-cicd" },
      { title: "Filtering Commits", href: "/docs/filtering-commits" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Cache Management", href: "/docs/cache-management" },
      { title: "Common Issues", href: "/docs/common-issues" },
      { title: "Node.js Deprecation Warnings", href: "/docs/nodejs-deprecation-warnings" },
      { title: "GitHub API Rate Limits", href: "/docs/github-api-rate-limits" },
      { title: "Git Operation Errors", href: "/docs/git-operation-errors" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "Command Line Reference", href: "/docs/command-line-reference" },
      { title: "API Reference", href: "/docs/api-reference" },
    ],
  },
]

// Helper function to find the next and previous pages
export function getPageNavigation(currentPath: string) {
  // Flatten all sidebar items into a single array
  const allPages = sidebarItems.flatMap(section => section.items);
  
  // Add the Introduction page at the beginning
  const allPagesWithIntro = [{ title: "Introduction", href: "/docs" }, ...allPages];
  
  // Find the current page index
  const currentIndex = allPagesWithIntro.findIndex(page => page.href === currentPath);
  
  // If the page is not found, return empty
  if (currentIndex === -1) return { prev: undefined, next: undefined };
  
  // Get the previous and next pages
  const prev = currentIndex > 0 
    ? { href: allPagesWithIntro[currentIndex - 1].href, label: allPagesWithIntro[currentIndex - 1].title }
    : undefined;
  
  const next = currentIndex < allPagesWithIntro.length - 1 
    ? { href: allPagesWithIntro[currentIndex + 1].href, label: allPagesWithIntro[currentIndex + 1].title }
    : undefined;
  
  return { prev, next };
}

export default function DocsClientLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
            <div className="flex items-center gap-2">
              {/* Mobile menu toggle */}
              <button 
                onClick={toggleSidebar}
                className="md:hidden p-2 -ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <Link href="/" className="flex items-center gap-2">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 2351.15 2278.29" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-foreground"
                >
                  <path d="M1264.45,2.11c209.5-2.31,419.23-3.55,628.71.78l.87,34c-74.86,108.14-129.98,240.2-204.43,347.11-41.89,60.15-84.16,35.34-151.17,38.1-227.92,9.37-500.26-15.97-718.93,11.1-317.11,39.26-523.46,456.05-242.48,669.56,136.92,104.04,324.94,71.08,485.65,76.74,13.98,2.05,25.82,20.37,23.62,33.84l-216.37,368.03c-23.71,41.63-83.67,32.81-126.14,30.58C-16.46,1572-255.25,677.44,316.66,211.54,617.37-33.41,899.8,6.13,1264.45,2.11Z"  />
                  <path d="M1545.17,666.77c18.95-5.56,119.38-2.93,144.82-1.04,291.79,21.63,542.36,239.63,626.09,514.91,138.26,454.56-147.92,912.38-586.73,1049.26-189.2,59.02-428.65,45.24-628.47,47.48-191.88,2.15-384.24.21-576.05-3.09-19.94-12.55-20.92-33.65-10.38-53.43,81.2-124.79,147.15-260.67,237.49-378.95,36.49-6.37,73.92-1.26,110.69-2.87,208.75-9.14,427.8,8,632.97-5.13,290.7-18.59,505.87-331.87,347.5-596.7-111.46-186.38-313.53-170.72-504.56-165.99-34.46-6.4,3.84-62.31,12.6-79.35,42.87-83.51,97.48-178.87,146.01-259.56,8.98-14.93,33.59-61.32,48.01-65.55Z" />
                </svg>
                <span className="text-lg font-medium text-foreground hidden sm:inline-flex">
                  Commit<span className="font-semibold">Stud</span>.<span className="font-semibold">io</span>
                  <span className="ml-2 text-sm font-normal text-muted-foreground">Documentation</span>
                </span>
                <span className="text-lg font-medium text-foreground sm:hidden">
                  Docs
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm" className="hidden sm:flex">
                <Link href="https://github.com/itwasmyidea" target="_blank">
                  <Github className="w-4 h-4 mr-1" />
                  <span>GitHub</span>
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/">
                  <span className="hidden sm:inline">Back to Site</span>
                  <span className="sm:hidden">Home</span>
                </Link>
              </Button>
            </div>
          </header>
          <div className="grid flex-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={closeSidebar}
                aria-hidden="true"
              />
            )}
            {/* Sidebar */}
            <aside 
              className={cn(
                "border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[100dvh] fixed top-16 bottom-0 left-0 z-40 w-[250px] transform transition-transform duration-300 ease-in-out md:static md:z-0 md:transform-none",
                sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
              )}
            >
              <div className="h-16 border-b hidden md:flex items-center px-6">
                <h4 className="font-medium">Documentation</h4>
              </div>
              <ScrollArea className="h-[calc(100dvh-4rem)]">
                <div className="flex flex-col p-4">
                  <Link 
                    href="/docs" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary rounded px-2 py-1 mb-6",
                      pathname === "/docs"
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    )}
                    onClick={closeSidebar}
                  >
                    Introduction
                  </Link>
                  
                  {sidebarItems.map((section, index) => (
                    <div key={section.title} className="space-y-1 mb-8">
                      <h4 className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">
                        {section.title}
                      </h4>
                      <div className="flex flex-col space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "text-sm transition-colors hover:text-primary rounded px-2 py-1",
                              pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "text-foreground hover:bg-muted"
                            )}
                            onClick={closeSidebar}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </aside>
            <main className="relative w-full">
              <div className="prose prose-slate dark:prose-invert max-w-none p-4 sm:p-6 lg:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
} 