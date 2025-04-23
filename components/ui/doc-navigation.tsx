"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocNavigationProps {
  prevDoc?: {
    href: string
    title: string
  }
  nextDoc?: {
    href: string
    title: string
  }
}

export default function DocNavigation({ prevDoc, nextDoc }: DocNavigationProps) {
  return (
    <nav className="flex items-center justify-between mt-12 pt-6 border-t">
      {prevDoc ? (
        <Button variant="ghost" asChild>
          <Link href={prevDoc.href} className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            <span>{prevDoc.title}</span>
          </Link>
        </Button>
      ) : (
        <div /> // Empty div for spacing
      )}
      
      {nextDoc && (
        <Button variant="ghost" asChild>
          <Link href={nextDoc.href} className="flex items-center gap-2">
            <span>{nextDoc.title}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      )}
    </nav>
  )
} 