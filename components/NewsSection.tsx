'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  type: 'featured' | 'regular';
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: 'ECONOMIC TIMES',
    title: 'Changes in entrepreneurial landscape in india',
    date: '15 September, 2024',
    image: '/906fd3ae193adbf8b5fab728fb9ad3afc98681da.png',
    type: 'featured'
  },
  {
    id: 2,
    category: 'Medium',
    title: 'Learnings and Lessons from my first start-up',
    date: '27 August, 2024',
    image: '/38d8a907a9f5c7561f1487ca7e77ffbccdd018e2.png',
    type: 'regular'
  },
  {
    id: 3,
    category: 'Medium',
    title: 'Exploring Innovative Marketing Strategies for Start-ups',
    date: '3 October, 2024',
    image: '/876991a46eee1d85ed35e1fa6a9c0ee700d52a6b.png',
    type: 'regular'
  },
  {
    id: 4,
    category: 'Medium',
    title: 'Navigating the Challenges of Remote Team Management',
    date: '15 September, 2024',
    image: '/673cca7584f2192362b0038601afa35eb5935631.png',
    type: 'regular'
  }
];

export default function NewsSection() {
  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12 text-center lg:text-left"
        >
          What Made it to the news!
        </motion.h2>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden p-6 bg-gradient-to-b from-white via-white to-blue-300/10 rounded-3xl lg:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-pointer"
          >
            <div className="  overflow-hidden hover:rounded-3xl hover:shadow-xl transition-shadow">
              {/* Featured Image */}
              <div className="relative h-[300px] md:h-[360px] overflow-hidden">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content - Below the image */}
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase font-medium tracking-wider">
                  {newsItems[0].category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 line-clamp-2">
                  {newsItems[0].title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{newsItems[0].date}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Articles - Right Column */}
          <div className="flex flex-col gap-6">
            {newsItems.filter(item => item.type === 'regular').map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
                  <div className="flex gap-4 p-4">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-xs font-medium text-gray-500 uppercase">
                          {item.category}
                        </span>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="lg:hidden">
          {/* Scrollable container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {/* Featured Card */}
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[280px] flex-shrink-0"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-[200px]">
                    <Image
                      src={newsItems[0].image}
                      alt={newsItems[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs text-white/80 uppercase">{newsItems[0].category}</span>
                      <h3 className="text-lg font-semibold text-white mt-1 line-clamp-2">
                        {newsItems[0].title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-white/70 mt-2">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{newsItems[0].date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div> */}

              {/* Regular Cards */}
              {newsItems
                // .filter(item => item.type === 'regular')
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="w-[280px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                      <div className="relative h-[200px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-gray-500 uppercase">{item.category}</span>
                        <h3 className="text-base font-semibold text-gray-900 mt-1 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-3">
                          <CalendarIcon className="w-3 h-3" />
                          <span>{item.date}</span>
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