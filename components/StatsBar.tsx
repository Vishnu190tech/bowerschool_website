'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

interface StatItem {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: '100 + Mentors', label: 'Conduction Workshops' },
  { value: '75 Startups', label: 'People Impacted' },
  { value: '2,000+ Hrs', label: 'Taught' },
  { value: '3,000+ Sessions', label: 'One on Ones' }
];

export default function StatsBar({ stats = defaultStats }: StatsBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative w-full max-w-[1280px] mx-auto px-4 md:px-0"
    >
      <div
        className="relative backdrop-blur-[22px] rounded-[8px] border-[0.5px] border-white/20 px-4 py-4 md:px-8 md:py-5 lg:px-[60px] lg:py-[21px]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-[15px] text-center items-center">
                <div
                  className="text-white text-[20px] md:text-[24px] lg:text-[30px] font-semibold leading-tight tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px] whitespace-normal md:whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-gray-100 text-[14px] md:text-[16px] lg:text-[20px] font-normal leading-tight md:leading-normal lg:leading-[30px] whitespace-normal md:whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {stat.label}
                </div>
              </div>
              {/* Desktop dividers only */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-[1px] h-[50px] md:h-[60px] lg:h-[76px] bg-white/30"
                  style={{
                    left: `${((index + 1) * 100) / stats.length}%`,
                    transform: 'translateX(-50%) translateY(-50%)'
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div >
  );
}