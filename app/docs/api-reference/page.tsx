"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function ApiReferencePage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>API Reference</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio provides a programmatic API that allows you to integrate AI-powered code reviews 
          into your own tools and workflows. This page documents the available API endpoints, 
          parameters, and response formats.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Authentication">
        <DocParagraph>
          All API requests require authentication using an API key. You can generate an API key 
          in your CommitStudio dashboard.
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm">
          {`# Example API request with authentication
curl -X POST https://api.commitstud.io/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "diff": "diff --git a/file.js b/file.js\\n..."
  }'`}
        </pre>
      </DocSection>
      
      <DocSection title="Endpoints">
        <DocParagraph>
          CommitStudio API provides the following endpoints:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">POST /v1/analyze</code>: Analyze a git diff and return AI-powered feedback</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">POST /v1/repositories</code>: Register a repository for analysis</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">GET /v1/repositories</code>: List registered repositories</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">GET /v1/repositories/:id</code>: Get repository details</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">GET /v1/analysis/:id</code>: Get analysis results</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Analyze Endpoint">
        <DocParagraph>
          The analyze endpoint accepts a git diff and returns AI-generated code review feedback.
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm">
          {`// Request body
{
  "diff": "diff --git a/file.js b/file.js\\n...", // Git diff content
  "context": {                                     // Optional context
    "repository": "owner/repo",
    "branch": "feature/branch",
    "commit": "a1b2c3d4e5f6..."
  },
  "options": {                                     // Analysis options
    "level": "standard",                           // or "detailed"
    "include_suggestions": true,
    "focus_areas": ["security", "performance"]     // Analysis focus
  }
}`}
        </pre>
        
        <DocParagraph>
          Response format:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm">
          {`// Response
{
  "id": "analysis_12345",
  "status": "completed",
  "created_at": "2023-01-01T12:00:00Z",
  "completed_at": "2023-01-01T12:00:10Z",
  "results": {
    "summary": "Overall assessment of code changes",
    "comments": [
      {
        "file": "file.js",
        "line": 42,
        "message": "Consider using const instead of let for variables that aren't reassigned",
        "severity": "suggestion",
        "category": "best_practice"
      },
      // More comments...
    ],
    "metrics": {
      "quality_score": 85,
      "issues_count": 3,
      "suggestions_count": 5
    }
  }
}`}
        </pre>
      </DocSection>
      
      <DocSection title="Rate Limits">
        <DocParagraph>
          API usage is subject to rate limits depending on your subscription plan:
        </DocParagraph>
        
        <DocList
          items={[
            <>Free tier: 10 requests per hour, 100 per day</>,
            <>Professional tier: 100 requests per hour, 1,000 per day</>,
            <>Enterprise tier: Custom limits based on your agreement</>,
          ]}
        />
        
        <DocParagraph>
          Rate limit information is included in API response headers:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm">
          {`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1609459200`}
        </pre>
      </DocSection>
      
      <DocSection title="Error Handling">
        <DocParagraph>
          The API uses standard HTTP status codes and returns error details in the response body:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm">
          {`// Error response (HTTP 400)
{
  "error": {
    "code": "invalid_request",
    "message": "The diff parameter is required",
    "details": {
      "missing_field": "diff"
    }
  }
}`}
        </pre>
        
        <DocParagraph>
          Common error codes:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">invalid_request</code>: The request is malformed or missing required fields</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">authentication_error</code>: Invalid or missing API key</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">rate_limit_exceeded</code>: API rate limit exceeded</>,
            <><code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">server_error</code>: Internal server error</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/command-line-reference", label: "Command Line Reference" },
          { href: "/docs/configuration-options", label: "Configuration Options" },
          { href: "/docs/github-oauth-configuration", label: "GitHub OAuth Configuration" },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 