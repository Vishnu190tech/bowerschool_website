'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface LearningTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  titleColor: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonText: string;
  buttonShadow: string;
  containerBg: string;
  containerBorder: string;
  sectionTitleColor: string;
  tabActiveBg: string;
  tabActiveBorder: string;
  tabActiveText: string;
  tabInactiveBorder: string;
  tabInactiveText: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  cardGradient: string;
  categoryText: string;
  cardTitleColor: string;
  pointsColor: string;
  paginationActive: string;
  paginationInactive: string;
  arrowColor: string;
}

const LEARNING_THEMES: Record<ThemeType, LearningTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#ffffff',
    titleColor: '#1a2555',
    buttonBg: '#3232e6',
    buttonHoverBg: '#2525c4',
    buttonText: '#ffffff',
    buttonShadow: '0px_0px_0px_1px_#2525c4,0px_1px_3px_0px_rgba(0,0,0,0.1)',
    containerBg: 'rgba(255, 255, 255, 0.1)',
    containerBorder: '#ffffff',
    sectionTitleColor: '#1a2555',
    tabActiveBg: 'rgba(50, 50, 230, 0.05)',
    tabActiveBorder: '#1a2555',
    tabActiveText: '#1a2555',
    tabInactiveBorder: '#d1d5db',
    tabInactiveText: '#6b7280',
    cardBg: '#ffffff',
    cardBorder: '#e5e7eb',
    cardShadow: '0px_4px_24px_0px_rgba(0,0,0,0.06)',
    cardGradient: 'linear-gradient(135deg, rgba(240, 240, 255, 0.8) 0%, rgba(245, 246, 255, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%)',
    categoryText: '#6a6a6a',
    cardTitleColor: '#1a2555',
    pointsColor: '#6a6a6a',
    paginationActive: '#1a2555',
    paginationInactive: '#d1d5db',
    arrowColor: '#374151',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#ffffff',
    titleColor: '#2d3a15',
    buttonBg: '#8FD920',
    buttonHoverBg: '#7ac01a',
    buttonText: '#000000',
    buttonShadow: '0px_0px_0px_1px_#7ac01a,0px_1px_3px_0px_rgba(0,0,0,0.1)',
    containerBg: 'rgba(255, 255, 255, 0.1)',
    containerBorder: '#ffffff',
    sectionTitleColor: '#2d3a15',
    tabActiveBg: 'rgba(168, 243, 38, 0.05)',
    tabActiveBorder: '#2d3a15',
    tabActiveText: '#2d3a15',
    tabInactiveBorder: '#d1d5db',
    tabInactiveText: '#6b7280',
    cardBg: '#ffffff',
    cardBorder: '#e5e7eb',
    cardShadow: '0px_4px_24px_0px_rgba(0,0,0,0.06)',
    cardGradient: 'linear-gradient(135deg, rgba(245, 255, 217, 0.8) 0%, rgba(249, 255, 230, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%)',
    categoryText: '#6a6a6a',
    cardTitleColor: '#2d3a15',
    pointsColor: '#6a6a6a',
    paginationActive: '#2d3a15',
    paginationInactive: '#d1d5db',
    arrowColor: '#374151',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#ffffff',
    titleColor: '#2c360d',
    buttonBg: '#ff8829',
    buttonHoverBg: '#e67320',
    buttonText: '#ffffff',
    buttonShadow: '0px_0px_0px_1px_#e67320,0px_1px_3px_0px_rgba(0,0,0,0.1)',
    containerBg: 'rgba(255, 255, 255, 0.1)',
    containerBorder: '#ffffff',
    sectionTitleColor: '#2c360d',
    tabActiveBg: 'rgba(255, 136, 41, 0.05)',
    tabActiveBorder: '#2c360d',
    tabActiveText: '#2c360d',
    tabInactiveBorder: '#d1d5db',
    tabInactiveText: '#6b7280',
    cardBg: '#ffffff',
    cardBorder: '#e5e7eb',
    cardShadow: '0px_4px_24px_0px_rgba(0,0,0,0.06)',
    cardGradient: 'linear-gradient(135deg, rgba(255, 248, 240, 0.8) 0%, rgba(255, 245, 230, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%)',
    categoryText: '#6a6a6a',
    cardTitleColor: '#2c360d',
    pointsColor: '#6a6a6a',
    paginationActive: '#2c360d',
    paginationInactive: '#d1d5db',
    arrowColor: '#374151',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#ffffff',
    titleColor: '#1a2555',
    buttonBg: '#4242ff',
    buttonHoverBg: '#3232e6',
    buttonText: '#ffffff',
    buttonShadow: '0px_0px_0px_1px_#3232e6,0px_1px_3px_0px_rgba(0,0,0,0.1)',
    containerBg: 'rgba(255, 255, 255, 0.1)',
    containerBorder: '#ffffff',
    sectionTitleColor: '#1a2555',
    tabActiveBg: 'rgba(66, 66, 255, 0.05)',
    tabActiveBorder: '#1a2555',
    tabActiveText: '#1a2555',
    tabInactiveBorder: '#d1d5db',
    tabInactiveText: '#6b7280',
    cardBg: '#ffffff',
    cardBorder: '#e5e7eb',
    cardShadow: '0px_4px_24px_0px_rgba(0,0,0,0.06)',
    cardGradient: 'linear-gradient(135deg, rgba(240, 240, 255, 0.8) 0%, rgba(245, 246, 255, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%)',
    categoryText: '#6a6a6a',
    cardTitleColor: '#1a2555',
    pointsColor: '#6a6a6a',
    paginationActive: '#1a2555',
    paginationInactive: '#d1d5db',
    arrowColor: '#374151',
  },
};

