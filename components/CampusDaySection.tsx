'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CampusDaySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Classrooms', active: true },
    { label: '40+ Campus Facilities', active: false },
    { label: 'Access to T-hub', active: false },
    { label: 'Food Court', active: false }
  ];

  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:px-[60px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-9"
        >
          <h2
            className="text-[#111827] capitalize text-[28px] md:text-[36px] lg:text-[44px] leading-tight"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 600,
              letterSpacing: '-1.76px'
            }}
          >
            A Day At The Bower Campus
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Mobile: Scrollable tabs */}
          <div className="overflow-x-auto md:overflow-visible">
            <div className="flex items-center justify-start md:justify-between gap-4 md:gap-4 min-w-max md:min-w-0">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`transition-colors text-[14px] md:text-[18px] lg:text-[24px] font-semibold whitespace-nowrap flex-shrink-0 ${
                    activeTab === index ? 'text-[#4242ff]' : 'text-gray-300'
                  }`}
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    letterSpacing: '-0.96px'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-[3px] w-full overflow-hidden">
            {/* Background line */}
            <div className="absolute inset-0 h-[2px] bg-[#d1d5db]" />
            {/* Active indicator */}
            <motion.div
              className="absolute top-0 h-[3px] bg-[#4242ff] w-1/4"
              initial={false}
              animate={{
                x: `${activeTab * 100}%`
              }}
              transition={{
                type: "spring" as const,
                stiffness: 300,
                damping: 30
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative bg-white/10 backdrop-blur-[60px] rounded-2xl lg:rounded-3xl p-3 md:p-4 lg:p-6 border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          {/* Background decorative elements */}
          <div className="absolute -left-[282px] -top-[340px] w-[808px] h-[808px] pointer-events-none hidden lg:block">
            <Image
              src="/5f3e1293b2a61441809635458327426adfce22a3.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute left-[354px] top-[658px] w-[808px] h-[808px] pointer-events-none hidden lg:block">
            <Image
              src="/5f3e1293b2a61441809635458327426adfce22a3.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Video/Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-video md:aspect-[1272/612] bg-[#ebeeff] rounded-xl lg:rounded-2xl overflow-hidden shadow-[-120px_99px_43px_0px_rgba(0,0,0,0),-77px_63px_40px_0px_rgba(0,0,0,0.01),-43px_35px_34px_0px_rgba(0,0,0,0.05),-19px_16px_25px_0px_rgba(0,0,0,0.09),-5px_4px_14px_0px_rgba(0,0,0,0.1)]"
          >
            <Image
              src="/d08b23cbb970aba16abef24d9c4739a35f73788f.png"
              alt="A view of co-working space"
              fill
              className="object-cover"
            />
            
            {/* Play Button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-[40px] h-[44px] md:w-[45px] md:h-[48px] lg:w-[49px] lg:h-[52px] backdrop-blur-[13px] backdrop-filter rounded-full border-2 border-[#cad0f4] shadow-[0px_15px_75px_0px_rgba(27,25,68,0.3)] flex items-center justify-center"
              >
                <div className="relative w-[14px] h-[18px] md:w-[16px] md:h-[20px] lg:w-[17.291px] lg:h-[21.614px]">
                  <Image
                    src="/31d7416973dab97e8e6d2915edcec1e224bedb75.svg"
                    alt="Play"
                    fill
                  />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusDaySection;