"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function UsingWithCICDPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>CI/CD Integration</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio can be integrated into your CI/CD pipeline to automatically analyze
          commits and pull requests. This page explains how to set up CommitStudio in various
          CI/CD environments.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="General Setup">
        <DocParagraph>
          Regardless of which CI/CD platform you use, you'll need to:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Install Node.js 18.0.0 or higher in your CI environment</>,
            <>Install CommitStudio globally or as a dependency</>,
            <>Configure GitHub and OpenAI authentication</>,
            <>Run CommitStudio with appropriate options</>,
          ]}
        />
        
        <DocParagraph>
          Authentication in CI/CD environments is typically done using environment variables:
        </DocParagraph>
        
        <DocList
          items={[
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">GITHUB_TOKEN</code>: Your GitHub personal access token</>,
            <><code className="bg-muted px-1 py-0.5 rounded text-sm">OPENAI_API_KEY</code>: Your OpenAI API key</>,
          ]}
        />
        
        <DocParagraph>
          Store these as secret environment variables in your CI/CD platform.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="GitHub Actions">
        <DocParagraph>
          Here's a sample GitHub Actions workflow for analyzing pull requests:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 overflow-x-auto">
          <pre className="whitespace-pre-line text-sm">{`name: CommitStudio Analysis

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install CommitStudio
        run: npm install -g commitstudio
      
      - name: Run CommitStudio
        run: commitstudio --pr \${{ github.event.pull_request.number }} --post-comments
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}`}</pre>
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          Make sure to add your OpenAI API key as a secret in your GitHub repository settings.
          The <code className="bg-muted px-1 py-0.5 rounded text-sm">GITHUB_TOKEN</code> is automatically provided by GitHub Actions.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="GitLab CI">
        <DocParagraph>
          Here's a sample GitLab CI configuration:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 overflow-x-auto">
          <pre className="whitespace-pre-line text-sm">{`stages:
  - analyze

commitstudio:
  stage: analyze
  image: node:18
  script:
    - npm install -g commitstudio
    - commitstudio --branch $CI_COMMIT_REF_NAME --since $(git log -1 --format=%H origin/main) --post-comments
  only:
    - merge_requests
  variables:
    GIT_DEPTH: 0
  environment:
    name: review/$CI_COMMIT_REF_NAME
  allow_failure: true`}</pre>
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          Add <code className="bg-muted px-1 py-0.5 rounded text-sm">GITHUB_TOKEN</code> and <code className="bg-muted px-1 py-0.5 rounded text-sm">OPENAI_API_KEY</code> as
          CI/CD variables in your GitLab project settings. Make sure to mark them as protected and masked.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="CircleCI">
        <DocParagraph>
          Here's a sample CircleCI configuration:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 overflow-x-auto">
          <pre className="whitespace-pre-line text-sm">{`version: 2.1
jobs:
  analyze:
    docker:
      - image: cimg/node:18.0
    steps:
      - checkout
      - run:
          name: Install CommitStudio
          command: npm install -g commitstudio
      - run:
          name: Run CommitStudio
          command: |
            if [[ $CIRCLE_PULL_REQUEST ]]; then
              PR_NUMBER=$(echo $CIRCLE_PULL_REQUEST | sed 's/.*\\///')
              commitstudio --pr $PR_NUMBER --post-comments
            else
              commitstudio --branch $CIRCLE_BRANCH --days 1 --post-comments
            fi

workflows:
  version: 2
  commit-analysis:
    jobs:
      - analyze`}</pre>
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          Add <code className="bg-muted px-1 py-0.5 rounded text-sm">GITHUB_TOKEN</code> and <code className="bg-muted px-1 py-0.5 rounded text-sm">OPENAI_API_KEY</code> as
          environment variables in your CircleCI project settings.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Jenkins">
        <DocParagraph>
          Here's a sample Jenkinsfile:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 overflow-x-auto">
          <pre className="whitespace-pre-line text-sm">{`pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    stages {
        stage('Analyze') {
            steps {
                sh 'npm install -g commitstudio'
                withCredentials([
                    string(credentialsId: 'github-token', variable: 'GITHUB_TOKEN'),
                    string(credentialsId: 'openai-api-key', variable: 'OPENAI_API_KEY')
                ]) {
                    sh 'commitstudio --branch $GIT_BRANCH --days 1 --post-comments'
                }
            }
        }
    }
}`}</pre>
          <DocPrevNext prev={prev} next={next} />
        </div>
        
        <DocParagraph>
          Add your GitHub token and OpenAI API key as credentials in Jenkins.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="CI/CD Best Practices">
        <DocParagraph>
          Follow these best practices when integrating CommitStudio into your CI/CD pipeline:
        </DocParagraph>
        
        <DocList
          items={[
            <>Set <code className="bg-muted px-1 py-0.5 rounded text-sm">--post-comments</code> to make feedback visible in pull requests</>,
            <>Use <code className="bg-muted px-1 py-0.5 rounded text-sm">--no-cache</code> in CI/CD environments to ensure fresh analysis</>,
            <>Consider using <code className="bg-muted px-1 py-0.5 rounded text-sm">allow_failure: true</code> to prevent API issues from blocking your pipeline</>,
            <>Limit the scope of analysis with <code className="bg-muted px-1 py-0.5 rounded text-sm">--limit</code> or <code className="bg-muted px-1 py-0.5 rounded text-sm">--days</code> for faster feedback</>,
            <>Rotate your API keys regularly and keep them secure</>,
            <>Monitor your OpenAI API usage to control costs</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/environment-variables", label: "Environment Variables" },
          { href: "/docs/github-oauth-configuration", label: "GitHub OAuth Configuration" },
          { href: "/docs/filtering-commits", label: "Filtering Commits" },
        ]}
      />
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 