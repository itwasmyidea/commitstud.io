"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Terminal, FileText, Github, ExternalLink } from "lucide-react"
import { useRef, useState } from "react"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { documentationItems } from "@/lib/content"

interface DocCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  external?: boolean;
  index: number;
}

export default function DocumentationSection() {
  // Map icon strings to actual components
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case "BookOpen": return <BookOpen className="h-6 w-6" />;
      case "Code": return <Code className="h-6 w-6" />;
      case "Terminal": return <Terminal className="h-6 w-6" />;
      case "FileText": return <FileText className="h-6 w-6" />;
      case "Github": return <Github className="h-6 w-6" />;
      case "ExternalLink": return <ExternalLink className="h-6 w-6" />;
      default: return <BookOpen className="h-6 w-6" />;
    }
  };

  return (
    <section id="documentation" className="py-32 bg-zinc-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6 brand-gradient-text">
            Documentation
          </h2>
          <p className="text-xl text-zinc-400">Everything you need to get started with CommitStudio</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {documentationItems.map((item, index) => (
            <DocCard
              key={index}
              icon={getIconComponent(item.icon)}
              title={item.title}
              description={item.description}
              link={item.link}
              external={item.external}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function DocCard({ icon, title, description, link, external, index }: DocCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <Link 
          href={link} 
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="block h-full cursor-pointer"
        >
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.1
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-zinc-900 hover:cursor-pointer rounded-lg group p-8 shadow-lg border border-zinc-800 h-full hover:bg-zinc-800 transition-all duration-300" 
      >
        <div className="w-12 h-12 bg-zinc-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 rounded-full flex items-center justify-center mb-6">{icon}</div>
        <h3 className="text-xl font-medium mb-3 text-zinc-100">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
        
        {link && external && (
          <div className="mt-4 justify-end flex gap-1  items-center text-xs text-brand-light">
            <div className="flex gap-1 items-center border-b group-hover:pb-2 group-hover:border-b-2 group-hover:px-2 group-hover:-mt-1 transition-all duration-300 border-white pb-1">
              <span>External Link</span>
              <ExternalLink className="ml-1 mb-0.5 h-3 w-3" />
            </div>
          </div>
        )}
      </motion.div>
    </CardWrapper>
  )
} 