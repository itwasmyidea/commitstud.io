"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function QuickStartPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);
  
  return (
    <div className="space-y-6">
      <DocHeading>Quick Start Guide</DocHeading>
      
      <DocSection>
        <DocParagraph>
          This guide will help you get started with CommitStudio in just a few minutes.
          We'll cover the basic workflow for analyzing your git commits and receiving AI-powered feedback.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Installation">
        <DocParagraph>
          First, install CommitStudio globally:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          npm install -g commitstudio
        </div>
      </DocSection>
      
      <DocSection title="Basic Usage">
        <DocParagraph>
          Navigate to your git repository directory and run CommitStudio:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          cd /path/to/your/repository
          commitstudio
        </div>
        
        <DocParagraph>
          On first run, CommitStudio will:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Prompt you for GitHub and OpenAI credentials if not already configured</>,
            <>Detect your git repository</>,
            <>Ask you which commits to analyze (or use default settings)</>,
            <>Analyze the code changes in your commits</>,
            <>Provide AI-generated feedback on your code</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Common Options">
        <DocParagraph>
          Here are some common command-line options:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--days N</code>: Analyze commits from the last N days</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--branch name</code>: Analyze commits from a specific branch</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--pr number</code>: Analyze commits from a specific pull request</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--yolo</code>: Run in YOLO mode to rewrite commit messages</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--help</code>: Show all available options</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Example Workflow">
        <DocParagraph>
          Here's a typical workflow:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Make changes to your code and commit them</>,
            <>Run <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --days 1</code> to analyze today's commits</>,
            <>Review the AI-generated feedback in your terminal</>,
            <>Optionally, let CommitStudio post the feedback as GitHub comments</>,
          ]}
        />
        
        <DocParagraph>
          For YOLO mode (AI-enhanced commit messages):
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio --yolo --days 1
        </div>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/standard-mode", label: "Standard Mode" },
          { href: "/docs/yolo-mode", label: "YOLO Mode" },
          { href: "/docs/configuration-options", label: "Configuration Options" },
        ]}
      />
      
      </div>
  )
} 