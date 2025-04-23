"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function EnvironmentVariablesPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Environment Variables</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio can be configured using environment variables, which is especially useful
          in CI/CD environments or when you want to avoid storing credentials in configuration files.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Available Environment Variables">
        <div className="overflow-hidden border rounded-md">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-foreground">Variable</th>
                <th className="px-4 py-2 text-left font-medium text-foreground">Description</th>
                <th className="px-4 py-2 text-left font-medium text-foreground">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">GITHUB_TOKEN</td>
                <td className="px-4 py-3 text-muted-foreground">GitHub personal access token with 'repo' scope</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">ghp_123abc...</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">OPENAI_API_KEY</td>
                <td className="px-4 py-3 text-muted-foreground">OpenAI API key for AI-powered analysis</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">sk-123abc...</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">COMMITSTUDIO_CACHE_DIR</td>
                <td className="px-4 py-3 text-muted-foreground">Custom directory for CommitStudio cache files</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">/path/to/cache</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">COMMITSTUDIO_DISABLE_CACHE</td>
                <td className="px-4 py-3 text-muted-foreground">Disable caching entirely</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">true</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">COMMITSTUDIO_GITHUB_API_URL</td>
                <td className="px-4 py-3 text-muted-foreground">Custom GitHub API URL for GitHub Enterprise</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">https://github.company.com/api/v3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">COMMITSTUDIO_LOG_LEVEL</td>
                <td className="px-4 py-3 text-muted-foreground">Logging level (debug, info, warn, error)</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">debug</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">COMMITSTUDIO_MODEL</td>
                <td className="px-4 py-3 text-muted-foreground">OpenAI model to use</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">gpt-4-mini</td>
              </tr>
            </tbody>
          </table>
          <DocPrevNext prev={prev} next={next} />
        </div>
      </DocSection>
      
      <DocSection title="Setting Environment Variables">
        <DocParagraph>
          How you set environment variables depends on your operating system and shell.
        </DocParagraph>
        
        <h3 className="text-md font-medium mb-2 mt-4">Bash/Zsh (Linux/macOS)</h3>
        <div className="bg-muted rounded-md p-4 my-2 font-mono text-sm">
          export GITHUB_TOKEN=your_token_here<br />
          export OPENAI_API_KEY=your_key_here
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">Command Prompt (Windows)</h3>
        <div className="bg-muted rounded-md p-4 my-2 font-mono text-sm">
          set GITHUB_TOKEN=your_token_here<br />
          set OPENAI_API_KEY=your_key_here
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <h3 className="text-md font-medium mb-2 mt-4">PowerShell (Windows)</h3>
        <div className="bg-muted rounded-md p-4 my-2 font-mono text-sm">
          $env:GITHUB_TOKEN = "your_token_here"<br />
          $env:OPENAI_API_KEY = "your_key_here"
          <DocPrevNext prev={prev} next={next} />
        </div>
      </DocSection>
      
      <DocSection title="Using with dotenv">
        <DocParagraph>
          You can also use a .env file with a tool like dotenv to load environment variables:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          # .env file<br />
          GITHUB_TOKEN=your_token_here<br />
          OPENAI_API_KEY=your_key_here
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          Then run CommitStudio using dotenv:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          npx dotenv -- commitstudio
          <DocPrevNext prev={prev} next={next} />
        </div>
      </DocSection>
      
      <DocSection title="In CI/CD Environments">
        <DocParagraph>
          Most CI/CD platforms provide ways to set environment variables securely:
        </DocParagraph>
        
        <DocList
          items={[
            <>GitHub Actions: Use repository secrets and expose them as environment variables</>,
            <>GitLab CI: Define variables in the CI/CD settings or .gitlab-ci.yml file</>,
            <>Jenkins: Configure environment variables in the job configuration</>,
            <>CircleCI: Set environment variables in the project settings</>,
          ]}
        />
        
        <DocParagraph>
          Example GitHub Actions workflow:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm overflow-x-auto whitespace-pre-line">
{`name: CommitStudio Review

on:
  pull_request:
    branches: [ main ]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install -g commitstudio
      - name: Run CommitStudio
        run: commitstudio --pr \${{ github.event.pull_request.number }}
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}`}
          <DocPrevNext prev={prev} next={next} />
        </div>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/credentials-management", label: "Credentials Management" },
          { href: "/docs/configuration-options", label: "Configuration Options" },
          { href: "/docs/using-with-cicd", label: "CI/CD Integration" },
        ]}
      />
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 