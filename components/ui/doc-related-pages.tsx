"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface RelatedPage {
  title: string
  href: string
  description?: string
}

interface DocRelatedPagesProps {
  title?: string
  pages: RelatedPage[]
}

export default function DocRelatedPages({ 
  title = "Related Pages",
  pages 
}: DocRelatedPagesProps) {
  if (!pages.length) return null;
  
  return (
    <section className="space-y-4 mt-10 mb-6">
      <div className="bg-muted/50 border rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">{title}</h3>
        <div className="grid gap-3">
          {pages.map((page, index) => (
            <Button 
              key={index}
              variant="ghost" 
              className="w-full justify-between group hover:bg-muted"
              asChild
            >
              <Link href={page.href}>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{page.title}</span>
                  {page.description && (
                    <span className="text-sm text-muted-foreground">{page.description}</span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
} 