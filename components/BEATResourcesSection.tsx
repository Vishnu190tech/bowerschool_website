'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BEATResourcesSection = () => {
  const resources = [
    {
      title: 'Entrepreneurial Quotient & Current Affairs',
      description: 'Entrepreneurial Basics: Basics of business models, customer needs, value propositions, and how startups grow.',
      image: '/406fb5beb2e501c3e6fa8c079e3216d85c06e81d.png',
      size: 'small'
    },
    {
      title: 'Psychometric Test',
      description: 'Psychometric Skills: Read about how entrepreneurs make decisions, work in teams and lead effectively.',
      image: '/7c3ed6de00a834b5a0a825244892d7ccfec0b2fd.png',
      size: 'large'
    },
    {
      title: 'Audio-Visual Prompts',
      description: 'Real-Time Communication: Responding to business scenarios, demonstrating clear communication, critical thinking.',
      image: '/ed7e1b375e57ab1d4c799d6adbe7ff974c643da1.png',
      size: 'large'
    },
    {
      title: 'Business Communication',
      description: 'Business Scenarios: Professional communication skills through writing business emails, memos, and reports, analyzing business scenarios, and crafting effective, timely responses.',
      image: '/bf91ada2b78cac661c00989a22ffa6bbe4d416e1.png',
      size: 'small'
    }
  ];

  return (
    <section
      className="relative w-full px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(6, 6, 32, 0.5) 0%, rgba(6, 6, 32, 0.5) 28.365%, rgba(6, 6, 32, 0.5) 55.288%, rgba(6, 6, 32, 0.5) 75.962%, rgba(5, 5, 14, 0.5) 100%),
                         linear-gradient(rgb(24, 26, 28) 0%, rgb(24, 26, 28) 28.365%, rgb(0, 5, 15) 55.288%, rgb(24, 26, 28) 75.962%, rgb(24, 26, 28) 100%)`
      }}
    >
      {/* Background decorative elements */}
      {/* Lights - top left */}
      <div className="absolute -left-[715px] top-[553px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light rotate-180 hidden lg:block pointer-events-none">
        <Image
          src="/84baddf323e69b63e4d4db2baecb879be8fef485.svg"
          alt=""
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Stars */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-full max-h-[1438px] opacity-30 md:opacity-40 lg:opacity-100 pointer-events-none">
        <Image
          src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Lights - additional */}
      <div className="absolute -left-[715px] top-[553px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light rotate-180 hidden lg:block pointer-events-none">
        <Image
          src="/188f49ab65e841c85eae2ffd243fc14c539c3485.svg"
          alt=""
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Lights - top right */}
      <div className="absolute left-[261.99px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light hidden lg:block pointer-events-none">
        <Image
          src="/9fd109337cdf39b5e6471ce5a4b9e65f204bc9da.svg"
          alt=""
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8 lg:mb-10"
        >
          <h2
            className="text-white capitalize text-[24px] md:text-[32px] lg:text-[44px] font-semibold leading-[1.2]"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              letterSpacing: '-1.76px'
            }}
          >
            Resources for BEAT Preparation
          </h2>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-full h-[420px] md:h-[470px] lg:h-[520px] bg-[#1c1b1e] rounded-2xl lg:rounded-3xl p-3 border-2 border-white relative overflow-hidden flex flex-col"
              style={{
                backgroundImage: `radial-gradient(ellipse at center bottom, rgba(1, 1, 39, 0.2) 0%, rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%)`
              }}
            >
              <div className={`relative w-full h-[200px] md:h-[280px] lg:h-[330px] ${index === 2 ? 'bg-[#0b0b0b]' : 'bg-[#252527]'} rounded-xl overflow-hidden flex-shrink-0`}>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={740}
                  height={330}
                  className={`w-full h-full ${resource.size === 'large' ? 'object-contain' : 'object-cover'}`}
                  style={index === 2 ? { objectPosition: 'center top' } : undefined}
                  priority={index < 2}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="p-3 pb-6 flex-1 flex flex-col">
                <h3
                  className="text-white mb-2 text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.2] min-h-[24px] md:min-h-[28px] lg:min-h-[32px]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    letterSpacing: '-0.96px'
                  }}
                >
                  {resource.title}
                </h3>
                <p
                  className="text-gray-300 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                >
                  {resource.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BEATResourcesSection;