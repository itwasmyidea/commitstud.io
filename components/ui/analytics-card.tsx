"use client"

import { motion } from "framer-motion"
import { ChartBar, LineChart } from "lucide-react"
import { analyticsCardData } from "@/lib/content"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AnalyticsCard() {
  const { header, metrics, detailCards } = analyticsCardData;
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 md:p-5 backdrop-blur-lg shadow-xl shadow-blue-500/5"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <ChartBar className="h-5 w-5 text-white" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg md:text-xl font-medium text-white">{header.title}</h3>
            <p className="text-sm text-zinc-400">{header.subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Single Detail Card - full width */}
      <div className="w-full mb-5">
        {detailCards.map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zinc-950/80 border border-zinc-800/50 rounded-xl overflow-hidden w-full"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <LineChart className="w-4 h-4 text-blue-400 mr-2" />
                  <p className="text-xs text-zinc-400 uppercase tracking-wider">{card.title}</p>
                </div>
                <div className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400">
                  {card.comparison}
                </div>
              </div>
              
              <div className="flex items-baseline mb-1">
                <span className="text-3xl font-semibold text-white">{card.value}</span>
                <span className="ml-1 text-xs text-zinc-500">{card.metric}</span>
              </div>
              
              <p className="text-sm text-zinc-400">{card.description}</p>
              
              {/* Progress indicator */}
              <div className="mt-4 pt-3 border-t border-zinc-800/30">
                <div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    style={{ width: card.value }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Key Metrics - horizontal line */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 px-1">
        {metrics.map((metric, index) => (
          <motion.div 
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-row items-center gap-2 justify-center"
          >
            <p className="text-xs inline-block text-zinc-500  ">{metric.label}</p>
            <p className="text-sm inline-block font-medium text-white">{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 