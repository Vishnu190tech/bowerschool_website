'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const avatars = [
    { id: 1, src: '/avatar1.jpg', className: 'top-[15%] left-[5%] md:top-[20%] md:left-[10%]', delay: 0, size: 'w-16 h-16 md:w-20 md:h-20' },
    { id: 2, src: '/avatar2.jpg', className: 'top-[10%] left-[25%] md:top-[15%] md:left-[30%]', delay: 0.2, size: 'w-14 h-14 md:w-18 md:h-18' },
    { id: 3, src: '/avatar3.jpg', className: 'top-[8%] right-[28%] md:top-[10%] md:right-[35%]', delay: 0.4, size: 'w-16 h-16 md:w-20 md:h-20' },
    { id: 4, src: '/avatar4.jpg', className: 'top-[12%] right-[8%] md:top-[15%] md:right-[15%]', delay: 0.6, size: 'w-18 h-18 md:w-24 md:h-24' },
    { id: 5, src: '/avatar5.jpg', className: 'bottom-[35%] left-[3%] md:bottom-[40%] md:left-[8%]', delay: 0.8, size: 'w-20 h-20 md:w-24 md:h-24' },
    { id: 6, src: '/avatar6.jpg', className: 'bottom-[30%] left-[22%] md:bottom-[35%] md:left-[25%]', delay: 1, size: 'w-14 h-14 md:w-20 md:h-20' },
    { id: 7, src: '/avatar7.jpg', className: 'bottom-[32%] right-[25%] md:bottom-[38%] md:right-[30%]', delay: 1.2, size: 'w-16 h-16 md:w-22 md:h-22' },
    { id: 8, src: '/avatar8.jpg', className: 'bottom-[28%] right-[5%] md:bottom-[35%] md:right-[10%]', delay: 1.4, size: 'w-18 h-18 md:w-24 md:h-24' },
    { id: 9, src: '/avatar9.jpg', className: 'top-[25%] left-[12%] md:top-[30%] md:left-[18%]', delay: 1.6, size: 'w-15 h-15 md:w-20 md:h-20' },
    { id: 10, src: '/avatar10.jpg', className: 'top-[22%] right-[18%] md:top-[28%] md:right-[22%]', delay: 1.8, size: 'w-16 h-16 md:w-20 md:h-20' },
  ]

  const stats = [
    { value: '92%', label: 'Practitioner led Teaching' },
    { value: '3K hrs', label: 'Hours of Learning' },
    { value: '100+', label: 'Mentors associated' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent" />

      {/* Floating Avatar Images */}
      {avatars.map((avatar) => (
        <motion.div
          key={avatar.id}
          className={`absolute ${avatar.className} ${avatar.size} rounded-full overflow-hidden border-2 border-white/20 shadow-2xl`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: avatar.delay, duration: 0.5 },
            scale: { delay: avatar.delay, duration: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: avatar.delay
            }
          }}
        >
          <Image
            src={avatar.src}
            alt={`Profile ${avatar.id}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Founders Learn Faster
            <br />
            Together
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Join 10K+ Others Taking the Leap
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection