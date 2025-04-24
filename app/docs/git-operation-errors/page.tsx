"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function GitOperationErrorsPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Git Operation Errors</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio interacts with Git repositories to analyze your commits. Sometimes, Git operations 
          can fail for various reasons. This page documents common Git-related errors, their causes, 
          and how to resolve them.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Authentication Errors">
        <DocParagraph>
          Git authentication issues are common when CommitStudio tries to access private repositories.
        </DocParagraph>
        
        <div className="bg-muted/50 border border-border rounded-md p-4 my-4">
          <h4 className="text-md font-medium mb-2">Error: Authentication failed</h4>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`fatal: Authentication failed for 'https://github.com/username/repo.git'`}
          </pre>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Causes:</h5>
            <DocList
              items={[
                <>Invalid or expired credentials</>,
                <>Insufficient permissions for the repository</>,
                <>Two-factor authentication issues</>,
              ]}
            />
            
            <h5 className="text-sm font-medium mt-3 mb-1">Solutions:</h5>
            <DocList
              items={[
                <>Setup proper Git credentials with <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git config credential.helper store</code></>,
                <>Use SSH authentication instead of HTTPS</>,
                <>Run <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio auth github</code> to set up GitHub authentication</>,
                <>Check repository permissions in GitHub settings</>,
              ]}
            />
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Repository Not Found">
        <DocParagraph>
          These errors occur when CommitStudio can't find or access a Git repository.
        </DocParagraph>
        
        <div className="bg-muted/50 border border-border rounded-md p-4 my-4">
          <h4 className="text-md font-medium mb-2">Error: Repository not found</h4>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`fatal: not a git repository (or any of the parent directories): .git`}
          </pre>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Causes:</h5>
            <DocList
              items={[
                <>Command executed outside of a Git repository</>,
                <>Corrupted .git directory</>,
                <>Repository not properly initialized</>,
              ]}
            />
            
            <h5 className="text-sm font-medium mt-3 mb-1">Solutions:</h5>
            <DocList
              items={[
                <>Navigate to the correct repository directory</>,
                <>Initialize the repository with <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git init</code></>,
                <>Clone the repository again if the .git directory is corrupted</>,
              ]}
            />
          </div>
        </div>
        
        <div className="bg-muted/50 border border-border rounded-md p-4 my-4">
          <h4 className="text-md font-medium mb-2">Error: Remote repository not found</h4>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`fatal: repository 'https://github.com/username/repo.git' not found`}
          </pre>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Causes:</h5>
            <DocList
              items={[
                <>Repository URL is incorrect</>,
                <>Repository has been deleted or made private</>,
                <>You don't have access to the repository</>,
              ]}
            />
            
            <h5 className="text-sm font-medium mt-3 mb-1">Solutions:</h5>
            <DocList
              items={[
                <>Verify the repository URL with <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git remote -v</code></>,
                <>Update the remote URL with <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git remote set-url origin correct-url</code></>,
                <>Request access to the repository from its owner</>,
              ]}
            />
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Merge Conflicts">
        <DocParagraph>
          Merge conflicts can prevent CommitStudio from analyzing all commits properly.
        </DocParagraph>
        
        <div className="bg-muted/50 border border-border rounded-md p-4 my-4">
          <h4 className="text-md font-medium mb-2">Error: Merge conflicts</h4>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`error: Your local changes to the following files would be overwritten by checkout:
    filename.ext
Please commit your changes or stash them before you switch branches.
Aborting`}
          </pre>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Causes:</h5>
            <DocList
              items={[
                <>Local uncommitted changes conflict with remote changes</>,
                <>Attempting to switch branches with uncommitted changes</>,
              ]}
            />
            
            <h5 className="text-sm font-medium mt-3 mb-1">Solutions:</h5>
            <DocList
              items={[
                <>Commit your changes: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git commit -am "Your message"</code></>,
                <>Stash your changes: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git stash</code></>,
                <>Discard your changes: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git checkout -- .</code> (use with caution)</>,
              ]}
            />
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Network and Connection Issues">
        <DocParagraph>
          Network issues can prevent CommitStudio from communicating with Git servers.
        </DocParagraph>
        
        <div className="bg-muted/50 border border-border rounded-md p-4 my-4">
          <h4 className="text-md font-medium mb-2">Error: Network connection issues</h4>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`fatal: unable to access 'https://github.com/username/repo.git/': 
Failed to connect to github.com port 443: Connection timed out`}
          </pre>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Causes:</h5>
            <DocList
              items={[
                <>Internet connection is down</>,
                <>Proxy or firewall is blocking Git traffic</>,
                <>GitHub (or other Git service) is experiencing an outage</>,
              ]}
            />
            
            <h5 className="text-sm font-medium mt-3 mb-1">Solutions:</h5>
            <DocList
              items={[
                <>Check your internet connection</>,
                <>Configure Git to use a proxy if needed: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git config --global http.proxy http://proxy-url:port</code></>,
                <>Check service status pages (e.g., https://www.githubstatus.com/)</>,
                <>Use CommitStudio offline mode: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --offline</code></>,
              ]}
            />
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Permission Errors">
        <DocParagraph>
          Permission issues can prevent CommitStudio from reading or writing Git data.
        </DocParagraph>
        
        <div className="bg-muted/50 border border-border rounded-md p-4 my-4">
          <h4 className="text-md font-medium mb-2">Error: Permission denied</h4>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`fatal: could not create work tree dir 'repo': Permission denied`}
          </pre>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Causes:</h5>
            <DocList
              items={[
                <>Insufficient file system permissions</>,
                <>Directory is owned by another user or requires elevated privileges</>,
              ]}
            />
            
            <h5 className="text-sm font-medium mt-3 mb-1">Solutions:</h5>
            <DocList
              items={[
                <>Change to a directory where you have write permissions</>,
                <>Fix permissions: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">chmod -R u+rw .git/</code></>,
                <>On Windows, run as Administrator</>,
              ]}
            />
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Large File Issues">
        <DocParagraph>
          Issues with large files can cause Git operations to fail.
        </DocParagraph>
        
        <div className="bg-muted/50 border border-border rounded-md p-4 my-4">
          <h4 className="text-md font-medium mb-2">Error: Large file size limits</h4>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`error: RPC failed; curl 18 transfer closed with outstanding read data remaining
fatal: the remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed`}
          </pre>
          
          <div className="mt-4">
            <h5 className="text-sm font-medium mb-1">Causes:</h5>
            <DocList
              items={[
                <>Repository contains large files</>,
                <>Network buffer size is too small</>,
                <>GitHub file size limits exceeded</>,
              ]}
            />
            
            <h5 className="text-sm font-medium mt-3 mb-1">Solutions:</h5>
            <DocList
              items={[
                <>Increase Git buffer size: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git config --global http.postBuffer 524288000</code></>,
                <>Use Git LFS for large files</>,
                <>Shallow clone if you only need recent history: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git clone --depth=1 repo-url</code></>,
                <>Configure CommitStudio to exclude large files: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --ignore "*.zip,*.iso,*.bin"</code></>,
              ]}
            />
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Debugging Git Issues">
        <DocParagraph>
          When encountering Git issues with CommitStudio, you can use these debugging techniques:
        </DocParagraph>
        
        <DocList
          items={[
            <>Enable verbose Git output: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">commitstudio --verbose --debug</code></>,
            <>Check Git version and configuration: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git --version && git config --list</code></>,
            <>Test Git operations manually outside of CommitStudio</>,
            <>Check Git logs: <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded text-sm">git log --oneline</code> to see if the repository history is intact</>,
          ]}
        />
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/common-issues", label: "Common Issues" },
          { href: "/docs/github-api-rate-limits", label: "GitHub API Rate Limits" },
          { href: "/docs/configuration-options", label: "Configuration Options" },
        ]}
      />
      
      </div>
  )
} 