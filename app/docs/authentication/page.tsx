"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function AuthenticationPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);
  
  return (
    <div className="space-y-6">
      <DocHeading>Authentication</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio requires authentication with both GitHub and OpenAI to function properly.
          You'll need to configure API tokens for both services.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="GitHub Authentication">
        <DocParagraph>
          CommitStudio needs access to your GitHub repositories to post comments and analyze your code.
          You'll need to create a Personal Access Token (PAT) with the appropriate permissions.
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Personal Access Tokens</a></>,
            <>Click on "Generate new token" (classic)</>,
            <>Give your token a descriptive name (e.g., "CommitStudio")</>,
            <>Select the <strong className="text-foreground">repo</strong> scope to allow access to your repositories</>,
            <>Click "Generate token"</>,
            <>Copy the token and store it securely - GitHub will only show it once</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="OpenAI API Key">
        <DocParagraph>
          CommitStudio uses OpenAI's API to analyze your code and generate insights.
          You'll need an API key with sufficient credits.
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Go to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI API Keys</a></>,
            <>Sign in or create an account</>,
            <>Click "Create new secret key"</>,
            <>Give your key a name (e.g., "CommitStudio")</>,
            <>Copy the key and store it securely - OpenAI will only show it once</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Configuring Credentials">
        <DocParagraph>
          You can configure CommitStudio to use your credentials in several ways:
        </DocParagraph>
        
        <DocList
          items={[
            <>Using environment variables (recommended for CI/CD)</>,
            <>Using the interactive prompt when you first run CommitStudio</>,
            <>Using a configuration file</>,
          ]}
        />
        
        <DocParagraph>
          The simplest approach is to let CommitStudio guide you through the setup process
          when you first run it. It will prompt you for the required credentials and store them securely.
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio configure
        </div>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/quick-start", label: "Quick Start Guide" },
          { href: "/docs/credentials-management", label: "Credentials Management" },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 