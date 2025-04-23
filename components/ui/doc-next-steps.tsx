import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface NextStep {
  title: string
  href: string
  description?: string
}

interface DocNextStepsProps {
  title?: string
  description?: string
  steps: NextStep[]
}

export default function DocNextSteps({ 
  title = "Next Steps",
  description,
  steps 
}: DocNextStepsProps) {
  return (
    <section className="space-y-4 mt-10">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        <div className="grid gap-3">
          {steps.map((step, index) => (
            <Button 
              key={index}
              variant="outline" 
              className="w-full justify-between group bg-background hover:bg-primary/5"
              asChild
            >
              <Link href={step.href}>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{step.title}</span>
                  {step.description && (
                    <span className="text-sm text-muted-foreground">{step.description}</span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
} 