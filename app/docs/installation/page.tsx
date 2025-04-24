"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function InstallationPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);
  
  return (
    <div className="space-y-6">
      <DocHeading>Installation</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio is available as an npm package. You can install it globally to use it across all your projects:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          npm install -g commitstudio
        </div>
        
        <DocParagraph>
          Or with yarn:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          yarn global add commitstudio
        </div>
      </DocSection>
      
      <DocSection title="Verifying Installation">
        <DocParagraph>
          After installation, you can verify that CommitStudio was installed correctly by running:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio --version
        </div>
        
        <DocParagraph>
          This should display the current version of CommitStudio.
        </DocParagraph>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/authentication", label: "Set Up Authentication" },
          { href: "/docs/quick-start", label: "Quick Start Guide" },
        ]}
      />
      
      </div>
  )
} 