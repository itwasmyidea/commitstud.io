"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import { GitCommit, GitBranch, Quote, Star, Shield, Clock, CheckCircle, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import AnalyticsCard from "@/components/ui/analytics-card"
import { testimonials } from "@/lib/content"

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  index: number;
}

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section className="py-16 bg-zinc-950 overflow-hidden" id="testimonials">
      <Container className="mb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              <span className="brand-gradient-text">
                Real Results, Real Impact
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              See how teams are cutting review time and improving code quality with 
              CommitStudio's AI-powered analysis and automated feedback.
            </p>
          </div>
          
          <div className="relative">
            <AnalyticsCard />
          </div>
        </div>
      </Container>
      
      {/* Optimized horizontal scrolling testimonials */}
      <div className="mb-2">
       
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          
          <div className="testimonial-container">
            <div className="testimonial-track">
              {/* First set */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className="testimonial-card"
                >
                  <div className="flex-1">
                    <div className="flex mb-4 text-brand-light">
                      <Quote className="h-6 w-6 opacity-50 flex-shrink-0" />
                    </div>
                    
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">{testimonial.quote}</p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center text-blue-400 font-semibold text-sm overflow-hidden">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-zinc-200 text-sm">{testimonial.author}</p>
                      <p className="text-zinc-500 text-xs">{testimonial.role}, {testimonial.company}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${i < testimonial.rating ? "text-yellow-400" : "text-zinc-700"}`}
                          fill={i < testimonial.rating ? "#FBBF24" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicated set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className="testimonial-card"
                >
                  <div className="flex-1">
                    <div className="flex mb-4 text-brand-light">
                      <Quote className="h-6 w-6 opacity-50 flex-shrink-0" />
                    </div>
                    
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">{testimonial.quote}</p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center text-blue-400 font-semibold text-sm overflow-hidden">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-zinc-200 text-sm">{testimonial.author}</p>
                      <p className="text-zinc-500 text-xs">{testimonial.role}, {testimonial.company}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${i < testimonial.rating ? "text-yellow-400" : "text-zinc-700"}`}
                          fill={i < testimonial.rating ? "#FBBF24" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Optimized CSS with reduced animation duration */}
      <style jsx global>{`
        .testimonial-container {
          overflow: hidden;
          position: relative;
          padding: 1rem 0;
        }
        
        .testimonial-track {
          display: flex;
          gap: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
          animation: scroll 60s linear infinite;
          width: fit-content;
        }
        
        .testimonial-card {
          background-color: rgba(24, 24, 27, 0.9);
          border: 1px solid rgba(39, 39, 42, 1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          min-width: 320px;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .testimonial-card .rounded-full {
          border-radius: 9999px;
          overflow: hidden;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        @media (prefers-reduced-motion) {
          .testimonial-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
} 