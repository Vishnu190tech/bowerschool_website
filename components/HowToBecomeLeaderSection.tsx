'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HowToBecomeLeaderSection = () => {
  const steps = [
    {
      number: 1,
      title: "Online Application",
      description: "Submit the online application along with the required documents."
    },
    {
      number: 2,
      title: "Profile Evaluation",
      description: "Shortlisted candidates will be evaluated basis the stage of their venture"
    },
    {
      number: 3,
      title: "Admission Decision",
      description: "Selected candidates will be provided with an offer of admission to the program."
    },
    {
      number: 4,
      title: "Proceed to the Next Level",
      description: "Select your desired subject and enrol in level 1 to kickstart your journey"
    }
  ];

  return (
    <section className="relative w-full bg-[#1a1a1a] overflow-hidden py-6 md:py-8 lg:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <div className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 100px, rgba(255,255,255,0.05) 100px),
                              repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 100px, rgba(255,255,255,0.05) 100px)`
            }}
          />
        </div>

        {/* Stars Background */}
        <div className="absolute inset-0 hidden lg:block">
          {[...Array(60)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const size = ((i * 7) % 2) + 1;
            const left = (i * 13) % 100;
            const top = (i * 17) % 100;
            const delay = ((i * 11) % 50) / 10;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  delay: delay,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
                viewport={{ once: true }}
              />
            );
          })}
        </div>

        {/* Light Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-radial from-[#8aff00] via-transparent to-transparent blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-radial from-[#8aff00] via-transparent to-transparent blur-3xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[28px] md:text-[40px] lg:text-[55px] font-bold text-white mb-8 md:mb-12 lg:mb-16"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          How To Become A <span className="text-[#8aff00]">#LEADer</span>
        </motion.h2>

        {/* Steps Container */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 md:gap-6 lg:gap-8 relative"
            >
              {/* Step Indicator and Line */}
              <div className="flex flex-col items-center">
                {/* Circle with Number */}
                <div className="w-[50px] h-[50px] md:w-[58px] md:h-[58px] lg:w-[66px] lg:h-[66px] rounded-full bg-[#8aff00] flex items-center justify-center relative z-10">
                  <span className="text-[20px] md:text-[26px] lg:text-[32px] font-bold text-[#1a1a1a]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {step.number}
                  </span>
                </div>

                {/* Vertical Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="w-[2px] h-[60px] md:h-[80px] lg:h-[100px] bg-[#8aff00] opacity-30 mt-1" />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 pb-6 md:pb-7 lg:pb-8">
                <h3 className="text-[20px] md:text-[26px] lg:text-[32px] font-semibold text-white mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/80 leading-[24px] md:leading-[27px] lg:leading-[30px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --leader-bg: #1a1a1a;
          --leader-accent: #8aff00;
          --leader-text: #ffffff;
          --leader-text-secondary: rgba(255, 255, 255, 0.8);
          --leader-grid: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
};

export default HowToBecomeLeaderSection;