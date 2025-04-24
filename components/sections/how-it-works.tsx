"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls, useInView, useScroll, useTransform } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Terminal, GitBranch, Zap } from "lucide-react"
import { howItWorksSteps } from "@/lib/content"
import { useIsMobile } from "@/hooks/use-mobile"

interface Step {
  title: string
  description: string
  icon: React.ReactNode
  code?: string
  details?: string[]
}

export default function HowItWorksSection() {
  const steps: Step[] = [
    {
      title: howItWorksSteps[0].title,
      description: howItWorksSteps[0].description,
      icon: <Terminal className="w-5 h-5" />,
      code: howItWorksSteps[0].code
    },
    {
      title: howItWorksSteps[1].title,
      description: howItWorksSteps[1].description,
      icon: <GitBranch className="w-5 h-5" />,
      code: howItWorksSteps[1].code
    },
    {
      title: howItWorksSteps[2].title,
      description: howItWorksSteps[2].description,
      icon: <Zap className="w-5 h-5" />,
      details: howItWorksSteps[2].details
    }
  ]
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section id="how-it-works" className="py-20 overflow-hidden" ref={sectionRef}>
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-3xl font-semibold tracking-tighter mb-3 brand-gradient-text"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-base max-w-2xl mx-auto"
          >
            Elevate your development workflow with a seamless experience
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connection line with fade-in effect */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block" 
            initial={{ opacity: 0, height: 0 }}
            animate={isInView ? { opacity: 1, height: '100%' } : { opacity: 0, height: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <StepCard 
                key={index} 
                step={step} 
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function StepCard({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0
  
  return (
    <div className="relative" ref={ref}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -3 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className={`relative md:w-[calc(50%-1.5rem)] p-6 rounded-[0.75rem] border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shadow-xl z-10 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
      >
        {/* Center connector line */}
        <div 
          className={`absolute hidden md:block h-[1px] bg-gradient-to-r ${isEven ? ' from-zinc-800 to-zinc-800/0' : ' from-zinc-800/0 to-zinc-800'} z-20`}
          style={{ 
            top: '50%',
            left: isEven ? 'auto' : '-24px',
            right: isEven ? '-24px' : 'auto',
            width: '24px'
          }}
        />
        
        <div className="flex items-start gap-3">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <div className="text-white">
              {step.icon}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium text-white mb-1">{step.title}</h3>
            <p className="text-zinc-400 text-sm mb-3">{step.description}</p>
            
            {step.code && (
              <div className="overflow-hidden rounded-md bg-zinc-950 border border-zinc-800">
                <div 
                  className="p-3 font-mono text-xs text-blue-400 overflow-x-auto"
                >
                  {step.code}
                </div>
              </div>
            )}
            
            {step.details && (
              <div className="mt-3 space-y-1">
                {step.details.map((detail, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-2 text-xs"
                  >
                    <div className="text-blue-400 mt-0.5">•</div>
                    <div className="text-zinc-400">{detail}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
} 