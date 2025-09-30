'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partnerLogos = [
  { name: 'CRED', logo: '/22d761ba44c7c2babc8bb51b802e086cc1339998.png', width: 65, height: 24 },
  { name: 'Unity', logo: '/ff93379a9ca517e9a293ef7ad09a123c9296dc33.png', width: 42, height: 24 },
  { name: 'CRED2', logo: '/22d761ba44c7c2babc8bb51b802e086cc1339998.png', width: 66, height: 24 },
  { name: 'Airbnb', logo: '/6f161c58539e1ac4fb9bbf145a1c2938d5636702.png', width: 73, height: 24 },
  { name: 'Unity2', logo: '/ff93379a9ca517e9a293ef7ad09a123c9296dc33.png', width: 42, height: 24 },
  { name: 'Airbnb2', logo: '/6f161c58539e1ac4fb9bbf145a1c2938d5636702.png', width: 72, height: 24 },
  { name: 'Google', logo: '/c53e882f3a3f2d1c237564546b2e2940e85e99c2.svg', width: 45, height: 16 },
  { name: 'Netflix', logo: '/f5ea92c4a038730c0618608c3e3379943709d55b.svg', width: 55, height: 16 }
];

export default function Hero() {
  return (
    <div className="relative   overflow-hidden">
      {/* Desktop Background */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src="/bg-hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Background */}
      <div className="sm:hidden absolute inset-0">
        <Image
          src="/bg-hero-mobile.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 pt-28 sm:pt-32 pb-12 sm:pb-32">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Badge - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="  mb-8"
          >
            <span className="px-4 py-2 bg-[#3232E61A] backdrop-blur-md border border-[#3232E61A] rounded-full text-sm text-white">
              Bower school
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 sm:mb-6  leading-tight text-center sm:text-left"
          >
            Entrepreneurship<br />
            Begins Here
          </motion.h1>

          {/* CTA Buttons - Stack on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 sm:py-3 bg-[#4242ff] text-white rounded-xl sm:rounded-xl font-medium hover:bg-[#3232e6] transition-colors flex items-center justify-center gap-2"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 py-2 text-white border border-white/50 rounded-lg font-medium transition-all relative overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(50,50,230,0.4) 0%, rgba(50,50,230,0) 100%), linear-gradient(to right, rgba(17,24,39,0.05), rgba(17,24,39,0.05))',
                backdropFilter: 'blur(32px)',
                fontSize: '18px',
                lineHeight: '27px',
                fontFamily: 'var(--font-plus-jakarta)',
              }}
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Section - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative -mt-8 sm:-mt-12 mb-16 sm:mb-20"
      >
        {/* Full-width glossy background strip */}
        <div className="relative backdrop-blur-lg bg-[rgba(37,37,37,0.3)] h-16 sm:h-20 overflow-hidden">

          <div className="container mx-auto px-4 sm:px-6 lg:px-20 h-full relative">
            {/* "Learn from the Best" with solid background to mask logos */}
            <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center">
              <div className="bg-[rgba(37,37,37,0.95)] backdrop-blur-xl pl-4 sm:pl-6 lg:pl-20 pr-8 sm:pr-16 h-full flex items-center">
                <p
                  className="text-[#f0f0ff] text-sm sm:text-[14px] font-medium whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    lineHeight: '20px'
                  }}
                >
                  Learn from the Best
                </p>
              </div>
              {/* Gradient fade on the right edge of text background */}
              <div
                className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(37,37,37,0.95) 0%, transparent 100%)'
                }}
              />
            </div>

            {/* Scrolling logos container */}
            <div className="absolute inset-0 flex items-center">
              <motion.div
                className="flex items-center gap-12 sm:gap-20 pl-[200px] sm:pl-[300px] lg:pl-[400px]"
                animate={{
                  x: ["0%", "-50%"]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of logos */}
                {partnerLogos.map((partner, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width * 1.5}
                      height={partner.height * 1.5}
                      className="h-6 sm:h-8 w-auto object-contain opacity-80"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless scroll */}
                {partnerLogos.map((partner, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width * 1.5}
                      height={partner.height * 1.5}
                      className="h-6 sm:h-8 w-auto object-contain opacity-80"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right edge fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to left, rgba(37,37,37,0.3) 0%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </motion.div>

    </div>
  );
}