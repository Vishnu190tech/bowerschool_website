'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const TrustedBySchools = () => {
  // Logo configurations for the carousel
  const logos = [
    { id: 1, src: '/2edcf53d6deca08e1039d103e6715c1f8144dd68.svg', width: 146, name: 'Layers' },
    { id: 2, src: '/ba6d46b6e6f1eb30bf1720cf1ec072c90d4a691d.svg', width: 169, name: 'Sisyphus' },
    { id: 3, src: '/8415c08d94618bbed86d5c33e67d841a0a0da4ae.svg', width: 183, name: 'Circooles' },
    { id: 4, src: '/18b98cf5ff99db0e28c470fe75ad2c05252648ec.svg', width: 160, name: 'Catalog' },
    { id: 5, src: '/25f2ef3903e384f984c9757462bd6dc403e4b62a.svg', width: 187, name: 'Quotient' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="bg-[#fffcf9] py-16 md:py-20 px-8 md:px-20 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Title Section */}
        <motion.h2 
          className="text-3xl md:text-[40px] font-semibold text-center mb-16 tracking-[-1.6px] leading-tight"
          variants={itemVariants}
        >
          <span className="text-[#6a6a6a]">You Trusted by</span>
          <span> </span>
          <span className="text-[#ff8829]">80,000+ Learners</span>
          <br />
          <span className="text-[#6a6a6a]">from Schools Across India</span>
        </motion.h2>

        {/* Logo Carousel Container */}
        <div className="relative">
          {/* First Row of Logos */}
          <motion.div 
            className="flex items-center justify-center gap-8 md:gap-20 mb-12 md:mb-20 flex-wrap"
            variants={itemVariants}
          >
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                className="h-12 flex items-center justify-center"
                style={{ width: `${logo.width}px` }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={48}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row of Logos (Different Order) */}
          <motion.div 
            className="flex items-center justify-center gap-8 md:gap-20 flex-wrap"
            variants={itemVariants}
          >
            {[logos[1], logos[0], logos[3], logos[4]].map((logo, index) => (
              <motion.div
                key={`row2-${logo.id}`}
                className="h-12 flex items-center justify-center"
                style={{ width: `${logo.width}px` }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={48}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Background Elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-[#ff8829]/10 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#ff8829]/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Optional: Scrolling Animation for Mobile */}
        <div className="md:hidden mt-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fffcf9] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fffcf9] to-transparent z-10" />
          <motion.div 
            className="flex gap-12"
            animate={{ x: [0, -500, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`mobile-${index}`}
                className="h-10 flex-shrink-0"
                style={{ width: `${logo.width * 0.8}px` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width * 0.8}
                  height={40}
                  className="object-contain filter grayscale"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default TrustedBySchools