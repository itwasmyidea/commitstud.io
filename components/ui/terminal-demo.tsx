"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const TerminalDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [replay, setReplay] = useState(0)
  const terminalContentRef = useRef<HTMLDivElement>(null)
  const [terminalHeight, setTerminalHeight] = useState(400) // Set a fixed initial height
  const isMobile = useIsMobile()
  
  // Command is pre-typed
  const commandLine = "$ commitstudio"
  
  // Response stages with natural delays
  const [currentStage, setCurrentStage] = useState(0)
  const stageDelays = [
    300,  // Very short delay after command
    1200,  // Repository detection
    300,  // Found commits
    300,  // Analyzing diffs
    1200,  // Analyzing commit 1
    300,  // Analyzing commit 2
    300,  // Analyzing commit 3
    300,  // Analyzing commit 4
    300,  // Posting comments
    1200,  // Comment 1
    300,  // Comment 2
    300,  // Comment 3
    300,  // Comment 4
    300,  // Success message
  ]
  
  // More realistic response with staged appearance
  const response = [
    "✓ Repository detected: my-awesome-project",
    "✓ Found 7 commits to analyze (3 already processed)",
    "✓ Analyzing diffs with AI...",
    "  ↪ Analyzing commit 1/4: Add user authentication",
    "  ↪ Analyzing commit 2/4: Fix pagination bug",
    "  ↪ Analyzing commit 3/4: Implement search feature",
    "  ↪ Analyzing commit 4/4: Update dependencies",
    "✓ Posting comments to GitHub...",
    "  ↪ Posted comment on commit a1b2c3d",
    "  ↪ Posted comment on commit e4f5g6h",
    "  ↪ Posted comment on commit i7j8k9l",
    "  ↪ Posted comment on commit m0n1o2p",
    "✓ CommitStudio completed successfully!"
  ]
  
  // Start the response animation immediately
  useEffect(() => {
    // Start the response immediately after initial render
    const timer = setTimeout(() => {
      setCurrentStage(1)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [replay])
  
  // Reset animation on replay click
  const handleReplay = () => {
    // Just reset animation state
    setIsAnimating(true)
    setCurrentStage(0)
    setReplay(prev => prev + 1)
    setIsAnimationComplete(false)
    
    // Start first response after a short delay
    setTimeout(() => {
      setIsAnimating(false)
      setCurrentStage(1)
    }, 300)
  }

  // Add state to track if animation is complete
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  
  // Reset animation complete state when replay changes
  useEffect(() => {
    setIsAnimationComplete(false)
  }, [replay])

  // Effect to advance through stages with natural delays
  useEffect(() => {
    if (!isAnimating && currentStage > 0 && currentStage < response.length) {
      const timer = setTimeout(() => {
        setCurrentStage(prev => prev + 1)
        
        // When all stages are complete
        if (currentStage === response.length - 1) {
          setIsAnimationComplete(true)
        }
      }, stageDelays[currentStage] || 500)
      
      return () => clearTimeout(timer)
    }
  }, [isAnimating, currentStage, response.length, stageDelays])

  // Effect to update height when animation is complete
  useEffect(() => {
    if (isAnimationComplete && terminalContentRef.current) {
      const height = terminalContentRef.current.getBoundingClientRect().height
      if (height > 0) {
        setTerminalHeight(Math.max(height, isMobile ? 320 : 400)) // Shorter min-height on mobile
      }
    }
  }, [isAnimationComplete, isMobile])

  // Add custom styles for terminal placement
  useEffect(() => {
    // Add custom CSS for the hero terminal
    const style = document.createElement('style')
    style.innerHTML = `
      @media (min-width: 1024px) {
        .hero-terminal {
          width: 150%;
          max-width: none;
          transform: translateX(-15%);
        }
      }
      
      @media (max-width: 1023px) {
        .hero-terminal {
          width: 90%;
          max-width: 500px;
          margin: 0 auto;
          transform: none;
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  
  // Helper to get line styling
  const getLineStyle = (line: string) => {
    if (line.startsWith("✓")) return "text-green-400 font-medium"
    if (line.startsWith("  ↪")) return "text-zinc-400 ml-4 md:ml-6"
    return "text-zinc-300"
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-4xl mx-auto bg-zinc-950 rounded-[0.75rem] overflow-hidden shadow-2xl border border-zinc-800 relative hero-terminal"
    >
      <div className="flex items-center justify-between p-3 md:p-4 bg-zinc-900">
        <div className="flex items-center">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-3 md:ml-4 text-zinc-400 text-xs md:text-sm">Terminal</div>
        </div>
        {isAnimationComplete && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 md:h-8 md:w-8 text-zinc-400 hover:text-white" 
            onClick={handleReplay}
            title="Replay animation"
          >
            <RefreshCcw className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
        )}
      </div>
      <div 
        className="text-zinc-300 font-mono text-2xs md:text-xs lg:text-sm relative overflow-hidden p-4 md:p-6"
        style={{ minHeight: `${terminalHeight}px` }}
      >
        <div ref={terminalContentRef} className="overflow-hidden">
          <div key={replay}>
            {/* Command is already typed */}
            <p className="mb-3 md:mb-4 flex">
              <span className="text-white mr-2">$</span>
              <span className="whitespace-nowrap">
                commitstudio
              </span>
              
              {/* Blinking cursor for initial state */}
              {currentStage === 0 && (
              <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1.5 md:w-2 h-3 md:h-4 bg-white ml-1"
                />
                )}
            </p>
            
            {/* Response typing animation with staged appearance */}
            <AnimatePresence>
              {currentStage > 0 && (
                <div>
                  {response.slice(0, currentStage).map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.2,
                        ease: "easeOut"
                      }}
                      className={`${getLineStyle(line)} whitespace-pre-wrap break-words md:whitespace-nowrap mb-0.5 md:mb-1 text-xs md:text-sm`}
                    >
                      {line}
                    </motion.p>
                  ))}
                  
                  {/* Show typing indicators at current stage */}
                  {currentStage < response.length && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="h-3 md:h-4 text-white/50 text-xs"
                    >
                    </motion.div>
                  )}
                </div>
              )}
            </AnimatePresence>
            
            {/* Final blinking cursor */}
            {isAnimationComplete && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-3 md:mt-4 flex items-center"
              >
                <span className="text-white mr-2">$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-1.5 md:w-2 h-3 md:h-4 bg-white"
                />
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TerminalDemo 