"use client"

import { legalContent } from '@/lib/content'
import LegalHeader from '@/components/ui/legal-header'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300">
      <LegalHeader />
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">Our commitment to protecting your information and data.</p>
        </div>
        
        <div className="space-y-8 mb-12">
          {legalContent.privacy.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                {section.title}
              </h2>
              <p className="text-zinc-400 mb-3">{section.content}</p>
              {section.list && (
                <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="mt-2">For questions about our privacy policy, please contact us at <a href="mailto:privacy@commitstud.io" className="text-blue-400 hover:underline">privacy@commitstud.io</a></p>
          
          <div className="mt-8 flex space-x-4">
            <a href="/" className="text-zinc-400 hover:text-white">Home</a>
            <a href="/terms" className="text-zinc-400 hover:text-white">Terms of Service</a>
            <a href="/license" className="text-zinc-400 hover:text-white">License</a>
          </div>
        </div>
      </div>
    </div>
  )
} 