'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  LightBulbIcon,
  BanknotesIcon,
  MegaphoneIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      icon: LightBulbIcon,
      title: 'Design Thinking',
      description: 'Learn to solve real-world problems by understanding users and thinking creatively.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      icon: BanknotesIcon,
      title: 'Financial Intelligence',
      description: 'Explore how businesses make money and practice smart decision-making.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: MegaphoneIcon,
      title: 'Pitching',
      description: 'Build confidence to present ideas clearly and pitch them like a pro.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      icon: CpuChipIcon,
      title: 'Building with Tech',
      description: 'Use modern tools and basic AI to bring your startup ideas to life.',
      gradient: 'from-orange-500 to-red-500'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const floatingStars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: ((i * 2654321) % 100),
    y: ((i * 9876543) % 100),
    size: ((i * 1234) % 3) + 1,
    delay: ((i * 2468) % 50) / 10,
    duration: ((i * 1357) % 30) / 10 + 3
  }))

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden py-20">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {floatingStars.map((star) => (
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 text-center"
          variants={itemVariants}
        >
          Skills That Make You <span className="text-[#ff8829]">A Pro</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden">
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:border-[#ff8829]/50 transition-colors">
                    <skill.icon className="w-8 h-8 text-gray-400 group-hover:text-[#ff8829] transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#ff8829] transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#ff8829]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-[#ff8829]/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-lg mb-6">
            Master these skills and become the entrepreneur you're meant to be
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#ff8829] to-[#ff6b29] text-white font-semibold rounded-full hover:shadow-xl transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey →
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SkillsSection