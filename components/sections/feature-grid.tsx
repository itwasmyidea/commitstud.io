"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { featureGridItems } from "@/lib/content"

interface FeatureItem {
  content: string;
}

export default function FeatureGrid() {
  return (
    <section id="feature-grid" className="py-14 md:py-16 border-b border-zinc-800/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800/30">
          {featureGridItems.map((feature, index) => (
            <FeatureGridItem 
              key={index} 
              content={feature.content}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function FeatureGridItem({ content, index }: FeatureItem & { index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  
  // Split content into title (first sentence) and body
  const firstPeriodIndex = content.indexOf('.')
  const title = content.substring(0, firstPeriodIndex + 1)
  const body = content.substring(firstPeriodIndex + 1).trim()
  
  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Handle touch events
  const handleTouchStart = () => {
    setIsTouched(true)
    setIsHovered(true)
  }
  
  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsTouched(false)
      setIsHovered(false)
    }, 1000)
  }
  
  return (
    <motion.div
      className="group relative px-5 md:px-8 py-10 cursor-pointer"
      onMouseEnter={() => !isTouched && setIsHovered(true)}
      onMouseLeave={() => !isTouched && setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={{ 
        opacity: isHovered || isMobile ? 1 : 0.8,
      }}
    >
      <p className="text-lg opacity-40 hover:opacity-100 transition-opacity duration-300 md:text-xl font-medium tracking-tight leading-normal">
        <span className="text-white">{title}</span>{' '}
        <span className="text-zinc-500">{body}</span>
      </p>
    </motion.div>
  )
} 