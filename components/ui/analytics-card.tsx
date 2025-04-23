"use client"

import { Code, MessageCircleQuestion, Clock } from "lucide-react"
import { analyticsCardData } from "@/lib/content"

export default function AnalyticsCard() {
  const { header, metrics, detailCards } = analyticsCardData;
  
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-[0.75rem] p-6 backdrop-blur-lg shadow-xl shadow-blue-500/5">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-[0.5rem] bg-blue-500/10 flex items-center justify-center">
          <Code className="h-5 w-5 text-blue-400" />
        </div>
        <div className="ml-4">
          <p className="text-zinc-400 text-sm">{header.title}</p>
          <p className="text-zinc-200 font-medium flex items-center">
            {header.subtitle}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center mb-6">
        {metrics.map((metric, index) => (
          <div 
            key={metric.label}
            className={`${index < metrics.length - 1 ? 'border-r border-zinc-800/50' : ''} px-3`}
          >
            <p className="text-xs text-zinc-500 uppercase mb-1">{metric.label}</p>
            <p className="text-lg font-medium text-zinc-300">{metric.value}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-6 mt-8">
        {detailCards.map((card, index) => (
          <div key={index} className="bg-zinc-950/80 border border-zinc-800/50 rounded-[0.5rem] p-5">
            <div className="mb-3 flex items-center">
              {index === 0 ? (
                <MessageCircleQuestion className="w-4 h-4 text-blue-400 mr-2" />
              ) : (
                <Clock className="w-4 h-4 text-blue-400 mr-2" />
              )}
              <p className="text-xs text-zinc-500 uppercase">{card.title}</p>
            </div>
            <p className="text-2xl font-semibold text-blue-400">{card.value}</p>
            <p className="text-xs text-zinc-400 mt-1">{card.description}</p>
            <div className="mt-3 pt-3 border-t border-zinc-800/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                  <p className="text-xs text-zinc-400">{card.metric}</p>
                </div>
                <p className="text-xs text-right text-zinc-300 rounded-md border border-zinc-800/50 px-1.5 py-0.5">
                  {card.comparison}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 