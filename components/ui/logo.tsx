"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

// SVG animation variants
const svgVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    }
  }
}

// Path animation variants
const pathVariants = {
  hidden: { 
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.3,
    }
  }
}

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      <div className="flex flex-col">
        <div className="flex items-center">
          <motion.div 
            className="relative w-8 h-8 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={svgVariants}
          >
            <motion.svg 
              width="25" 
              height="25" 
              viewBox="0 0 2351.15 2278.29" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="overflow-visible"
              whileHover={{ 
                rotate: [0, -2, 2, 0],
                scale: 1.05,
                transition: { duration: 0.5 }
              }}
            >
              <motion.path 
                d="M1264.45,2.11c209.5-2.31,419.23-3.55,628.71.78l.87,34c-74.86,108.14-129.98,240.2-204.43,347.11-41.89,60.15-84.16,35.34-151.17,38.1-227.92,9.37-500.26-15.97-718.93,11.1-317.11,39.26-523.46,456.05-242.48,669.56,136.92,104.04,324.94,71.08,485.65,76.74,13.98,2.05,25.82,20.37,23.62,33.84l-216.37,368.03c-23.71,41.63-83.67,32.81-126.14,30.58C-16.46,1572-255.25,677.44,316.66,211.54,617.37-33.41,899.8,6.13,1264.45,2.11Z" 
                fill="url(#paint0_linear)"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.path 
                d="M1545.17,666.77c18.95-5.56,119.38-2.93,144.82-1.04,291.79,21.63,542.36,239.63,626.09,514.91,138.26,454.56-147.92,912.38-586.73,1049.26-189.2,59.02-428.65,45.24-628.47,47.48-191.88,2.15-384.24.21-576.05-3.09-19.94-12.55-20.92-33.65-10.38-53.43,81.2-124.79,147.15-260.67,237.49-378.95,36.49-6.37,73.92-1.26,110.69-2.87,208.75-9.14,427.8,8,632.97-5.13,290.7-18.59,505.87-331.87,347.5-596.7-111.46-186.38-313.53-170.72-504.56-165.99-34.46-6.4,3.84-62.31,12.6-79.35,42.87-83.51,97.48-178.87,146.01-259.56,8.98-14.93,33.59-61.32,48.01-65.55Z" 
                fill="url(#paint1_linear)"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              />
              <defs>
                <linearGradient id="paint0_linear" x1="400" y1="200" x2="1200" y2="1200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA"/>
                  <stop offset="1" stopColor="#2563EB"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="800" y1="700" x2="1800" y2="1800" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA"/>
                  <stop offset="1" stopColor="#2563EB"/>
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
          <motion.span 
            className="font-medium text-xl tracking-tight flex items-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="text-transparent mr-0.5 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-semibold"
            >
              Commit
            </motion.span> 
            <motion.span>
              Studio
            </motion.span>
          </motion.span>
        </div>
        <motion.div 
          className="text-right text-xs text-zinc-400 mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          by SofTx
        </motion.div>
      </div>
    </Link>
  )
}

export default Logo 