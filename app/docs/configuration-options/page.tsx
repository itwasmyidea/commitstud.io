"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"
import { technicalSpecs } from "@/lib/docs-content"

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
      
      <DocSection title="Configuration Mode">
        <DocParagraph>
          Configuration mode allows you to view and update CommitStudio settings, particularly AI-related settings like the model and token limits.
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`commitstudio config [options]`}
        </pre>
        
        <DocParagraph>
          <strong>Configuration Options:</strong>
        </DocParagraph>
        
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--view</code>: View current configuration settings</li>
          <li><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--model &lt;model&gt;</code>: Set AI model to use for analysis</li>
          <li><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--max-tokens &lt;number&gt;</code>: Set maximum tokens for API requests</li>
        </ul>
        
        <DocParagraph>
          <strong>Configuration Examples:</strong>
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# View current configuration
commitstudio config --view

# Set a specific model
commitstudio config --model gpt-4o

# Set maximum tokens
commitstudio config --max-tokens 3000

# Update multiple settings at once
commitstudio config --model gpt-4.1-mini --max-tokens 2500

# Run interactive configuration
commitstudio config`}
        </pre>
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
    "model": "${technicalSpecs.openai.defaultModel}",
    "temperature": ${technicalSpecs.openai.temperature}
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
    model: process.env.COMMITSTUDIO_MODEL || '${technicalSpecs.openai.defaultModel}',
    temperature: ${technicalSpecs.openai.temperature}
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
                <td className="py-2 px-4">{technicalSpecs.openai.defaultModel}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.temperature</code></td>
                <td className="py-2 px-4">Randomness of responses (0-1)</td>
                <td className="py-2 px-4">{technicalSpecs.openai.temperature}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.timeout</code></td>
                <td className="py-2 px-4">API request timeout in ms</td>
                <td className="py-2 px-4">30000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">api.maxTokens</code></td>
                <td className="py-2 px-4">Maximum tokens per request</td>
                <td className="py-2 px-4">{technicalSpecs.openai.maxTokens}</td>
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
      
      <DocSection title="Supported AI Models">
        <DocParagraph>
          CommitStudio supports the following AI models for code analysis:
        </DocParagraph>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 font-medium text-foreground">Model</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">gpt-4o</code></td>
                <td className="py-2 px-4">OpenAI's GPT-4o model with strong code understanding capabilities</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">gpt-4.1</code></td>
                <td className="py-2 px-4">OpenAI's GPT-4.1 model with extensive context capabilities</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">gpt-4.1-mini</code></td>
                <td className="py-2 px-4">Smaller version of GPT-4.1 with good performance/cost balance (default)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">gpt-4.1-nano</code></td>
                <td className="py-2 px-4">Smallest GPT-4.1 variant with faster responses</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">o4-mini</code></td>
                <td className="py-2 px-4">Smaller variant of the GPT-4o model</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">o3-mini</code></td>
                <td className="py-2 px-4">Compact model with good code analysis for simpler reviews</td>
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
      
      <DocSection title="Using the Config Command">
        <DocParagraph>
          CommitStudio provides a dedicated <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">config</code> command to easily view and modify your configuration:
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
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio config</code></td>
                <td className="py-2 px-4">Start interactive configuration mode</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio config --view</code></td>
                <td className="py-2 px-4">View your current configuration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio config --model gpt-4o</code></td>
                <td className="py-2 px-4">Set the AI model to use (see Supported AI Models section)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio config --max-tokens 4000</code></td>
                <td className="py-2 px-4">Set the maximum tokens for API requests</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <DocParagraph>
          Example usage to change the AI model:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# View current configuration
commitstudio config --view

# Change to GPT-4o model
commitstudio config --model gpt-4o

# Set higher token limit for large diffs
commitstudio config --max-tokens 4000`}
        </pre>
      </DocSection>
      
      <DocSection title="Complete Configuration Example">
        <DocParagraph>
          Here's a comprehensive configuration example:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`{
  "api": {
    "model": "${technicalSpecs.openai.defaultModel}",
    "temperature": ${technicalSpecs.openai.temperature},
    "timeout": 30000,
    "maxTokens": ${technicalSpecs.openai.maxTokens},
    "retries": 3
  },
  "analysis": {
    "maxDiffSize": ${technicalSpecs.cli.maxFileSize},
    "maxDaysBack": 7,
    "focusAreas": ["bugs", "performance", "security", "style"],
    "ignorePatterns": ${JSON.stringify(technicalSpecs.analysis.ignorePaths, null, 2).replace(/\n/g, '\n    ')},
    "detailLevel": "standard"
  },
  "github": {
    "postComments": true,
    "commentStyle": "inline",
    "commentHeader": "CommitStudio AI Review",
    "apiBaseUrl": "${technicalSpecs.github.apiUrl}",
    "ignoreAuthors": ["dependabot", "renovate"]
  },
  "cache": {
    "enabled": true,
    "ttl": ${technicalSpecs.cli.cacheDuration / 1000},
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
      
      <div className="mt-12 pt-6 border-t border-border">
        <NextSteps
          links={[
            { href: "/docs/environment-variables", label: "Environment Variables" },
            { href: "/docs/command-line-reference", label: "Command Line Reference" },
            { href: "/docs/cache-management", label: "Cache Management" },
          ]}
        />
        
         </div>
    </div>
  )
} 