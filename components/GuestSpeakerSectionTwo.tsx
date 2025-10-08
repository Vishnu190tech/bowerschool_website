'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface SpeakerTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  textColor: string;
  subtitleColor: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonText: string;
  shapeGradient1From: string;
  shapeGradient1To: string;
  shapeGradient2From: string;
  shapeGradient2To: string;
  shapeGradient3From: string;
  shapeGradient3To: string;
  shapeGradient4From: string;
  shapeGradient4To: string;
}

const SPEAKER_THEMES: Record<ThemeType, SpeakerTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#e8e9ff',
    textColor: '#111827',
    subtitleColor: '#111827',
    buttonBg: '#111827',
    buttonHoverBg: '#1f2937',
    buttonText: '#ffffff',
    shapeGradient1From: '#2525c4',
    shapeGradient1To: '#3232e6',
    shapeGradient2From: '#3838d0',
    shapeGradient2To: '#4e4eff',
    shapeGradient3From: '#1f1fb0',
    shapeGradient3To: '#3232e6',
    shapeGradient4From: '#3838d0',
    shapeGradient4To: '#4e4eff',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#d3fa52',
    textColor: '#111827',
    subtitleColor: '#111827',
    buttonBg: '#111827',
    buttonHoverBg: '#1f2937',
    buttonText: '#ffffff',
    shapeGradient1From: '#b8e834',
    shapeGradient1To: '#d3fa52',
    shapeGradient2From: '#c5f13f',
    shapeGradient2To: '#e0ff66',
    shapeGradient3From: '#a9d923',
    shapeGradient3To: '#d3fa52',
    shapeGradient4From: '#c5f13f',
    shapeGradient4To: '#e0ff66',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#ffe8cc',
    textColor: '#111827',
    subtitleColor: '#111827',
    buttonBg: '#111827',
    buttonHoverBg: '#1f2937',
    buttonText: '#ffffff',
    shapeGradient1From: '#e67320',
    shapeGradient1To: '#ff8829',
    shapeGradient2From: '#ffa347',
    shapeGradient2To: '#ffbe66',
    shapeGradient3From: '#d96a15',
    shapeGradient3To: '#ff8829',
    shapeGradient4From: '#ffa347',
    shapeGradient4To: '#ffbe66',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#e8ebff',
    textColor: '#111827',
    subtitleColor: '#111827',
    buttonBg: '#111827',
    buttonHoverBg: '#1f2937',
    buttonText: '#ffffff',
    shapeGradient1From: '#3232e6',
    shapeGradient1To: '#4242ff',
    shapeGradient2From: '#4e4eff',
    shapeGradient2To: '#6666ff',
    shapeGradient3From: '#2525c4',
    shapeGradient3To: '#4242ff',
    shapeGradient4From: '#4e4eff',
    shapeGradient4To: '#6666ff',
  },
};

interface GuestSpeakerSectionTwoProps {
  theme?: ThemeType;
  subtitle?: string;
  title?: string;
  speakerName?: string;
  buttonText?: string;
  buttonLink?: string;
  speakerImage?: string;
}

const GuestSpeakerSectionTwo = ({
  theme = 'lead',
  subtitle = 'Guest speaker',
  title = 'How the entrepreneurial landscape is changing in India a special session with',
  speakerName = '-Ritesh Agarwal',
  buttonText = 'Register',
  buttonLink = '/register',
  speakerImage = '/7433128edd2a264929a262701e6bb608ef33082e.png'
}: GuestSpeakerSectionTwoProps) => {
  const currentTheme = SPEAKER_THEMES[theme];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      {/* Background 3D Objects */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Top left 3D shapes */}
        <div className="absolute -left-20 -top-20 opacity-30">
          <div
            className="w-[150px] h-[150px] rounded-3xl transform rotate-12"
            style={{
              background: `linear-gradient(to bottom right, ${currentTheme.shapeGradient1From}, ${currentTheme.shapeGradient1To})`
            }}
          />
        </div>
        <div className="absolute left-40 top-10 opacity-20">
          <div
            className="w-[100px] h-[100px] rounded-full"
            style={{
              background: `linear-gradient(to bottom right, ${currentTheme.shapeGradient2From}, ${currentTheme.shapeGradient2To})`
            }}
          />
        </div>

        {/* Bottom right 3D shapes */}
        <div className="absolute -right-32 -bottom-32 opacity-25">
          <div
            className="w-[200px] h-[200px] rounded-[40px] transform -rotate-12"
            style={{
              background: `linear-gradient(to top left, ${currentTheme.shapeGradient1From}, ${currentTheme.shapeGradient1To})`
            }}
          />
        </div>
        <div className="absolute right-20 bottom-20 opacity-20">
          <div
            className="w-[120px] h-[120px] rounded-3xl transform rotate-45"
            style={{
              background: `linear-gradient(to top left, ${currentTheme.shapeGradient2From}, ${currentTheme.shapeGradient2To})`
            }}
          />
        </div>

        {/* Center decorative shapes */}
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 opacity-15">
          <div
            className="w-[80px] h-[80px] rounded-2xl transform rotate-[30deg]"
            style={{
              background: `linear-gradient(to bottom right, ${currentTheme.shapeGradient3From}, ${currentTheme.shapeGradient3To})`
            }}
          />
        </div>
        <div className="absolute right-1/4 top-1/3 opacity-10">
          <div
            className="w-[60px] h-[60px] rounded-full"
            style={{
              background: `linear-gradient(to top right, ${currentTheme.shapeGradient4From}, ${currentTheme.shapeGradient4To})`
            }}
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-6 md:py-8 lg:py-[60px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Left Text Content */}
          <div className="flex-1 lg:max-w-[588px] order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 lg:space-y-[66px]"
            >
              {/* Subtitle */}
              <span
                className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[21px] md:leading-[24px] lg:leading-[27px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.subtitleColor
                }}
              >
                {subtitle}
              </span>

              {/* Title and Speaker Name */}
              <div>
                <h2
                  className="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[28px] md:leading-[40px] lg:leading-[48px] tracking-[-0.96px] md:tracking-[-1.44px] lg:tracking-[-1.92px] mb-4 md:mb-5 lg:mb-6"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: currentTheme.textColor
                  }}
                >
                  {title}
                </h2>

                <p
                  className="text-[24px] md:text-[36px] lg:text-[48px] font-normal leading-[28px] md:leading-[40px] lg:leading-[48px] tracking-[-0.96px] md:tracking-[-1.44px] lg:tracking-[-1.92px] italic"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: currentTheme.textColor
                  }}
                >
                  {speakerName}
                </p>
              </div>

              {/* Register Button */}
              <Link href={buttonLink}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm transition-colors"
                  style={{
                    backgroundColor: currentTheme.buttonBg,
                    color: currentTheme.buttonText
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = currentTheme.buttonHoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = currentTheme.buttonBg;
                  }}
                >
                  <span
                    className="text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-[24px] md:leading-[25px] lg:leading-[27px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {buttonText}
                  </span>
                  <ChevronRightIcon className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[500px] md:max-w-[550px] lg:w-[650px] h-[250px] md:h-[320px] lg:h-[386px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            {/* Speaker Image */}
            <Image
              src={speakerImage}
              alt="Guest Speaker"
              fill
              className="object-cover"
            />

            {/* Optional gradient overlay for better text visibility if image has text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuestSpeakerSectionTwo;