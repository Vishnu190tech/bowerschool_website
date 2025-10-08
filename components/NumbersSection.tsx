'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface NumbersTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  titleColor: string;
  textColor: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonText: string;
  buttonShadow: string;
  cardBg: string;
  cardBorder: string;
  statNumberColor: string;
  statTitleColor: string;
  statDescColor: string;
  dividerColor: string;
}

const NUMBERS_THEMES: Record<ThemeType, NumbersTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#f0f0ff',
    titleColor: '#1a2555',
    textColor: '#2d2d2d',
    buttonBg: '#3232e6',
    buttonHoverBg: '#2525c4',
    buttonText: '#ffffff',
    buttonShadow: '0px 0px 0px 1px #2525c4, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    cardBorder: '#ffffff',
    statNumberColor: '#2d2d2d',
    statTitleColor: '#161616',
    statDescColor: '#5a5a5a',
    dividerColor: '#c4c4c4',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#f5ffd9',
    titleColor: '#2d3a15',
    textColor: '#2d2d2d',
    buttonBg: '#8FD920',
    buttonHoverBg: '#7ac01a',
    buttonText: '#000000',
    buttonShadow: '0px 0px 0px 1px #7ac01a, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    cardBorder: '#ffffff',
    statNumberColor: '#2d2d2d',
    statTitleColor: '#161616',
    statDescColor: '#5a5a5a',
    dividerColor: '#c4c4c4',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#fbede3',
    titleColor: '#2c360d',
    textColor: '#2d2d2d',
    buttonBg: '#ff8829',
    buttonHoverBg: '#e67320',
    buttonText: '#ffffff',
    buttonShadow: '0px 0px 0px 1px #e67320, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    cardBorder: '#ffffff',
    statNumberColor: '#2d2d2d',
    statTitleColor: '#161616',
    statDescColor: '#5a5a5a',
    dividerColor: '#c4c4c4',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#f0f0ff',
    titleColor: '#1a2555',
    textColor: '#2d2d2d',
    buttonBg: '#4242ff',
    buttonHoverBg: '#3232e6',
    buttonText: '#ffffff',
    buttonShadow: '0px 0px 0px 1px #3232e6, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    cardBorder: '#ffffff',
    statNumberColor: '#2d2d2d',
    statTitleColor: '#161616',
    statDescColor: '#5a5a5a',
    dividerColor: '#c4c4c4',
  },
};

interface Stat {
  number: string;
  title: string;
  description: string;
}

interface NumbersSectionProps {
  theme?: ThemeType;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  stats?: Stat[];
  decorativeImage?: string;
}

const DEFAULT_STATS: Stat[] = [
  {
    number: '300+',
    title: 'Students Trained across India',
    description: 'Students from over 40 schools across India have participated in the SEED Summer Program.'
  },
  {
    number: '94%',
    title: 'Report Increased Confidence',
    description: 'Post-program surveys show a significant boost in communication and leadership.'
  },
  {
    number: '50+',
    title: 'Mentors & Entrepreneurs Engaged',
    description: 'Learn from real founders, CXOs, and domain experts from top startups, VCs, and institutions.'
  }
];

const NumbersSection = ({
  theme = 'seed',
  title = 'Numbers Are Telling Our Story',
  description = "Unlock your child's inner innovator through this hands-on program that blends entrepreneurship, AI, and finance. Students will identify real-world problems, design and build tech-based solutions, and pitch their ventures — all while understanding how money moves in the real world.",
  buttonText = 'Apply Now',
  onButtonClick,
  stats = DEFAULT_STATS,
  decorativeImage = '/cb5b1556c44ef7473b23c1c2a0f72ef0fda09150.svg'
}: NumbersSectionProps) => {
  const currentTheme = NUMBERS_THEMES[theme];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div
      className="relative py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      {/* Background Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Top Right Circle */}
        <div className="absolute top-1/4 right-0 translate-x-1/3">
          <Image
            src={decorativeImage}
            alt=""
            width={383}
            height={503}
            className="opacity-50 rotate-[-90deg]"
          />
        </div>
        {/* Bottom Right Circle */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
          <Image
            src={decorativeImage}
            alt=""
            width={383}
            height={503}
            className="opacity-50 rotate-[-90deg]"
          />
        </div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-4 lg:px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center justify-between">

          {/* Left Content */}
          <motion.div
            className="flex-1  text-center lg:text-left"
            variants={itemVariants}
          >
            <h2
              className="text-[28px] md:text-[34px] lg:text-[38px] xl:text-[44px] font-semibold mb-4 md:mb-6 leading-tight tracking-[-1.12px] md:tracking-[-1.36px] lg:tracking-[-1.52px] xl:tracking-[-1.76px] capitalize"
              style={{ color: currentTheme.titleColor }}
            >
              {title}
            </h2>
            <p
              className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[27px] xl:leading-[30px] mb-6 md:mb-8 text-center lg:text-justify"
              style={{ color: currentTheme.textColor }}
            >
              {description}
            </p>
            <motion.button
              className="px-4 md:px-6 py-2.5 md:py-3 font-medium text-[16px] md:text-[18px] rounded-lg transition-colors"
              style={{
                backgroundColor: currentTheme.buttonBg,
                color: currentTheme.buttonText,
                boxShadow: currentTheme.buttonShadow
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = currentTheme.buttonHoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = currentTheme.buttonBg;
              }}
              onClick={onButtonClick}
            >
              {buttonText}
            </motion.button>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            className="flex-1 max-w-[700px] w-full"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <div
              className="backdrop-blur-[22px] rounded-[10px] border p-4 md:p-6 lg:p-8"
              style={{
                backgroundColor: currentTheme.cardBg,
                borderColor: currentTheme.cardBorder
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <div className="py-6 md:py-8 first:pt-0 last:pb-0">
                    {/* Number */}
                    <div
                      className="text-[32px] md:text-[40px] lg:text-[48px] font-medium mb-3 md:mb-4 lg:mb-5"
                      style={{ color: currentTheme.statNumberColor }}
                    >
                      {stat.number}
                    </div>

                    {/* Title */}
                    <div
                      className="text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-2"
                      style={{ color: currentTheme.statTitleColor }}
                    >
                      {stat.title}
                    </div>

                    {/* Description */}
                    <div
                      className="text-[14px] md:text-[16px] lg:text-[18px] leading-[21px] md:leading-[24px] lg:leading-[27px]"
                      style={{ color: currentTheme.statDescColor }}
                    >
                      {stat.description}
                    </div>
                  </div>

                  {/* Divider */}
                  {index < stats.length - 1 && (
                    <div className="border-t" style={{ borderColor: currentTheme.dividerColor }} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default NumbersSection