'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CertificateSection = () => {
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

  const certificateVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden py-12 md:py-20 lg:py-32">
      {/* Background Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-10 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Title Section */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <h2 className="text-[28px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-bold leading-tight tracking-[-1.4px] md:tracking-[-2.4px] lg:tracking-[-3.2px] xl:tracking-[-4px]">
            <span className="text-[#6a6a6a]">Will you be Certified?</span>
            <br />
            <span className="text-[#2c360d]">Ofcourse, this is one for the</span>
            <br />
            <span className="text-[#2c360d]">collection</span>
          </h2>
        </motion.div>

        {/* Certificate Display */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          variants={itemVariants}
        >
          {/* Back Certificate (Rotated) - Hidden on mobile */}
          <motion.div
            className="hidden md:block absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 0.5, scale: 1, rotate: -3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-full max-w-4xl">
              <Image
                src="/f9004548a91ada3a888e72ebf49e80491ff65388.png"
                alt="Certificate Background"
                width={1026}
                height={641}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Front Certificate */}
          <motion.div
            className="relative z-10"
            variants={certificateVariants}
          >
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/f9004548a91ada3a888e72ebf49e80491ff65388.png"
                alt="Certificate of Appreciation"
                width={1026}
                height={641}
                className="w-full h-auto rounded-xl md:rounded-2xl shadow-[0px_8px_20px_0px_rgba(145,145,145,0.4)] md:shadow-[0px_16px_35px_0px_rgba(145,145,145,0.74),0px_64px_64px_0px_rgba(145,145,145,0.64),0px_145px_87px_0px_rgba(145,145,145,0.38),0px_258px_103px_0px_rgba(145,145,145,0.11)]"
              />

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-xl md:rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={itemVariants}
        >
          <p className="text-gray-600 text-[16px] md:text-[18px] lg:text-[20px] max-w-2xl mx-auto leading-[24px] md:leading-[27px] lg:leading-[30px] px-4">
            Upon successful completion of the program, you'll receive an official certificate
            recognizing your achievement and entrepreneurial journey with Bower School.
          </p>

          {/* CTA Button */}
          <motion.button
            className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#2c360d] to-[#4a5a1a] text-white font-semibold text-[16px] md:text-[18px] rounded-full hover:shadow-xl transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Earn Your Certificate →
          </motion.button>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-[16px] md:text-[18px]">Verified Achievement</h3>
            <p className="text-gray-600 text-[14px] md:text-[16px]">Industry-recognized certification</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-[16px] md:text-[18px]">Skill Validation</h3>
            <p className="text-gray-600 text-[14px] md:text-[16px]">Proof of your entrepreneurial skills</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-[16px] md:text-[18px]">Global Recognition</h3>
            <p className="text-gray-600 text-[14px] md:text-[16px]">Accepted worldwide</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CertificateSection