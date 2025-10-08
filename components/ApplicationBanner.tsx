'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ApplicationBanner = () => {
  const floatingShapes = [
    // Top left cube
    {
      src: '/5cff366672ebe636b37c5c635fc42cdac9cbcd0a.png',
      top: '60px',
      left: '80px',
      width: 120,
      height: 120,
      delay: 0
    },
    // Top right torus
    {
      src: '/e9eecff9874c25c6b359b032004fc65e81b55487.png',
      top: '40px',
      right: '120px',
      width: 140,
      height: 140,
      delay: 0.2
    },
    // Left side pyramid
    {
      src: '/cf2ccf76577b181dad8eadc3bdbbc6d4f54ffb02.png',
      top: '180px',
      left: '40px',
      width: 100,
      height: 100,
      delay: 0.3
    },
    // Bottom left cone
    {
      src: '/673cca7584f2192362b0038601afa35eb5935631.png',
      bottom: '80px',
      left: '100px',
      width: 110,
      height: 110,
      delay: 0.4
    },
    // Bottom right dome
    {
      src: '/876991a46eee1d85ed35e1fa6a9c0ee700d52a6b.png',
      bottom: '60px',
      right: '80px',
      width: 130,
      height: 130,
      delay: 0.5
    },
    // Center-right sphere
    {
      src: '/f235cd4a085639f89caa76ab336e4ec7d95b9575.png',
      top: '50%',
      right: '60px',
      transform: 'translateY(-50%)',
      width: 100,
      height: 100,
      delay: 0.6
    },
    // Additional floating shapes
    {
      src: '/906fd3ae193adbf8b5fab728fb9ad3afc98681da.png',
      top: '120px',
      right: '300px',
      width: 90,
      height: 90,
      delay: 0.7
    },
    {
      src: '/18ae764d23dbb8dc3f38f6940b769e031822ec7a.png',
      bottom: '140px',
      left: '280px',
      width: 80,
      height: 80,
      delay: 0.8
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div className="relative w-full min-h-[500px] overflow-hidden bg-gradient-to-br from-[#fef3e8] via-[#fee9d9] to-[#fddec8]">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 136, 41, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 136, 41, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Gradient Overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top right, rgba(255, 136, 41, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, rgba(255, 92, 0, 0.1) 0%, transparent 50%)
          `
        }}
      />

      {/* Floating 3D Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
            transform: shape.transform
          }}
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: shape.delay }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            <Image
              src={shape.src}
              alt=""
              width={shape.width}
              height={shape.height}
              className="drop-shadow-lg"
              style={{
                filter: 'hue-rotate(20deg) saturate(1.3) brightness(1.1)'
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-8 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-medium text-gray-800 mb-4"
          variants={textVariants}
        >
          Program Application Deadline
        </motion.h2>

        {/* Date */}
        <motion.div
          className="mb-8"
          variants={textVariants}
        >
          <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            20th April 2025
          </span>
        </motion.div>

        {/* Apply Button */}
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={textVariants}
        >
          Apply Now →
        </motion.button>

        {/* Additional Info Text */}
        <motion.p
          className="mt-6 text-gray-600 text-sm max-w-md"
          variants={textVariants}
        >
          Limited seats available. Join the next cohort of young entrepreneurs at Bower School.
        </motion.p>
      </motion.div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  )
}

export default ApplicationBanner