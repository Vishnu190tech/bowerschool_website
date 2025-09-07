'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const WellnessSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  }

  // Generate stars for background with consistent seed
  const generateStars = (count: number) => {
    const stars = []
    for (let i = 0; i < count; i++) {
      stars.push({
        id: i,
        x: ((i * 37) % 100),
        y: ((i * 53) % 100),
        size: ((i % 3) + 1),
        delay: (i % 5),
        duration: ((i % 3) + 2)
      })
    }
    return stars
  }

  const stars = generateStars(150)

  return (
    <div className="relative bg-[#0f0f1f] py-20 md:py-24 overflow-hidden min-h-screen">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />

      <motion.div 
        className="relative z-10 container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-[38px] md:text-[44px] font-bold text-white mb-6 tracking-[-1.76px]">
            Wellness At Bower
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-400 max-w-4xl mx-auto leading-[28px]">
            From daily rituals to offbeat escapes, our wellness ecosystem supports every student's mental, physical, and emotional well-being.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Large Card - Therapy & Counseling */}
          <motion.div 
            className="lg:col-span-7"
            variants={cardVariants}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60"
                alt="Mental Health Counseling"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-[28px] font-semibold text-white mb-3">
                  On-Campus Therapy & Counseling
                </h3>
                <p className="text-[16px] text-gray-300 leading-relaxed max-w-md">
                  Access certified counselors for 1:1 mental health support — no stigma, no stress.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Two Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Top Card - Campus Spaces */}
            <motion.div
              variants={cardVariants}
              className="relative h-[240px] rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60"
                alt="Peaceful Campus Spaces"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <p className="text-[16px] text-gray-300 leading-relaxed">
                  Unplug in peaceful campus spaces designed to slow you down.
                </p>
              </div>
            </motion.div>

            {/* Bottom Card - Healthy Food */}
            <motion.div
              variants={cardVariants}
              className="relative h-[240px] rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60"
                alt="Healthy Food Options"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <p className="text-[16px] text-gray-300 leading-relaxed">
                  Healthy food options that fuel focus and keep you energized.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WellnessSection