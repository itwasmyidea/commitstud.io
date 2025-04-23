"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Book, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import PackageInstaller from '@/components/ui/package-installer'
import { Button } from '@/components/ui/button'
import { packageManagers } from '@/lib/content'

interface InstallationFlowProps {
  isOpen: boolean
  onClose: () => void
  onScrollTo: (id: string) => void
}

export default function InstallationFlow({ isOpen, onClose, onScrollTo }: InstallationFlowProps) {
  const [step, setStep] = useState(1)
  const [copied, setCopied] = useState(false)
  const [optionsExpanded, setOptionsExpanded] = useState(false)
  const flowRef = useRef<HTMLDivElement>(null)
  
  // Reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setCopied(false)
    }
  }, [isOpen])
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }
  
  // Handle step navigation
  const goToNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
      setCopied(false)
    } else {
      // On last step, close and scroll to docs
      onClose()
      onScrollTo('documentation')
    }
  }
  
  const goToPrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      setCopied(false)
    }
  }
  
  // When step changes, scroll to top of modal
  useEffect(() => {
    if (flowRef.current) {
      flowRef.current.scrollTop = 0
    }
  }, [step])
  
  // When copied, automatically go to next step after a delay
  useEffect(() => {
    if (copied && step === 1) {
      const timer = setTimeout(() => {
        goToNextStep()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [copied, step])
  
  const goToHowItWorks = () => {
    onClose()
    onScrollTo('how-it-works')
  }
  
  // Toggle options expansion
  const toggleOptions = () => {
    setOptionsExpanded(!optionsExpanded)
  }
  
  // Render step content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Step 1: Install CommitStudio</h2>
            <p className="text-zinc-400">
              Choose your preferred package manager to install CommitStudio. We recommend using the global install option for CLI tools.
            </p>
            
            <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg w-full">
              <PackageInstaller onCopied={() => setCopied(true)} />
            </div>
            
            <div 
              className="rounded-xl border border-black/20 bg-zinc-900/80 overflow-hidden"
              onClick={toggleOptions}
            >
              <div className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-zinc-800/50 transition-colors">
                <h3 className="text-sm font-medium text-blue-400 flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">?</span>
                  Installation Options Explained
                </h3>
                {optionsExpanded ? (
                  <ChevronUp className="h-4 w-4 text-zinc-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-zinc-500" />
                )}
              </div>
              
              <AnimatePresence>
                {optionsExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-4 text-sm text-zinc-400 mt-4">
                      <p><strong className="text-blue-400 mt-2">Global (-g):</strong> Installs CommitStudio as a system-wide command. Recommended for most users so you can run the command from any directory.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <Button 
                variant="ghost" 
                onClick={onClose} 
                className="text-zinc-500 hover:text-zinc-300 gap-2"
              >
                Skip
              </Button>
              <Button 
                onClick={goToNextStep} 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-white gap-2 rounded-full"
                disabled={!copied}
              >
                {copied ? 'Continue' : 'Copy command first'} 
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Step 2: Run CommitStudio</h2>
            <p className="text-zinc-400">
              After installation, you can run CommitStudio in any Git repository to analyze your commits and get AI-powered feedback.
            </p>
            
            <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg space-y-4">
              <div className="font-mono bg-zinc-950 text-zinc-300 p-4 rounded-lg flex items-center">
                <span className="text-zinc-500 mr-2">$</span>
                <span>cd /path/to/your/repo</span>
              </div>
              <div className="font-mono bg-zinc-950 text-zinc-300 p-4 rounded-lg flex items-center">
                <span className="text-zinc-500 mr-2">$</span>
                <span>commitstudio</span>
              </div>
              <div className="bg-zinc-950/50 text-sm p-4 rounded-lg border border-zinc-800/50">
                <p className="text-zinc-500 mb-2">CommitStudio will:</p>
                <ul className="text-zinc-400 space-y-1 ml-4 list-disc">
                  <li>Detect your Git repository</li>
                  <li>Analyze your commit history</li>
                  <li>Generate AI-powered code reviews</li>
                  <li>Provide feedback directly in your terminal</li>
                  <li>Optionally post comments to GitHub PRs</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <Button 
                variant="ghost" 
                onClick={goToPrevStep} 
                className="text-zinc-500 hover:text-zinc-300 gap-2"
              >
                Back
              </Button>
              <Button 
                onClick={goToHowItWorks} 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-white gap-2 rounded-full"
              >
                See it in action 
              </Button>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Step 3: Need Help?</h2>
            <p className="text-zinc-400">
              If you have any questions or need assistance, we're here to help. Check out our documentation or reach out to us directly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Book className="text-blue-400 h-5 w-5" />
                  <h3 className="text-lg font-medium text-white">Documentation</h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Our comprehensive documentation covers installation, usage, configuration options, and more.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => onScrollTo('documentation')} 
                  className="w-full border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800"
                >
                  View Documentation
                </Button>
              </div>
              
              <div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400 h-5 w-5" />
                  <h3 className="text-lg font-medium text-white">Contact Us</h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Have specific questions or need personalized assistance? Feel free to reach out.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = 'mailto:info@commitstud.io'} 
                  className="w-full border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800"
                >
                  info@commitstud.io
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <Button 
                variant="ghost" 
                onClick={goToPrevStep} 
                className="text-zinc-500 hover:text-zinc-300 gap-2"
              >
                Back
              </Button>
              <Button 
                onClick={onClose} 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-white gap-2 rounded-full"
              >
                Get Started
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-zinc-900 rounded-[0.75rem] w-full max-w-2xl max-h-[90vh] shadow-xl border border-zinc-800 overflow-hidden relative"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-2">
                {/* Step indicators */}
                <div className="flex gap-1">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`h-2 w-2 rounded-full ${
                        s === step ? 'bg-gradient-to-r from-blue-500 to-blue-600' : s < step ? 'bg-zinc-600' : 'bg-zinc-800'
                      }`}
                    />
                  ))}
                </div>
                <h2 className="text-sm font-medium text-zinc-400">Step {step} of 3</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/70 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]" ref={flowRef}>
              {renderStepContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 