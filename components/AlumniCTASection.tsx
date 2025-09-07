'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AlumniCTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="bg-[#f4f4ff] py-20 md:py-24">
      <motion.div 
        className="container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center max-w-6xl mx-auto"
          variants={textVariants}
        >
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-tight tracking-[-1.76px] capitalize">
            <span className="text-gray-400">Bower Alumni Gain Access </span>
            <span className="text-gray-900">Exclusive Events, Venture Support, And Community While Giving Back </span>
            <span className="text-gray-400">And Building Beyond Graduation.</span>
          </h2>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AlumniCTASection