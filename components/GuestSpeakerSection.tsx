'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GuestSpeakerSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#2d2d2d' }}>
      {/* Background with 3D elements and grid */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* 3D floating elements */}
        <div className="absolute inset-0">
          {/* Purple geometric shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-20 w-32 h-32 opacity-60"
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 transform rotate-12" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-24 h-24 opacity-50"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
          </motion.div>

          <motion.div
            animate={{
              x: [0, 10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-1/4 w-20 h-20 opacity-40"
          >
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-300 to-purple-500 transform -rotate-6" />
          </motion.div>

          {/* Additional floating elements */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 right-1/3 w-16 h-16"
          >
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-700/30" />
          </motion.div>
        </div>

        {/* Stars background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const size = ((i * 7) % 2) + 1;
            const left = ((i * 13) % 100);
            const top = ((i * 17) % 100);
            const delay = ((i * 11) % 30) / 10;
            const duration = ((i * 7) % 20) / 10 + 2;
            
            return (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0.3
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Subtitle */}
            <p className="mb-6" style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '27px',
              color: '#ffffff',
              opacity: 0.8
            }}>
              Guest speaker
            </p>

            {/* Title */}
            <h2 className="mb-8" style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: '48px',
              color: '#ffffff'
            }}>
              How the entrepreneurial landscape is changing in India — a special session with
            </h2>

            {/* Speaker Name */}
            <p className="mb-8 italic" style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#ffffff'
            }}>
              –Ritesh Agarwal
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#4242ff',
                color: '#ffffff',
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '27px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3232e6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4242ff'}
            >
              Register →
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/b6701b7e9ac53345816f75081a63c8a1a54567a1.png"
                  alt="Ritesh Agarwal - Guest Speaker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient for better image integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            
            {/* Decorative element */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent" />
    </section>
  );
};

export default GuestSpeakerSection;