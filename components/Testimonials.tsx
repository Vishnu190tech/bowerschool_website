'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface TestimonialTheme {
  primary: string;
  secondary: string;
  gradient1: string;
  gradient2: string;
  border: string;
}

const TESTIMONIAL_THEMES: Record<ThemeType, TestimonialTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    gradient1: 'rgb(50 50 230 / 0.1)',
    gradient2: 'rgb(66 66 255 / 0.1)',
    border: 'rgba(66, 66, 255, 0.3)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    gradient1: 'rgb(168 243 38 / 0.1)',
    gradient2: 'rgb(143 217 32 / 0.1)',
    border: 'rgba(168, 243, 38, 0.3)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#E77620',
    gradient1: 'rgb(255 136 41 / 0.1)',
    gradient2: 'rgb(231 118 32 / 0.1)',
    border: 'rgba(255, 136, 41, 0.3)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    gradient1: 'rgb(66 66 255 / 0.1)',
    gradient2: 'rgb(50 50 230 / 0.1)',
    border: 'rgba(66, 66, 255, 0.3)',
  },
};

// Testimonial Interface
interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  program?: string;
  image: string;
}

// Component Props Interface
interface TestimonialsProps {
  theme?: ThemeType;
  testimonials?: Testimonial[];
  title?: string;
  itemsPerPage?: number;
}

// Default Exciting Testimonials Content
const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "The mentorship program completely transformed my approach to coding. I went from struggling with basic algorithms to building full-stack applications in just 6 months. The instructors genuinely care about your success!",
    name: "Priya Sharma",
    role: "UG Student",
    program: "Computer Science",
    image: "/student1.jpg"
  },
  {
    id: 2,
    text: "As a parent, I was amazed by the personalized attention my daughter received. Her confidence skyrocketed, and she's now participating in international robotics competitions. Best investment we've made!",
    name: "Rajesh Kumar",
    role: "Parent",
    program: "K12 SEED Program",
    image: "/student2.jpg"
  },
  {
    id: 3,
    text: "The LEAD program helped me discover my passion for AI and machine learning. The project-based curriculum and industry connections landed me an internship at a top tech company!",
    name: "Arjun Menon",
    role: "LEAD Student",
    program: "AI & ML Track",
    image: "/student3.jpg"
  },
  {
    id: 4,
    text: "I never thought I'd love mathematics until I joined Bower School. The interactive teaching methods and real-world applications made everything click. Now I'm pursuing engineering with confidence!",
    name: "Ananya Patel",
    role: "K12 Student",
    program: "Grade 11, Science Stream",
    image: "/student4.jpg"
  },
  {
    id: 5,
    text: "The scholarship program gave me access to world-class education I couldn't have afforded otherwise. The mentors pushed me beyond my limits, and I graduated top of my class. Forever grateful!",
    name: "Mohammed Ali",
    role: "UG Graduate",
    program: "Data Science",
    image: "/student1.jpg"
  },
  {
    id: 6,
    text: "My son was struggling with academics and confidence. Within 3 months at Bower School, his grades improved dramatically and he's now excited about learning. The transformation is incredible!",
    name: "Lakshmi Iyer",
    role: "Parent",
    program: "K12 Program",
    image: "/student2.jpg"
  },
  {
    id: 7,
    text: "The career guidance and soft skills training were game-changers. I learned not just technical skills but also how to present myself professionally. Landed my dream job right after graduation!",
    name: "Vikram Singh",
    role: "UG Student",
    program: "Full-Stack Development",
    image: "/student3.jpg"
  },
  {
    id: 8,
    text: "The masterclasses with industry experts opened my eyes to real-world applications. The networking opportunities alone were worth it. Highly recommend to anyone serious about their career!",
    name: "Sneha Reddy",
    role: "LEAD Graduate",
    program: "Product Management",
    image: "/student4.jpg"
  },
  {
    id: 9,
    text: "As someone who switched careers at 30, I was nervous about going back to school. The supportive environment and flexible learning schedule made it possible. Best decision ever!",
    name: "Karthik Raman",
    role: "Career Switcher",
    program: "UG Program",
    image: "/student1.jpg"
  },
  {
    id: 10,
    text: "The hands-on projects and coding challenges prepared me for tech interviews better than any other program. I received multiple job offers and chose the role of my dreams!",
    name: "Divya Krishnan",
    role: "UG Graduate",
    program: "Software Engineering",
    image: "/student2.jpg"
  },
  {
    id: 11,
    text: "My daughter's creativity and problem-solving skills have flourished here. The SEED program's focus on innovation and entrepreneurship is exactly what young minds need today!",
    name: "Amit Desai",
    role: "Parent",
    program: "K12 SEED",
    image: "/student3.jpg"
  },
  {
    id: 12,
    text: "The community here is phenomenal. Study groups, hackathons, and collaborative projects made learning fun and effective. I made lifelong friends and valuable professional connections!",
    name: "Rohan Gupta",
    role: "LEAD Student",
    program: "Entrepreneurship Track",
    image: "/student4.jpg"
  },
];

const Testimonials = ({
  theme = 'seed',
  testimonials = DEFAULT_TESTIMONIALS,
  title = 'What People Had To Say',
  itemsPerPage = 3
}: TestimonialsProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const currentTheme = TESTIMONIAL_THEMES[theme];

  // Detect screen size
  React.useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Use 1 item on mobile, 2 on tablet, 3 on desktop
  const effectiveItemsPerPage = screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : itemsPerPage
  const totalPages = Math.ceil(testimonials.length / effectiveItemsPerPage)
  const currentTestimonials = testimonials.slice(
    currentPage * effectiveItemsPerPage,
    (currentPage + 1) * effectiveItemsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-950 to-black overflow-hidden">
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
              ease: "easeInOut" as const
            }}
          />
        ))}
      </div>

      {/* Gradient Light Effects */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ backgroundColor: currentTheme.gradient1 }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ backgroundColor: currentTheme.gradient2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-8 py-10 md:py-20">
        {/* Header */}
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold text-center mb-10 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}
                >
                  {/* Quote Icon */}
                  <div
                    className="text-4xl md:text-5xl md:mb-4 font-serif"
                    style={{ color: currentTheme.primary }}
                  >
                    "
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6 md:mb-8">
                    {testimonial.text}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-700 mb-4" />

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div
                      className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2"
                      style={{ borderColor: currentTheme.border }}
                    >
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
                        {testimonial.role}
                      </p>
                      {testimonial.program && (
                        <p className="text-gray-500 text-xs mt-0.5">
                          {testimonial.program}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 md:mt-16">
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
              className="p-2 text-white transition-colors"
              style={{
                ['--hover-color' as string]: currentTheme.primary,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = currentTheme.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextPage}
              className="p-2 text-white transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = currentTheme.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
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
        className="absolute top-1/2 left-10 w-2 h-2 rounded-full"
        style={{ backgroundColor: currentTheme.primary }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-3 h-3 rounded-full"
        style={{ backgroundColor: currentTheme.secondary }}
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
    </div>
  )
}

export default Testimonials