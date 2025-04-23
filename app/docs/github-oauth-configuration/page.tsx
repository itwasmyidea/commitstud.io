"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function GitHubOAuthConfigurationPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>GitHub OAuth Configuration</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio can authenticate with GitHub using OAuth, which provides secure access to GitHub repositories
          without requiring you to store your credentials. This page explains how to set up and configure GitHub OAuth
          for CommitStudio.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Benefits of Using OAuth">
        <DocParagraph>
          Using OAuth with CommitStudio offers several advantages:
        </DocParagraph>
        
        <DocList
          items={[
            <>Increased security: No need to store your GitHub password</>,
            <>Fine-grained permissions: Only grant the specific access CommitStudio needs</>,
            <>Higher API rate limits: 5,000 requests per hour vs. 60 for unauthenticated requests</>,
            <>Access to private repositories</>,
            <>Ability to post comments to GitHub</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Setting Up OAuth Authentication">
        <DocParagraph>
          To authenticate CommitStudio with GitHub using OAuth:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Run the authentication command:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth github`}
              </pre>
            </>,
            <>CommitStudio will open your default browser to GitHub's authorization page</>,
            <>Log in to GitHub if prompted</>,
            <>Review the permissions requested and click "Authorize"</>,
            <>CommitStudio will receive the OAuth token and store it securely</>,
            <>You'll see a confirmation in the terminal when authentication is complete</>,
          ]}
        />
        
        <DocParagraph>
          Once authenticated, CommitStudio will use your GitHub OAuth token for all GitHub API requests.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Checking Authentication Status">
        <DocParagraph>
          To verify your GitHub authentication status:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`commitstudio auth status`}
        </pre>
        
        <DocParagraph>
          This will show whether you're authenticated, which GitHub account is connected, and the token's scopes.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Required Permissions">
        <DocParagraph>
          CommitStudio requests the following GitHub OAuth scopes:
        </DocParagraph>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 font-medium text-foreground">Scope</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">repo</code></td>
                <td className="py-2 px-4">Access repositories (including private ones)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">user:email</code></td>
                <td className="py-2 px-4">Read your email address</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4"><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">read:org</code></td>
                <td className="py-2 px-4">Read organization membership (if working with organization repositories)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <DocParagraph>
          You can customize which scopes are requested when creating your own OAuth application.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Using a Personal Access Token Instead">
        <DocParagraph>
          If you prefer to use a Personal Access Token (PAT) instead of OAuth:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Create a token in GitHub: Settings → Developer Settings → Personal Access Tokens</>,
            <>Grant it the same permissions as listed above</>,
            <>Use the token with CommitStudio:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth github --token YOUR_TOKEN`}
              </pre>
            </>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Creating Your Own OAuth App">
        <DocParagraph>
          For enterprise environments or advanced use cases, you can create your own GitHub OAuth App:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Go to GitHub → Settings → Developer Settings → OAuth Apps → New OAuth App</>,
            <>Fill in the application details:
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 px-4 font-medium">Application name</td>
                      <td className="py-2 px-4">CommitStudio (Your Company Name)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-4 font-medium">Homepage URL</td>
                      <td className="py-2 px-4">https://your-company.com</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-4 font-medium">Application description</td>
                      <td className="py-2 px-4">AI-powered Git commit reviews</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-4 font-medium">Authorization callback URL</td>
                      <td className="py-2 px-4">http://localhost:3000/oauth/callback</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>After creating the app, note the Client ID and Client Secret</>,
            <>Configure CommitStudio to use your app:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio config set github.oauth.clientId "YOUR_CLIENT_ID"
commitstudio config set github.oauth.clientSecret "YOUR_CLIENT_SECRET"`}
              </pre>
            </>,
            <>Run the auth command to use your custom app:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth github`}
              </pre>
            </>,
          ]}
        />
      </DocSection>
      
      <DocSection title="GitHub Enterprise Configuration">
        <DocParagraph>
          To use CommitStudio with GitHub Enterprise Server:
        </DocParagraph>
        
        <DocList
          items={[
            <>Set the GitHub API base URL:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio config set github.apiBaseUrl "https://github.your-company.com/api/v3"`}
              </pre>
            </>,
            <>Set the GitHub web URL:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio config set github.webUrl "https://github.your-company.com"`}
              </pre>
            </>,
            <>Authenticate using the enterprise server:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth github`}
              </pre>
            </>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Revoking Access">
        <DocParagraph>
          To revoke CommitStudio's access to your GitHub account:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Log out of CommitStudio:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth logout`}
              </pre>
            </>,
            <>Go to GitHub → Settings → Applications → Authorized OAuth Apps</>,
            <>Find CommitStudio in the list and click "Revoke"</>,
          ]}
        />
        
        <DocParagraph>
          This will invalidate the OAuth token, and CommitStudio will no longer have access to your GitHub account.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Troubleshooting OAuth Issues">
        <DocParagraph>
          If you encounter issues with GitHub OAuth authentication:
        </DocParagraph>
        
        <DocList
          items={[
            <>Verify your internet connection</>,
            <>Check that your GitHub account has the necessary permissions</>,
            <>Ensure your system clock is accurate (OAuth uses timestamped tokens)</>,
            <>Try logging out and authenticating again:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth logout
commitstudio auth github`}
              </pre>
            </>,
            <>Run with verbose logging:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth github --verbose`}
              </pre>
            </>,
            <>Check for firewall or proxy issues that might block OAuth redirects</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/github-api-rate-limits", label: "GitHub API Rate Limits" },
          { href: "/docs/credentials-management", label: "Credentials Management" },
          { href: "/docs/using-with-cicd", label: "Using with CI/CD" },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 