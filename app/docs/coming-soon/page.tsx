"use client"

import { AlertCircle } from "lucide-react"
import { DocHeading, QuickNav, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function ComingSoonPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);
  
  return (
    <div className="space-y-6">
      <DocHeading>Coming Soon</DocHeading>
      
      <div className="bg-muted/50 border rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground mb-2">
          This page is under construction
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto mb-6">
          We're working hard to bring you comprehensive documentation for every feature of CommitStudio.
          This page will be available soon.
        </p>
      </div>
      
      <QuickNav
        sections={[
          {
            title: "Available Documentation",
            links: [
              { href: "/docs", label: "Introduction" },
              { href: "/docs/prerequisites", label: "Prerequisites" },
              { href: "/docs/installation", label: "Installation" },
              { href: "/docs/quick-start", label: "Quick Start Guide" },
            ],
          },
          {
            title: "Usage Guides",
            links: [
              { href: "/docs/standard-mode", label: "Standard Mode" },
              { href: "/docs/yolo-mode", label: "YOLO Mode" },
              { href: "/docs/common-issues", label: "Troubleshooting" },
            ],
          },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 