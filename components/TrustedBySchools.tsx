'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface TrustedTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  titleColor: string;
  highlightColor: string;
  glowColor: string;
  gradientColor: string;
}

const TRUSTED_THEMES: Record<ThemeType, TrustedTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#fffcf9',
    titleColor: '#6a6a6a',
    highlightColor: '#3232e6',
    glowColor: 'rgba(50, 50, 230, 0.1)',
    gradientColor: '#3232e6',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#fffcf9',
    titleColor: '#6a6a6a',
    highlightColor: '#8FD920',
    glowColor: 'rgba(168, 243, 38, 0.1)',
    gradientColor: '#8FD920',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#fffcf9',
    titleColor: '#6a6a6a',
    highlightColor: '#FF8829',
    glowColor: 'rgba(255, 136, 41, 0.1)',
    gradientColor: '#ff8829',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#fffcf9',
    titleColor: '#6a6a6a',
    highlightColor: '#4242ff',
    glowColor: 'rgba(66, 66, 255, 0.1)',
    gradientColor: '#4242ff',
  },
};

interface Logo {
  id: number;
  src: string;
  width: number;
  name: string;
}

interface TrustedBySchoolsProps {
  theme?: ThemeType;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  logos?: Logo[];
}

const DEFAULT_LOGOS: Logo[] = [
  { id: 1, src: '/2edcf53d6deca08e1039d103e6715c1f8144dd68.svg', width: 146, name: 'Layers' },
  { id: 2, src: '/ba6d46b6e6f1eb30bf1720cf1ec072c90d4a691d.svg', width: 169, name: 'Sisyphus' },
  { id: 3, src: '/8415c08d94618bbed86d5c33e67d841a0a0da4ae.svg', width: 183, name: 'Circooles' },
  { id: 4, src: '/18b98cf5ff99db0e28c470fe75ad2c05252648ec.svg', width: 160, name: 'Catalog' },
  { id: 5, src: '/25f2ef3903e384f984c9757462bd6dc403e4b62a.svg', width: 187, name: 'Quotient' },
];

const TrustedBySchools = ({
  theme = 'seed',
  titlePrefix = 'You Trusted by',
  titleHighlight = '80,000+ Learners',
  titleSuffix = 'from Schools Across India',
  logos = DEFAULT_LOGOS
}: TrustedBySchoolsProps) => {
  const currentTheme = TRUSTED_THEMES[theme];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div
      className="py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20 overflow-hidden"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Title Section */}
        <motion.h2
          className="text-[24px] md:text-3xl lg:text-[40px] font-semibold text-center mb-8 md:mb-12 lg:mb-16 tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] leading-tight px-4 md:px-0"
          variants={itemVariants}
        >
          <span style={{ color: currentTheme.titleColor }}>{titlePrefix}</span>
          <span> </span>
          <span style={{ color: currentTheme.highlightColor }}>{titleHighlight}</span>
          <br />
          <span style={{ color: currentTheme.titleColor }}>{titleSuffix}</span>
        </motion.h2>

        {/* Logo Carousel Container */}
        <div className="relative">
          {/* First Row of Logos - Hidden on Mobile */}
          <motion.div
            className="hidden md:flex items-center justify-center gap-8 lg:gap-20 mb-8 md:mb-12 lg:mb-20 flex-wrap"
            variants={itemVariants}
          >
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                className="h-10 md:h-12 flex items-center justify-center w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={48}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-[120px] md:max-w-[150px] lg:max-w-none h-full"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row of Logos (Different Order) - Hidden on Mobile */}
          <motion.div
            className="hidden md:flex items-center justify-center gap-8 lg:gap-20 flex-wrap"
            variants={itemVariants}
          >
            {[logos[1], logos[0], logos[3], logos[4]].map((logo, index) => (
              <motion.div
                key={`row2-${logo.id}`}
                className="h-10 md:h-12 flex items-center justify-center w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={48}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-[120px] md:max-w-[150px] lg:max-w-none h-full"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Background Elements - Hidden on Mobile */}
          <motion.div
            className="hidden md:block absolute -top-10 -left-10 w-20 h-20 rounded-full blur-2xl"
            style={{
              background: `linear-gradient(to bottom right, ${currentTheme.glowColor}, transparent)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
          <motion.div
            className="hidden md:block absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl"
            style={{
              background: `linear-gradient(to bottom right, ${currentTheme.glowColor}, transparent)`
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
        </div>

        {/* Scrolling Animation for Mobile */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-8 z-10"
            style={{
              background: `linear-gradient(to right, ${currentTheme.bgColor}, transparent)`
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-8 z-10"
            style={{
              background: `linear-gradient(to left, ${currentTheme.bgColor}, transparent)`
            }}
          />
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -500, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`mobile-${index}`}
                className="h-8 flex-shrink-0"
                style={{ width: `${logo.width * 0.6}px` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width * 0.6}
                  height={32}
                  className="object-contain filter grayscale"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default TrustedBySchools