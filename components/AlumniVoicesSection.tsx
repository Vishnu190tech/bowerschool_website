'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AlumniVoicesSection = () => {
  const testimonials = [
    {
      id: 1,
      title: 'Building My First Startup at 19',
      author: 'Kabir Sheth',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
      size: 'small'
    },
    {
      id: 2,
      title: 'Be the Change',
      author: 'Kabir Sheth',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60',
      size: 'large'
    },
    {
      id: 3,
      title: 'Be the Change',
      author: 'Kabir Sheth',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60',
      size: 'large'
    },
    {
      id: 4,
      title: 'Building My First Startup at 19',
      author: 'Kabir Sheth',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
      size: 'small'
    }
  ]

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
      // Use index-based calculations for consistent values
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

  const stars = generateStars(100)

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
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />

      <motion.div 
        className="relative z-10 container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.h2 
          className="text-[38px] md:text-[44px] font-bold text-white mb-16"
          variants={itemVariants}
        >
          Voices Of Bower: From Our Alumni
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Row */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-opacity duration-500"
              style={{ backgroundImage: `url(${testimonials[0].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {testimonials[0].title}
              </h3>
              <p className="text-gray-300">
                -{testimonials[0].author}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-opacity duration-500"
              style={{ backgroundImage: `url(${testimonials[1].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {testimonials[1].title}
              </h3>
              <p className="text-gray-300">
                -{testimonials[1].author}
              </p>
            </div>
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-opacity duration-500"
              style={{ backgroundImage: `url(${testimonials[2].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {testimonials[2].title}
              </h3>
              <p className="text-gray-300">
                -{testimonials[2].author}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-opacity duration-500"
              style={{ backgroundImage: `url(${testimonials[3].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {testimonials[3].title}
              </h3>
              <p className="text-gray-300">
                -{testimonials[3].author}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AlumniVoicesSection