interface ContentCard {
  id: number;
  category: string;
  title: string;
  points: string[];
}

interface MonthData {
  [key: number]: ContentCard[];
}

interface Month {
  id: number;
  label: string;
}

interface LearningExecutionSectionProps {
  theme?: ThemeType;
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  sectionTitle?: string;
  months?: Month[];
  contentByMonth?: MonthData;
}

const LearningExecutionSection = ({
  theme = 'seed',
  title = 'Where Learning Meets Execution',
  buttonText = 'Download',
  onButtonClick,
  sectionTitle = 'Leadership Foundation',
  months: customMonths,
  contentByMonth: customContent
}: LearningExecutionSectionProps) => {
  const [activeMonth, setActiveMonth] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentTheme = LEARNING_THEMES[theme];

  const defaultMonths = [
    { id: 1, label: 'Month 1' },
    { id: 2, label: 'Month 2' },
    { id: 3, label: 'Month 3' },
    { id: 4, label: 'Month 4' }
  ]

  const months = customMonths || defaultMonths

  const defaultContentByMonth: MonthData = {
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
      },
      {
        id: 4,
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

  const contentByMonth = customContent || defaultContentByMonth
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
    <div
      className="py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      <motion.div
        className="container mx-auto px-4 md:px-8 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mb-8 "
          variants={itemVariants}
        >
          <h2
            className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[44px] font-bold leading-tight"
            style={{ color: currentTheme.titleColor }}
          >
            {title}
          </h2>
          <motion.button
            className="px-4 md:px-6 py-2.5 md:py-3 font-medium text-[16px] md:text-[18px] rounded-lg transition-colors"
            style={{
              backgroundColor: currentTheme.buttonBg,
              color: currentTheme.buttonText,
              boxShadow: currentTheme.buttonShadow.replace(/_/g, ' ')
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.buttonHoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.buttonBg;
            }}
            onClick={onButtonClick}
          >
            {buttonText}
          </motion.button>
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="backdrop-blur-[60px] rounded-3xl border-2 p-4 md:p-6 lg:p-8 shadow-[8px_8px_24px_0px_rgba(0,0,0,0.06)]"
          style={{
            backgroundColor: currentTheme.containerBg,
            borderColor: currentTheme.containerBorder
          }}
          variants={itemVariants}
        >
          {/* Section Title */}
          <div className="mb-4 md:mb-6">
            <h3
              className="text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] font-semibold tracking-[-0.88px] md:tracking-[-1.04px] lg:tracking-[-1.12px] xl:tracking-[-1.2px]"
              style={{ color: currentTheme.sectionTitleColor }}
            >
              {sectionTitle}
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
                className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[14px] md:text-[16px] font-medium transition-all duration-300 border"
                style={
                  activeMonth === month.id
                    ? {
                        backgroundColor: currentTheme.tabActiveBg,
                        borderColor: currentTheme.tabActiveBorder,
                        color: currentTheme.tabActiveText
                      }
                    : {
                        borderColor: currentTheme.tabInactiveBorder,
                        color: currentTheme.tabInactiveText
                      }
                }
              >
                {month.label}
              </button>
            ))}
          </div>

          {/* Content Cards */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-3 py-4 px-2 md:gap-4 transition-transform duration-500"
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
                  <div
                    className="rounded-2xl border p-4 md:p-6 h-[300px] md:h-[350px] flex flex-col relative overflow-hidden"
                    style={{
                      backgroundColor: currentTheme.cardBg,
                      borderColor: currentTheme.cardBorder,
                      boxShadow: currentTheme.cardShadow.replace(/_/g, ' ')
                    }}
                  >
                    {/* Background Gradient - Theme-based */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: currentTheme.cardGradient
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Category */}
                      <span
                        className="text-[12px] md:text-[14px] font-medium mb-4 md:mb-6"
                        style={{ color: currentTheme.categoryText }}
                      >
                        {content.category}
                      </span>

                      {/* Title */}
                      <h4
                        className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold mb-3 md:mb-4 tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.88px] xl:tracking-[-0.96px]"
                        style={{ color: currentTheme.cardTitleColor }}
                      >
                        {content.title}
                      </h4>

                      {/* Points */}
                      <ul
                        className="list-disc list-inside space-y-1.5 md:space-y-2 text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] flex-1"
                        style={{ color: currentTheme.pointsColor }}
                      >
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

          {/* Pagination Dots and Navigation */}
          <div className="flex gap-4 md:gap-6 items-center justify-end mt-6 md:mt-8">
            {/* Pagination Dots */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: currentSlide === index ? '32px' : '8px',
                    height: '8px',
                    backgroundColor: currentSlide === index
                      ? currentTheme.paginationActive
                      : currentTheme.paginationInactive
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentSlide === 0}
                className={`p-2 rounded-full transition-all ${
                  currentSlide === 0
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-gray-100'
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeftIcon
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: currentTheme.arrowColor }}
                />
              </button>
              <button
                onClick={handleNext}
                disabled={currentSlide === maxSlide}
                className={`p-2 rounded-full transition-all ${
                  currentSlide === maxSlide
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-gray-100'
                }`}
                aria-label="Next slide"
              >
                <ChevronRightIcon
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: currentTheme.arrowColor }}
                />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LearningExecutionSection