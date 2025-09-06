'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface Event {
  id: number;
  image: string;
  type: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  height: 'tall' | 'medium' | 'short';
  category?: string;
}

const events: Event[] = [
  {
    id: 1,
    image: '/vr-event.jpg',
    type: 'Events',
    date: '4. Sept. 2025',
    title: 'Innovations and Tech Meetup',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    tags: ['LPSA98', 'BXU', '8 Sept'],
    height: 'tall',
    category: 'Meetups'
  },
  {
    id: 2,
    image: '/drone-event.jpg',
    type: 'Event Type',
    date: '4. Sept. 2025',
    title: 'Social Entrepreneurship Summit',
    description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
    tags: ['SEI2023', 'ImpactHub', '8:00pm'],
    height: 'medium',
    category: 'Webinars'
  },
  {
    id: 3,
    image: '/robot-event.jpg',
    type: 'Event Type',
    date: '4. Sept. 2025',
    title: 'Social Entrepreneurship Summit',
    description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
    tags: ['SEI2023', 'ImpactHub', '8:00pm'],
    height: 'short',
    category: 'Workshops'
  },
  {
    id: 4,
    image: '/gaming-event.jpg',
    type: 'Event Type',
    date: '4. Sept. 2025',
    title: 'Social Entrepreneurship Summit',
    description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
    tags: ['SEI2023', 'ImpactHub', '8:00pm'],
    height: 'medium',
    category: 'Meetups'
  },
  {
    id: 5,
    image: '/laptop-event.jpg',
    type: 'Event Type',
    date: '4. Sept. 2025',
    title: 'Social Entrepreneurship Summit',
    description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
    tags: ['SEI2023', 'ImpactHub', '8:00pm'],
    height: 'tall',
    category: 'Webinars'
  },
  {
    id: 6,
    image: '/smartwatch-event.jpg',
    type: 'Event Type',
    date: '4. Sept. 2025',
    title: 'Social Entrepreneurship Summit',
    description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
    tags: ['SEI2023', 'ImpactHub', '8:00pm'],
    height: 'medium',
    category: 'Workshops'
  }
];

const filters = ['Filter 1', 'Filter', 'Filter'];

export default function UpcomingEventsSection() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Meetups']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const categories = ['Meetups', 'Webinars', 'Workshops'];

  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20" style={{ backgroundColor: '#f4f4ff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-4">
            <div className="flex-1 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3"
              >
                Upcoming events
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-sm md:text-base text-[#6b7280] max-w-2xl mx-auto lg:mx-0"
              >
                <span className="hidden md:inline">Stay ahead of the curve with workshops, talks, hackathons, and community mixers happening all year round.</span>
                <span className="md:hidden">Stay ahead of the curve with business workshops, talks, hackathons, and community mixers happening all year round.</span>
              </motion.p>
            </div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline-flex px-6 py-2 text-[#4242ff] border-2 border-[#4242ff] rounded-full font-medium hover:bg-[#4242ff] hover:text-white transition-colors"
            >
              View All
            </motion.button>
          </div>
        </div>

        {/* Filters - Desktop only */}
        <div className="hidden lg:flex gap-3 mb-8">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-[#4242ff] text-white' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-[#4242ff] hover:text-[#4242ff]'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={events[0].image}
                  alt={events[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-semibold text-[#4242ff]">{events[0].type}</span>
                  <span className="text-xs text-[#9ca3af]">•</span>
                  <span className="text-xs text-[#9ca3af]">{events[0].date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{events[0].title}</h3>
                <p className="text-sm text-[#4b5563] mb-4 line-clamp-2">{events[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {events[0].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={events[3].image}
                  alt={events[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-semibold text-[#4242ff]">{events[3].type}</span>
                  <span className="text-xs text-[#9ca3af]">•</span>
                  <span className="text-xs text-[#9ca3af]">{events[3].date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{events[3].title}</h3>
                <p className="text-sm text-[#4b5563] mb-4 line-clamp-2">{events[3].description}</p>
                <div className="flex flex-wrap gap-2">
                  {events[3].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={events[1].image}
                  alt={events[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-semibold text-[#4242ff]">{events[1].type}</span>
                  <span className="text-xs text-[#9ca3af]">•</span>
                  <span className="text-xs text-[#9ca3af]">{events[1].date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{events[1].title}</h3>
                <p className="text-sm text-[#4b5563] mb-4 line-clamp-2">{events[1].description}</p>
                <div className="flex flex-wrap gap-2">
                  {events[1].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={events[4].image}
                  alt={events[4].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-semibold text-[#4242ff]">{events[4].type}</span>
                  <span className="text-xs text-[#9ca3af]">•</span>
                  <span className="text-xs text-[#9ca3af]">{events[4].date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{events[4].title}</h3>
                <p className="text-sm text-[#4b5563] mb-4 line-clamp-2">{events[4].description}</p>
                <div className="flex flex-wrap gap-2">
                  {events[4].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={events[2].image}
                  alt={events[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-semibold text-[#4242ff]">{events[2].type}</span>
                  <span className="text-xs text-[#9ca3af]">•</span>
                  <span className="text-xs text-[#9ca3af]">{events[2].date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{events[2].title}</h3>
                <p className="text-sm text-[#4b5563] mb-4 line-clamp-2">{events[2].description}</p>
                <div className="flex flex-wrap gap-2">
                  {events[2].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={events[5].image}
                  alt={events[5].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase font-semibold text-[#4242ff]">{events[5].type}</span>
                  <span className="text-xs text-[#9ca3af]">•</span>
                  <span className="text-xs text-[#9ca3af]">{events[5].date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{events[5].title}</h3>
                <p className="text-sm text-[#4b5563] mb-4 line-clamp-2">{events[5].description}</p>
                <div className="flex flex-wrap gap-2">
                  {events[5].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Collapsible Sections */}
        <div className="lg:hidden space-y-4">
          {categories.map((category) => {
            const categoryEvents = events.filter(e => e.category === category);
            const isExpanded = expandedSections.includes(category);
            
            return (
              <div key={category} className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection(category)}
                  className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#111827]">{category}</h3>
                  {isExpanded ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    {categoryEvents.map((event) => (
                      <div key={event.id} className="p-4 border-b border-gray-50 last:border-b-0">
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs text-gray-500 uppercase">{event.type}</span>
                            <h4 className="text-base font-semibold text-[#111827] mt-1 mb-2">
                              {event.title}
                            </h4>
                            <p className="text-sm text-[#4b5563] line-clamp-2 mb-2">
                              {event.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {event.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}

          {/* Mobile View All Button */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-[#4242ff] border-2 border-[#4242ff] rounded-full font-medium hover:bg-[#4242ff] hover:text-white transition-colors"
            >
              View All
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}