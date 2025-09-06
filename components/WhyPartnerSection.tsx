'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const WhyPartnerSection = () => {
  const cards = [
    {
      id: 1,
      title: 'The Big Pitch',
      description: 'Students present their ideas to real mentors and investors.',
      number: '01',
      rotation: -3.23,
      delay: 0,
      top: '60px',
      left: '80px'
    },
    {
      id: 2,
      title: 'Internship Exposure',
      description: 'Internship experiences and CESIM simulation-based learning',
      number: '02',
      rotation: 2,
      delay: 0.1,
      top: '240px',
      left: '0px'
    },
    {
      id: 3,
      title: 'Build Your Own Chatbot',
      description: 'Use simple AI tools to create a chatbot that helps pitch your startup.',
      number: '03',
      rotation: -2,
      delay: 0.2,
      top: '470px',
      left: '0px'
    },
    {
      id: 4,
      title: 'Think Like a Founder',
      description: 'Learn to spot problems, test ideas, and build real-world solutions from scratch.',
      number: '04',
      rotation: 2,
      delay: 0.3,
      top: '700px',
      left: '0px'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0a0a0a] to-[#1a1a1a]/50" />

      {/* Main Content Container */}
      <motion.div 
        className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20 py-12 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[50px] items-start justify-between">
          {/* Left Side - Title */}
          <motion.div 
            className="w-full lg:flex-1 lg:max-w-[615px]"
            variants={titleVariants}
          >
            <h2 className="font-bold text-[48px] md:text-[64px] lg:text-[80px] leading-[1] tracking-[-2px] md:tracking-[-4px]">
              <span className="text-white">Why Partner </span>
              <br />
              <span className="text-white">With </span>
              <span className="text-[#ff8829]">SEED?</span>
            </h2>
          </motion.div>

          {/* Right Side - Cards Stack */}
          <div className="w-full lg:flex-1 relative min-h-[1000px] lg:min-h-[950px]">
            <div className="relative w-full max-w-[450px] mx-auto lg:mx-0 lg:ml-auto">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="absolute w-full max-w-[450px]"
                  style={{
                    top: card.top,
                    left: card.left,
                    transform: `rotate(${card.rotation}deg)`,
                    transformOrigin: 'center center',
                    zIndex: 4 - index
                  }}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: card.delay }}
                  whileHover={{ 
                    scale: 1.02,
                    rotate: 0,
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glass Card */}
                  <div 
                    className="relative h-[200px] md:h-[250px] rounded-[18px] backdrop-blur-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                      border: '1px solid rgba(255, 248, 242, 0.15)'
                    }}
                  >
                    {/* Dark Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-40 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at top left, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)'
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                      <h3 className="text-[#fbfff3] text-[20px] md:text-[24px] font-semibold tracking-[-0.96px] mb-3">
                        {card.title}
                      </h3>
                      <p className="text-[#fbfff3]/80 text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal pr-20">
                        {card.description}
                      </p>
                      
                      {/* Large Number */}
                      <div className="absolute bottom-4 md:bottom-6 right-6 md:right-8">
                        <span className="text-[64px] md:text-[80px] font-bold text-[rgba(255,249,244,0.15)] tracking-[-4px] leading-none">
                          {card.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Optimized Decorative Elements */}
      <motion.div
        className="absolute top-10 md:top-20 left-5 md:left-10 w-2 h-2 bg-[#ff8829] rounded-full hidden md:block"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 md:bottom-40 right-10 md:right-20 w-3 h-3 bg-[#ff8829] rounded-full hidden md:block"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default WhyPartnerSection