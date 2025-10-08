'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface OverviewTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  titleColor: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  labelColor: string;
  valueColor: string;
  mainTextColor: string;
  mainTextGray: string;
  iconFilter: string;
}

const OVERVIEW_THEMES: Record<ThemeType, OverviewTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#f0f0ff',
    titleColor: '#252525',
    cardBg: '#ffffff',
    cardBorder: 'rgba(50, 50, 230, 0.3)',
    cardShadow: 'rgba(50, 50, 230, 0.04)',
    labelColor: '#6a6a6a',
    valueColor: '#252525',
    mainTextColor: '#110c07',
    mainTextGray: '#6a6a6a',
    iconFilter: 'invert(28%) sepia(84%) saturate(3487%) hue-rotate(232deg) brightness(98%) contrast(101%)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#f5ffd9',
    titleColor: '#252525',
    cardBg: '#ffffff',
    cardBorder: 'rgba(168, 243, 38, 0.3)',
    cardShadow: 'rgba(168, 243, 38, 0.04)',
    labelColor: '#6a6a6a',
    valueColor: '#252525',
    mainTextColor: '#110c07',
    mainTextGray: '#6a6a6a',
    iconFilter: 'invert(79%) sepia(96%) saturate(468%) hue-rotate(27deg) brightness(103%) contrast(95%)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#f8eee7',
    titleColor: '#252525',
    cardBg: '#ffffff',
    cardBorder: 'rgba(255, 216, 177, 0.5)',
    cardShadow: 'rgba(255, 136, 41, 0.04)',
    labelColor: '#6a6a6a',
    valueColor: '#252525',
    mainTextColor: '#110c07',
    mainTextGray: '#6a6a6a',
    iconFilter: 'invert(56%) sepia(86%) saturate(2787%) hue-rotate(347deg) brightness(102%) contrast(101%)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#f0f0ff',
    titleColor: '#252525',
    cardBg: '#ffffff',
    cardBorder: 'rgba(66, 66, 255, 0.3)',
    cardShadow: 'rgba(66, 66, 255, 0.04)',
    labelColor: '#6a6a6a',
    valueColor: '#252525',
    mainTextColor: '#110c07',
    mainTextGray: '#6a6a6a',
    iconFilter: 'invert(36%) sepia(96%) saturate(4787%) hue-rotate(232deg) brightness(102%) contrast(101%)',
  },
};

interface OverviewCard {
  label: string;
  value: string;
  icon: string;
  iconPosition?: string;
}

interface OverviewSectionProps {
  theme?: ThemeType;
  title?: string;
  whoText?: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  timeCard?: OverviewCard;
  locationCard?: OverviewCard;
  modeCard?: OverviewCard;
  outcomeCard?: OverviewCard;
}

