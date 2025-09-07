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

  const categories = [
    'All',
    'Grade 3-5',
    'Grade 6-8',
    'Grade 9-12'
  ]

  const courses = [
    {
      id: 1,
      tag: 'SUMMER',
      tagColor: 'bg-orange-100 text-orange-700',
      title: 'Technology and Innovation Exploration',
      description: 'Quis autem eum dolor in reprehen deri in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 2',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 2,
      tag: 'WINTER',
      tagColor: 'bg-blue-100 text-blue-700',
      title: 'Art and Creativity Expression',
      description: 'Integer nec bibendum lacus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Proin eget tortor.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 2',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 3,
      tag: 'SPRING',
      tagColor: 'bg-green-100 text-green-700',
      title: 'Health and Wellness Lifestyle',
      description: 'Integer nec bibendum lacus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Proin eget tortor.',
      grade: 'Grade: 8-9',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 2',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 4,
      tag: 'FALL',
      tagColor: 'bg-amber-100 text-amber-700',
      title: 'Sustainability and Environment Awareness',
      description: 'Curabitur non nulla sit amet nisl tempus conse quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 5,
      tag: 'WINTER',
      tagColor: 'bg-blue-100 text-blue-700',
      title: 'Art and Creativity Expression',
      description: 'Integer nec bibendum lacus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Proin eget tortor.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 6,
      tag: 'SPRING',
      tagColor: 'bg-green-100 text-green-700',
      title: 'Health and Wellness Lifestyle',
      description: 'Integer nec bibendum lacus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Proin eget tortor.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 7,
      tag: 'AUTUMN',
      tagColor: 'bg-orange-100 text-orange-700',
      title: 'Culinary Arts Culinary Skills',
      description: 'Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. E.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 8,
      tag: 'WINTER',
      tagColor: 'bg-blue-100 text-blue-700',
      title: 'Art and Creativity Expression',
      description: 'Integer nec bibendum lacus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Proin eget tortor.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    },
    {
      id: 9,
      tag: 'SPRING',
      tagColor: 'bg-green-100 text-green-700',
      title: 'Health and Wellness Lifestyle',
      description: 'Integer nec bibendum lacus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Proin eget tortor.',
      grade: 'Grade: 6-8',
      duration: 'Duration: 4 weeks',
      level: 'Levels: 3',
      cohort: 'Next Cohort: September 2025',
      category: 'Grade 6-8'
    }
  ]

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

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
    <div className="relative min-h-screen bg-[#fef4ef] py-16 md:py-20">
      <motion.div 
        className="container mx-auto px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find The Right Course For You
          </h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#ff8829] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.slice(0, 9).map((course, index) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Tag */}
                <div className="px-6 pt-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${course.tagColor}`}>
                    {course.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#ff8829] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6 flex-1">
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

        {/* Pagination */}
        <motion.div 
          className="flex justify-center gap-3"
          variants={itemVariants}
        >
          <button className="w-11 h-11 rounded-full bg-[#ff8829] text-white font-medium flex items-center justify-center shadow-md">
            1
          </button>
          <button className="w-11 h-11 rounded-full bg-white text-gray-700 font-medium flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
            2
          </button>
          <button className="w-11 h-11 rounded-full bg-white text-gray-700 font-medium flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
            3
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FindCourseSection