"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, Check } from "lucide-react"
import TerminalDemo from "@/components/ui/terminal-demo"
import { Container } from "@/components/ui/container"
import PackageInstaller from "@/components/ui/package-installer"
import { heroContent } from "@/lib/content"
import { packageManagers } from "@/lib/content"

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  
  // Title reveal effects
  const titleWords = heroContent.title

  // Handle copy for Get Started button
  const handleCopyInstallCommand = () => {
    // Copy npm global command by default
    navigator.clipboard.writeText(packageManagers.npm.global)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={heroRef} className="relative py-12 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/20 to-zinc-950 z-0"></div>
      
      {/* Main content */}
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <motion.div 
            ref={contentRef} 
            className="max-w-2xl lg:w-1/2 text-center lg:text-left lg:pr-8 mb-10 lg:mb-0"
          >
            <div className="mb-8">
              <motion.h1
                className="text-4xl mt-2 md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight"
              >
                <div className="flex flex-wrap lg:justify-start justify-center gap-x-3 gap-y-1">
                  {titleWords.slice(0, 4).map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.1 * i,
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
                <div className="h-1 md:h-2"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="mt-1 brand-gradient-text"
                >
                  <div className="flex flex-wrap lg:justify-start justify-center gap-x-3 gap-y-1 leading-[1.2] -mt-4">
                    {titleWords.slice(4).map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-400 text-lg max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {heroContent.description}
            </motion.p>

            {/* Package Installer Component */}
            <PackageInstaller />

            {/* Call to action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-white rounded-full text-sm py-5 px-7 shadow-lg shadow-blue-500/20 relative overflow-hidden group w-full sm:w-auto"
                  onClick={handleCopyInstallCommand}
                >
                  <motion.span 
                    className="absolute inset-0 brand-gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.span className="relative z-10 flex items-center justify-center">
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Install Command
                      </>
                    )}
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-200 hover:bg-zinc-800 rounded-full text-sm py-5 px-7 relative overflow-hidden w-full sm:w-auto"
                  onClick={() => onScrollTo('how-it-works')}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Terminal animation */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-0 lg:overflow-visible">
            <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full lg:overflow-visible flex justify-center lg:justify-start">
              <TerminalDemo />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 