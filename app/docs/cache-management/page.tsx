"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function CacheManagementPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Cache Management</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio caches various data to improve performance and reduce API calls. 
          This page explains how to manage the cache, clear it when necessary, and configure caching behavior.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Cache Location">
        <DocParagraph>
          By default, CommitStudio stores cache files in:
        </DocParagraph>
        
        <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong className="text-foreground">macOS:</strong> <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">~/Library/Caches/commitstudio</code>
          </li>
          <li>
            <strong className="text-foreground">Linux:</strong> <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">~/.cache/commitstudio</code>
          </li>
          <li>
            <strong className="text-foreground">Windows:</strong> <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">%LOCALAPPDATA%\commitstudio\Cache</code>
          </li>
        </ul>
        
        <DocParagraph>
          You can override this location using the <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">COMMITSTUDIO_CACHE_DIR</code> environment variable.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Cache Structure">
        <DocParagraph>
          The cache directory contains several subdirectories:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api/</code>: Response data from API calls</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commits/</code>: Git commit metadata and diff content</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">repositories/</code>: Repository configuration and metadata</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">analyses/</code>: Results of previous commit analyses</>,
          ]}
        />
        
        <DocParagraph>
          Each cached item has a TTL (time to live) after which it's considered stale and will be refreshed.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Clearing the Cache">
        <DocParagraph>
          You can clear the cache using the CLI command:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# Clear the entire cache
commitstudio cache clear

# Clear specific cache types
commitstudio cache clear --type=api
commitstudio cache clear --type=commits
commitstudio cache clear --type=repositories`}
        </pre>
        
        <DocParagraph>
          You can also clear the cache for a specific repository:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`commitstudio cache clear --repo=owner/repository`}
        </pre>
      </DocSection>
      
      <DocSection title="Cache Status">
        <DocParagraph>
          To view the current cache status and usage:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`commitstudio cache status`}
        </pre>
        
        <DocParagraph>
          This will show information such as:
        </DocParagraph>
        
        <DocList
          items={[
            <>Cache location</>,
            <>Total size of cached data</>,
            <>Number of cached items by type</>,
            <>Cache age (newest and oldest items)</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Configuring Cache Behavior">
        <DocParagraph>
          You can configure cache behavior in your <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">.commitstudiorc</code> file:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`{
  "cache": {
    "enabled": true,
    "ttl": {
      "api": 3600,        // seconds (1 hour)
      "commits": 86400,   // seconds (1 day)
      "repositories": 604800  // seconds (1 week)
    },
    "maxSize": "1GB",
    "cleanupOnExit": false
  }
}`}
        </pre>
        
        <DocParagraph>
          Configuration options:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">enabled</code>: Enable or disable caching entirely</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">ttl</code>: Time-to-live in seconds for different cache types</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">maxSize</code>: Maximum size for the cache directory</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">cleanupOnExit</code>: Whether to clean up temporary files on exit</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Disabling Cache">
        <DocParagraph>
          You can temporarily disable the cache for a single command:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`commitstudio --no-cache`}
        </pre>
        
        <DocParagraph>
          Or disable it permanently in your configuration:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# In .commitstudiorc
{
  "cache": {
    "enabled": false
  }
}`}
        </pre>
      </DocSection>
      
      <DocSection title="Cache Compression">
        <DocParagraph>
          By default, CommitStudio compresses cache data to save disk space. 
          You can control this behavior:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`{
  "cache": {
    "compression": {
      "enabled": true,
      "level": "normal"  // "off", "low", "normal", "high"
    }
  }
}`}
        </pre>
        
        <DocParagraph>
          Higher compression levels save more disk space but may slightly impact performance.
        </DocParagraph>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/caching", label: "Caching Overview" },
          { href: "/docs/environment-variables", label: "Environment Variables" },
          { href: "/docs/configuration-options", label: "Configuration Options" },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 