"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function ConfigurationOptionsPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Configuration Options</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio can be configured through a variety of options to customize its behavior. 
          This page documents all available configuration settings, their default values, and how to set them.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Configuration File">
        <DocParagraph>
          CommitStudio uses a configuration file named <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">.commitstudiorc</code> located in your repository root 
          or in your home directory. It can be in JSON, YAML, or JS format.
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`// .commitstudiorc.json
{
  "api": {
    "model": "gpt-4",
    "temperature": 0.7
  },
  "github": {
    "postComments": false,
    "commentStyle": "inline"
  },
  "cache": {
    "enabled": true,
    "ttl": 86400
  }
}`}
        </pre>
        
        <DocParagraph>
          You can also create a <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">.commitstudiorc.js</code> file for more complex configurations:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`// .commitstudiorc.js
module.exports = {
  api: {
    model: process.env.COMMITSTUDIO_MODEL || 'gpt-4',
    temperature: 0.7
  },
  // More configuration...
}`}
        </pre>
      </DocSection>
      
      <DocSection title="API Settings">
        <DocParagraph>
          Configure the AI model and API behavior:
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
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.model</code></td>
                <td className="py-2 px-4">AI model to use for analysis</td>
                <td className="py-2 px-4">gpt-4</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.temperature</code></td>
                <td className="py-2 px-4">Randomness of responses (0-1)</td>
                <td className="py-2 px-4">0.7</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.timeout</code></td>
                <td className="py-2 px-4">API request timeout in ms</td>
                <td className="py-2 px-4">30000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.maxTokens</code></td>
                <td className="py-2 px-4">Maximum tokens per request</td>
                <td className="py-2 px-4">4096</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.retries</code></td>
                <td className="py-2 px-4">Number of retry attempts</td>
                <td className="py-2 px-4">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Analysis Settings">
        <DocParagraph>
          Configure how code analysis works:
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
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">analysis.maxDiffSize</code></td>
                <td className="py-2 px-4">Maximum diff size to analyze (bytes)</td>
                <td className="py-2 px-4">50000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">analysis.maxDaysBack</code></td>
                <td className="py-2 px-4">Max days to look back without explicit setting</td>
                <td className="py-2 px-4">7</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">analysis.focusAreas</code></td>
                <td className="py-2 px-4">Areas to focus on in analysis</td>
                <td className="py-2 px-4">["bugs", "performance", "security"]</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">analysis.ignorePatterns</code></td>
                <td className="py-2 px-4">File patterns to ignore</td>
                <td className="py-2 px-4">["*.min.js", "vendor/**"]</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">analysis.detailLevel</code></td>
                <td className="py-2 px-4">Level of detail in analysis</td>
                <td className="py-2 px-4">"standard"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="GitHub Integration">
        <DocParagraph>
          Configure GitHub integration options:
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
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">github.postComments</code></td>
                <td className="py-2 px-4">Post comments to GitHub</td>
                <td className="py-2 px-4">false</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">github.commentStyle</code></td>
                <td className="py-2 px-4">Comment style (inline, review, summary)</td>
                <td className="py-2 px-4">"inline"</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">github.commentHeader</code></td>
                <td className="py-2 px-4">Header text for GitHub comments</td>
                <td className="py-2 px-4">"CommitStudio AI Review"</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">github.apiBaseUrl</code></td>
                <td className="py-2 px-4">GitHub API base URL (for Enterprise)</td>
                <td className="py-2 px-4">"https://api.github.com"</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">github.ignoreAuthors</code></td>
                <td className="py-2 px-4">List of authors to ignore</td>
                <td className="py-2 px-4">[]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Cache Settings">
        <DocParagraph>
          Configure caching behavior:
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
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">cache.enabled</code></td>
                <td className="py-2 px-4">Enable caching</td>
                <td className="py-2 px-4">true</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">cache.ttl</code></td>
                <td className="py-2 px-4">Cache time-to-live in seconds</td>
                <td className="py-2 px-4">86400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">cache.maxSize</code></td>
                <td className="py-2 px-4">Maximum cache size</td>
                <td className="py-2 px-4">"1GB"</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">cache.directory</code></td>
                <td className="py-2 px-4">Custom cache directory</td>
                <td className="py-2 px-4">system default</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Output Settings">
        <DocParagraph>
          Configure output format and behavior:
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
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">output.format</code></td>
                <td className="py-2 px-4">Output format (text, json, markdown)</td>
                <td className="py-2 px-4">"text"</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">output.colors</code></td>
                <td className="py-2 px-4">Use colors in output</td>
                <td className="py-2 px-4">true</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">output.verbosity</code></td>
                <td className="py-2 px-4">Verbosity level (0-3)</td>
                <td className="py-2 px-4">1</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">output.file</code></td>
                <td className="py-2 px-4">Output to file instead of stdout</td>
                <td className="py-2 px-4">null</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>
      
      <DocSection title="Setting Configuration">
        <DocParagraph>
          You can set configuration options in several ways:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Edit <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">.commitstudiorc</code> file directly</>,
            <>Use the CLI: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio config set analysis.maxDiffSize 100000</code></>,
            <>Use environment variables: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">COMMITSTUDIO_ANALYSIS_MAX_DIFF_SIZE=100000</code></>,
            <>Pass as command-line options: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --analysis.maxDiffSize=100000</code></>,
          ]}
        />
        
        <DocParagraph>
          The order of precedence is:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Command-line options (highest precedence)</>,
            <>Environment variables</>,
            <>Local <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">.commitstudiorc</code> in repository</>,
            <>Global <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">.commitstudiorc</code> in home directory</>,
            <>Default values (lowest precedence)</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Complete Configuration Example">
        <DocParagraph>
          Here's a comprehensive configuration example:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`{
  "api": {
    "model": "gpt-4",
    "temperature": 0.7,
    "timeout": 30000,
    "maxTokens": 4096,
    "retries": 3
  },
  "analysis": {
    "maxDiffSize": 50000,
    "maxDaysBack": 7,
    "focusAreas": ["bugs", "performance", "security", "style"],
    "ignorePatterns": ["*.min.js", "vendor/**", "dist/**", "node_modules/**"],
    "detailLevel": "standard"
  },
  "github": {
    "postComments": true,
    "commentStyle": "inline",
    "commentHeader": "CommitStudio AI Review",
    "apiBaseUrl": "https://api.github.com",
    "ignoreAuthors": ["dependabot", "renovate"]
  },
  "cache": {
    "enabled": true,
    "ttl": 86400,
    "maxSize": "1GB",
    "directory": "~/.cache/commitstudio"
  },
  "output": {
    "format": "text",
    "colors": true,
    "verbosity": 1,
    "file": null
  }
}`}
        </pre>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/environment-variables", label: "Environment Variables" },
          { href: "/docs/command-line-reference", label: "Command Line Reference" },
          { href: "/docs/cache-management", label: "Cache Management" },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 