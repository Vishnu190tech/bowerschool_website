'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('General Questions')
  const [expandedItems, setExpandedItems] = useState<number[]>([1])

  const categories = [
    'General Questions',
    'Eligibility',
    'Admissions',
    'Fees/refund'
  ]

  const faqData = {
    'General Questions': [
      {
        id: 1,
        number: '01',
        question: 'Who is eligible to apply for the Bower Lead Program?',
        answer: 'The program is open to individuals aged 21-45 who either own a business or are in the ideation phase. It is also ideal for corporate professionals seeking hands-on learning and able to attend weekday classes.'
      },
      {
        id: 2,
        number: '02',
        question: 'Are there specific sectors that applicants must focus on?',
        answer: 'No, we welcome entrepreneurs from all sectors. Our program is designed to support diverse business ideas and industries, from technology and healthcare to education and sustainability.'
      },
      {
        id: 3,
        number: '03',
        question: 'Is there any international exposure in the UG program?',
        answer: 'Yes, the program includes international exposure through virtual sessions with global mentors, case studies from international markets, and potential opportunities for international business trips.'
      }
    ],
    'Eligibility': [
      {
        id: 4,
        number: '01',
        question: 'What are the minimum educational requirements?',
        answer: 'A bachelor\'s degree in any field is preferred, but we also consider exceptional candidates with relevant professional experience and entrepreneurial achievements.'
      },
      {
        id: 5,
        number: '02',
        question: 'Can international students apply?',
        answer: 'Yes, international students are welcome to apply. We provide support for visa applications and have accommodations for remote participation when needed.'
      }
    ],
    'Admissions': [
      {
        id: 6,
        number: '01',
        question: 'What is the admission process?',
        answer: 'The admission process includes an online application, submission of business idea or plan, interview with our panel, and final selection based on merit and potential.'
      },
      {
        id: 7,
        number: '02',
        question: 'When does the next batch start?',
        answer: 'Our next batch starts in April 2025. Applications are open now and we recommend applying early as seats are limited.'
      }
    ],
    'Fees/refund': [
      {
        id: 8,
        number: '01',
        question: 'What is the program fee structure?',
        answer: 'The program fee varies based on the duration and format chosen. Please contact our admissions team for detailed fee structure and available payment plans.'
      },
      {
        id: 9,
        number: '02',
        question: 'Is there a refund policy?',
        answer: 'Yes, we have a refund policy. Full refund is available if withdrawn before the program starts. Partial refunds are considered on a case-by-case basis after the program begins.'
      }
    ]
  }

  const toggleExpand = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
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
      className="relative  bg-black overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at center bottom, 
            rgba(255, 136, 41, 0.1) 0%, 
            rgba(255, 191, 41, 0.05) 51%, 
            transparent 100%)
        `
      }}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Sidebar */}
          <motion.div
            className="w-full lg:w-[300px] lg:shrink-0"
            variants={itemVariants}
          >
            <div className="backdrop-blur-[22px] bg-black/40 border border-[#ff8829] rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6">
              <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-left text-[16px] sm:text-[18px] lg:text-xl whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${activeCategory === category
                        ? 'text-[#f5f9ff] font-medium'
                        : 'text-[#f5f9ff]/60 font-normal hover:text-[#f5f9ff]/80'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            className="flex-1 w-full"
            variants={itemVariants}
          >
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <AnimatePresence mode="wait">
                {faqData[activeCategory as keyof typeof faqData]?.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-b border-[#f5f9ff]/20 pb-4 md:pb-6 lg:pb-8">
                      <button
                        onClick={() => toggleExpand(faq.id)}
                        className="w-full text-left group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-1">
                            <span className="text-[18px] sm:text-[20px] lg:text-2xl font-semibold text-[#f5f9ff]/80 shrink-0">
                              {faq.number}
                            </span>
                            <div className="flex-1">
                              <h3 className="text-[18px] sm:text-[20px] lg:text-2xl font-semibold text-[#f5f9ff] tracking-[-0.96px] group-hover:text-[#ff8829] transition-colors pr-2">
                                {faq.question}
                              </h3>
                              <AnimatePresence>
                                {expandedItems.includes(faq.id) && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <p className="text-[14px] sm:text-[16px] lg:text-lg text-[#f5f9ff]/80 mt-3 lg:mt-4 leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedItems.includes(faq.id) ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-2 sm:ml-3 lg:ml-4 shrink-0"
                          >
                            <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f5f9ff] group-hover:text-[#ff8829] transition-colors" />
                          </motion.div>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 sm:top-16 md:top-20 right-5 sm:right-10 md:right-16 lg:right-20 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-br from-[#ff8829]/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      <motion.div
        className="absolute bottom-20 sm:bottom-32 lg:bottom-40 left-5 sm:left-10 md:left-16 lg:left-20 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-[#ffbf29]/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
    </div>
  )
}

export default FAQSection