const OverviewSection = ({
  theme = 'seed',
  title = 'Overview',
  whoText = {
    prefix: 'School Students from ',
    highlight: 'Grade 3-12th',
    suffix: ' are eligible for different courses listed below'
  },
  timeCard = {
    label: 'Time',
    value: '3-5 Weeks',
    icon: '/651df4225b577365c7454e31c70f38b467d82b78.svg',
    iconPosition: 'bottom-[-12px] right-[-12px]'
  },
  locationCard = {
    label: 'Location',
    value: 'Hyderabad',
    icon: '/7d58d59612d695044d588d3f1e0161b8f46b6059.svg',
    iconPosition: 'bottom-3 right-3'
  },
  modeCard = {
    label: 'Mode',
    value: 'Offline',
    icon: '/befe44e11b523ebbad059e87489206ae95600422.svg',
    iconPosition: 'bottom-3 right-3'
  },
  outcomeCard = {
    label: 'Outcome',
    value: 'Certification',
    icon: '/fd232c629d54d30f40504b157e03489346dac782.svg',
    iconPosition: 'h-16 right-3 top-[54px]'
  }
}: OverviewSectionProps) => {
  const currentTheme = OVERVIEW_THEMES[theme];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  }

  return (
    <div
      className="py-10 relative w-full"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 flex flex-col gap-9 items-start justify-start">
        {/* Header Section */}
        <motion.div
          className="flex gap-16 items-start justify-start relative w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-semibold leading-none relative text-3xl md:text-[44px] tracking-[-1.76px]"
            style={{ color: currentTheme.titleColor }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Main Container with Cards */}
        <div className="box-border flex flex-col lg:flex-row gap-[18px] items-stretch justify-start relative w-full">
        {/* Left Card - Who? */}
        <motion.div
          className="flex-1 rounded-2xl relative min-h-[200px]"
          style={{ backgroundColor: currentTheme.cardBg }}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring" as const, stiffness: 300 }}
        >
          <div className="box-border flex flex-col items-start justify-between p-6 relative h-full">
            <h3 className="font-semibold text-xl md:text-2xl mb-4" style={{ color: currentTheme.labelColor }}>
              Who?
            </h3>
            <div>
              <p className="text-xl md:text-[28px] lg:text-[32px] leading-relaxed">
                <span style={{ color: currentTheme.mainTextGray }}>{whoText.prefix}</span>
                <span className="font-bold" style={{ color: currentTheme.mainTextColor }}>{whoText.highlight}</span>
                <span style={{ color: currentTheme.mainTextGray }}>{whoText.suffix}</span>
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-2xl" style={{ borderColor: currentTheme.cardBorder }} />
        </motion.div>

        {/* Right Container with 4 Cards */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Top Row - Time and Location */}
          <div className="flex flex-col md:flex-row gap-[22px]">
            {/* Time Card */}
            <motion.div
              className="flex-1 rounded-2xl relative min-h-[150px]"
              style={{ backgroundColor: currentTheme.cardBg }}
              custom={1}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-xl md:text-2xl" style={{ color: currentTheme.labelColor }}>
                    {timeCard.label}
                  </h3>
                  <p className="font-semibold text-2xl md:text-[32px]" style={{ color: currentTheme.valueColor }}>
                    {timeCard.value}
                  </p>
                </div>
                <div className={`absolute w-16 h-16 overflow-hidden ${timeCard.iconPosition}`}>
                  <Image
                    src={timeCard.icon}
                    alt="Time icon"
                    width={64}
                    height={64}
                    className="opacity-60"
                    style={{ filter: currentTheme.iconFilter }}
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-2xl" style={{ borderColor: currentTheme.cardBorder }} />
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="flex-1 rounded-2xl relative min-h-[150px]"
              style={{ backgroundColor: currentTheme.cardBg }}
              custom={2}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-bold text-xl" style={{ color: currentTheme.labelColor }}>
                    {locationCard.label}
                  </h3>
                  <p className="font-semibold text-2xl md:text-[32px]" style={{ color: currentTheme.valueColor }}>
                    {locationCard.value}
                  </p>
                </div>
                <div className={`absolute w-16 h-16 overflow-hidden ${locationCard.iconPosition}`}>
                  <Image
                    src={locationCard.icon}
                    alt="Location icon"
                    width={64}
                    height={64}
                    className="opacity-60"
                    style={{ filter: currentTheme.iconFilter }}
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-2xl" style={{ borderColor: currentTheme.cardBorder }} />
            </motion.div>
          </div>

          {/* Bottom Row - Mode and Outcome */}
          <div className="flex flex-col md:flex-row gap-[22px]">
            {/* Mode Card */}
            <motion.div
              className="flex-1 rounded-2xl relative min-h-[150px]"
              style={{ backgroundColor: currentTheme.cardBg }}
              custom={3}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-xl md:text-2xl" style={{ color: currentTheme.labelColor }}>
                    {modeCard.label}
                  </h3>
                  <p className="font-semibold text-2xl md:text-[32px]" style={{ color: currentTheme.valueColor }}>
                    {modeCard.value}
                  </p>
                </div>
                <div className={`absolute w-[65px] h-[65px] overflow-hidden ${modeCard.iconPosition}`}>
                  <Image
                    src={modeCard.icon}
                    alt="Mode icon"
                    width={65}
                    height={65}
                    className="opacity-60"
                    style={{ filter: currentTheme.iconFilter }}
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-2xl" style={{ borderColor: currentTheme.cardBorder }} />
            </motion.div>

            {/* Outcome Card */}
            <motion.div
              className="flex-1 rounded-2xl relative min-h-[150px]"
              style={{ backgroundColor: currentTheme.cardBg }}
              custom={4}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="box-border flex flex-col items-start justify-end overflow-hidden p-6 relative h-full">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-bold text-xl" style={{ color: currentTheme.labelColor }}>
                    {outcomeCard.label}
                  </h3>
                  <p className="font-semibold text-2xl md:text-[32px]" style={{ color: currentTheme.valueColor }}>
                    {outcomeCard.value}
                  </p>
                </div>
                <div className={`absolute w-16 ${outcomeCard.iconPosition}`}>
                  <Image
                    src={outcomeCard.icon}
                    alt="Certification icon"
                    width={64}
                    height={64}
                    className="opacity-60"
                    style={{ filter: currentTheme.iconFilter }}
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-2xl" style={{ borderColor: currentTheme.cardBorder }} />
            </motion.div>
          </div>
        </div>
        </div>
      </div>

      {/* Subtle shadow effect for depth */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .box-border > div {
            box-shadow:
              133px 208px 69px 0px ${currentTheme.cardShadow}01,
              85px 133px 63px 0px ${currentTheme.cardShadow}01,
              48px 75px 53px 0px ${currentTheme.cardShadow}02,
              21px 33px 40px 0px ${currentTheme.cardShadow}03,
              5px 8px 22px 0px ${currentTheme.cardShadow}04;
          }
        }
      `}</style>
    </div>
  )
}

export default OverviewSection