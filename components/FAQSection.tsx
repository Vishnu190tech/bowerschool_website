'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface FAQTheme {
  primary: string;
  secondary: string;
  radialGradient: string;
  blob1Color: string;
  blob2Color: string;
  borderColor: string;
  darkBg: string;
  overlayGradient: string;
}

const FAQ_THEMES: Record<ThemeType, FAQTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(50, 50, 230, 0.1) 0%, rgba(66, 66, 255, 0.05) 51%, transparent 100%)',
    blob1Color: 'rgba(50, 50, 230, 0.2)',
    blob2Color: 'rgba(66, 66, 255, 0.2)',
    borderColor: 'rgba(50, 50, 230, 0.5)',
    darkBg: '#010817', // Dark blue-black
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(1, 8, 23, 0.5) 50%, #010817 100%)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(168, 243, 38, 0.1) 0%, rgba(143, 217, 32, 0.05) 51%, transparent 100%)',
    blob1Color: 'rgba(168, 243, 38, 0.2)',
    blob2Color: 'rgba(143, 217, 32, 0.2)',
    borderColor: 'rgba(168, 243, 38, 0.5)',
    darkBg: '#0a1501', // Dark green-black
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(10, 21, 1, 0.5) 50%, #0a1501 100%)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(255, 136, 41, 0.1) 0%, rgba(255, 191, 41, 0.05) 51%, transparent 100%)',
    blob1Color: 'rgba(255, 136, 41, 0.2)',
    blob2Color: 'rgba(255, 191, 41, 0.2)',
    borderColor: 'rgba(255, 136, 41, 0.5)',
    darkBg: '#170c01', // Dark orange-brown (original)
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(23, 12, 1, 0.5) 50%, #170c01 100%)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(66, 66, 255, 0.1) 0%, rgba(50, 50, 230, 0.05) 51%, transparent 100%)',
    blob1Color: 'rgba(66, 66, 255, 0.2)',
    blob2Color: 'rgba(50, 50, 230, 0.2)',
    borderColor: 'rgba(66, 66, 255, 0.5)',
    darkBg: '#010817', // Dark blue-black
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(1, 8, 23, 0.5) 50%, #010817 100%)',
  },
};

// FAQ Data Interfaces
interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

interface FAQData {
  [category: string]: FAQItem[];
}

// Component Props Interface
interface FAQSectionProps {
  theme?: ThemeType;
  faqData?: FAQData;
  categories?: string[];
  defaultCategory?: string;
  title?: string;
}

