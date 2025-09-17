'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const JoinAlumniSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/39d2c8f8744f519996020faab038ed64f2942a33.svg"
          alt=""
          fill
          className="object-cover opacity-100"
        />
      </div>

      {/* Background Gradient Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px]">
        <Image
          src="/540bbf1c49d15d10456954389965c466682043d7.svg"
          alt=""
          width={820}
          height={820}
          className="w-full h-full"
        />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div 
            className="space-y-3 mb-20"
            variants={itemVariants}
          >
            <h2 className="text-[38px] md:text-[44px] font-semibold text-gray-900 tracking-[-1.76px] capitalize">
              Join Alumni Network
            </h2>
            <p className="text-[18px] md:text-[20px] text-gray-600 leading-[30px]">
              Reconnect, Reflect, Reignite
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={buttonVariants}
          >
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4242ff] text-white font-medium text-[18px] rounded-lg shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3535d9] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Alumni Network
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white" />
    </div>
  )
}

export default JoinAlumniSection