'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useUpcomingEvents } from '@/hooks/useEvents';

const filters = ['All', 'Meetups', 'Webinars', 'Workshops'];

export default function UpcomingEventsSection() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Meetups']);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const { data: events = [], isLoading, error } = useUpcomingEvents();

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const categories = ['Meetups', 'Webinars', 'Workshops'];

  // Filter events based on selected category
  const filteredEvents = selectedFilter === 'All'
    ? events
    : events.filter(event => event.category === selectedFilter);

  // Loading skeleton component
  const EventSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-2xl h-[200px] mb-4"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        </div>
      </div>
    </div>
  );

  if (error) {
    return (
      <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20" style={{ backgroundColor: '#f4f4ff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unable to load events</h2>
            <p className="text-gray-600">Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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
                className="text-sm md:text-base text-[#6b7280] mx-auto lg:mx-0"
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
              className="hidden lg:inline-flex px-6 py-2 text-[#4242ff] border-2 border-[#4242ff] rounded-xl font-medium hover:bg-[#4242ff] hover:text-white transition-colors"
            >
              <Link href="/events">View All</Link>
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
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === filter
                  ? 'bg-[#4242ff]/10 text-[#4242ff] border border-[#4242ff]'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-[#4242ff] hover:text-[#4242ff]'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden lg:block">
          {isLoading ? (
            <div className="grid grid-cols-3 gap-6 border border-white p-6 rounded-2xl">
              {[...Array(6)].map((_, i) => (
                <EventSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6 border border-white p-6 rounded-2xl">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className={`rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer`}
                >
                  <Link href={`/events/upcoming/${event.slug}`}>
                    <div className={`relative overflow-hidden ${
                      event.height === 'tall' ? 'h-[320px]' :
                      event.height === 'short' ? 'h-[180px]' : 'h-[240px]'
                    }`}>
                      {event.imageUrl ? (
                        <Image
                          src={event.imageUrl}
                          alt={event.title}
                          fill
                          className="object-cover rounded-2xl border border-amber-300/30 group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.jpg';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#4242ff]/20 to-[#4242ff]/10 rounded-2xl border border-amber-300/30 flex items-center justify-center">
                          <span className="text-[#4242ff]/50 text-lg font-medium">{event.category}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 w-full justify-between">
                        <span className="text-xs uppercase font-semibold text-[#9ca3af]">{event.eventType}</span>
                        <span className="text-xs font-bold text-[#4242ff]">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#111827] mb-2">{event.title}</h3>
                      <p className="text-sm text-[#4b5563] mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 border border-gray-200 text-xs text-gray-600 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Collapsible Sections */}
        <div className="lg:hidden space-y-4">
          {isLoading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4">
                <EventSkeleton />
              </div>
            ))
          ) : (
            categories.map((category) => {
              const categoryEvents = filteredEvents.filter(e => e.category === category);
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
                        <Link href={`/events/upcoming/${event.slug}`} key={event.id}>
                          <div className="p-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors">
                            <div className="flex gap-4">
                              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                {event.imageUrl ? (
                                  <Image
                                    src={event.imageUrl}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                      e.currentTarget.src = '/placeholder.jpg';
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-[#4242ff]/20 to-[#4242ff]/10 flex items-center justify-center">
                                    <span className="text-[#4242ff]/50 text-xs font-medium">{event.category}</span>
                                  </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <span className="text-xs text-gray-500 uppercase">{event.eventType}</span>
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
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })
          )}

          {/* Mobile View All Button */}
          <div className="flex justify-center mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-[#4242ff] border-2 border-[#4242ff] rounded-full font-medium hover:bg-[#4242ff] hover:text-white transition-colors"
            >
              <Link href="/events">View All</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}