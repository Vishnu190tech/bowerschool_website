'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface EventStatsSectionProps {
  stats?: any;
}

const EventStatsSection = ({ stats: eventStats }: EventStatsSectionProps) => {
  // Parse stats if it's a JSON field
  let parsedStats = null;
  if (eventStats) {
    if (typeof eventStats === 'object' && !Array.isArray(eventStats)) {
      parsedStats = eventStats;
    }
  }

  // Don't render if no stats or empty stats object
  if (!parsedStats || Object.keys(parsedStats).length === 0) {
    return null;
  }

  // Use provided stats
  const stats = [
    { value: parsedStats.attendees || '300+', label: 'Participants' },
    { value: parsedStats.speakers || '42', label: parsedStats.speakers ? 'Speakers' : 'Startups Pitched' },
    { value: parsedStats.satisfaction || '60%', label: parsedStats.satisfaction ? 'Satisfaction' : 'First-Time Founders' },
    { value: parsedStats.sessions || '100+', label: 'Mentorship Sessions' }
  ];

  return (
    <section className="relative w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:px-20 overflow-hidden">
      {/* Background decorative element */}
      <div
        className="absolute top-1/2 right-[-50px] md:right-10 lg:right-1/3 w-[150px] md:w-[350px] lg:w-[530px] pointer-events-none"
        style={{
          transform: 'translateY(-50%) rotate(247.852deg)',
          zIndex: 1
        }}
      >
        <Image
          src="/7e3c70dd952387f3185e4702eb809fca93ffa068.svg"
          alt=""
          width={530}
          height={696}
          className="opacity-20 md:opacity-30 lg:opacity-50 w-full h-auto"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-20 items-center max-w-[1440px] mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-[500px] lg:shrink-0 text-center lg:text-left"
        >
          <h2
            className="text-[#111827] capitalize text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight tracking-[-1.76px]"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
            }}
          >
            Event Stats & Metrics
          </h2>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-[700px] bg-white/40 backdrop-blur-[22px] rounded-[10px] border border-white p-4 md:p-5 lg:p-6"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-[33px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-1 md:gap-2 lg:gap-5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-[#111827] capitalize text-[24px] md:text-[32px] lg:text-[44px] font-semibold leading-[1.1] tracking-[-1.76px]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-[#4b5563] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                >
                  {stat.label}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventStatsSection;