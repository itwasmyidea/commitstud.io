"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { legalContent } from '@/lib/content'

interface LegalPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  type: 'terms' | 'privacy' | 'license'
}

export default function LegalPopup({ isOpen, onClose, title, type }: LegalPopupProps) {
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

  // Content based on type
  const renderContent = () => {
    switch (type) {
      case 'terms':
        return (
          <div className="space-y-4">
            {legalContent.terms.map((section, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium text-zinc-100">{section.title}</h3>
                <p className="text-zinc-400">{section.content}</p>
                {section.list && (
                  <ul className="list-disc pl-5 text-zinc-400 space-y-1 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )
      
      case 'privacy':
        return (
          <div className="space-y-4">
            {legalContent.privacy.map((section, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium text-zinc-100">{section.title}</h3>
                <p className="text-zinc-400">{section.content}</p>
                {section.list && (
                  <ul className="list-disc pl-5 text-zinc-400 space-y-1 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )
      
      case 'license':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-zinc-100">{legalContent.license.mitLicense.title}</h3>
            <p className="text-zinc-400">{legalContent.license.mitLicense.copyright}</p>
            
            {legalContent.license.mitLicense.terms.map((term, index) => (
              <p key={index} className="text-zinc-400">{term}</p>
            ))}
            
            <h3 className="text-lg font-medium text-zinc-100 mt-8">Dependencies</h3>
            <p className="text-zinc-400">{legalContent.license.dependencies}</p>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-zinc-900 rounded-[0.75rem] w-full max-w-2xl max-h-[90vh] shadow-xl border border-zinc-800"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-800">
              <h2 className="text-xl font-medium text-zinc-100">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/70 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {renderContent()}
            </div>
            
            {/* Footer */}
            <div className="flex justify-end p-4 border-t border-zinc-800">
              <button
                onClick={onClose}
                className="btn-primary px-5 py-2 text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 