"use client"

import { useRef } from "react"
import Nav from "@/components/navigation/nav"
import HeroSection from "@/components/sections/hero-section"
import DocumentationSection from "@/components/sections/documentation-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import HowItWorksSection from "@/components/sections/how-it-works"
import Footer from "@/components/sections/footer-section"
import FeatureGrid from "@/components/sections/feature-grid"
import { Container } from "@/components/ui/container"

export default function Home() {
  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* Navigation */}
      <Nav onScrollTo={handleScroll} />

      <main className="flex-grow pt-16">
        {/* 1. Hero Section */}
        <HeroSection onScrollTo={handleScroll} />
        
        {/* 2. Feature Grid */}
        <div className="mt-[-40px] relative z-10">
          <FeatureGrid />
                </div>

        {/* 3. How It Works Section */}
        <HowItWorksSection />
        
        {/* 4. Testimonials Section */}
        <div id="testimonials">
          <TestimonialsSection />
          </div>

        {/* 5. Documentation Section */}
        <div id="documentation">
          <DocumentationSection />
          </div>
      </main>

      {/* Footer */}
      <Footer onScrollTo={handleScroll} />
    </div>
  )
}
