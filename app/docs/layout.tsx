import React from "react"
import { Metadata } from "next"
import DocsClientLayout from "./client-layout"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "CommitStud.io Docs",
  description: "Documentation for CommitStudio - AI-powered Git commit reviews",
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <DocsClientLayout>{children}</DocsClientLayout>
      <Analytics />
    </>
  )
} 