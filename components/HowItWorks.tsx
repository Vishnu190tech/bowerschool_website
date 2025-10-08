'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface WorksTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  titleColor: string;
  cardBg: string;
  stepTitleColor: string;
  stepDescColor: string;
  numberCircleBg: string;
  numberText: string;
  lineGradientFrom: string;
  lineGradientTo: string;
  decorativeGlow1: string;
  decorativeGlow2: string;
}

const WORKS_THEMES: Record<ThemeType, WorksTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#f0f0ff',
    titleColor: '#252525',
    cardBg: 'rgba(255, 255, 255, 0.5)',
    stepTitleColor: '#110c07',
    stepDescColor: '#6a6a6a',
    numberCircleBg: 'linear-gradient(to bottom right, #4242FF, #3232e6)',
    numberText: '#ffffff',
    lineGradientFrom: '#4242FF',
    lineGradientTo: '#3232e6',
    decorativeGlow1: 'rgba(66, 66, 255, 0.2)',
    decorativeGlow2: 'rgba(50, 50, 230, 0.2)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#f5ffd9',
    titleColor: '#252525',
    cardBg: 'rgba(255, 255, 255, 0.5)',
    stepTitleColor: '#110c07',
    stepDescColor: '#6a6a6a',
    numberCircleBg: 'linear-gradient(to bottom right, #A8F326, #8FD920)',
    numberText: '#000000',
    lineGradientFrom: '#A8F326',
    lineGradientTo: '#8FD920',
    decorativeGlow1: 'rgba(168, 243, 38, 0.2)',
    decorativeGlow2: 'rgba(143, 217, 32, 0.2)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#f8f2ee',
    titleColor: '#252525',
    cardBg: 'rgba(255, 255, 255, 0.5)',
    stepTitleColor: '#110c07',
    stepDescColor: '#6a6a6a',
    numberCircleBg: 'linear-gradient(to bottom right, #FF8829, #FFBF29)',
    numberText: '#ffffff',
    lineGradientFrom: '#FF8829',
    lineGradientTo: '#FFBF29',
    decorativeGlow1: 'rgba(255, 136, 41, 0.2)',
    decorativeGlow2: 'rgba(255, 191, 41, 0.2)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#f0f0ff',
    titleColor: '#252525',
    cardBg: 'rgba(255, 255, 255, 0.5)',
    stepTitleColor: '#110c07',
    stepDescColor: '#6a6a6a',
    numberCircleBg: 'linear-gradient(to bottom right, #4242FF, #3232e6)',
    numberText: '#ffffff',
    lineGradientFrom: '#4242FF',
    lineGradientTo: '#3232e6',
    decorativeGlow1: 'rgba(66, 66, 255, 0.2)',
    decorativeGlow2: 'rgba(50, 50, 230, 0.2)',
  },
};

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  theme?: ThemeType;
  title?: string;
  steps?: Step[];
  gridPattern?: string;
  decorativeCircle?: string;
  decorativeShapes?: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    number: 1,
    title: 'Take Level-1 courses by industry experts',
    description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
  },
  {
    number: 2,
    title: 'Attend. Learn. Innovate',
    description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
  },
  {
    number: 3,
    title: 'Get Certified',
    description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
  },
  {
    number: 4,
    title: 'Proceed to the Next Level',
    description: 'Select your desired subject and enrol in level 1 to kickstart your journey'
  }
];

const HowItWorks = ({
  theme = 'seed',
  title = 'How It Works!',
  steps = DEFAULT_STEPS,
  gridPattern = '/e3f37f7c167982f4de1508adec8e58361d22c27b.svg',
  decorativeCircle = '/e7bf14edf6ec4b58f95d0f45044d57e619ce898d.svg',
  decorativeShapes = '/e0743815baf2d2cb0b8f0452c1edfc5a93b1e041.svg'
}: HowItWorksProps) => {
  const currentTheme = WORKS_THEMES[theme];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <Image
          src={gridPattern}
          alt="Grid pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative Background Image */}
      <div
        className="hidden md:block absolute top-1/2 -translate-y-1/2 w-[820px] h-[820px] pointer-events-none"
        style={{ left: 'calc(50% + 48px)', transform: 'translate(-50%, -50%)' }}
      >
        <div className="absolute inset-[-15.61%]">
          <Image
            src={decorativeCircle}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute -top-[82px] left-[-4.57%] right-[-10.82%] h-[752px] pointer-events-none">
        <Image
          src={decorativeShapes}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-9 items-center justify-center px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <motion.h2
          className="font-semibold text-2xl md:text-3xl lg:text-[44px] tracking-[-1.76px] capitalize text-center"
          style={{ color: currentTheme.titleColor }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Steps Container */}
        <div className="w-full max-w-6xl">
          <div
            className="backdrop-blur-[32px] rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"
            style={{ backgroundColor: currentTheme.cardBg }}
          >
            <motion.div
              className="flex flex-col "
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex gap-4 md:gap-6 lg:gap-8 items-start"
                  variants={stepVariants}
                >
                  {/* Indicator and Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Number Circle */}
                    <motion.div
                      className="relative w-16 h-16 md:w-[66px] md:h-[66px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring" as const, stiffness: 300 }}
                    >
                      {/* Circle Background */}
                      <div
                        className="absolute inset-0 rounded-full shadow-lg"
                        style={{ background: currentTheme.numberCircleBg }}
                      />

                      {/* Number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="font-semibold text-2xl md:text-[30px] tracking-[-1.2px]"
                          style={{ color: currentTheme.numberText }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </motion.div>

                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div
                        className="w-[2px] h-[60px] md:h-[80px] lg:h-[100px]"
                        style={{
                          background: `linear-gradient(to bottom, ${currentTheme.lineGradientFrom}, ${currentTheme.lineGradientTo})`
                        }}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <motion.h3
                      className="font-semibold text-lg md:text-xl lg:text-2xl tracking-[-0.96px] mb-2"
                      style={{ color: currentTheme.stepTitleColor }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="font-normal text-sm md:text-base lg:text-xl leading-relaxed"
                      style={{ color: currentTheme.stepDescColor }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.2 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: currentTheme.decorativeGlow1 }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: currentTheme.decorativeGlow2 }}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
      </div>
    </div>
  )
}

export default HowItWorks