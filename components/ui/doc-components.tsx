import React from "react"
import Link from "next/link"

interface DocHeadingProps {
  children: React.ReactNode
  id?: string
}

export function DocHeading({ children, id }: DocHeadingProps) {
  return (
    <h1 id={id} className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
      {children}
    </h1>
  )
}

interface DocSectionProps {
  children: React.ReactNode
  title?: React.ReactNode
  id?: string
}

export function DocSection({ children, title, id }: DocSectionProps) {
  return (
    <section className="space-y-4 mb-8">
      {title && (
        <h2 id={id} className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

interface DocParagraphProps {
  children: React.ReactNode
}

export function DocParagraph({ children }: DocParagraphProps) {
  return (
    <p className="leading-7 text-muted-foreground">
      {children}
    </p>
  )
}

interface NextStepsProps {
  title?: string
  description?: string
  links: {
    href: string
    label: string
  }[]
}

export function NextSteps({ 
  title = "Next Steps", 
  description = "After completing this section, you can proceed to:",
  links 
}: NextStepsProps) {
  return (
    <section className="space-y-4 mt-10">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-3">{title}</h3>
        {description && (
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
        )}
        <ul className="space-y-2 pl-1">
          {links.map((link) => (
            <li key={link.href} className="px-2 py-1 hover:bg-primary/5 rounded-md transition-colors">
              <Link href={link.href} className="text-primary hover:underline flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

interface DocPrevNextProps {
  prev?: {
    href: string;
    label: string;
  };
  next?: {
    href: string;
    label: string;
  };
}

export function DocPrevNext({ prev, next }: DocPrevNextProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4 mt-8">
      {prev ? (
        <Link 
          href={prev.href} 
          className="group flex flex-col items-start p-3 sm:p-4 flex-1 border rounded-lg hover:border-primary transition-colors hover:bg-primary/5"
        >
          <span className="text-xs sm:text-sm text-muted-foreground flex items-center mb-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Previous
          </span>
          <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">{prev.label}</span>
        </Link>
      ) : (
        <div className="flex-1"></div>
      )}
      {next ? (
        <Link 
          href={next.href} 
          className="group flex flex-col items-end text-right p-3 sm:p-4 flex-1 border rounded-lg hover:border-primary transition-colors hover:bg-primary/5"
        >
          <span className="text-xs sm:text-sm text-muted-foreground flex items-center justify-end mb-1">
            Next
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">{next.label}</span>
        </Link>
      ) : (
        <div className="flex-1"></div>
      )}
    </div>
  )
}

interface QuickNavProps {
  sections: {
    title: string
    links: {
      href: string
      label: string
    }[]
  }[]
}

export function QuickNav({ sections }: QuickNavProps) {
  return (
    <section className="space-y-4 mt-10">
      <div className="bg-accent/20 border border-accent rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Quick Navigation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-foreground mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href} className="px-2 py-1 hover:bg-accent/10 rounded-md transition-colors">
                    <Link href={link.href} className="text-primary hover:underline flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface DocListProps {
  items: React.ReactNode[]
  type?: "bullet" | "number"
}

export function DocList({ items, type = "bullet" }: DocListProps) {
  const listClass = "space-y-2 text-muted-foreground pl-6";
  
  if (type === "number") {
    return (
      <ol className={`list-decimal ${listClass}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  }
  
  return (
    <ul className={`list-disc ${listClass}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
} 