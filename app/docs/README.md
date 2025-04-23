# CommitStudio Documentation Site

This folder contains the documentation site for CommitStudio, built with Next.js and using shadcn/ui components.

## Structure

- `/docs/layout.tsx` - The server layout component for metadata
- `/docs/client-layout.tsx` - The client-side layout component for all documentation pages
- `/docs/page.tsx` - The main documentation home page
- `/docs/[section]/page.tsx` - Individual documentation pages
- `/docs/coming-soon/page.tsx` - Template for pages that are still in development
- `/docs/doc-template.txt` - Template for creating new documentation pages

## Adding New Documentation Pages

1. Create a new folder under `/docs` with the URL path you want (e.g., `/docs/new-topic`)
2. Create a `page.tsx` file in the folder based on the `doc-template.txt` template

```tsx
import { Metadata } from "next"
import { DocHeading, DocSection, DocParagraph, DocList, NextSteps } from "@/components/ui/doc-components"

export const metadata: Metadata = {
  title: "Topic Title - CommitStud.io Docs",
  description: "Description of the topic",
}

export default function TopicPage() {
  return (
    <div className="space-y-6">
      <DocHeading>Topic Title</DocHeading>
      
      <DocSection title="Section Title" id="section-id">
        <DocParagraph>
          Your content goes here...
        </DocParagraph>
        
        {/* Add more components as needed */}
      </DocSection>
      
      <NextSteps
        title="Next Steps"
        description="After completing this section, you can proceed to:"
        links={[
          { href: "/docs/related-page", label: "Related Page" },
        ]}
      />
    </div>
  )
}
```

3. Add the path to your new page in the `AVAILABLE_DOCS` array in `middleware.ts`

## Documentation Components

Use the following reusable components from `@/components/ui/doc-components`:

### DocHeading

Main page heading:

```tsx
<DocHeading>Page Title</DocHeading>
```

### DocSection

Content sections with optional titles:

```tsx
<DocSection title="Section Title" id="section-id">
  {/* Content goes here */}
</DocSection>
```

### DocParagraph

Standard paragraph text:

```tsx
<DocParagraph>
  Your paragraph content goes here.
</DocParagraph>
```

### DocList

Bulleted or numbered lists:

```tsx
<DocList
  items={[
    <>Item one with <strong className="text-foreground">strong text</strong></>,
    <>Item two</>,
    <>Item three</>,
  ]}
/>

{/* For numbered lists */}
<DocList
  type="number"
  items={[
    <>Step one</>,
    <>Step two</>,
    <>Step three</>,
  ]}
/>
```

### NextSteps

Navigation section for following steps:

```tsx
<NextSteps
  title="Next Steps"
  description="After completing this section, you can proceed to:"
  links={[
    { href: "/docs/related-page-1", label: "Related Page One" },
    { href: "/docs/related-page-2", label: "Related Page Two" },
  ]}
/>
```

### QuickNav

Multi-column navigation links:

```tsx
<QuickNav
  sections={[
    {
      title: "Section One",
      links: [
        { href: "/docs/page-1", label: "Page One" },
        { href: "/docs/page-2", label: "Page Two" },
      ],
    },
    {
      title: "Section Two",
      links: [
        { href: "/docs/page-3", label: "Page Three" },
        { href: "/docs/page-4", label: "Page Four" },
      ],
    },
  ]}
/>
```

## Components and Styling

### Sections

Use the following structure for content sections:

```tsx
<section className="space-y-4">
  <h2 className="text-2xl font-semibold tracking-tight" id="section-id">Section Title</h2>
  <p className="leading-7 text-gray-700">
    Content goes here...
  </p>
</section>
```

### Code Blocks

For showing code examples:

```tsx
<div className="border rounded-md bg-gray-50">
  <div className="border-b bg-gray-100 px-4 py-2">
    <div className="font-mono text-sm font-medium">Title</div>
  </div>
  <div className="p-4">
    <pre className="bg-zinc-900 text-zinc-100 p-3 rounded-md overflow-x-auto">
      <code>code goes here</code>
    </pre>
  </div>
</div>
```

### Notes and Callouts

For important information:

```tsx
<div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
  <h3 className="text-lg font-medium text-amber-800 mb-2">Important Note</h3>
  <p className="text-amber-700">
    Content goes here...
  </p>
</div>
```

For related content:

```tsx
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
  <h3 className="text-lg font-medium text-blue-800 mb-2">See Also</h3>
  <ul className="space-y-1">
    <li>
      <a href="/docs/related-page" className="text-blue-600 hover:underline">Related Page</a>
    </li>
  </ul>
</div>
```

## Content Sources

The documentation content is based on the `docs.md` file in the root directory. When updating the docs, please update both the markdown file and the corresponding page in this directory. 