"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function CachingPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Caching</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio uses a caching system to improve performance and reduce API calls.
          This page explains how caching works and how to configure it.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="How Caching Works">
        <DocParagraph>
          CommitStudio caches the following data:
        </DocParagraph>
        
        <DocList
          items={[
            <><strong className="text-foreground">Analyzed Commits</strong>: Results of AI analysis for each commit</>,
            <><strong className="text-foreground">GitHub API Responses</strong>: Responses from GitHub API to reduce rate limiting issues</>,
            <><strong className="text-foreground">Repository Information</strong>: Basic information about repositories you've analyzed</>,
          ]}
        />
        
        <DocParagraph>
          When you run CommitStudio multiple times on the same repository, it will:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Check if a commit has already been analyzed</>,
            <>Skip analysis for cached commits, unless forced to reanalyze</>,
            <>Use cached GitHub API responses when appropriate</>,
            <>Store new analysis results in the cache for future use</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Cache Location">
        <DocParagraph>
          By default, CommitStudio stores its cache in the following locations:
        </DocParagraph>
        
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">macOS</strong>: <code className="bg-muted px-1 py-0.5 rounded text-sm">~/Library/Caches/commitstudio</code></li>
          <li><strong className="text-foreground">Linux</strong>: <code className="bg-muted px-1 py-0.5 rounded text-sm">~/.cache/commitstudio</code></li>
          <li><strong className="text-foreground">Windows</strong>: <code className="bg-muted px-1 py-0.5 rounded text-sm">%LOCALAPPDATA%\commitstudio\Cache</code></li>
        </ul>
      </DocSection>
      
      <DocSection title="Cache Configuration">
        <DocParagraph>
          You can configure caching behavior using command-line options or environment variables:
        </DocParagraph>
        
        <h3 className="text-md font-medium mb-2 mt-4">Command-line Options</h3>
        
        <DocList
          items={[
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">--no-cache</code>: Disable caching for the current run</>,
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">--clear-cache</code>: Clear the cache before running</>,
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">--cache-dir &lt;path&gt;</code>: Specify a custom cache directory</>,
          ]}
        />
        
        <h3 className="text-md font-medium mb-2 mt-4">Environment Variables</h3>
        
        <DocList
          items={[
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">COMMITSTUDIO_DISABLE_CACHE=true</code>: Disable caching</>,
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">COMMITSTUDIO_CACHE_DIR=/path/to/cache</code>: Specify a custom cache directory</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Cache Management">
        <DocParagraph>
          CommitStudio provides commands to manage the cache:
        </DocParagraph>
        
        <h3 className="text-md font-medium mb-2 mt-4">Clearing the Cache</h3>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio cache:clear
          </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">Viewing Cache Information</h3>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio cache:info
          </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">Pruning Old Cache Entries</h3>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio cache:prune
          </div>
      </DocSection>
      
      <DocSection title="When to Disable Caching">
        <DocParagraph>
          In some cases, you might want to disable caching:
        </DocParagraph>
        
        <DocList
          items={[
            <>When you want to reanalyze commits with a newer version of the AI model</>,
            <>If you suspect the cache contains incorrect or outdated information</>,
            <>When running in CI/CD environments where persistent cache isn't needed</>,
            <>When you're testing or debugging CommitStudio</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/cache-management", label: "Advanced Cache Management" },
          { href: "/docs/environment-variables", label: "Environment Variables" },
          { href: "/docs/filtering-commits", label: "Filtering Commits" },
        ]}
      />
      </div>
  )
} 