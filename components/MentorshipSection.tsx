'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MentorshipSection = () => {
  const mentors = [
    { 
      id: 'mentor',
      name: 'Mentor',
      image: '/mentor1.jpg',
      position: { top: '65%', left: '25%' },
      color: 'bg-red-100',
      borderColor: 'border-red-300'
    },
    { 
      id: 'expert',
      name: 'Experts',
      image: '/expert1.jpg',
      position: { top: '20%', right: '30%' },
      color: 'bg-purple-100',
      borderColor: 'border-purple-300'
    },
    { 
      id: 'investor',
      name: 'Investor',
      image: '/investor1.jpg',
      position: { top: '30%', right: '15%' },
      color: 'bg-blue-100',
      borderColor: 'border-blue-300'
    },
    { 
      id: 'you',
      name: 'You',
      image: '/you-avatar.jpg',
      position: { bottom: '25%', left: '45%' },
      color: 'bg-green-100',
      borderColor: 'border-green-300'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Why Bower Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <span className="text-sm font-medium text-purple-700">Why Bower</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Learning theories isn't enough to
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              <span className="text-blue-600">Build A Business</span>
            </h1>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-8"
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              That's why we built Bower! We bridge the gap between textbooks & real business world.
            </p>
            
            <motion.button
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start your Application
            </motion.button>
          </motion.div>
        </div>

        {/* Mentorship Circle Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MENTORSHIP
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CIRCLE
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Network Every Founder Needs
            </p>
            
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              Traditional education doesn't teach you how to raise funding, find product-market fit, or build a team. Our mentors do. They're your sounding board, your cheerleaders, and your reality check.
            </p>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2 mt-12">
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
              <div className="w-2 h-1 bg-gray-300 rounded-full" />
              <div className="w-2 h-1 bg-gray-300 rounded-full" />
              <div className="w-2 h-1 bg-gray-300 rounded-full" />
            </div>
          </motion.div>

          {/* Right Column - Mentorship Circle Visualization */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Main Card Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-full max-w-md h-[400px] bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
                animate={{
                  boxShadow: [
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    "0 30px 35px -5px rgba(0, 0, 0, 0.15)",
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Card Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-800">Mentorship Circle</h3>
                  <p className="text-sm text-gray-500 mt-1">The Network Every Founder Needs</p>
                </div>

                {/* Central Gradient Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 opacity-50 blur-2xl" />

                {/* Connecting Lines Animation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {mentors.map((mentor, index) => {
                    const nextIndex = (index + 1) % mentors.length
                    return (
                      <motion.line
                        key={`line-${mentor.id}`}
                        x1="50%"
                        y1="50%"
                        x2={mentor.position.left || mentor.position.right}
                        y2={mentor.position.top || mentor.position.bottom}
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{
                          duration: 2,
                          delay: index * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    )
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Mentor Avatars */}
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.id}
                    className="absolute"
                    style={mentor.position}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div
                      className="relative"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Avatar Container */}
                      <div className={`relative w-20 h-20 ${mentor.color} rounded-full p-1 ${mentor.borderColor} border-2`}>
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                          <Image
                            src={mentor.image}
                            alt={mentor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Label */}
                      <motion.div
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <span className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded-full shadow-sm">
                          {mentor.name}
                        </span>
                      </motion.div>

                      {/* Pulse Effect */}
                      <motion.div
                        className={`absolute inset-0 ${mentor.color} rounded-full`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          delay: index * 0.3,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating Background Elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-purple-200 rounded-full opacity-30"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30"
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MentorshipSection