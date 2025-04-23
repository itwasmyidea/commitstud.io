"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { packageManagers } from "@/lib/content"

// Text morphing animation component
const MorphingText = ({ text }: { text: string }) => {
  const previousText = useRef(text);
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (text === previousText.current) return;
    
    setIsAnimating(true);
    
    // First scramble the text
    const scrambleInterval = setInterval(() => {
      const currentText = displayText.split('');
      const nextText = text.split('');
      const maxLength = Math.max(currentText.length, nextText.length);
      
      const scrambledChars: string[] = [];
      for (let i = 0; i < maxLength; i++) {
        // If we're still scrambling this character
        if (isAnimating && i < currentText.length && i < nextText.length && currentText[i] !== nextText[i]) {
          // Random character from a set of coding symbols
          const symbols = "abcdefghijklmnopqrstuvwxyz-_/@$%&*()+=0123456789";
          scrambledChars.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
        } else if (i < nextText.length) {
          // Use the target character
          scrambledChars.push(nextText[i]);
        }
      }
      
      setDisplayText(scrambledChars.join(''));
    }, 30);
    
    // After a short time, set the final text
    setTimeout(() => {
      clearInterval(scrambleInterval);
      setDisplayText(text);
      setIsAnimating(false);
      previousText.current = text;
    }, 300);
    
    return () => clearInterval(scrambleInterval);
  }, [text]);
  
  return (
    <span className="font-mono">
      {displayText}
    </span>
  );
};

interface PackageInstallerProps {
  onCopied?: () => void;
}

export default function PackageInstaller({ onCopied }: PackageInstallerProps = {}) {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'bun'>('npm')
  const [copied, setCopied] = useState(false)
  const [isGlobal, setIsGlobal] = useState(true)
  
  const getInstallCommand = (packageManager: 'npm' | 'pnpm' | 'bun', global: boolean) => {
    return global ? packageManagers[packageManager].global : packageManagers[packageManager].local;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(getInstallCommand(activeTab, isGlobal))
    setCopied(true)
    if (onCopied) onCopied();
    setTimeout(() => setCopied(false), 2000)
  }

  const currentCommand = getInstallCommand(activeTab, isGlobal);

  return (
    <div className="w-full">
      <div className="backdrop-blur-lg rounded-[0.75rem] overflow-hidden bg-zinc-800/20 p-px border border-black/20 shadow-lg shadow-blue-500/5 w-full">
        <div className="flex rounded-t-[0.75rem] overflow-hidden border-b border-zinc-700/30">
          {(['npm', 'pnpm', 'bun'] as const).map((tab) => (
            <motion.button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className={`relative flex-1 py-3 text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'text-white bg-zinc-800/40' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/20'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600" 
                  initial={false}
                  transition={{ type: 'spring', duration: 0.6, bounce: 0.15 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Command display area with morphing text effect */}
        <div className="flex items-center justify-between bg-zinc-900/90 p-4 rounded-b-[0.75rem]">
          <div className="text-sm text-blue-400 select-all overflow-hidden">
            <MorphingText text={currentCommand} />
          </div>
          <motion.button 
            onClick={handleCopy} 
            className="ml-3 text-zinc-400 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-500/10"
            aria-label="Copy to clipboard"
            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={copied ? { scale: [0.8, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {copied ? <Check className="w-5 h-5 text-blue-500" /> : <Copy className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>
      </div>
      
      {/* Apple-style toggle for global installation - now right-aligned and smaller */}
      <div className="mt-2 flex items-center justify-end">
        <button 
          onClick={() => setIsGlobal(!isGlobal)} 
          className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            isGlobal ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-zinc-700'
          }`}
          role="switch"
          aria-checked={isGlobal}
          type="button"
        >
          <span className="sr-only">Install globally</span>
          <span 
            aria-hidden="true" 
            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
              isGlobal ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
        <span className="ml-2 text-xs text-zinc-500">
          Install globally
          <span className="ml-1 text-[9px] opacity-70">(recommended)</span>
        </span>
      </div>
    </div>
  )
} 