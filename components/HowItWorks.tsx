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
        ease: "easeOut" as const
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

      {/* Decorative Background Image */}
      {/* <div className="absolute inset-0 -top-1/4 -bottom-1/4">
        <Image
          src="/39d2c8f8744f519996020faab038ed64f2942a33.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div> */}
      <div
        className="hidden md:block absolute top-1/2 -translate-y-1/2 w-[820px] h-[820px] pointer-events-none"
        style={{ left: 'calc(50% + 48px)', transform: 'translate(-50%, -50%)' }}
      >
        <div className="absolute inset-[-15.61%]">
          <Image
            src="/e7bf14edf6ec4b58f95d0f45044d57e619ce898d.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute -top-[82px] left-[-4.57%] right-[-10.82%] h-[752px] pointer-events-none">
        <Image
          src="/e0743815baf2d2cb0b8f0452c1edfc5a93b1e041.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-9 items-center justify-center px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <motion.h2
          className="font-semibold text-[#252525] text-2xl md:text-3xl lg:text-[44px] tracking-[-1.76px] capitalize text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works!
        </motion.h2>

        {/* Steps Container */}
        <div className="w-full max-w-6xl">
          <div className="backdrop-blur-[32px] bg-white/50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8">
            <motion.div
              className="flex flex-col "
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex gap-4 md:gap-6 lg:gap-8 items-start"
                  variants={stepVariants}
                >
                  {/* Indicator and Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Number Circle */}
                    <motion.div
                      className="relative w-16 h-16 md:w-[66px] md:h-[66px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" as const, stiffness: 300 }}
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
                      <div className="w-[2px] h-[60px] md:h-[80px] lg:h-[100px] bg-gradient-to-b from-orange-400 to-orange-300 " />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <motion.h3
                      className="font-semibold text-[#110c07] text-lg md:text-xl lg:text-2xl tracking-[-0.96px] mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="font-normal text-[#6a6a6a] text-sm md:text-base lg:text-xl leading-relaxed"
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
            ease: "easeInOut" as const
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
            ease: "easeInOut" as const
          }}
        />
      </div>
    </div>
  )
}

export default HowItWorks