// Enhanced Default FAQ Content
const DEFAULT_FAQ_DATA: FAQData = {
  'General Questions': [
    {
      id: 1,
      number: '01',
      question: 'Who is eligible to apply for the Bower programs?',
      answer: 'Our programs are designed for diverse learners. The K12 programs welcome students aged 6-18, UG programs are for ages 18-24, LEAD programs target professionals aged 21-45 with business experience, and SEED programs cater to young innovators aged 14-20. Each program has specific requirements tailored to its objectives.'
    },
    {
      id: 2,
      number: '02',
      question: 'Are there specific sectors that applicants must focus on?',
      answer: 'No, we welcome students and entrepreneurs from all sectors. Our programs are designed to support diverse interests and industries, from technology and healthcare to education, sustainability, arts, and social impact. We believe in cross-disciplinary learning and innovation.'
    },
    {
      id: 3,
      number: '03',
      question: 'Is there any international exposure in the programs?',
      answer: 'Yes, all our programs include international exposure through virtual sessions with global mentors, case studies from international markets, collaborative projects with international students, and potential opportunities for international competitions, exchanges, and business trips for advanced learners.'
    },
    {
      id: 4,
      number: '04',
      question: 'What is the duration of each program?',
      answer: 'Program durations vary: K12 programs run for full academic years with continuous enrollment, UG programs span 3-4 years with semester-based learning, LEAD programs are intensive 6-12 month courses, and SEED programs offer flexible 3-6 month modules. All programs include ongoing mentorship and alumni support.'
    },
    {
      id: 5,
      number: '05',
      question: 'What kind of support do students receive after completing the program?',
      answer: 'We provide comprehensive post-program support including lifetime access to our alumni network, ongoing career guidance, job placement assistance, entrepreneurship mentorship, access to funding networks, continued learning resources, and invitations to exclusive events, workshops, and masterclasses.'
    }
  ],
  'Eligibility': [
    {
      id: 6,
      number: '01',
      question: 'What are the minimum educational requirements?',
      answer: 'Requirements vary by program: K12 programs require current school enrollment, UG programs need high school completion (10+2), LEAD programs prefer a bachelor\'s degree or equivalent professional experience, and SEED programs welcome students from grades 9-12. We also consider exceptional candidates with demonstrated talent and passion.'
    },
    {
      id: 7,
      number: '02',
      question: 'Can international students apply?',
      answer: 'Absolutely! International students are welcome to apply to all our programs. We provide support for visa applications, have flexible options for remote/hybrid participation, offer orientation programs for international students, and maintain a diverse global community of learners from over 30 countries.'
    },
    {
      id: 8,
      number: '03',
      question: 'Is work or entrepreneurial experience mandatory for LEAD program?',
      answer: 'While work or entrepreneurial experience is highly preferred for the LEAD program, we also consider candidates in the ideation phase with strong business concepts. We look for demonstrated passion, leadership potential, problem-solving abilities, and commitment to making an impact in their chosen field.'
    },
    {
      id: 9,
      number: '04',
      question: 'Are there age restrictions for any programs?',
      answer: 'Yes, each program has age guidelines: K12 (6-18 years), UG (18-24 years), LEAD (21-45 years), and SEED (14-20 years). However, we consider exceptional cases on an individual basis. Age requirements ensure appropriate peer groups, curriculum depth, and career relevance for each cohort.'
    }
  ],
  'Admissions': [
    {
      id: 10,
      number: '01',
      question: 'What is the admission process?',
      answer: 'Our holistic admission process includes: (1) Online application with academic records, (2) Statement of purpose or business idea submission, (3) Aptitude assessment or portfolio review, (4) Interview with our expert panel, and (5) Final selection based on merit, potential, diversity, and program fit. The entire process takes 3-4 weeks.'
    },
    {
      id: 11,
      number: '02',
      question: 'When does the next batch start?',
      answer: 'Our programs have rolling admissions throughout the year. The main batches start in April and September, with some programs offering January intakes. K12 programs follow academic year schedules. We recommend applying 2-3 months before your preferred start date as seats are limited and awarded on a first-come, first-served basis after selection.'
    },
    {
      id: 12,
      number: '03',
      question: 'How competitive is the selection process?',
      answer: 'Our programs maintain high standards with acceptance rates varying by program: approximately 30-40% for K12, 25-35% for UG, 20-30% for LEAD, and 35-45% for SEED. We look for academic excellence, passion, unique perspectives, leadership potential, and alignment with program values rather than just grades.'
    },
    {
      id: 13,
      number: '04',
      question: 'Can I apply for multiple programs simultaneously?',
      answer: 'Yes, you can apply to multiple programs if you meet the eligibility criteria for each. However, we recommend focusing on the program that best aligns with your current goals and stage of development. Our admissions team can provide personalized guidance during the application process.'
    }
  ],
  'Fees/Refund': [
    {
      id: 14,
      number: '01',
      question: 'What is the program fee structure?',
      answer: 'Fees vary by program and duration: K12 programs start from ₹1,50,000/year, UG programs range from ₹3,00,000-₹5,00,000/year, LEAD programs are ₹2,50,000-₹4,00,000 for 6-12 months, and SEED programs cost ₹75,000-₹1,50,000 per module. All fees include curriculum materials, mentorship, platform access, and certificates. Detailed breakdowns are provided during admissions.'
    },
    {
      id: 15,
      number: '02',
      question: 'Are scholarships available?',
      answer: 'Yes! We offer merit-based scholarships covering 25-90% of tuition fees. Scholarships are awarded based on academic excellence, financial need, unique talent, diversity, and exceptional potential. We also have corporate partnerships, government schemes, and payment plans to make our programs accessible to deserving students regardless of financial background.'
    },
    {
      id: 16,
      number: '03',
      question: 'What payment options are available?',
      answer: 'We offer flexible payment options including: one-time full payment (with discount), semester/module-wise payments, monthly EMI plans (0% interest for eligible students), education loans through partner banks, corporate sponsorships, and installment plans. Our finance team works with each family to create a feasible payment structure.'
    },
    {
      id: 17,
      number: '04',
      question: 'What is the refund policy?',
      answer: 'Full refund (minus processing fee) is available if withdrawn before the program starts or within the first week of classes. 50% refund is available if withdrawn within the first month. After one month, refunds are considered case-by-case for genuine emergencies. Detailed refund terms are provided in the enrollment agreement. Scholarship recipients have specific terms outlined separately.'
    }
  ]
};

const DEFAULT_CATEGORIES = [
  'General Questions',
  'Eligibility',
  'Admissions',
  'Fees/Refund'
];

const FAQSection = ({
  theme = 'seed',
  faqData = DEFAULT_FAQ_DATA,
  categories = DEFAULT_CATEGORIES,
  defaultCategory = 'General Questions',
  title
}: FAQSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [expandedItems, setExpandedItems] = useState<number[]>([1])
  const currentTheme = FAQ_THEMES[theme];

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
      className="relative overflow-hidden"
      style={{
        backgroundColor: currentTheme.darkBg,
        backgroundImage: currentTheme.radialGradient
      }}
    >
      {/* Background Gradient Effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: currentTheme.overlayGradient
        }}
      />

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
            <div
              className="backdrop-blur-[22px] bg-black/40 border rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6"
              style={{ borderColor: currentTheme.borderColor }}
            >
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
                              <h3
                                className="text-[18px] sm:text-[20px] lg:text-2xl font-semibold text-[#f5f9ff] tracking-[-0.96px] transition-colors pr-2"
                                style={{
                                  ['--hover-color' as string]: currentTheme.primary,
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = currentTheme.primary)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#f5f9ff')}
                              >
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
                            style={{
                              ['--hover-color' as string]: currentTheme.primary,
                            }}
                          >
                            <ChevronUpIcon
                              className="w-5 h-5 sm:w-6 sm:h-6 text-[#f5f9ff] transition-colors"
                              onMouseEnter={(e) => (e.currentTarget.style.color = currentTheme.primary)}
                              onMouseLeave={(e) => (e.currentTarget.style.color = '#f5f9ff')}
                            />
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
        className="absolute top-10 sm:top-16 md:top-20 right-5 sm:right-10 md:right-16 lg:right-20 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${currentTheme.blob1Color} 0%, transparent 70%)`
        }}
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
        className="absolute bottom-20 sm:bottom-32 lg:bottom-40 left-5 sm:left-10 md:left-16 lg:left-20 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${currentTheme.blob2Color} 0%, transparent 70%)`
        }}
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