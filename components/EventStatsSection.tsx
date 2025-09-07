'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EventStatsSection = () => {
  const stats = [
    { value: '300+', label: 'Participants' },
    { value: '42', label: 'Startups Pitched' },
    { value: '60%', label: 'First-Time Founders' },
    { value: '100+', label: 'Mentorship Sessions' }
  ];

  return (
    <section className="relative w-full bg-[#f4f4ff] px-20 py-10">
      {/* Background decorative element */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2" style={{ transform: 'rotate(247.852deg)' }}>
        <Image
          src="/7e3c70dd952387f3185e4702eb809fca93ffa068.svg"
          alt=""
          width={530}
          height={696}
          className="opacity-50"
        />
      </div>

      <div className="relative z-10 flex gap-20 items-center">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[500px] shrink-0"
        >
          <h2 
            className="text-[#111827] capitalize"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '44px',
              fontWeight: 600,
              lineHeight: '44px',
              letterSpacing: '-1.76px'
            }}
          >
            Event Stats & Metrics
          </h2>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[700px] bg-white/40 backdrop-blur-[22px] rounded-[10px] border border-white p-6"
        >
          <div className="grid grid-cols-2 gap-[33px]">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="w-[300px] flex flex-col gap-5"
              >
                <div 
                  className="text-[#111827] capitalize"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontSize: '44px',
                    fontWeight: 600,
                    lineHeight: '44px',
                    letterSpacing: '-1.76px'
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-[#4b5563]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '27px'
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventStatsSection;