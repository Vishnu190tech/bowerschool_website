'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StatsBar from './StatsBar';

const MentorshipHeroSection = () => {

  return (
    <section className="relative w-full h-full">
      {/* Hero Background Section */}
      <div className="">
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
        <div className="absolute -top-[979px] left-[145px] w-[1694px] h-[1402px] hidden lg:block">
          <Image
            src="/5f8e28f5d42f2db2b81c70c1ec2ccd0fe5e0895d.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Light effects - bottom (rotated) */}
        <div className="absolute top-[127px] left-[154px] w-[1694px] h-[1402px] rotate-180 hidden lg:block">
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
        <div className='flex flex-col justify-around h-full mt-20 md:mt-32 lg:mt-40 space-y-12 md:space-y-16 lg:space-y-20 mb-10'>
          {/* Content */}
          <div className="relative z-10 flex items-center">
            <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:max-w-[1063px]"
              >
                {/* Main Heading */}
                <h1
                  className="text-white mb-4 md:mb-6 text-[32px] md:text-[56px] lg:text-[80px] font-bold leading-[1.1] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                >
                  Mentorship That Moves the Needle
                </h1>

                {/* Subtitle */}
                <p
                  className="text-gray-300 mb-6 md:mb-8 max-w-full lg:max-w-[900px] text-[16px] md:text-[20px] lg:text-[24px] font-semibold md:font-semibold lg:font-semibold leading-[1.4] tracking-[-0.5px] md:tracking-[-0.75px] lg:tracking-[-0.96px]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                >
                  At Bower, mentors aren't just guest speakers — they're collaborators, and co-builders who walk the journey with our students from idea to execution.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#4242ff] text-white px-4 py-2 h-11 rounded-lg flex items-center justify-center gap-2 shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3232e6] transition-colors"
                  >
                    <span
                      className="text-[16px] md:text-[17px] lg:text-[18px] font-medium"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                        textShadow: '#4242ff 0px 1px 3px'
                      }}
                    >
                      Meet our mentors
                    </span>
                    {/* Chevron Icon */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                      className="text-[16px] md:text-[17px] lg:text-[18px] font-medium"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                      }}
                    >
                      Become a mentor
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}

          <StatsBar />
        </div>
      </div>


    </section>
  );
};

export default MentorshipHeroSection;