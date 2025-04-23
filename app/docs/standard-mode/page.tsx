"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function StandardModePage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Standard Mode</DocHeading>
      
      <DocSection>
        <DocParagraph>
          Standard Mode is CommitStudio's primary workflow, which analyzes your git commits 
          and provides AI-powered code reviews as comments. This mode helps you identify potential issues, 
          suggest improvements, and learn best practices without manual code review.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="How It Works">
        <DocParagraph>
          In Standard Mode, CommitStudio:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Fetches the commits you want to analyze based on your criteria (date range, branch, PR, etc.)</>,
            <>Extracts the diff (code changes) for each commit</>,
            <>Sends the diff to OpenAI's API for analysis</>,
            <>Processes the AI feedback into structured comments</>,
            <>Displays the feedback in your terminal or posts it to GitHub, based on your preference</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Running Standard Mode">
        <DocParagraph>
          To run CommitStudio in Standard Mode (the default):
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          You can specify which commits to analyze:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --days 7</code>: Analyze commits from the last 7 days</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --branch feature/my-branch</code>: Analyze commits from a specific branch</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --pr 123</code>: Analyze commits from pull request #123</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --author johndoe</code>: Analyze commits by a specific author</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Example Output">
        <DocParagraph>
          CommitStudio generates detailed analysis of each commit, including:
        </DocParagraph>
        
        <DocList
          items={[
            <>Potential bugs or issues in the code</>,
            <>Suggestions for improvements or optimizations</>,
            <>Code style recommendations</>,
            <>Security considerations</>,
            <>Documentation needs</>,
            <>Best practices for the specific language or framework</>,
          ]}
        />
        
        <DocParagraph>
          The feedback appears in your terminal and can optionally be posted as GitHub comments.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="GitHub Integration">
        <DocParagraph>
          To post the AI feedback as GitHub comments:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio --post-comments
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          This will post comments directly to your GitHub commits or pull requests, 
          making the feedback visible to your team.
        </DocParagraph>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/yolo-mode", label: "YOLO Mode" },
          { href: "/docs/configuration-options", label: "Configuration Options" },
          { href: "/docs/filtering-commits", label: "Filtering Commits" },
        ]}
      />
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 