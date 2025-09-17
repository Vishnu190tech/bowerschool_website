'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AdmissionStepsSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit documents',
      description: 'Applicants need to submit High School Completion Certificate (Grade 12 or equivalent) Mark sheet / Transcript from the last attended School or Board.',
      rotation: '-3.23deg'
    },
    {
      number: '02', 
      title: 'Hands-On Projects',
      description: 'Real exposure to global markets by solving real-world business challenges.',
      rotation: '2deg'
    },
    {
      number: '03',
      title: 'Next-Gen Tools & Tech',
      description: 'Get trained in tools that power tomorrow\'s businesses.',
      rotation: '-2deg'
    },
    {
      number: '04',
      title: 'Build & Pitch',
      description: 'Design go-to-market strategies, forecast finances, and create pitch decks.',
      rotation: '2deg'
    }
  ];

  return (
    <section className="relative w-full min-h-screen lg:h-[1242px] bg-[#0c0c0c] overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(132.909deg, rgb(16, 19, 7) 1.2667%, rgb(15, 18, 5) 100%),
                           radial-gradient(ellipse at 666.35px 173.19px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55.823%, rgba(0, 0, 0, 0.3) 73.997%, rgba(0, 0, 0, 0) 100%),
                           linear-gradient(88.0737deg, rgba(66, 66, 255, 0.4) 0.1095%, rgba(66, 66, 255, 0.4) 63.8%)`
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0">
        <Image
          src="/3e0fff1eefa868223eb1cf8fbf5bd0cd00dd7c6b.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Secondary grid */}
      <div className="absolute inset-0 bottom-[-8.62%]">
        <Image
          src="/64f71456bb2b0eb51fc49739902f49bd080e3f0b.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-8 md:px-10 md:py-10 lg:px-20 h-full">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[50px] h-full">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:flex-1 pt-8 md:pt-12 lg:pt-20 text-center lg:text-left"
          >
            <h2
              className="text-[#4242ff] text-[36px] md:text-[56px] lg:text-[80px] font-bold leading-[1.1] tracking-[-4px] max-w-full lg:max-w-[615px] mx-auto lg:mx-0"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
              }}
            >
              Your Path to Bower, Step by Step
            </h2>
          </motion.div>

          {/* Right side - Cards */}
          <div className="w-full lg:flex-1 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 px-0 md:px-4 lg:px-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                style={{ transform: `rotate(${step.rotation})` }}
              >
                <div
                  className="relative w-full max-w-[320px] md:max-w-[400px] lg:w-[450px] h-[200px] md:h-[220px] lg:h-[250px] backdrop-blur-md bg-[#1c1b1e] rounded-[14px] md:rounded-[16px] lg:rounded-[18px] border border-[#fbfff3]"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at center, rgba(1, 1, 39, 0.2) 0%, rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%)`
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 flex flex-col gap-2 md:gap-3 lg:gap-4 h-full relative">
                    <h3
                      className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-tight"
                      style={{
                        fontFamily: index === 0 ? 'var(--font-plus-jakarta)' : 'Figtree',
                        letterSpacing: index === 0 ? '-0.96px' : '0'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-white text-[14px] md:text-[16px] lg:text-[20px] leading-relaxed flex-1 pr-12 md:pr-16 lg:pr-20"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                      }}
                    >
                      {step.description}
                    </p>
                    {/* Number watermark */}
                    <div
                      className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 text-[rgba(251,255,243,0.2)] text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-none tracking-[-4px]"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                      }}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionStepsSection;