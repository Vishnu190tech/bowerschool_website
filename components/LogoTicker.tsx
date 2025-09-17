'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoTickerProps {
  heading?: string;
  subheading?: string;
}

const LogoTicker = ({ heading, subheading }: LogoTickerProps) => {
  const logos = [
    {
      id: 1,
      src: '/4120731faf7c21510b62261ac2cee26af098f7ee.png',
      alt: 'Astir Ventures',
      width: 171,
      height: 85
    },
    {
      id: 2,
      src: '/54eef75d691272d957732e855dc91cb200d486c1.png',
      alt: 'Silver Needle Ventures',
      width: 259,
      height: 82
    },
    {
      id: 3,
      src: '/6b00f77d3577d0e95335cc583790c7f944ff397f.png',
      alt: 'The Hub',
      width: 146,
      height: 146
    },
    {
      id: 4,
      src: '/4120731faf7c21510b62261ac2cee26af098f7ee.png',
      alt: 'Astir Ventures',
      width: 171,
      height: 85
    },
    {
      id: 5,
      src: '/54eef75d691272d957732e855dc91cb200d486c1.png',
      alt: 'Silver Needle Ventures',
      width: 259,
      height: 82
    }
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="relative bg-white py-8 md:py-12 overflow-hidden">
      {/* Header - Only render if heading or subheading is provided */}
      {(heading || subheading) && (
        <div className="text-center mb-12">
          {heading && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-black mb-3 tracking-[-1.76px]"
            >
              {heading}
            </motion.h2>
          )}
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto"
            >
              {subheading}
            </motion.p>
          )}
        </div>
      )}
      <div className="relative">

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Logo ticker container */}
        <div className="flex items-center">
          <motion.div
            className="flex items-center gap-12 md:gap-16"
            animate={{
              x: [0, -50 * logos.length + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker