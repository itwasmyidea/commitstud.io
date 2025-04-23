"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function CommandLineReferencePage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Command Line Reference</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio provides a comprehensive command-line interface (CLI) for analyzing git commits, 
          configuring settings, and managing your workflow. This page documents all available commands, 
          options, and examples.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Global Options">
        <DocParagraph>
          These options can be used with any command:
        </DocParagraph>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 font-medium text-foreground">Option</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Description</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--help, -h</code></td>
                <td className="py-2 px-4">Show help information</td>
                <td className="py-2 px-4">-</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--version, -v</code></td>
                <td className="py-2 px-4">Show version information</td>
                <td className="py-2 px-4">-</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--config &lt;path&gt;</code></td>
                <td className="py-2 px-4">Path to config file</td>
                <td className="py-2 px-4">.commitstudiorc</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--verbose</code></td>
                <td className="py-2 px-4">Enable verbose output</td>
                <td className="py-2 px-4">false</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--no-color</code></td>
                <td className="py-2 px-4">Disable colored output</td>
                <td className="py-2 px-4">false</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--log-level &lt;level&gt;</code></td>
                <td className="py-2 px-4">Set log level (debug, info, warn, error)</td>
                <td className="py-2 px-4">info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Main Commands">
        <DocParagraph>
          CommitStudio's primary commands:
        </DocParagraph>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 font-medium text-foreground">Command</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio</code></td>
                <td className="py-2 px-4">Run in standard mode with default settings</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio analyze</code></td>
                <td className="py-2 px-4">Analyze commits explicitly</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio yolo</code></td>
                <td className="py-2 px-4">Run in YOLO mode</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio config</code></td>
                <td className="py-2 px-4">Manage configuration settings</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio auth</code></td>
                <td className="py-2 px-4">Manage authentication</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio cache</code></td>
                <td className="py-2 px-4">Manage cache</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Commit Selection Options">
        <DocParagraph>
          Options for selecting which commits to analyze:
        </DocParagraph>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 font-medium text-foreground">Option</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Description</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--days &lt;n&gt;</code></td>
                <td className="py-2 px-4">Commits from the last n days</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--days 7</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--hours &lt;n&gt;</code></td>
                <td className="py-2 px-4">Commits from the last n hours</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--hours 24</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--branch &lt;name&gt;</code></td>
                <td className="py-2 px-4">Commits on specific branch</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--branch feature/new</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--pr &lt;number&gt;</code></td>
                <td className="py-2 px-4">Commits in a pull request</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--pr 123</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--author &lt;name&gt;</code></td>
                <td className="py-2 px-4">Commits by author</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--author "John Doe"</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--since &lt;date&gt;</code></td>
                <td className="py-2 px-4">Commits since date</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--since 2023-01-01</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--until &lt;date&gt;</code></td>
                <td className="py-2 px-4">Commits until date</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--until 2023-12-31</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--commit &lt;hash&gt;</code></td>
                <td className="py-2 px-4">Specific commit</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--commit abc123</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--limit &lt;n&gt;</code></td>
                <td className="py-2 px-4">Limit number of commits</td>
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--limit 10</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Output Options">
        <DocParagraph>
          Options for controlling output:
        </DocParagraph>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 font-medium text-foreground">Option</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--format &lt;format&gt;</code></td>
                <td className="py-2 px-4">Output format (text, json, markdown)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--output &lt;file&gt;</code></td>
                <td className="py-2 px-4">Output to file instead of stdout</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--quiet</code></td>
                <td className="py-2 px-4">Suppress all non-error output</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--post-comments</code></td>
                <td className="py-2 px-4">Post comments to GitHub</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Example Commands">
        <DocParagraph>
          Here are some common usage examples:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# Analyze commits from the last 7 days
commitstudio --days 7

# Analyze commits on a feature branch
commitstudio --branch feature/new-ui

# Analyze a specific pull request and post comments
commitstudio --pr 123 --post-comments

# Analyze commits with specific focus areas
commitstudio --days 3 --focus security,performance

# Export analysis as JSON to a file
commitstudio --days 5 --format json --output analysis.json

# Run in YOLO mode (live feed of commit reviews)
commitstudio yolo

# View and edit configuration
commitstudio config view
commitstudio config set api.model gpt-4`}
        </pre>
      </DocSection>
      
      <DocSection title="Cache Commands">
        <DocParagraph>
          Commands for managing the cache:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# View cache status
commitstudio cache status

# Clear the entire cache
commitstudio cache clear

# Clear a specific cache type
commitstudio cache clear --type=api`}
        </pre>
      </DocSection>
      
      <DocSection title="Authentication Commands">
        <DocParagraph>
          Commands for managing authentication:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# Log in to CommitStudio
commitstudio auth login

# View current authentication status
commitstudio auth status

# Log out
commitstudio auth logout

# Set up GitHub authentication
commitstudio auth github`}
        </pre>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/configuration-options", label: "Configuration Options" },
          { href: "/docs/filtering-commits", label: "Filtering Commits" },
          { href: "/docs/api-reference", label: "API Reference" },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 