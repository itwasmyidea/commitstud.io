"use client"

import { DocHeading, DocSection, DocParagraph, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function PrerequisitesPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);
  
  return (
    <div className="space-y-6">
      <DocHeading>Prerequisites</DocHeading>
      
      <DocSection>
        <DocParagraph>
          Before using CommitStudio, you'll need the following prerequisites:
        </DocParagraph>
        
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Node.js</strong>: Version 18.0.0 or higher
            <p className="mt-1 text-sm text-muted-foreground">
              CommitStudio is built on Node.js, so you'll need a recent version to run it.
            </p>
          </li>
          <li>
            <strong className="text-foreground">Git</strong>: Installed and configured on your system
            <p className="mt-1 text-sm text-muted-foreground">
              CommitStudio works with your git repositories, so git must be installed and available in your PATH.
            </p>
          </li>
          <li>
            <strong className="text-foreground">GitHub Repository</strong>: A repository on GitHub that you want to analyze
            <p className="mt-1 text-sm text-muted-foreground">
              CommitStudio integrates with GitHub, so you'll need a repository to analyze.
            </p>
          </li>
          <li>
            <strong className="text-foreground">API Credentials</strong>:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                A GitHub personal access token with 'repo' scope
                <p className="mt-1 text-sm text-muted-foreground">
                  This allows CommitStudio to read your repositories and post comments.
                </p>
              </li>
              <li>
                An OpenAI API key
                <p className="mt-1 text-sm text-muted-foreground">
                  This is used for AI-powered analysis of your code changes.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </DocSection>
      
      <NextSteps
        title="Next Steps"
        description="After ensuring you have all prerequisites, you can proceed to:"
        links={[
          { href: "/docs/installation", label: "Installation Guide" },
          { href: "/docs/authentication", label: "Authentication Setup" },
          { href: "/docs/quick-start", label: "Quick Start Guide" },
        ]}
      />
      
      </div>
  )
} 