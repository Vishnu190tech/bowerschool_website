'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BuildDayHeroSection = () => {
  return (
    <section className="relative w-full h-[800px] overflow-hidden bg-[#1e1e1e]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Stars background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/9551ae7f70b828d3304eda30a262678c914f6a0e.svg"
            alt=""
            width={1440}
            height={488}
            className="w-full h-auto"
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0">
          <Image
            src="/b6f68bcc0d5b9d2c22d86bd280230365a4adaa28.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Light effects */}
        <div className="absolute -top-[979px] left-[145px] w-[1694px] h-[1402px]">
          <Image
            src="/3570c8883c7772e0f4461582c14ed05d24abe9dc.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Bottom light effects (rotated) */}
        <div className="absolute top-[127px] left-[154px] w-[1694px] h-[1402px] rotate-180">
          <Image
            src="/84168196271f1ac87ea3dd4279b949f99e8a5d69.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Campus background image with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to left, transparent, rgba(0, 0, 0, 0.2)), url('/4fdcbbe35f93e857fb876fd542768fac060acc19.png')`
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center px-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[1063px]"
        >
          <h1 
            className="text-[#f0f0ff]"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '80px',
              fontWeight: 700,
              lineHeight: '80px',
              letterSpacing: '-4px'
            }}
          >
            <span className="block">Build Day</span>
            <span className="block">Startup Sprint Edition</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildDayHeroSection;