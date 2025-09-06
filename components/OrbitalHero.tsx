'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PlayIcon } from '@heroicons/react/24/solid'
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
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950 to-gray-950 overflow-hidden">
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
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Header Text */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Your Journey as a Founder
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Build A Business
          </h2>
        </motion.div>

        {/* Orbital System */}
        <div className="relative w-[350px] h-[250px] md:w-[700px] md:h-[400px] lg:w-[900px] lg:h-[500px] mb-12">
          {/* Elliptical Orbital Rings */}
          {[1, 2, 3, 4, 5, 6].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-white/10"
              style={{
                width: `${100 - (6 - ring) * 12}%`,
                height: `${100 - (6 - ring) * 15}%`,
                left: `${(6 - ring) * 6}%`,
                top: `${(6 - ring) * 7.5}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: ring === 3 ? 0.3 : 0.15,
              }}
              transition={{ 
                duration: 1, 
                delay: ring * 0.1,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Central Glowing Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Outer glow */}
            <motion.div
              className="absolute w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            
            {/* Middle glow */}
            <motion.div
              className="absolute w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-blue-400/40 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            
            {/* Inner core with gradient */}
            <motion.div
              className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600" />
              <div className="absolute inset-[2px] bg-gradient-to-br from-blue-300 via-blue-400 to-purple-500" />
              <div className="absolute inset-1 bg-gradient-to-br from-blue-200 via-blue-300 to-purple-400" />
              <motion.div 
                className="absolute inset-2 bg-gradient-to-br from-white via-blue-100 to-purple-300"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Pulsing Rings from Core */}
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={`pulse-${ring}`}
                className="absolute rounded-full border-2 border-blue-400/40"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ width: 80, height: 80, opacity: 0 }}
                animate={{
                  width: [80, 250, 400],
                  height: [80, 250, 400],
                  opacity: [0.8, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  delay: ring * 1,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Orbiting Icons - Elliptical Path */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {orbitalIcons.map((item, index) => {
              const { Icon, angle, color, bg } = item
              // Elliptical orbit calculation
              const a = 200 // semi-major axis for desktop
              const b = 120 // semi-minor axis for desktop
              const angleRad = (angle * Math.PI) / 180
              const x = a * Math.cos(angleRad)
              const y = b * Math.sin(angleRad)
              
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: x,
                    y: y,
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
                      className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center shadow-xl border border-white/20 backdrop-blur-sm`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        y: {
                          duration: 2,
                          delay: index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${color} drop-shadow-lg`} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* LEARN.BUILD.SCALE Text */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wider">
            LEARN.BUILD.SCALE
          </h3>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative aspect-video">
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-purple-900 transition-all group shadow-2xl border-2 border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlayIcon className="w-10 h-10 md:w-12 md:h-12 text-white ml-1 group-hover:scale-110 transition-transform" />
            </motion.button>

            {/* Video Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-base md:text-lg font-medium">Experience the Journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrbitalHero