'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const NumbersSection = () => {
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const stats = [
    {
      number: '300+',
      title: 'Students Trained across India',
      description: 'Students from over 40 schools across India have participated in the SEED Summer Program.'
    },
    {
      number: '94%',
      title: 'Report Increased Confidence',
      description: 'Post-program surveys show a significant boost in communication and leadership.'
    },
    {
      number: '50+',
      title: 'Mentors & Entrepreneurs Engaged',
      description: 'Learn from real founders, CXOs, and domain experts from top startups, VCs, and institutions.'
    }
  ]

  return (
    <div className="relative bg-[#fbede3] py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Top Right Circle */}
        <div className="absolute top-1/4 right-0 translate-x-1/3">
          <Image
            src="/cb5b1556c44ef7473b23c1c2a0f72ef0fda09150.svg"
            alt=""
            width={383}
            height={503}
            className="opacity-50 rotate-[-90deg]"
          />
        </div>
        {/* Bottom Right Circle */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
          <Image
            src="/cb5b1556c44ef7473b23c1c2a0f72ef0fda09150.svg"
            alt=""
            width={383}
            height={503}
            className="opacity-50 rotate-[-90deg]"
          />
        </div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-10 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            className="flex-1 max-w-[500px] text-center lg:text-left"
            variants={itemVariants}
          >
            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[44px] font-semibold text-[#2c360d] mb-4 md:mb-6 leading-tight tracking-[-1.12px] md:tracking-[-1.36px] lg:tracking-[-1.52px] xl:tracking-[-1.76px] capitalize">
              Numbers Are Telling Our Story
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#2d2d2d] leading-[24px] md:leading-[27px] lg:leading-[27px] xl:leading-[30px] mb-6 md:mb-8 text-center lg:text-justify">
              Unlock your child&apos;s inner innovator through this hands-on program that blends entrepreneurship, AI, and finance. Students will identify real-world problems, design and build tech-based solutions, and pitch their ventures — all while understanding how money moves in the real world.
            </p>
            <motion.button
              className="px-4 md:px-6 py-2.5 md:py-3 bg-[#ff8829] text-white font-medium text-[16px] md:text-[18px] rounded-lg shadow-[0px_0px_0px_1px_#e67320,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#e67320] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            className="flex-1 max-w-[700px] w-full"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-[22px] bg-white/70 rounded-[10px] border border-white p-4 md:p-6 lg:p-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <div className="py-6 md:py-8 first:pt-0 last:pb-0">
                    {/* Number */}
                    <div className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#2d2d2d] mb-3 md:mb-4 lg:mb-5">
                      {stat.number}
                    </div>

                    {/* Title */}
                    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-[#161616] mb-2">
                      {stat.title}
                    </div>

                    {/* Description */}
                    <div className="text-[14px] md:text-[16px] lg:text-[18px] text-[#5a5a5a] leading-[21px] md:leading-[24px] lg:leading-[27px]">
                      {stat.description}
                    </div>
                  </div>

                  {/* Divider */}
                  {index < stats.length - 1 && (
                    <div className="border-t border-[#c4c4c4]" />
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

export default NumbersSection