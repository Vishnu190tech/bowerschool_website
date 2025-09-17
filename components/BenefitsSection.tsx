'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: '/61cbc655e1ceee8b049ed1723dbd38c588f37807.svg',
      title: '360° Learning Environment',
      description: 'Hands-on, real-world application of entrepreneurial concepts.'
    },
    {
      id: 2,
      icon: '/9dcd9d091b05394bc36a330df6fe756f2303f460.svg',
      title: 'Community And Collaboration',
      description: 'A vibrant, collaborative community fostering innovation.'
    },
    {
      id: 3,
      icon: '/15d0f16310ee9bd0b19863ad3a44a135362dcb45.svg',
      title: 'Personal Growth',
      description: 'Focus on building leadership, problem-solving, and critical thinking skills.'
    },
    {
      id: 4,
      icon: '/4dbafa53d7c94b98ed8159c175f74a07378774b1.svg',
      title: 'Great Career Opportunities',
      description: 'Access to networking, internships, and business opportunities.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
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

  return (
    <div className="bg-[#f4f4ff] py-16 md:py-20">
      <motion.div 
        className="container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white shadow-[2px_2px_12px_0px_rgba(66,66,255,0.12)] hover:shadow-[4px_4px_20px_0px_rgba(66,66,255,0.2)] transition-all duration-300">
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-15 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle at 50% 100%, rgba(28,85,255,1) 0%, rgba(55,98,255,1) 12.75%, rgba(82,111,255,1) 25.5%, rgba(136,136,255,1) 51%, rgba(166,166,255,1) 63.25%, rgba(196,196,255,1) 75.5%, rgba(255,255,255,1) 100%)'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col gap-8">
                  {/* Icon Box */}
                  <div className="relative w-16 h-16 bg-[rgba(50,50,230,0.1)] rounded-xl flex items-center justify-center border border-white shadow-[0px_4px_20px_0px_rgba(66,66,255,0.25)]">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="text-[22px] md:text-[24px] font-semibold text-[#121212] tracking-[-0.96px] leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] text-[#121212] opacity-80 leading-[24px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default BenefitsSection