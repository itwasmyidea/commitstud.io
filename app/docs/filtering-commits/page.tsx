"use client"

import { DocHeading, DocSection, DocParagraph, DocList, NextSteps, DocPrevNext } from "@/components/ui/doc-components"
import { getPageNavigation } from "../client-layout"
import { usePathname } from "next/navigation"


export default function FilteringCommitsPage() {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <div className="space-y-6">
      <DocHeading>Filtering Commits</DocHeading>
      
      <DocSection>
        <DocParagraph>
          CommitStudio allows you to filter which commits are analyzed. This is useful for
          focusing on specific changes, reducing the number of API calls, or analyzing
          a particular part of your project's history.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Available Filters">
        <DocParagraph>
          CommitStudio offers several ways to filter commits:
        </DocParagraph>
        
        <div className="overflow-hidden border rounded-md">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-foreground">Filter</th>
                <th className="px-4 py-2 text-left font-medium text-foreground">Description</th>
                <th className="px-4 py-2 text-left font-medium text-foreground">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--days</td>
                <td className="px-4 py-3 text-muted-foreground">Analyze commits from the past N days</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--days 7</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--branch</td>
                <td className="px-4 py-3 text-muted-foreground">Analyze commits from a specific branch</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--branch feature/new-feature</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--pr</td>
                <td className="px-4 py-3 text-muted-foreground">Analyze commits from a pull request</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--pr 123</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--author</td>
                <td className="px-4 py-3 text-muted-foreground">Filter by commit author</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--author johndoe</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--since</td>
                <td className="px-4 py-3 text-muted-foreground">Analyze commits after a date</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--since 2023-01-01</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--until</td>
                <td className="px-4 py-3 text-muted-foreground">Analyze commits before a date</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--until 2023-12-31</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--limit</td>
                <td className="px-4 py-3 text-muted-foreground">Limit to N most recent commits</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--limit 5</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-primary">--commit</td>
                <td className="px-4 py-3 text-muted-foreground">Analyze a specific commit</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">--commit abc1234</td>
              </tr>
            </tbody>
          </table>
          </div>
      </DocSection>
      
      <DocSection title="Combining Filters">
        <DocParagraph>
          You can combine multiple filters to narrow down the commits even further:
        </DocParagraph>
        
        <div className="bg-muted rounded-md p-4 my-4 font-mono text-sm">
          commitstudio --branch main --days 7 --author johndoe
          </div>
        
        <DocParagraph>
          This command would analyze commits from the 'main' branch made by 'johndoe' in the last 7 days.
        </DocParagraph>
      </DocSection>
      
      <DocSection title="Filter Precedence">
        <DocParagraph>
          When multiple filters are used, CommitStudio applies them in the following order:
        </DocParagraph>
        
        <DocList
          type="number"
          items={[
            <>If <code className="bg-muted px-1 py-0.5 rounded text-sm">--commit</code> is specified, only that specific commit is analyzed</>,
            <>If <code className="bg-muted px-1 py-0.5 rounded text-sm">--pr</code> is specified, only commits from that pull request are considered</>,
            <>Otherwise, commits are filtered based on <code className="bg-muted px-1 py-0.5 rounded text-sm">--branch</code></>,
            <>Remaining filters (<code className="bg-muted px-1 py-0.5 rounded text-sm">--author</code>, <code className="bg-muted px-1 py-0.5 rounded text-sm">--since</code>, <code className="bg-muted px-1 py-0.5 rounded text-sm">--until</code>, <code className="bg-muted px-1 py-0.5 rounded text-sm">--days</code>) are applied</>,
            <>Finally, <code className="bg-muted px-1 py-0.5 rounded text-sm">--limit</code> is applied to cap the number of commits if specified</>,
          ]}
        />
      </DocSection>
      
      <DocSection title="Example Usage">
        <h3 className="text-md font-medium mb-2 mt-4">Analyze Recent Commits</h3>
        <div className="bg-muted rounded-md p-4 my-2 font-mono text-sm">
          commitstudio --days 3
          </div>
        <p className="text-sm text-muted-foreground mt-1 mb-4">Analyzes commits from the last 3 days</p>
        
        <h3 className="text-md font-medium mb-2 mt-4">Analyze a Pull Request</h3>
        <div className="bg-muted rounded-md p-4 my-2 font-mono text-sm">
          commitstudio --pr 123
          </div>
        <p className="text-sm text-muted-foreground mt-1 mb-4">Analyzes all commits in pull request #123</p>
        
        <h3 className="text-md font-medium mb-2 mt-4">Analyze a Feature Branch</h3>
        <div className="bg-muted rounded-md p-4 my-2 font-mono text-sm">
          commitstudio --branch feature/new-ui --limit 10
          </div>
        <p className="text-sm text-muted-foreground mt-1 mb-4">Analyzes the 10 most recent commits on the feature/new-ui branch</p>
        
        <h3 className="text-md font-medium mb-2 mt-4">Analyze a Date Range</h3>
        <div className="bg-muted rounded-md p-4 my-2 font-mono text-sm">
          commitstudio --since 2023-06-01 --until 2023-06-30
          </div>
        <p className="text-sm text-muted-foreground mt-1 mb-4">Analyzes commits made during June 2023</p>
      </DocSection>
      
      <NextSteps
        links={[
          { href: "/docs/standard-mode", label: "Standard Mode" },
          { href: "/docs/yolo-mode", label: "YOLO Mode" },
          { href: "/docs/command-line-reference", label: "Command Line Reference" },
        ]}
      />
      </div>
  )
} 