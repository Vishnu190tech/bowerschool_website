'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partnerLogos = [
  { name: 'CRED', logo: '/cred-logo.svg', width: 60 },
  { name: 'Unity', logo: '/unity-logo.svg', width: 60 },
  { name: 'CRED', logo: '/cred-logo.svg', width: 60 },
  { name: 'Airbnb', logo: '/airbnb-logo.svg', width: 80 },
  { name: 'Unity', logo: '/unity-logo.svg', width: 60 },
  { name: 'Airbnb', logo: '/airbnb-logo.svg', width: 80 },
  { name: 'Google', text: 'Google', width: 80 },
  { name: 'Netflix', text: 'NETFLIX', width: 80 }
];

export default function Hero() {
  return (
    <div className="relative  bg-gradient-to-br from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f] overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 pt-24 sm:pt-32 pb-16 sm:pb-32">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Badge - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:inline-block mb-8"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white">
              Bower school
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 sm:mb-6 leading-tight text-center sm:text-left"
          >
            Entrepreneurship<br />
            Begins Here
          </motion.h1>

          {/* CTA Buttons - Stack on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 sm:py-3 bg-[#4242ff] text-white rounded-xl sm:rounded-full font-medium hover:bg-[#3232e6] transition-colors flex items-center justify-center gap-2"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 sm:py-3 bg-transparent text-white border border-white/30 rounded-xl sm:rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Download Brochure
            </motion.button>
          </motion.div>

          {/* Partner Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 sm:mt-20"
          >
            <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6">Learn from the Best</p>
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-4 sm:gap-8">
              {partnerLogos.map((partner, index) => (
                <div key={index} className={`${index >= 6 ? 'hidden sm:block' : ''}`}>
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={30}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="text-white/80 font-bold text-sm sm:text-xl text-center sm:text-left">
                      {partner.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-40 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl opacity-50 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 right-60 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-50 blur-sm"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-60 left-40 w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-3xl opacity-30 blur-sm"
      />
    </div>
  );
}