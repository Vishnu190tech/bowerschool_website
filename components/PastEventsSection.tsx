'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePastEvents } from '@/hooks/useEvents';

const PastEventsSection = () => {
  const { data: events = [], isLoading, error } = usePastEvents({ limit: 3 });

  // Loading skeleton
  const EventSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-2xl h-[300px] md:h-[400px]"></div>
    </div>
  );

  // Error state
  if (error) {
    return (
      <section className="relative w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-12 lg:p-[60px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Unable to load past events</h2>
            <p className="text-gray-600">Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-12 lg:p-[60px]">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto mb-6 md:mb-8 lg:mb-[34px]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          {/* Title and subtitle */}
          <div className="flex flex-col gap-2">
            <h2
              className="text-[#111827] capitalize text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight tracking-[-1.76px]"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
              }}
            >
              Past Events
            </h2>
            <p
              className="text-[#4b5563] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
              }}
            >
              Re-watch our past successful sessions.
            </p>
          </div>

          {/* View All Button */}
          <Link href="/events/past">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-4 h-11 px-4 py-2 rounded-lg border border-[#4242ff] backdrop-blur-[32px] w-fit"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(50, 50, 230, 0.1) 0%, rgba(50, 50, 230, 0) 100%)`
              }}
            >
              <span
                className="text-[#4242ff] text-[16px] lg:text-[18px] font-medium"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >
                View All
              </span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Events Container */}
      <div className="max-w-[1320px] mx-auto">
        <div className="relative bg-white/10 backdrop-blur-[60px] rounded-2xl lg:rounded-3xl p-3 md:p-4 lg:p-5 min-h-[400px] md:min-h-[500px] lg:h-[656px] border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          {/* Background circles */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl">
            <div className="absolute -top-[100px] -left-[100px] md:-top-[150px] md:-left-[150px] lg:-top-[200px] lg:-left-[200px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[738px] lg:h-[738px]">
              <Image
                src="/aa95ca462609d629ea62a1e467f24a780613ed64.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-[100px] -right-[100px] md:-bottom-[150px] md:-right-[150px] lg:-bottom-[200px] lg:-right-[200px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[738px] lg:h-[738px]">
              <Image
                src="/8364c15fd75f52cb16654eef802935ed0c26e3ed.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Events Grid */}
          <div className="relative z-10 h-full flex items-center justify-center">
            {isLoading ? (
              <div className="w-full flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[65%]">
                  <EventSkeleton />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <EventSkeleton />
                  <EventSkeleton />
                </div>
              </div>
            ) : events.length > 0 ? (
              <div className="w-full flex flex-col lg:flex-row gap-4">
                {/* Large Event Card - First event with size "large" or first event */}
                {events[0] && (
                  <Link href={`/events/past/${events[0].slug}`} className="relative w-full lg:w-[65%]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-[300px] md:h-[400px] lg:h-[616px] rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-white group cursor-pointer"
                      style={{
                        backgroundImage: events[0].imageUrl
                          ? `linear-gradient(to bottom, transparent 53.166%, #000000 100%), url('${events[0].imageUrl}')`
                          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6">
                        <h3
                          className="text-white mb-2 text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-tight tracking-[-0.96px]"
                          style={{
                            fontFamily: 'var(--font-plus-jakarta)',
                          }}
                        >
                          {events[0].title}
                        </h3>
                        <p
                          className="text-gray-100 text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed"
                          style={{
                            fontFamily: 'var(--font-plus-jakarta)',
                          }}
                        >
                          {events[0].description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                )}

                {/* Small Event Cards */}
                {events.length > 1 && (
                  <div className="flex-1 flex flex-col gap-4">
                    {events.slice(1).map((event, index) => (
                      <Link
                        href={`/events/past/${event.slug}`}
                        key={event.id}
                        className="block"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                          className="relative h-[250px] md:h-[280px] lg:h-[300px] rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-white group cursor-pointer"
                          style={{
                            backgroundImage: event.imageUrl
                              ? `linear-gradient(to bottom, transparent 53.166%, #000000 100%), url('${event.imageUrl}')`
                              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6">
                            <h3
                              className="text-white mb-2 text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-tight tracking-[-0.96px]"
                              style={{
                                fontFamily: 'var(--font-plus-jakarta)',
                              }}
                            >
                              {event.title}
                            </h3>
                            <p
                              className="text-gray-100 text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed"
                              style={{
                                fontFamily: 'var(--font-plus-jakarta)',
                              }}
                            >
                              {event.description}
                            </p>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No past events available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;