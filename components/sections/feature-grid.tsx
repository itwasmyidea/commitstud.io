"use client"

import { useState, useEffect, useRef } from "react"
import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
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
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  // For scroll-based highlighting on mobile
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Transform scroll progress into opacity
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [0.4, 0.6, 1, 0.6, 0.4]
  )
  
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
  
  return (
    <motion.div
      ref={ref}
      className="group relative px-5 md:px-8 py-10 cursor-pointer"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        opacity: isMobile ? cardOpacity : isHovered ? 1 : 0.4
      }}
    >
      <p className="text-lg md:text-xl font-medium tracking-tight leading-normal transition-all duration-300">
        <span className="text-white">{title}</span>{' '}
        <span className="text-zinc-500">{body}</span>
      </p>
    </motion.div>
  )
} 