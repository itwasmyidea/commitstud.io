"use client"

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check, Download, Terminal } from "lucide-react"
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

export interface PackageInstallerHandle {
  getCurrentCommand: () => string;
}

interface PackageInstallerProps {
  onCopied?: () => void;
}

const PackageInstaller = forwardRef<PackageInstallerHandle, PackageInstallerProps>(({ onCopied }, ref) => {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'bun'>('npm')
  const [copied, setCopied] = useState(false)
  const [installType, setInstallType] = useState<'quick' | 'global'>('quick')
  
  const getInstallCommand = (packageManager: 'npm' | 'pnpm' | 'bun', type: 'quick' | 'global') => {
    return packageManagers[packageManager][type];
  }

  // Expose getCurrentCommand to parent component
  useImperativeHandle(ref, () => ({
    getCurrentCommand: () => getInstallCommand(activeTab, installType)
  }));

  const handleCopy = () => {
    navigator.clipboard.writeText(getInstallCommand(activeTab, installType))
    setCopied(true)
    if (onCopied) onCopied();
    setTimeout(() => setCopied(false), 2000)
  }

  const currentCommand = getInstallCommand(activeTab, installType);

  return (
    <div className="w-full">
      <div className="backdrop-blur-lg rounded-lg overflow-hidden bg-zinc-800/20 p-px  shadow-lg shadow-blue-500/5 w-full">
        {/* Command display area with morphing text effect */}
        <div className="flex items-center justify-between bg-zinc-900/90 p-4 rounded-t-lg">
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
        
        {/* Bottom controls area */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/60 border-t border-zinc-700/20 rounded-b-lg">
          {/* Package manager tabs */}
          <div className="flex space-x-2">
            {(['npm', 'pnpm', 'bun'] as const).map((tab) => (
              <motion.button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`py-1 px-2 text-xs rounded-md transition-all ${
                  activeTab === tab 
                    ? 'text-white bg-blue-600/20 border border-blue-500/30' 
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700/30 border border-transparent'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          
          {/* Installation type selector - improved design */}
          <div className="relative flex items-center rounded-md bg-zinc-700/40 ring-2 ring-zinc-900/30">
            <div 
              className="absolute top-0.5 bottom-0.5 bg-blue-500 ring-blue-500 h-[calc(100%-4px)]" 
              style={{ 
                left: 2,
                width: 'calc(50% - 4px)',
                borderRadius: '0.25rem',
                transform: `translateX(${installType === 'quick' ? '0%' : 'calc(100% + 4px)'})`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
              }}
            />
            <button
              onClick={() => setInstallType('quick')}
              className={`z-10 relative py-1 px-3 text-xs min-w-[60px] flex items-center hover:text-white transition-all duration-500 justify-center ${
                installType === 'quick' ? 'text-white' : 'text-zinc-400'
              }`}
            >
              <Terminal className="w-3 h-3 mr-1 inline-flex" />
              Run
            </button>
            <button
              onClick={() => setInstallType('global')}
              className={`z-10 relative py-1 px-3 text-xs min-w-[60px] flex items-center hover:text-white transition-all duration-500 justify-center ${
                installType === 'global' ? 'text-white' : 'text-zinc-400'
              }`}
            >
              <Download className="w-3 h-3 mr-1 inline-flex" />
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

PackageInstaller.displayName = 'PackageInstaller';

export default PackageInstaller; 