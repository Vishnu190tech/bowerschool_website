'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface CommunityArticle {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  hasCalendar?: boolean;
}

const articles: CommunityArticle[] = [
  {
    id: 1,
    category: 'Medium',
    title: 'Learnings and Lessons from my first start-up',
    date: '27 August, 2024',
    image: '/38d8a907a9f5c7561f1487ca7e77ffbccdd018e2.png'
  },
  {
    id: 2,
    category: 'Medium',
    title: 'Navigating the Challenges of Remote Team Management',
    date: '15 September, 2024',
    image: '/876991a46eee1d85ed35e1fa6a9c0ee700d52a6b.png'
  },
  {
    id: 3,
    category: 'Medium',
    title: 'Exploring Innovative Marketing Strategies for Start-ups',
    date: '3 October, 2024',
    image: '/673cca7584f2192362b0038601afa35eb5935631.png',
    hasCalendar: true
  }
];

export default function CommunitySection() {
  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header - Desktop only */}
        <div className="hidden lg:flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-0"
          >
            From The Bower Community, For The World
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-[#4242ff] border-2 border-[#4242ff] rounded-xl font-medium hover:bg-[#4242ff] hover:text-white transition-colors"
          >
            View All
          </motion.button>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900"
          >
            From the Bower Community, For the World
          </motion.h2>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden p-6 bg-gradient-to-b from-white via-white to-blue-300/10 rounded-4xl lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="group cursor-pointer"
            >
              <div className=" rounded-2xl overflow-hidden   hover:shadow-xl transition-shadow h-full">
                {/* Image or Calendar */}
                <div className="relative h-[240px] overflow-hidden bg-gray-100">
                  {article.hasCalendar ? (
                    // Calendar Grid for third card
                    <div className="w-full h-full p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="grid grid-cols-5 gap-2 h-full">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((day) => (
                          <div
                            key={day}
                            className="flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200"
                          >
                            <span className="text-2xl font-bold text-gray-400">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Regular Image
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm font-medium text-gray-500 uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 line-clamp-2 group-hover:text-[#4242ff] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="lg:hidden">
          {/* Scrollable container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="w-[280px] flex-shrink-0"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden bg-gray-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <span className="text-xs text-gray-500 uppercase">
                        {article.category}
                      </span>
                      <h3 className="text-base font-semibold text-gray-900 mt-2 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Button - Mobile */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#4242ff] border-2 border-[#4242ff] rounded-xl font-medium hover:bg-[#4242ff] hover:text-white transition-colors"
            >
              View All
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}