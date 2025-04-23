"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Logo from '@/components/ui/logo'
import { Container } from '@/components/ui/container'
import InstallationFlow from '@/components/ui/installation-flow'
import { navItems } from '@/lib/content'
import Link from 'next/link'

interface NavProps {
  onScrollTo: (id: string) => void
}

const Nav = ({ onScrollTo }: NavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [installFlowOpen, setInstallFlowOpen] = useState(false)

  const openInstallFlow = () => {
    setInstallFlowOpen(true)
  }

  const handleNavItemClick = (item: any) => {
    if (item.id) {
      onScrollTo(item.id)
    }
    // If it's an href link, the Link component will handle navigation
  }

  return (
    <>
      <header className="fixed w-full bg-zinc-950/70 backdrop-blur-md z-50 border-b border-zinc-800/50">
        <Container>
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavItemClick(item)}
                      className="bg-transparent border-0 outline-none cursor-pointer text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
              
              {/* Install button */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <button
                  onClick={openInstallFlow}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-white text-sm font-medium"
                >
                  <Download size={16} />
                  Install
                </button>
              </motion.div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 mt-4 border-t border-zinc-800/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="block text-left text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavItemClick(item)
                          setMobileMenuOpen(false)
                        }}
                        className="text-left text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 py-2 w-full"
                      >
                        {item.label}
                      </button>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile Install button */}
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setInstallFlowOpen(true)
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-white rounded-full text-sm font-medium w-full justify-center mt-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Download size={16} />
                  Install
                </motion.button>
              </div>
            </motion.div>
          )}
        </Container>
      </header>
      
      {/* Installation Flow */}
      <InstallationFlow 
        isOpen={installFlowOpen} 
        onClose={() => setInstallFlowOpen(false)} 
        onScrollTo={onScrollTo} 
      />
    </>
  )
}

export default Nav 