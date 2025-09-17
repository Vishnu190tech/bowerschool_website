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

export default function StatsBarTwo({ stats = defaultStats }: StatsBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full max-w-[1280px] mx-auto"
    >
      <div
        className="relative backdrop-blur-[22px] rounded-[8px] border-[0.5px] border-white/20 px-[60px] py-[21px]"

      >
        <div className="flex items-center justify-between">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col gap-[15px] text-center">
                <div
                  className="text-white text-[30px] font-semibold leading-[30px] tracking-[-1.2px] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-gray-100 text-[20px] font-normal leading-[30px] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="w-[1px] h-[76px] bg-white/30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div >
  );
}