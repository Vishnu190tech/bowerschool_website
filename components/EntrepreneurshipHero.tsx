'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const EntrepreneurshipHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image - Modern Building */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/entrepreneurship-center.jpg"
          alt="Entrepreneurship Center"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-8 md:px-12 lg:px-20 py-20">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-300 mb-8"
              variants={itemVariants}
            >
              <span>Programs</span>
              <span className="text-gray-500">›</span>
              <span>Masterclass</span>
              <span className="text-gray-500">›</span>
              <span className="text-[#ff8829]">BowerClass</span>
            </motion.div>

            {/* Grade Badge */}
            <motion.div 
              className="inline-block mb-8"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
                Offline Camps | Grade 3 - 12
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
              variants={itemVariants}
            >
              Early-Stage<br />
              Entrepreneurship for Young<br />
              Minds
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Shaping the next generation of entrepreneurs, business leaders, and change-makers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {/* Apply Now Button */}
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-[#ff8829] to-[#ff6b29] text-white font-semibold rounded-full hover:shadow-xl transform transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Download Brochure Button */}
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="mt-16 flex flex-wrap gap-8"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ff8829] rounded-full" />
                <span className="text-white">Live Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ff8829] rounded-full" />
                <span className="text-white">Project-Based Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#ff8829] rounded-full" />
                <span className="text-white">Industry Mentors</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-[#ff8829]/20 to-transparent rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-40 w-32 h-32 bg-gradient-to-br from-[#ff8829]/20 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Decorative Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L400 400" stroke="white" strokeWidth="1" />
          <path d="M0 100L400 500" stroke="white" strokeWidth="1" />
          <path d="M0 200L400 600" stroke="white" strokeWidth="1" />
          <path d="M0 300L400 700" stroke="white" strokeWidth="1" />
          <path d="M0 400L400 800" stroke="white" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}

export default EntrepreneurshipHero