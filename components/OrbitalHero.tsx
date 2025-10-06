'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import {
  CodeBracketIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  UsersIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/solid'

const OrbitalHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Create stars for background with deterministic values
  const stars = React.useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: ((i * 1234567) % 100),
      y: ((i * 7654321) % 100),
      size: ((i * 2468) % 20) / 10 + 0.5,
      delay: ((i * 1357) % 50) / 10,
      duration: ((i * 8642) % 30) / 10 + 2
    }))
    , [])

  // Orbital icons configuration with colors matching Figma
  const orbitalIcons = [
    { Icon: WrenchScrewdriverIcon, angle: 0, color: 'text-white', bg: 'from-orange-500 to-red-500' },
    { Icon: CodeBracketIcon, angle: 45, color: 'text-white', bg: 'from-yellow-500 to-orange-500' },
    { Icon: CurrencyDollarIcon, angle: 90, color: 'text-white', bg: 'from-yellow-400 to-yellow-600' },
    { Icon: LightBulbIcon, angle: 135, color: 'text-white', bg: 'from-green-500 to-teal-500' },
    { Icon: ChartBarIcon, angle: 180, color: 'text-white', bg: 'from-green-400 to-emerald-600' },
    { Icon: RocketLaunchIcon, angle: 225, color: 'text-white', bg: 'from-teal-500 to-cyan-600' },
    { Icon: UsersIcon, angle: 270, color: 'text-white', bg: 'from-purple-500 to-pink-500' },
    { Icon: CpuChipIcon, angle: 315, color: 'text-white', bg: 'from-cyan-500 to-blue-600' },
  ]

  return (
    <div className="relative  overflow-hidden">
      {/* Animated Stars Background */}
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
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-b from-gray-950/30 via-indigo-950/30 to-[#3232E6]/40 px-4 pt-16">
        {/* Header Text */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
            Your Journey as a Founder
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white">
            Build A Business
          </h2>
        </motion.div>

        {/* Orbital System */}
        <div className="relative w-[350px] h-[250px] md:w-[700px] md:h-[400px] lg:w-[900px] lg:h-[500px] mb-12">
          {/* Universe Background Image - Responsive */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/universe-Interaction.png"
              alt="Universe Background"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Optional: Central Glowing Core - Subtle version to not interfere with background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Subtle glow effect */}
            <motion.div
              className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-blue-400/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          {/* Orbiting Icons - Elliptical Path */}
          <motion.div
            className="absolute inset-0 z-30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {orbitalIcons.map((item, index) => {
              const { Icon, angle, color, bg } = item
              // Elliptical orbit calculation - using multiple sizes for responsiveness
              const angleRad = (angle * Math.PI) / 180

              // Mobile orbit (smaller)
              const mobileX = 100 * Math.cos(angleRad)
              const mobileY = 60 * Math.sin(angleRad)

              // Tablet orbit (medium)
              const tabletX = 180 * Math.cos(angleRad)
              const tabletY = 100 * Math.sin(angleRad)

              // Desktop orbit (spread out)
              const desktopX = 250 * Math.cos(angleRad)
              const desktopY = 150 * Math.sin(angleRad)

              return (
                <React.Fragment key={index}>
                  {/* Mobile Version */}
                  <motion.div
                    className="absolute md:hidden"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: mobileX,
                      y: mobileY,
                    }}
                    transition={{
                      opacity: { delay: index * 0.1, duration: 0.5 },
                      scale: { delay: index * 0.1, duration: 0.5 },
                      x: { duration: 0 },
                      y: { duration: 0 },
                    }}
                  >
                    <motion.div
                      className="relative -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <motion.div
                        className={`w-10 h-10 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-md`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            delay: index * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut" as const
                          }
                        }}
                      >
                        <Icon className={`w-5 h-5 ${color} drop-shadow-lg`} />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Tablet Version */}
                  <motion.div
                    key={`${index}-tablet`}
                    className="absolute hidden md:block lg:hidden"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: tabletX,
                      y: tabletY,
                    }}
                    transition={{
                      opacity: { delay: index * 0.1, duration: 0.5 },
                      scale: { delay: index * 0.1, duration: 0.5 },
                      x: { duration: 0 },
                      y: { duration: 0 },
                    }}
                  >
                    <motion.div
                      className="relative -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-md`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            delay: index * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut" as const
                          }
                        }}
                      >
                        <Icon className={`w-6 h-6 ${color} drop-shadow-lg`} />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Desktop Version */}
                  <motion.div
                    key={`${index}-desktop`}
                    className="absolute hidden lg:block"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: desktopX,
                      y: desktopY,
                    }}
                    transition={{
                      opacity: { delay: index * 0.1, duration: 0.5 },
                      scale: { delay: index * 0.1, duration: 0.5 },
                      x: { duration: 0 },
                      y: { duration: 0 },
                    }}
                  >
                    <motion.div
                      className="relative -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-md`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            delay: index * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut" as const
                          }
                        }}
                      >
                        <Icon className={`w-7 h-7 ${color} drop-shadow-lg`} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </React.Fragment>
              )
            })}
          </motion.div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#3232E6]/40  to-white px-4 pb-16">

        {/* LEARN.BUILD.SCALE Text */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white tracking-wider">
            LEARN.BUILD.SCALE
          </h3>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative aspect-video">
            {isPlaying ? (
              <>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Experience the Journey"
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </button>
              </>
            ) : (
              <>
                {/* Video Placeholder with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                  <img
                    src="/campus-modern.jpg"
                    alt="Campus"
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                {/* Play Button */}
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#3232E6]/50 to-[#3232E6]/50 rounded-xl flex items-center justify-center hover:from-[#3232E6]/70 hover:to-[#3232E6]/70 transition-all group shadow-2xl border-2 border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className=' w-18 h-18 md:w-20 md:h-20  bg-gradient-to-br from-[#3232E6]/80 to-[#3232E6]/80 rounded-xl flex items-center justify-center hover:from-[#3232E6] hover:to-[#3232E6] transition-all group shadow-2xl border-2 border-white/20'>
                    <PlayIcon className="w-10 h-10 md:w-12 md:h-12 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                </motion.button>

                {/* Video Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-base md:text-lg font-medium">Experience the Journey</p>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrbitalHero