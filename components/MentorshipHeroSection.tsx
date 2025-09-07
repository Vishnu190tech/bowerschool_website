'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MentorshipHeroSection = () => {
  const stats = [
    { value: '100 + Mentors', label: 'Conduction Workshops' },
    { value: '75 Startups', label: 'People Impacted' },
    { value: '2,000+ Hrs', label: 'Taught' },
    { value: '3,000+ Sessions', label: 'One on Ones' }
  ];

  return (
    <section className="relative w-full h-[900px]">
      {/* Hero Background Section */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[#1e1e1e] overflow-hidden">
        {/* Background decorative elements */}
        {/* Stars */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/9551ae7f70b828d3304eda30a262678c914f6a0e.svg"
            alt=""
            width={1440}
            height={488}
            className="w-full h-auto"
          />
        </div>

        {/* Grid */}
        <div className="absolute inset-0">
          <Image
            src="/c50763198b00eb36abbe971a32aae084e900f101.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Light effects - top */}
        <div className="absolute -top-[979px] left-[145px] w-[1694px] h-[1402px]">
          <Image
            src="/5f8e28f5d42f2db2b81c70c1ec2ccd0fe5e0895d.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Light effects - bottom (rotated) */}
        <div className="absolute top-[127px] left-[154px] w-[1694px] h-[1402px] rotate-180">
          <Image
            src="/e9e3c83b6d8b0022966d58002e9767b7e546c486.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Background Image with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to left, transparent, rgba(0, 0, 0, 0.6)), url('/4eb3230c9b7ea77a5c46dc107f8b0a49a9846e41.png')`
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1440px] mx-auto px-20 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[1063px]"
            >
              {/* Main Heading */}
              <h1 
                className="text-white mb-6"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: '80px',
                  fontWeight: 700,
                  lineHeight: '80px',
                  letterSpacing: '-4px'
                }}
              >
                Mentorship That Moves the Needle
              </h1>

              {/* Subtitle */}
              <p 
                className="text-gray-300 mb-8 max-w-[900px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  letterSpacing: '-0.96px'
                }}
              >
                At Bower, mentors aren't just guest speakers — they're collaborators, and co-builders who walk the journey with our students from idea to execution.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#4242ff] text-white px-4 py-2 h-11 rounded-lg flex items-center gap-2 shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3232e6] transition-colors"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: '27px',
                      textShadow: '#4242ff 0px 1px 3px'
                    }}
                  >
                    Meet our mentors
                  </span>
                  {/* Chevron Icon */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="backdrop-blur-[32px] bg-[rgba(17,24,39,0.05)] text-white px-4 py-2 h-11 rounded-lg border border-white/50 transition-all"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(50, 50, 230, 0.4) 0%, rgba(50, 50, 230, 0) 100%)`
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: '27px'
                    }}
                  >
                    Become a mentor
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1280px] h-[119px] backdrop-blur-[22px] rounded-lg border border-white flex items-center justify-center px-[60px]"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(9, 9, 21, 1) 0%, rgba(0, 0, 36, 1) 100%)`,
          backgroundColor: 'rgba(9, 9, 21, 0.4)'
        }}
      >
        <div className="flex items-center justify-between w-full">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <div 
                  className="text-white mb-[15px]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontSize: '30px',
                    fontWeight: 600,
                    lineHeight: '30px',
                    letterSpacing: '-1.2px'
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-gray-100"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '30px'
                  }}
                >
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="h-[76px] w-px bg-white/30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MentorshipHeroSection;