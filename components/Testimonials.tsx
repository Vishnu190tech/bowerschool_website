'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3

  const testimonials = [
    {
      id: 1,
      text: 'Awesome program. i feel super educated and my confidence built up too. the entire team is fantastic, the experience was great, i loved it. highly recommend it to others',
      name: 'student',
      details: 'student details',
      image: '/student1.jpg'
    },
    {
      id: 2,
      text: 'Awesome program. i feel super educated and my confidence built up too. the entire team is fantastic, the experience was great, i loved it. highly recommend it to others',
      name: 'student',
      details: 'student details',
      image: '/student2.jpg'
    },
    {
      id: 3,
      text: 'Awesome program. i feel super educated and my confidence built up too. the entire team is fantastic, the experience was great, i loved it. highly recommend it to others',
      name: 'student',
      details: 'student details',
      image: '/student3.jpg'
    },
    {
      id: 4,
      text: 'Awesome program. i feel super educated and my confidence built up too. the entire team is fantastic, the experience was great, i loved it. highly recommend it to others',
      name: 'student',
      details: 'student details',
      image: '/student4.jpg'
    },
    // Duplicate for carousel effect (24 total as shown in design)
    ...Array(20).fill(null).map((_, i) => ({
      id: i + 5,
      text: 'Awesome program. i feel super educated and my confidence built up too. the entire team is fantastic, the experience was great, i loved it. highly recommend it to others',
      name: 'student',
      details: 'student details',
      image: `/student${(i % 4) + 1}.jpg`
    }))
  ]

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-950 to-black min-h-screen overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {Array(100).fill(null).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${((i * 1234567) % 100)}%`,
              top: `${((i * 7654321) % 100)}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: ((i * 8642) % 30) / 10 + 2,
              repeat: Infinity,
              delay: ((i * 1357) % 50) / 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Light Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-20 py-20">
        {/* Header */}
        <motion.h2 
          className="text-white text-4xl md:text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What People Had To Say
        </motion.h2>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}
                >
                  {/* Quote Icon */}
                  <div className="text-orange-500 text-5xl mb-4 font-serif">"</div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-300 text-base leading-relaxed mb-8">
                    {testimonial.text}
                  </p>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-700 mb-4" />
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16">
          {/* Page Indicator */}
          <div className="flex items-center gap-4 text-white">
            <span className="text-2xl font-bold">{currentPage + 1}</span>
            <div className="w-12 h-[2px] bg-gray-600" />
            <span className="text-2xl text-gray-400">{totalPages}</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={prevPage}
              className="p-2 text-white hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextPage}
              className="p-2 text-white hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex">
                <ChevronRightIcon className="w-6 h-6" />
                <ChevronRightIcon className="w-6 h-6 -ml-3" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Additional Visual Effects */}
      <motion.div
        className="absolute top-1/2 left-10 w-2 h-2 bg-orange-400 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-3 h-3 bg-orange-500 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default Testimonials