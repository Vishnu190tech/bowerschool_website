'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const LearningExecutionSection = () => {
  const [activeMonth, setActiveMonth] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)

  const months = [
    { id: 1, label: 'Month 1' },
    { id: 2, label: 'Month 2' },
    { id: 3, label: 'Month 3' },
    { id: 4, label: 'Month 4' }
  ]

  const contentByMonth = {
    1: [
      {
        id: 1,
        category: 'In class',
        title: 'Strategic Leadership',
        points: [
          'Developing Vision & Mission',
          'Decision-Making Frameworks using SWOT and Porter\'s Five Forces',
          'Team Building & Leadership',
          'Conflict Resolution'
        ]
      },
      {
        id: 2,
        category: 'In class',
        title: 'Product & Technology',
        points: [
          'Idea Validation & Market Fit via MVPs',
          'Product Development & Prototyping',
          'AI and Automation in Product Development',
          'User Experience to Design CustomerFocused Products'
        ]
      },
      {
        id: 3,
        category: 'In class',
        title: 'Finance',
        points: [
          'Introduction to Financial Statements',
          'Budgeting & Forecasting by Creating a Start up Budget',
          'Financial Models',
          'Advanced Financial Models to Calculate Start up\'s Valuation'
        ]
      }
    ],
    2: [
      {
        id: 1,
        category: 'In class',
        title: 'Marketing & Sales',
        points: [
          'Digital Marketing Fundamentals',
          'Content Strategy & SEO',
          'Sales Funnel Optimization',
          'Customer Acquisition Strategies'
        ]
      },
      {
        id: 2,
        category: 'In class',
        title: 'Operations',
        points: [
          'Process Optimization',
          'Supply Chain Management',
          'Quality Control Systems',
          'Lean Methodology Implementation'
        ]
      },
      {
        id: 3,
        category: 'In class',
        title: 'Human Resources',
        points: [
          'Talent Acquisition Strategies',
          'Performance Management',
          'Company Culture Building',
          'Employee Retention Programs'
        ]
      }
    ],
    3: [
      {
        id: 1,
        category: 'In class',
        title: 'Growth Strategies',
        points: [
          'Market Expansion Planning',
          'Partnership Development',
          'International Business',
          'Scaling Operations'
        ]
      },
      {
        id: 2,
        category: 'In class',
        title: 'Innovation Management',
        points: [
          'Design Thinking Workshops',
          'Disruptive Innovation',
          'R&D Management',
          'Intellectual Property Strategy'
        ]
      },
      {
        id: 3,
        category: 'In class',
        title: 'Data Analytics',
        points: [
          'Business Intelligence Tools',
          'Predictive Analytics',
          'Data-Driven Decision Making',
          'KPI Development & Tracking'
        ]
      }
    ],
    4: [
      {
        id: 1,
        category: 'In class',
        title: 'Investor Relations',
        points: [
          'Pitch Deck Creation',
          'Financial Storytelling',
          'Valuation Methods',
          'Term Sheet Negotiation'
        ]
      },
      {
        id: 2,
        category: 'In class',
        title: 'Exit Strategies',
        points: [
          'M&A Fundamentals',
          'IPO Preparation',
          'Strategic Partnerships',
          'Succession Planning'
        ]
      },
      {
        id: 3,
        category: 'In class',
        title: 'Leadership Mastery',
        points: [
          'Executive Presence',
          'Crisis Management',
          'Board Management',
          'Stakeholder Communication'
        ]
      }
    ]
  }

  const currentContent = contentByMonth[activeMonth as keyof typeof contentByMonth] || contentByMonth[1]
  const cardsPerView = 3
  const maxSlide = Math.max(0, currentContent.length - cardsPerView)

  const handlePrevious = () => {
    setCurrentSlide(Math.max(0, currentSlide - 1))
  }

  const handleNext = () => {
    setCurrentSlide(Math.min(maxSlide, currentSlide + 1))
  }

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
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <motion.div
        className="container mx-auto px-4 md:px-10 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mb-8 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[44px] font-bold text-[#2c360d] leading-tight">
            Where Learning Meets Execution
          </h2>
          <motion.button
            className="px-4 md:px-6 py-2.5 md:py-3 bg-[#ff8829] text-white font-medium text-[16px] md:text-[18px] rounded-lg shadow-[0px_0px_0px_1px_#e67320,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#e67320] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download
          </motion.button>
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="backdrop-blur-[60px] bg-white/10 rounded-3xl border-2 border-white shadow-[8px_8px_24px_0px_rgba(0,0,0,0.06)] p-4 md:p-6 lg:p-8"
          variants={itemVariants}
        >
          {/* Section Title */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] font-semibold text-[#2c360d] tracking-[-0.88px] md:tracking-[-1.04px] lg:tracking-[-1.12px] xl:tracking-[-1.2px]">
              Leadership Foundation
            </h3>
          </div>

          {/* Month Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
            {months.map((month) => (
              <button
                key={month.id}
                onClick={() => {
                  setActiveMonth(month.id)
                  setCurrentSlide(0)
                }}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[14px] md:text-[16px] font-medium transition-all duration-300 ${
                  activeMonth === month.id
                    ? 'bg-[rgba(255,136,41,0.05)] border border-[#2c360d] text-[#2c360d]'
                    : 'border border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
              >
                {month.label}
              </button>
            ))}
          </div>

          {/* Content Cards */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-3 md:gap-4 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`
              }}
            >
              {currentContent.map((content) => (
                <motion.div
                  key={content.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-6px)] lg:w-[calc(33.333%-11px)]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-2xl border-2 border-white shadow-[4px_4px_44px_0px_rgba(20,32,0,0.08)] p-4 md:p-6 h-[300px] md:h-[350px] flex flex-col relative overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'linear-gradient(145.539deg, rgba(255, 255, 255, 0.2) 2.6545%, rgba(255, 255, 255, 0) 44.796%), linear-gradient(88.1012deg, rgba(255, 136, 41, 0.1) 0.1095%, rgba(255, 136, 41, 0.04) 63.8%)'
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Category */}
                      <span className="text-[12px] md:text-[14px] font-medium text-[#6a6a6a] mb-4 md:mb-6">
                        {content.category}
                      </span>

                      {/* Title */}
                      <h4 className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold text-[#2c360d] mb-3 md:mb-4 tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.88px] xl:tracking-[-0.96px]">
                        {content.title}
                      </h4>

                      {/* Points */}
                      <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#6a6a6a] flex-1">
                        {content.points.map((point, index) => (
                          <li key={index} className="leading-[20px] md:leading-[22px] lg:leading-[24px]">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 md:gap-6 items-center justify-center md:justify-end mt-6 md:mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full transition-all ${
                currentSlide === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide === maxSlide}
              className={`p-2 rounded-full transition-all ${
                currentSlide === maxSlide
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LearningExecutionSection