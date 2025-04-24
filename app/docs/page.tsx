"use client"

import { DocHeading, DocSection, DocParagraph, DocList, QuickNav, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "./client-layout"
import { usePathname } from "next/navigation"


export default function DocsPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);
  
  return (
    <div className="space-y-6">
      <DocHeading>CommitStudio Documentation</DocHeading>
      
      <DocSection title="Overview" id="overview">
        <DocParagraph>
          CommitStudio is an AI-powered tool that automates code reviews by analyzing git diffs and providing insightful comments on your commits. 
          It integrates with GitHub to post these comments directly on your commits or pull requests, allowing you to receive quality feedback 
          with minimal human intervention.
        </DocParagraph>
        <DocParagraph>
          Additionally, it offers "YOLO mode" which can rewrite your commit messages to make them more descriptive and professional using AI, 
          making your commit history more meaningful and useful.
        </DocParagraph>
      </DocSection>

      <QuickNav
        sections={[
          {
            title: "Getting Started",
            links: [
              { href: "/docs/installation", label: "Installation" },
              { href: "/docs/prerequisites", label: "Prerequisites" },
              { href: "/docs/authentication", label: "Authentication" },
              { href: "/docs/quick-start", label: "Quick Start" },
            ],
          },
          {
            title: "Usage",
            links: [
              { href: "/docs/standard-mode", label: "Standard Mode" },
              { href: "/docs/yolo-mode", label: "YOLO Mode" },
              { href: "/docs/configuration-options", label: "Configuration Options" },
              { href: "/docs/common-issues", label: "Troubleshooting" },
            ],
          },
        ]}
      />

      <DocSection title="Key Features" id="key-features">
        <DocList
          items={[
            <><strong className="text-foreground">Auto-detect Repository</strong>: Works with local git repositories, automatically connects to GitHub</>,
            <><strong className="text-foreground">Smart Analysis</strong>: Uses OpenAI's GPT-4.1-mini model to analyze git diffs and generate insightful comments</>,
            <><strong className="text-foreground">GitHub Integration</strong>: Seamlessly post comments to GitHub pull requests</>,
            <><strong className="text-foreground">YOLO Mode</strong>: Rewrite your commit messages with AI to be more descriptive and professional</>,
            <><strong className="text-foreground">Caching</strong>: Smart caching to avoid repeated analyses</>,
            <><strong className="text-foreground">Interactive CLI</strong>: Easy-to-use command line interface with helpful prompts</>,
            <><strong className="text-foreground">Secure Credentials Management</strong>: Securely handles GitHub and OpenAI API keys</>,
            <><strong className="text-foreground">Parallel Processing</strong>: Efficiently processes multiple commits at once</>,
            <><strong className="text-foreground">Flexible Options</strong>: Analyze specific commits, branches, or time periods</>,
          ]}
        />
      </DocSection>

      <DocSection title="How It Works" id="how-it-works">
        <DocParagraph>
          CommitStudio uses a series of steps to provide AI-powered code reviews:
        </DocParagraph>
        <DocList
          type="number"
          items={[
            <><strong className="text-foreground">Repository Detection</strong>: The tool detects your git repository and connects to GitHub</>,
            <><strong className="text-foreground">Commit Fetching</strong>: It fetches all commits or uses filters you specify</>,
            <><strong className="text-foreground">Diff Analysis</strong>: For each commit, it gets the diff using git</>,
            <><strong className="text-foreground">AI Processing</strong>: The diff is sent to OpenAI's API for analysis</>,
            <><strong className="text-foreground">Result Formatting</strong>: Results are formatted into structured comments</>,
            <><strong className="text-foreground">GitHub Integration</strong>: Comments are posted to GitHub using the GitHub API</>,
            <><strong className="text-foreground">Caching</strong>: Processed commits are cached to avoid duplication</>,
          ]}
        />
        <DocParagraph>
          In YOLO mode, it follows a similar process but instead of posting comments, it rewrites your commit messages to be more descriptive.
        </DocParagraph>
      </DocSection>
      
      
      <div className="mt-12 pt-6 border-t border-border">
        <DocPrevNext prev={prev} next={next} />
      </div>
</div>
  )
} 