"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import Logo from "@/components/ui/logo"
import { Github, X, ExternalLink } from "lucide-react"
import LegalPopup from "@/components/ui/legal-popup"
import { footerLinks, navItems, resourceLinks, companyLinks } from "@/lib/content"
import Image from "next/image"

interface FooterProps {
  onScrollTo: (id: string) => void
}

export default function Footer({ onScrollTo }: FooterProps) {
  const [activePopup, setActivePopup] = useState<'terms' | 'privacy' | 'license' | null>(null)

  const openPopup = (type: 'terms' | 'privacy' | 'license') => {
    setActivePopup(type)
  }

  const closePopup = () => {
    setActivePopup(null)
  }

  const getPopupTitle = () => {
    switch (activePopup) {
      case 'terms': return 'Terms of Service'
      case 'privacy': return 'Privacy Policy'
      case 'license': return 'License'
      default: return ''
    }
  }

  const legalLinks = footerLinks.map(link => ({
    label: link.label,
    onClick: () => openPopup(link.type as 'terms' | 'privacy' | 'license')
  }));

  const handleScrollTo = (id: string) => {
    onScrollTo(id)
  }

  // Helper function to render the appropriate icon
  const getIcon = (iconName: string | null) => {
    if (!iconName) return null;
    
    switch(iconName) {
      case 'Github': return <Github className="w-3 h-3" />;
      case 'X': return <X className="w-3 h-3" />;
      case 'ExternalLink': return <ExternalLink className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-sm mb-4 text-zinc-100">Product</h3>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.id || item.href || item.label}>
                  {item.id ? (
                    <button 
                      onClick={() => handleScrollTo(item.id)}
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ) : item.href ? (
                    <a 
                      href={item.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-zinc-100">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    {link.label}
                    {getIcon(link.icon)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-zinc-100">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target={link.url !== '#' ? "_blank" : undefined} 
                    rel={link.url !== '#' ? "noopener noreferrer" : undefined}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    {link.label}
                    {getIcon(link.icon)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-zinc-100">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.onClick}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800/50">
          <div className="mb-4 md:mb-0 flex items-center">
            <Image 
              src="/softx-logo.svg" 
              alt="SofTx"
              width={80}
              height={32}
              className="mr-2"
            />
            <div className="mx-2 h-4 w-px bg-zinc-700"></div>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 2351.15 2278.29" 
              fill="#fff" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M1264.45,2.11c209.5-2.31,419.23-3.55,628.71.78l.87,34c-74.86,108.14-129.98,240.2-204.43,347.11-41.89,60.15-84.16,35.34-151.17,38.1-227.92,9.37-500.26-15.97-718.93,11.1-317.11,39.26-523.46,456.05-242.48,669.56,136.92,104.04,324.94,71.08,485.65,76.74,13.98,2.05,25.82,20.37,23.62,33.84l-216.37,368.03c-23.71,41.63-83.67,32.81-126.14,30.58C-16.46,1572-255.25,677.44,316.66,211.54,617.37-33.41,899.8,6.13,1264.45,2.11Z"  />
              <path d="M1545.17,666.77c18.95-5.56,119.38-2.93,144.82-1.04,291.79,21.63,542.36,239.63,626.09,514.91,138.26,454.56-147.92,912.38-586.73,1049.26-189.2,59.02-428.65,45.24-628.47,47.48-191.88,2.15-384.24.21-576.05-3.09-19.94-12.55-20.92-33.65-10.38-53.43,81.2-124.79,147.15-260.67,237.49-378.95,36.49-6.37,73.92-1.26,110.69-2.87,208.75-9.14,427.8,8,632.97-5.13,290.7-18.59,505.87-331.87,347.5-596.7-111.46-186.38-313.53-170.72-504.56-165.99-34.46-6.4,3.84-62.31,12.6-79.35,42.87-83.51,97.48-178.87,146.01-259.56,8.98-14.93,33.59-61.32,48.01-65.55Z" />
            </svg>
            <span className="font-medium">Commit<span className="font-medium">Stud</span>.<span className="font-semibold">io</span></span>
          </div>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} CommitStudio – AI‑powered code reviews for every commit.

              
          
          
          </p>
        
        </div>
      </Container>

      {/* Legal Popups */}
      {activePopup && (
        <LegalPopup 
          isOpen={!!activePopup}
          onClose={closePopup}
          title={getPopupTitle()}
          type={activePopup}
        />
      )}
    </footer>
  )
} 