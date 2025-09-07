'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BowerNetworkSection = () => {
  const stats = [
    {
      title: '100+ Builders in the Bower Network',
      description: 'From teen entrepreneurs to working professionals, our alumni are launching ventures, scaling ideas, and shaping the future of business and innovation.'
    },
    {
      title: 'Many Already Leading or Launching',
      description: 'Whether co-founding startups or taking charge of early projects, Bower alumni are stepping into entrepreneurial roles across sectors.'
    },
    {
      title: 'Dozens of Collaborations in Motion',
      description: 'From co-built ventures to peer mentoring and pitch teams, alumni continue to create with—and for—each other.'
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative bg-[#f4f4ff] py-20 md:py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 rotate-[-112deg]">
          <Image
            src="/7e3c70dd952387f3185e4702eb809fca93ffa068.svg"
            alt=""
            width={530}
            height={696}
            className="opacity-60"
          />
        </div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 max-w-[500px]"
            variants={itemVariants}
          >
            <h2 className="text-[38px] md:text-[44px] font-semibold text-gray-900 leading-tight tracking-[-1.76px] capitalize">
              Inside The Bower Network
            </h2>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div 
            className="flex-1 max-w-[700px] w-full"
            variants={cardVariants}
          >
            <div className="backdrop-blur-[22px] bg-white/40 rounded-[10px] border border-white p-6 md:p-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                >
                  <div className="py-8 first:pt-0 last:pb-0">
                    {/* Title */}
                    <h3 className="text-[22px] md:text-[24px] font-semibold text-gray-900 mb-5 tracking-[-0.96px]">
                      {stat.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[16px] md:text-[18px] text-gray-600 leading-[27px]">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Divider */}
                  {index < stats.length - 1 && (
                    <div className="border-t border-gray-300">
                      <Image
                        src="/d60a8e2a1678993cbc803df6307d6d8c81d99490.svg"
                        alt=""
                        width={652}
                        height={1}
                        className="w-full"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default BowerNetworkSection