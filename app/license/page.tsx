"use client"

import { legalContent } from '@/lib/content'
import LegalHeader from '@/components/ui/legal-header'

export default function LicensePage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300">
      <LegalHeader />
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-4">License</h1>
          <p className="text-zinc-400">CommitStudio is licensed under the MIT License.</p>
        </div>
        
        <div className="space-y-8 mb-12">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">
              {legalContent.license.mitLicense.title}
            </h2>
            <p className="text-zinc-400 mb-3">{legalContent.license.mitLicense.copyright}</p>
            
            <div className="space-y-4 border border-zinc-800 rounded-md p-6 bg-zinc-900/50 my-4">
              {legalContent.license.mitLicense.terms.map((term, index) => (
                <p key={index} className="text-zinc-400">{term}</p>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">
              Dependencies and Third-Party Software
            </h2>
            <p className="text-zinc-400 mb-3">{legalContent.license.dependencies}</p>
            
            <div className="p-4 bg-zinc-900/50 rounded-md border border-zinc-800 mt-4">
              <p className="text-sm text-zinc-500">
                For a complete list of dependencies and their licenses, please 
                visit our <a href="https://github.com/itwasmyidea" 
                className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub repository
                </a>.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="mt-2">For questions about licensing, please contact us at <a href="mailto:legal@commitstud.io" className="text-blue-400 hover:underline">legal@commitstud.io</a></p>
          
          <div className="mt-8 flex space-x-4">
            <a href="/" className="text-zinc-400 hover:text-white">Home</a>
            <a href="/terms" className="text-zinc-400 hover:text-white">Terms of Service</a>
            <a href="/privacy" className="text-zinc-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
} 