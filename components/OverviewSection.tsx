'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const OverviewSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  }

  return (
    <div className="bg-[#f8eee7] py-10 relative w-full">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 flex flex-col gap-9 items-start justify-start">
        {/* Header Section */}
        <motion.div
          className="flex gap-16 items-start justify-start relative w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-semibold leading-none relative text-[#252525] text-3xl md:text-[44px] tracking-[-1.76px]">
            Overview
          </h2>
        </motion.div>

        {/* Main Container with Cards */}
        <div className="box-border flex flex-col lg:flex-row gap-[18px] items-stretch justify-start relative w-full">
        {/* Left Card - Who? */}
        <motion.div 
          className="flex-1 bg-white rounded-2xl relative min-h-[200px]"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring" as const, stiffness: 300 }}
        >
          <div className="box-border flex flex-col items-start justify-between p-6 relative h-full">
            <h3 className="font-semibold text-[#6a6a6a] text-xl md:text-2xl mb-4">
              Who?
            </h3>
            <div className="text-[#110c07]">
              <p className="text-xl md:text-[28px] lg:text-[32px] leading-relaxed">
                <span className="text-[#6a6a6a]">School Students from </span>
                <span className="font-bold">Grade 3-12th</span>
                <span className="text-[#6a6a6a]"> are eligible for different courses listed below</span>
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,216,177,0.5)] border-solid inset-0 pointer-events-none rounded-2xl" />
        </motion.div>

        {/* Right Container with 4 Cards */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Top Row - Time and Location */}
          <div className="flex flex-col md:flex-row gap-[22px]">
            {/* Time Card */}
            <motion.div 
              className="flex-1 bg-white rounded-2xl relative min-h-[150px]"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-[#6a6a6a] text-xl md:text-2xl">
                    Time
                  </h3>
                  <p className="font-semibold text-[#252525] text-2xl md:text-[32px]">
                    3-5 Weeks
                  </p>
                </div>
                <div className="absolute bottom-[-12px] right-[-12px] w-16 h-16 overflow-hidden">
                  <Image 
                    src="/651df4225b577365c7454e31c70f38b467d82b78.svg" 
                    alt="Time icon" 
                    width={64} 
                    height={64}
                    className="opacity-60"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[rgba(255,216,177,0.5)] border-solid inset-0 pointer-events-none rounded-2xl" />
            </motion.div>

            {/* Location Card */}
            <motion.div 
              className="flex-1 bg-white rounded-2xl relative min-h-[150px]"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-bold text-[#6a6a6a] text-xl">
                    Location
                  </h3>
                  <p className="font-semibold text-[#252525] text-2xl md:text-[32px]">
                    Hyderabad
                  </p>
                </div>
                <div className="absolute bottom-3 right-3 w-16 h-16 overflow-hidden">
                  <Image 
                    src="/7d58d59612d695044d588d3f1e0161b8f46b6059.svg" 
                    alt="Location icon" 
                    width={64} 
                    height={64}
                    className="opacity-60"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,216,177,0.5)] border-solid inset-0 pointer-events-none rounded-2xl" />
            </motion.div>
          </div>

          {/* Bottom Row - Mode and Outcome */}
          <div className="flex flex-col md:flex-row gap-[22px]">
            {/* Mode Card */}
            <motion.div 
              className="flex-1 bg-white rounded-2xl relative min-h-[150px]"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-[#6a6a6a] text-xl md:text-2xl">
                    Mode
                  </h3>
                  <p className="font-semibold text-[#252525] text-2xl md:text-[32px]">
                    Offline
                  </p>
                </div>
                <div className="absolute bottom-3 right-3 w-[65px] h-[65px] overflow-hidden">
                  <Image 
                    src="/befe44e11b523ebbad059e87489206ae95600422.svg" 
                    alt="Mode icon" 
                    width={65} 
                    height={65}
                    className="opacity-60"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[rgba(255,216,177,0.5)] border-solid inset-0 pointer-events-none rounded-2xl" />
            </motion.div>

            {/* Outcome Card */}
            <motion.div 
              className="flex-1 bg-white rounded-2xl relative min-h-[150px]"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-bold text-[#6a6a6a] text-xl">
                    Outcome
                  </h3>
                  <p className="font-semibold text-[#252525] text-2xl md:text-[32px]">
                    Certification
                  </p>
                </div>
                <div className="absolute h-16 right-3 top-[54px] w-16">
                  <Image 
                    src="/fd232c629d54d30f40504b157e03489346dac782.svg" 
                    alt="Certification icon" 
                    width={64} 
                    height={64}
                    className="opacity-60"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[rgba(255,216,177,0.5)] border-solid inset-0 pointer-events-none rounded-2xl" />
            </motion.div>
          </div>
        </div>
        </div>
      </div>

      {/* Subtle shadow effect for depth */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .box-border > div {
            box-shadow:
              133px 208px 69px 0px rgba(255,136,41,0.01),
              85px 133px 63px 0px rgba(255,136,41,0.01),
              48px 75px 53px 0px rgba(255,136,41,0.02),
              21px 33px 40px 0px rgba(255,136,41,0.03),
              5px 8px 22px 0px rgba(255,136,41,0.04);
          }
        }
      `}</style>
    </div>
  )
}

export default OverviewSection