"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function GitHubApiRateLimitsPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>GitHub API Rate Limits</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio interacts with the GitHub API to fetch commits, post comments, and more.
          GitHub imposes rate limits on API requests, which can impact how CommitStudio functions.
          This page explains these limits and how to work with them effectively.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Understanding GitHub API Rate Limits">
        <DocParagraph>
          GitHub limits the number of requests you can make to their API within a specific time period.
          These limits vary based on whether you're using authenticated requests, the type of authentication,
          and whether you're using GitHub Enterprise or GitHub.com.
        </DocParagraph>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 font-medium text-foreground">Authentication Type</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Rate Limit</th>
                <th className="text-left py-2 px-4 font-medium text-foreground">Reset Period</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4">Unauthenticated</td>
                <td className="py-2 px-4">60 requests</td>
                <td className="py-2 px-4">Per hour</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4">Basic Authentication (username/password)</td>
                <td className="py-2 px-4">5,000 requests</td>
                <td className="py-2 px-4">Per hour</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4">OAuth token</td>
                <td className="py-2 px-4">5,000 requests</td>
                <td className="py-2 px-4">Per hour</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4">GitHub App installation token</td>
                <td className="py-2 px-4">5,000 requests</td>
                <td className="py-2 px-4">Per hour per installation</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <DocParagraph>
          GitHub Enterprise Server may have different rate limits, configured by your organization's administrators.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="How CommitStudio Uses the GitHub API">
        <DocParagraph>
          CommitStudio makes various API calls to GitHub, including:
        </DocParagraph>
        
        <DocList
          items={[
            <>Fetching repository information</>,
            <>Getting commit details</>,
            <>Retrieving pull request data</>,
            <>Posting review comments</>,
            <>Checking authentication status</>,
          ]}
        />
        
        <DocParagraph>
          Some operations, especially analyzing commits across multiple repositories or large pull requests,
          can consume a significant number of API requests.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Rate Limit Errors">
        <DocParagraph>
          When CommitStudio hits a GitHub API rate limit, you'll see errors like:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`Error: GitHub API rate limit exceeded. Please wait until the rate limit resets in 45 minutes.`}
        </pre>
        
        <DocParagraph>
          Or in the logs, you might see:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`API request failed with status 403: {"message":"API rate limit exceeded for user 'username'.","documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}`}
        </pre>
      </DocSection>
      
      <DocSection title="Checking Your Rate Limit Status">
        <DocParagraph>
          You can check your current rate limit status using the following command:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`commitstudio github status`}
        </pre>
        
        <DocParagraph>
          This will show your current rate limit usage, remaining requests, and when the limit resets.
        </DocParagraph>
        
        <DocParagraph>
          You can also check directly via the GitHub API:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`curl -s -H "Authorization: token YOUR_GITHUB_TOKEN" https://api.github.com/rate_limit`}
        </pre>
      </DocSection>
      
      <DocSection title="Strategies to Avoid Rate Limiting">
        <DocParagraph>
          To prevent hitting rate limits when using CommitStudio:
        </DocParagraph>
        
        <DocList
          items={[
            <>Always use authenticated requests by configuring GitHub credentials</>,
            <>Enable caching to reduce redundant API calls: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --cache.enabled=true</code></>,
            <>Limit analysis scope by specifying shorter date ranges: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --days=3</code> instead of analyzing weeks of history</>,
            <>Use the <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">--limit</code> option to cap the number of commits analyzed: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --limit=20</code></>,
            <>For large repositories, analyze specific branches or PRs rather than the entire history</>,
            <>Schedule bulk analyses during off-hours when you're not using GitHub for other purposes</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Using a GitHub Personal Access Token">
        <DocParagraph>
          To get higher rate limits, use a GitHub Personal Access Token (PAT) with CommitStudio:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Create a Personal Access Token in GitHub: Settings → Developer Settings → Personal Access Tokens</>,
            <>Grant the token the necessary permissions (at minimum: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">repo</code> scope)</>,
            <>Configure CommitStudio to use this token:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio auth github --token YOUR_TOKEN`}
              </pre>
            </>,
          ]}
        />
        
        <DocParagraph>
          This increases your rate limit to 5,000 requests per hour, which is usually sufficient for most CommitStudio operations.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="GitHub Enterprise Considerations">
        <DocParagraph>
          If you're using CommitStudio with GitHub Enterprise Server:
        </DocParagraph>
        
        <DocList
          items={[
            <>Rate limits may be configured differently by your administrators</>,
            <>Configure the API URL in CommitStudio:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`commitstudio config set github.apiBaseUrl "https://github.your-company.com/api/v3"`}
              </pre>
            </>,
            <>Enterprise servers might have more generous rate limits, but check with your administrators to be sure</>,
            <>Consider setting up a dedicated service account for CommitStudio if you plan to use it extensively</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Secondary Rate Limits">
        <DocParagraph>
          GitHub also implements secondary rate limits to prevent abuse. These limits aren't publicly documented
          in detail but may affect operations that make rapid, consecutive API calls.
        </DocParagraph>
        
        <DocParagraph>
          If you see errors like "You have triggered an abuse detection mechanism" or "You have exceeded a 
          secondary rate limit", CommitStudio will automatically retry with exponential backoff, but you
          may need to wait before continuing operations.
        </DocParagraph>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/github-oauth-configuration", label: "GitHub OAuth Configuration" },
          { href: "/docs/configuration-options", label: "Configuration Options" },
          { href: "/docs/common-issues", label: "Common Issues" },
        ]}
      />
      
      </div>
  )
} 