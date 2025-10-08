'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  UserIcon,
  ClockIcon,
  CalendarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const FindCourseSection = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 3

  const categories = [
    'All',
    'Grade 3-5',
    'Grade 6-8',
    'Grade 9-12'
  ]

  const courses = [
    // Grade 3-5 Courses
    {
      id: 1,
      tag: 'SUMMER',
      tagColor: 'bg-orange-100 text-orange-700',
      title: 'Creative Writing and Storytelling',
      description: 'Develop your imagination and writing skills through fun storytelling exercises. Learn to create characters, build plots, and express your ideas creatively.',
      grade: 'Grade: 3-5',
      duration: 'Duration: 6 weeks',
      level: 'Levels: 1',
      cohort: 'Next Cohort: July 2025',
      category: 'Grade 3-5'
    },
    {
      id: 2,
      tag: 'WINTER',
      tagColor: 'bg-blue-100 text-blue-700',
      title: 'Math Adventures and Problem Solving',
      description: 'Make math fun with interactive puzzles, games, and real-world applications. Build strong foundational skills in arithmetic and logical thinking.',
      grade: 'Grade: 3-5',
      duration: 'Duration: 6 weeks',
      level: 'Levels: 1',
      cohort: 'Next Cohort: January 2025',
      category: 'Grade 3-5'
    },
    {
      id: 3,
      tag: 'SPRING',
      tagColor: 'bg-green-100 text-green-700',
      title: 'Science Explorers Lab',
      description: 'Discover the wonders of science through hands-on experiments and exploration. Learn about nature, physics, and the world around you.',
      grade: 'Grade: 3-5',
      duration: 'Duration: 5 weeks',
      level: 'Levels: 1',
      cohort: 'Next Cohort: April 2025',
      category: 'Grade 3-5'
    },
    {
      id: 4,
      tag: 'FALL',
      tagColor: 'bg-amber-100 text-amber-700',
      title: 'Art and Craft Workshop',
      description: 'Express yourself through various art forms including painting, drawing, and craft projects. Develop fine motor skills and creativity.',
      grade: 'Grade: 3-5',
      duration: 'Duration: 6 weeks',
      level: 'Levels: 1',
      cohort: 'Next Cohort: October 2025',
      category: 'Grade 3-5'
    },

    // Grade 6-8 Courses
    {
      id: 5,
      tag: 'SUMMER',
      tagColor: 'bg-orange-100 text-orange-700',
      title: 'Technology and Innovation Exploration',
      description: 'Dive into the world of technology and innovation. Learn coding basics, robotics, and how technology shapes our future.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 2',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 6,
      tag: 'WINTER',
      tagColor: 'bg-blue-100 text-blue-700',
      title: 'Digital Art and Design Fundamentals',
      description: 'Learn digital design tools and techniques. Create stunning graphics, illustrations, and understand design principles for the digital age.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 2',
      cohort: 'Next Cohort: January 2025',
      category: 'Grade 6-8'
    },
    {
      id: 7,
      tag: 'SPRING',
      tagColor: 'bg-green-100 text-green-700',
      title: 'Environmental Science and Conservation',
      description: 'Explore ecology, climate science, and conservation. Learn how to make a positive impact on our planet through sustainable practices.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 2',
      cohort: 'Next Cohort: April 2025',
      category: 'Grade 6-8'
    },
    {
      id: 8,
      tag: 'FALL',
      tagColor: 'bg-amber-100 text-amber-700',
      title: 'Leadership and Communication Skills',
      description: 'Build confidence in public speaking, teamwork, and leadership. Develop essential skills for academic and personal success.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 2',
      cohort: 'Next Cohort: November 2025',
      category: 'Grade 6-8'
    },

    // Grade 9-12 Courses
    {
      id: 9,
      tag: 'SUMMER',
      tagColor: 'bg-orange-100 text-orange-700',
      title: 'Advanced Programming and App Development',
      description: 'Master modern programming languages and build real-world applications. Learn software development lifecycle and best practices.',
      grade: 'Grade: 9-12',
      duration: 'Duration: 8 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: June 2025',
      category: 'Grade 9-12'
    },
    {
      id: 10,
      tag: 'WINTER',
      tagColor: 'bg-blue-100 text-blue-700',
      title: 'Business and Entrepreneurship',
      description: 'Learn the fundamentals of starting and running a business. Explore marketing, finance, and innovation in the modern business world.',
      grade: 'Grade: 9-12',
      duration: 'Duration: 6 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: January 2025',
      category: 'Grade 9-12'
    },
    {
      id: 11,
      tag: 'SPRING',
      tagColor: 'bg-green-100 text-green-700',
      title: 'College Prep and SAT/ACT Mastery',
      description: 'Comprehensive preparation for college entrance exams. Master test-taking strategies and strengthen core academic skills.',
      grade: 'Grade: 9-12',
      duration: 'Duration: 10 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: March 2025',
      category: 'Grade 9-12'
    },
    {
      id: 12,
      tag: 'FALL',
      tagColor: 'bg-amber-100 text-amber-700',
      title: 'Data Science and AI Fundamentals',
      description: 'Explore the exciting world of data science and artificial intelligence. Learn Python, data analysis, and machine learning basics.',
      grade: 'Grade: 9-12',
      duration: 'Duration: 8 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 9-12'
    }
  ]

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter(course => course.category === activeCategory)

  // Pagination calculations
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <div className="relative  bg-[#fef4ef] py-10 md:py-16 lg:py-20">
      <motion.div
        className="container mx-auto px-4 md:px-8 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="mb-8 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Find The Right Course For You
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-[#ff8829] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Grid - Horizontal scroll on mobile, Grid on desktop */}
        <div className="mb-8 md:mb-12 overflow-x-auto md:overflow-x-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex md:grid md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 snap-x snap-mandatory md:snap-none">
            {currentCourses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="group min-w-[85vw] md:min-w-0 snap-center md:snap-align-none"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Tag */}
                  <div className="px-4 pt-4 md:px-6 md:pt-6">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${course.tagColor}`}>
                      {course.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    {/* Title & Description */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 md:mb-4 line-clamp-2 group-hover:text-[#ff8829] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {course.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-1">
                      <div className="flex items-center gap-3 text-gray-700">
                        <UserIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">{course.grade}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <ClockIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <ChartBarIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">{course.level}</span>
                      </div>
                      <div className="flex items-start gap-3 text-gray-700">
                        <CalendarIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                        <span className="text-sm">{course.cohort}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3 border-2 border-[#ff8829] text-[#ff8829] font-semibold rounded-lg hover:bg-[#ff8829] hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination - Hidden on mobile, only show if there are multiple pages */}
        {totalPages > 1 && (
          <motion.div
            className="hidden md:flex justify-center gap-3"
            variants={itemVariants}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-11 h-11 rounded-full font-medium flex items-center justify-center transition-all duration-300 ${
                  currentPage === pageNumber
                    ? 'bg-[#ff8829] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-[#ff8829]'
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </motion.div>
        )}

        {/* Mobile Pagination Dots */}
        {totalPages > 1 && (
          <motion.div
            className="flex md:hidden justify-center gap-2 mt-6"
            variants={itemVariants}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === pageNumber
                    ? 'w-8 bg-[#ff8829]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${pageNumber}`}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default FindCourseSection