"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function YoloModePage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>YOLO Mode</DocHeading>
      
      <DocSection>
        <DocParagraph>
          YOLO Mode is a powerful feature of CommitStudio that automatically rewrites your commit messages 
          using AI to make them more descriptive, professional, and useful. This mode is perfect for developers 
          who want to maintain a high-quality commit history without spending time crafting detailed messages.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="What YOLO Mode Does">
        <DocParagraph>
          When running in YOLO Mode, CommitStudio:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Analyzes your git commits and their changes</>,
            <>Extracts the code diff and understands what was modified</>,
            <>Uses AI to generate a detailed, descriptive commit message that explains:</>,
            <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
              <li>What was changed</li>
              <li>Why the change was made (based on code context)</li>
              <li>The potential impact of the change</li>
            </ul>,
            <>Rewrites your commit message with the AI-generated content</>,
            <>Preserves any issue references or co-author tags</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Running YOLO Mode">
        <DocParagraph>
          To run CommitStudio in YOLO Mode:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio --yolo
        </div>
        
        <DocParagraph>
          Just like Standard Mode, you can specify which commits to process:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --yolo --days 7</code>: Rewrite commits from the last 7 days</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --yolo --branch feature/my-branch</code>: Rewrite commits from a specific branch</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --yolo --author johndoe</code>: Rewrite commits by a specific author</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Example of Transformation">
        <DocParagraph>
          YOLO Mode transforms brief commit messages into detailed ones:
        </DocParagraph>
        
        <div className="grid gap-4 my-4">
          <div className="border p-4 rounded-md">
            <p className="font-medium text-foreground mb-2">Original commit message:</p>
            <p className="bg-muted p-3 rounded-md font-mono text-sm">fix login bug</p>
          </div>
          <div className="border border-green-500/20 p-4 rounded-md bg-green-500/5">
            <p className="font-medium text-foreground mb-2">AI-rewritten message:</p>
            <div className="bg-muted p-3 rounded-md font-mono text-sm whitespace-pre-line">
              Fix authentication error in login form
              
              - Resolved issue where login attempts with valid credentials were failing
              - Added proper error handling for network timeouts
              - Implemented session token validation
              - Fixed incorrect error messages displayed to users
              
              This addresses issue #123 reported by the QA team.
            </div>
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Benefits of YOLO Mode">
        <DocList
          items={[
            <>Makes your git history more useful for future reference</>,
            <>Saves time on writing detailed commit messages</>,
            <>Improves team communication by clearly explaining changes</>,
            <>Helps with code reviews by providing better context</>,
            <>Makes it easier to track down bugs by providing more detailed change logs</>,
            <>Maintains consistent commit message quality across the team</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Important Notes">
        <DocParagraph>
          When using YOLO Mode, keep in mind:
        </DocParagraph>
        
        <DocList
          items={[
            <>YOLO Mode rewrites your actual git history, so it's best to use it before pushing changes</>,
            <>It will preserve issue numbers (#123) and co-author tags</>,
            <>For repos with commit signing enabled, you may need to re-sign commits after using YOLO Mode</>,
            <>If you've already pushed commits, use with caution as it requires force pushing</>,
          ]}
        />
      </DocSection>
      
      <div className="mt-12 pt-6 border-t border-border">
        <NextSteps
          links={[
            { href: "/docs/standard-mode", label: "Standard Mode" },
            { href: "/docs/configuration-options", label: "Configuration Options" },
            { href: "/docs/git-operation-errors", label: "Git Operation Errors" },
          ]}
        />
         </div>
    </div>
  )
} 