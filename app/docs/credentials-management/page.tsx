"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function CredentialsManagementPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Credentials Management</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio requires credentials for GitHub and OpenAI to function properly. This page explains
          how to manage these credentials effectively and securely.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Credential Storage">
        <DocParagraph>
          CommitStudio securely stores your credentials in your user directory:
        </DocParagraph>
        
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">macOS</strong>: <code className="bg-muted px-1 py-0.5 rounded text-sm">~/Library/Preferences/commitstudio-nodejs</code></li>
          <li><strong className="text-foreground">Linux</strong>: <code className="bg-muted px-1 py-0.5 rounded text-sm">~/.config/commitstudio</code></li>
          <li><strong className="text-foreground">Windows</strong>: <code className="bg-muted px-1 py-0.5 rounded text-sm">%APPDATA%\commitstudio-nodejs</code></li>
        </ul>
        
        <DocParagraph>
          The credentials are stored in an encrypted format to prevent unauthorized access.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Managing Credentials">
        <DocParagraph>
          You have several options for managing your credentials:
        </DocParagraph>
        
        <DocList
          items={[
            <><strong className="text-foreground">Initial Setup</strong>: CommitStudio will prompt you for credentials on first run</>,
            <><strong className="text-foreground">Manual Configuration</strong>: Use <code className="bg-muted px-1 py-0.5 rounded text-sm">commitstudio configure</code> to set or update credentials</>,
            <><strong className="text-foreground">Environment Variables</strong>: Set credentials via environment variables for a single session</>,
            <><strong className="text-foreground">Configuration File</strong>: Create a configuration file for persistent settings</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Configure Command">
        <DocParagraph>
          The easiest way to manage credentials is using the configure command:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio configure
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          This interactive command will guide you through setting up your GitHub and OpenAI credentials.
          It will prompt you for:
        </DocParagraph>
        
        <DocList
          items={[
            <>Your GitHub personal access token with 'repo' scope</>,
            <>Your OpenAI API key</>,
            <>Optional: Custom configuration options</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Resetting Credentials">
        <DocParagraph>
          If you need to clear all stored credentials and start fresh:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio reset
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          This command removes all stored credentials and configuration settings. You'll need to
          reconfigure CommitStudio the next time you run it.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Security Best Practices">
        <DocParagraph>
          Follow these best practices to keep your credentials secure:
        </DocParagraph>
        
        <DocList
          items={[
            <>Never share your API keys or tokens with others</>,
            <>Don't include credentials in version control or public repositories</>,
            <>Regularly rotate your GitHub personal access tokens</>,
            <>Use environment variables in CI/CD environments</>,
            <>Set appropriate token expiration dates for GitHub tokens</>,
            <>Use the minimum required permissions for GitHub tokens</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/environment-variables", label: "Environment Variables" },
          { href: "/docs/github-oauth-configuration", label: "GitHub OAuth Configuration" },
          { href: "/docs/using-with-cicd", label: "CI/CD Integration" },
        ]}
      />
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 