"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function RepositoryDetectionPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Repository Detection</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio automatically detects and works with Git repositories. This page explains
          how repository detection works and how to customize it.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="How Repository Detection Works">
        <DocParagraph>
          When you run CommitStudio, it performs the following steps to detect and work with your Git repository:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Checks if the current directory is a Git repository</>,
            <>If not, searches parent directories for a Git repository</>,
            <>Once found, determines the remote URL to identify the GitHub repository</>,
            <>Connects to GitHub using your authentication credentials</>,
            <>Identifies the repository owner and name for API operations</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Specifying a Repository Path">
        <DocParagraph>
          You can specify a repository path explicitly if needed:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio --path /path/to/repository
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          This is useful when:
        </DocParagraph>
        
        <DocList
          items={[
            <>You want to analyze a repository different from your current directory</>,
            <>You're running CommitStudio from a script or automation tool</>,
            <>The automatic repository detection isn't finding the correct repository</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Remote Repository Configuration">
        <DocParagraph>
          CommitStudio works with repositories that have a GitHub remote configured. It looks
          for remotes in the following order:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>A remote named "origin"</>,
            <>Any remote that points to github.com</>,
            <>The first available remote (if no GitHub remote is found)</>,
          ]}
        />
        
        <DocParagraph>
          The remote URL must be in one of these formats:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">https://github.com/username/repository.git</code></>,
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">git@github.com:username/repository.git</code></>,
          ]}
        />
      </DocSection>
      
      <DocSection title="GitHub Enterprise Support">
        <DocParagraph>
          CommitStudio also supports GitHub Enterprise instances. To use with GitHub Enterprise:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Configure your repository with a remote pointing to your GitHub Enterprise instance</>,
            <>Set the <code className="bg-muted px-1 py-0.5 rounded text-sm">COMMITSTUDIO_GITHUB_API_URL</code> environment variable to your GitHub Enterprise API URL</>,
          ]}
        />
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          export COMMITSTUDIO_GITHUB_API_URL=https://github.mycompany.com/api/v3
          <DocPrevNext prev={prev} next={next} />
        </div>
      </DocSection>
      
      <DocSection title="Common Issues">
        <DocParagraph>
          If you encounter repository detection issues, check the following:
        </DocParagraph>
        
        <DocList
          items={[
            <>Verify that the directory is a valid Git repository (<code className="bg-muted px-1 py-0.5 rounded text-sm">git status</code> works)</>,
            <>Ensure there's a remote configured (<code className="bg-muted px-1 py-0.5 rounded text-sm">git remote -v</code>)</>,
            <>Check that the remote URL points to GitHub</>,
            <>Verify your GitHub authentication is set up correctly</>,
            <>If using GitHub Enterprise, ensure the API URL is correctly configured</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/filtering-commits", label: "Filtering Commits" },
          { href: "/docs/github-oauth-configuration", label: "GitHub OAuth Configuration" },
          { href: "/docs/common-issues", label: "Common Issues" },
        ]}
      />
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 