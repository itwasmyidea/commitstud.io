"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function CommonIssuesPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Common Issues</DocHeading>
      
      <DocSection>
        <DocParagraph>
          This page covers common issues you might encounter while using CommitStudio and provides
          solutions to help you resolve them quickly.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Authentication Issues">
        <h3 className="text-md font-medium mb-2 mt-4">GitHub Authentication Errors</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
          <p className="font-medium text-foreground mb-1">Error: "GitHub authentication failed. Please check your token."</p>
          <DocList
            items={[
              <>Ensure your GitHub token has the 'repo' scope</>,
              <>Check if your token has expired (GitHub tokens can have expiration dates)</>,
              <>Try generating a new token at <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Personal Access Tokens</a></>,
              <>Run <code className="bg-muted px-1 py-0.5 rounded text-sm">commitstudio reset</code> and reconfigure with a new token</>,
            ]}
          />
          </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">OpenAI API Errors</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="font-medium text-foreground mb-1">Error: "OpenAI API request failed."</p>
          <DocList
            items={[
              <>Verify your OpenAI API key is valid and has not expired</>,
              <>Check if you have sufficient credits in your OpenAI account</>,
              <>Ensure you don't have any billing issues with your OpenAI account</>,
              <>Try setting a different model using <code className="bg-muted px-1 py-0.5 rounded text-sm">COMMITSTUDIO_MODEL</code> environment variable</>,
            ]}
          />
          </div>
      </DocSection>
      
      <DocSection title="Repository Issues">
        <h3 className="text-md font-medium mb-2 mt-4">Repository Detection Failures</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
          <p className="font-medium text-foreground mb-1">Error: "Not a git repository."</p>
          <DocList
            items={[
              <>Ensure you're running CommitStudio from within a valid git repository</>,
              <>Check if <code className="bg-muted px-1 py-0.5 rounded text-sm">git status</code> works in the current directory</>,
              <>Use <code className="bg-muted px-1 py-0.5 rounded text-sm">--path</code> to explicitly specify your repository path</>,
            ]}
          />
          </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">GitHub Repository Connection Issues</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="font-medium text-foreground mb-1">Error: "Could not connect to GitHub repository."</p>
          <DocList
            items={[
              <>Verify that your repository has a remote pointing to GitHub</>,
              <>Check if you have access to the GitHub repository</>,
              <>Ensure your GitHub token has access to the repository</>,
              <>For private repositories, confirm your token has the necessary permissions</>,
            ]}
          />
          </div>
      </DocSection>
      
      <DocSection title="Analysis Issues">
        <h3 className="text-md font-medium mb-2 mt-4">Missing or Incomplete Analysis</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
          <p className="font-medium text-foreground mb-1">Issue: "No analysis results for some commits."</p>
          <DocList
            items={[
              <>Check if the commits have very large diffs that exceed token limits</>,
              <>Try using <code className="bg-muted px-1 py-0.5 rounded text-sm">--no-cache</code> to force reanalysis</>,
              <>For very large repositories, try analyzing fewer commits at a time</>,
              <>Verify that the OpenAI model is responding correctly</>,
            ]}
          />
          </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">Rate Limiting Issues</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="font-medium text-foreground mb-1">Error: "GitHub API rate limit exceeded."</p>
          <DocList
            items={[
              <>Wait for your rate limit to reset (usually 1 hour)</>,
              <>Use a GitHub token with higher rate limits (e.g., from a GitHub Pro account)</>,
              <>Reduce the number of commits you're analyzing at once</>,
              <>Enable caching with <code className="bg-muted px-1 py-0.5 rounded text-sm">COMMITSTUDIO_DISABLE_CACHE=false</code></>,
            ]}
          />
          </div>
      </DocSection>
      
      <DocSection title="Installation and Update Issues">
        <h3 className="text-md font-medium mb-2 mt-4">Installation Failures</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
          <p className="font-medium text-foreground mb-1">Error: "Failed to install CommitStudio."</p>
          <DocList
            items={[
              <>Ensure you have the correct Node.js version (18.0.0 or higher)</>,
              <>Try installing with admin/sudo privileges</>,
              <>Check for npm registry connection issues</>,
              <>Clear npm cache with <code className="bg-muted px-1 py-0.5 rounded text-sm">npm cache clean --force</code></>,
            ]}
          />
          </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">Update Issues</h3>
        
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="font-medium text-foreground mb-1">Issue: "Command not found after update."</p>
          <DocList
            items={[
              <>Ensure the global npm bin directory is in your PATH</>,
              <>Try reinstalling with <code className="bg-muted px-1 py-0.5 rounded text-sm">npm install -g commitstudio</code></>,
              <>Check if there are any permission issues in your npm directory</>,
            ]}
          />
          </div>
      </DocSection>
      
      <DocSection title="Getting Additional Help">
        <DocParagraph>
          If you're experiencing issues not covered here:
        </DocParagraph>
        
        <DocList
          items={[
            <>Run CommitStudio with <code className="bg-muted px-1 py-0.5 rounded text-sm">--verbose</code> for more detailed logs</>,
            <>Check the logs in your home directory: <code className="bg-muted px-1 py-0.5 rounded text-sm">~/.commitstudio/logs</code></>,
            <>Visit our <a href="https://github.com/itwasmyidea/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Issues</a> page to see if others have reported similar problems</>,
            <>Create a new issue with detailed information about the problem</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/github-api-rate-limits", label: "GitHub API Rate Limits" },
          { href: "/docs/git-operation-errors", label: "Git Operation Errors" },
          { href: "/docs/nodejs-deprecation-warnings", label: "Node.js Deprecation Warnings" },
        ]}
      />
      </div>
  )
} 