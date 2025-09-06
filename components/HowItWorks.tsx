'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Take Level-1 courses by industry experts',
      description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
    },
    {
      number: 2,
      title: 'Attend. Learn. Innovate',
      description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
    },
    {
      number: 3,
      title: 'Get Certified',
      description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
    },
    {
      number: 4,
      title: 'Proceed to the Next Level',
      description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="bg-[#f8f2ee] relative w-full overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <Image 
          src="/e3f37f7c167982f4de1508adec8e58361d22c27b.svg" 
          alt="Grid pattern" 
          fill
          className="object-cover"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col gap-9 items-center justify-center px-8 md:px-20 py-10 md:py-16">
        {/* Header */}
        <motion.h2 
          className="font-semibold text-[#252525] text-3xl md:text-[44px] tracking-[-1.76px] capitalize"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works!
        </motion.h2>

        {/* Steps Container */}
        <div className="w-full max-w-6xl">
          <div className="backdrop-blur-[32px] bg-white/50 rounded-3xl p-6 md:p-8">
            <motion.div 
              className="flex flex-col gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {steps.map((step, index) => (
                <motion.div 
                  key={step.number}
                  className="flex gap-6 md:gap-8 items-start"
                  variants={stepVariants}
                >
                  {/* Indicator and Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Number Circle */}
                    <motion.div 
                      className="relative w-16 h-16 md:w-[66px] md:h-[66px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Orange Circle Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg" />
                      
                      {/* Number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-semibold text-white text-2xl md:text-[30px] tracking-[-1.2px]">
                          {step.number}
                        </span>
                      </div>
                    </motion.div>

                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <motion.div 
                        className="w-[2px] h-24 md:h-28 bg-gradient-to-b from-orange-400 to-orange-300 mt-2"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <motion.h3 
                      className="font-semibold text-[#110c07] text-xl md:text-2xl tracking-[-0.96px] mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="font-normal text-[#6a6a6a] text-base md:text-xl leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.2 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}

export default HowItWorks