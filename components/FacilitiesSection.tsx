'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      title: 'B-cafe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: '/b0ff1d566da816d4ca35f7dc4f170679a5b1ed12.png'
    },
    {
      id: 2,
      title: 'Bower Zone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: '/b6f68bcc0d5b9d2c22d86bd280230365a4adaa28.svg'
    },
    {
      id: 3,
      title: 'Bower Case Centre',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: '/cf2ccf76577b181dad8eadc3bdbbc6d4f54ffb02.png'
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

  return (
    <div className="relative bg-[#f4f4ff] py-20 md:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20">
        <Image
          src="/2fda539e10baec0e450de6636564b28e083dce65.svg"
          alt=""
          width={60}
          height={60}
          className="opacity-60"
        />
      </div>
      <div className="absolute bottom-20 right-20">
        <Image
          src="/82957d39896253685589cf9e82572758fa11bd32.svg"
          alt=""
          width={60}
          height={60}
          className="opacity-60"
        />
      </div>

      <motion.div 
        className="container mx-auto px-8 md:px-20"
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
          <h2 className="text-[38px] md:text-[44px] font-bold text-[#121212] mb-6 tracking-[-1.76px]">
            Facilities at Bower
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#121212]/80 max-w-3xl mx-auto leading-[28px]">
            The building is LED Platinum certified with MERV 14 filtration ensuring the cleanest 
            air quality — perfect for working and staying productive.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_0px_rgba(66,66,255,0.08)] hover:shadow-[0px_8px_30px_0px_rgba(66,66,255,0.15)] transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-[240px] overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[22px] font-semibold text-[#121212] mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-[15px] text-[#121212]/70 leading-[24px]">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default FacilitiesSection