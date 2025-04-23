"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"

export default function NodejsDeprecationWarningsPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Node.js Deprecation Warnings</DocHeading>
      
      <DocSection>
        <DocParagraph>
          When running CommitStudio, you might encounter Node.js deprecation warnings in your console.
          These warnings are typically harmless but can be confusing. This page explains what these warnings mean,
          why they appear, and how to address or suppress them.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Understanding Deprecation Warnings">
        <DocParagraph>
          Node.js deprecation warnings appear when the code uses APIs, methods, or features that are planned to be
          removed in future Node.js versions. They serve as notifications to developers that they should update their
          code to use newer alternatives.
        </DocParagraph>
        
        <DocParagraph>
          A typical Node.js deprecation warning looks like this:
        </DocParagraph>
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`(node:12345) [DEP0123] DeprecationWarning: Something is deprecated. Use something else instead.
    at Object.<anonymous> (/path/to/file.js:10:20)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    ...`}
        </pre>
        
        <DocParagraph>
          These warnings don't affect functionality immediately but indicate that future Node.js versions
          might remove or change the deprecated features.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Common Deprecation Warnings">
        <DocParagraph>
          Here are some common deprecation warnings you might see when using CommitStudio and their explanations:
        </DocParagraph>
        
        <div className="space-y-6">
          <div className="bg-muted/50 border border-border rounded-md p-4">
            <h4 className="text-md font-medium mb-2">[DEP0128] DeprecationWarning: Invalid 'main' field</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Some dependencies in the project have invalid entries in their package.json files. This doesn't 
              affect CommitStudio's functionality.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Resolution: This is usually an issue with third-party dependencies and can be ignored.
            </p>
          </div>
          
          <div className="bg-muted/50 border border-border rounded-md p-4">
            <h4 className="text-md font-medium mb-2">[DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated</h4>
            <p className="text-sm text-muted-foreground mb-2">
              This appears when using older HTTP client libraries that access deprecated internal properties.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Resolution: Usually resolved by updating dependencies. CommitStudio handles this internally in newer versions.
            </p>
          </div>
          
          <div className="bg-muted/50 border border-border rounded-md p-4">
            <h4 className="text-md font-medium mb-2">[DEP0106] DeprecationWarning: crypto.createCipher is deprecated</h4>
            <p className="text-sm text-muted-foreground mb-2">
              The older crypto APIs are being deprecated in favor of more secure alternatives.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Resolution: CommitStudio 2.x and later use the updated crypto APIs. This warning may appear
              with older versions or some dependencies.
            </p>
          </div>
          
          <div className="bg-muted/50 border border-border rounded-md p-4">
            <h4 className="text-md font-medium mb-2">[DEP0113] DeprecationWarning: The 'crypto.createCredentials' is deprecated</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Similar to the previous warning, this is related to older crypto APIs being phased out.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Resolution: Update to CommitStudio 2.x or later, which uses the newer recommended APIs.
            </p>
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Impact on CommitStudio">
        <DocParagraph>
          In most cases, these deprecation warnings:
        </DocParagraph>
        
        <DocList
          items={[
            <>Do not affect CommitStudio's functionality</>,
            <>Are often from dependencies, not CommitStudio's core code</>,
            <>Will be addressed in future versions</>,
            <>Can be safely ignored for now</>,
          ]}
        />
        
        <DocParagraph>
          CommitStudio regularly updates its dependencies and codebase to adopt newer APIs and standards,
          which helps reduce these warnings over time.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Suppressing Deprecation Warnings">
        <DocParagraph>
          If the warnings are distracting, you can suppress them in several ways:
        </DocParagraph>
        
        <DocList
          items={[
            <>Run CommitStudio with the NODE_OPTIONS environment variable:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`# On Linux/macOS
NODE_OPTIONS=--no-deprecation commitstudio

# On Windows (PowerShell)
$env:NODE_OPTIONS="--no-deprecation"; commitstudio

# On Windows (CMD)
set NODE_OPTIONS=--no-deprecation && commitstudio`}
              </pre>
            </>,
            <>Suppress only specific deprecation codes:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`# Suppress only DEP0128
NODE_OPTIONS=--no-deprecation=DEP0128 commitstudio`}
              </pre>
            </>,
            <>Create an alias or script in your shell configuration:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`# In .bashrc or .zshrc
alias commitstudio="NODE_OPTIONS=--no-deprecation commitstudio"`}
              </pre>
            </>,
            <>Add it to your CommitStudio configuration, if applicable:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`// In .commitstudiorc.js
module.exports = {
  nodeOptions: '--no-deprecation',
  // Other configuration...
}`}
              </pre>
            </>,
          ]}
        />
        
        <DocParagraph>
          Note that suppressing warnings doesn't fix the underlying deprecations; it only hides the messages.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Updating Node.js">
        <DocParagraph>
          Sometimes, upgrading your Node.js version can help reduce deprecation warnings:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>Check your current Node.js version:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`node --version`}
              </pre>
            </>,
            <>Visit the official Node.js website (https://nodejs.org/) to download the latest LTS version</>,
            <>Install the new version according to your operating system's instructions</>,
            <>Verify the update:
              <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
                {`node --version`}
              </pre>
            </>,
          ]}
        />
        
        <DocParagraph>
          CommitStudio supports Node.js 14.x and later, with best results on LTS (Long-Term Support) versions.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="When to Be Concerned">
        <DocParagraph>
          While most deprecation warnings can be safely ignored, you should pay attention if:
        </DocParagraph>
        
        <DocList
          items={[
            <>CommitStudio crashes or exhibits unexpected behavior</>,
            <>The same warning appears repeatedly with increasing frequency</>,
            <>You're using CommitStudio in production CI/CD pipelines where warnings might affect logs or build processes</>,
            <>You're planning to update to a newer major Node.js version soon</>,
          ]}
        />
        
        <DocParagraph>
          In these cases, consider updating CommitStudio and its dependencies, or contact support for assistance.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Reporting Issues">
        <DocParagraph>
          If you encounter deprecation warnings that cause actual problems, please report them:
        </DocParagraph>
        
        <DocList
          items={[
            <>Include the full warning message and stack trace</>,
            <>Specify your Node.js version and CommitStudio version</>,
            <>Describe any impact on functionality</>,
            <>Submit the report through GitHub issues or the support portal</>,
          ]}
        />
        
        <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm my-4">
          {`# Get CommitStudio version
commitstudio --version

# Get Node.js version
node --version`}
        </pre>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/common-issues", label: "Common Issues" },
          { href: "/docs/installation", label: "Installation Guide" },
          { href: "/docs/git-operation-errors", label: "Git Operation Errors" },
        ]}
      />
      
      <DocPrevNext prev={prev} next={next} />
    </div>
  )
} 