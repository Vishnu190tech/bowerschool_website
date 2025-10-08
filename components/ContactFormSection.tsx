'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface ContactTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  titleColor: string;
  subtitleColor: string;
  inputBg: string;
  inputBorder: string;
  inputShadow: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonText: string;
  buttonShadow: string;
  buttonTextShadow: string;
  backgroundGrid: string;
}

const CONTACT_THEMES: Record<ThemeType, ContactTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#dfdfff',
    titleColor: '#111827',
    subtitleColor: '#4b5563',
    inputBg: 'rgba(255, 255, 255, 0.3)',
    inputBorder: '#000000',
    inputShadow: '4px 4px 12px 0px #3232e6',
    buttonBg: '#3232e6',
    buttonHoverBg: '#2525c4',
    buttonText: '#ffffff',
    buttonShadow: '0px 0px 0px 1px #3232e6, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    buttonTextShadow: '#3232e6 0px 1px 3px',
    backgroundGrid: '/39d2c8f8744f519996020faab038ed64f2942a33.svg',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#f5ffd9',
    titleColor: '#111827',
    subtitleColor: '#4b5563',
    inputBg: 'rgba(255, 255, 255, 0.3)',
    inputBorder: '#000000',
    inputShadow: '4px 4px 12px 0px #A8F326',
    buttonBg: '#8FD920',
    buttonHoverBg: '#7ac01a',
    buttonText: '#000000',
    buttonShadow: '0px 0px 0px 1px #8FD920, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    buttonTextShadow: '#8FD920 0px 1px 3px',
    backgroundGrid: '/39d2c8f8744f519996020faab038ed64f2942a33.svg',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#fff4e6',
    titleColor: '#111827',
    subtitleColor: '#4b5563',
    inputBg: 'rgba(255, 255, 255, 0.3)',
    inputBorder: '#000000',
    inputShadow: '4px 4px 12px 0px #FF8829',
    buttonBg: '#FF8829',
    buttonHoverBg: '#e67720',
    buttonText: '#ffffff',
    buttonShadow: '0px 0px 0px 1px #FF8829, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    buttonTextShadow: '#FF8829 0px 1px 3px',
    backgroundGrid: '/e3f37f7c167982f4de1508adec8e58361d22c27b.svg',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#dfdfff',
    titleColor: '#111827',
    subtitleColor: '#4b5563',
    inputBg: 'rgba(255, 255, 255, 0.3)',
    inputBorder: '#000000',
    inputShadow: '4px 4px 12px 0px #4242ff',
    buttonBg: '#4242ff',
    buttonHoverBg: '#3232e6',
    buttonText: '#ffffff',
    buttonShadow: '0px 0px 0px 1px #4242ff, 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    buttonTextShadow: '#4242ff 0px 1px 3px',
    backgroundGrid: '/39d2c8f8744f519996020faab038ed64f2942a33.svg',
  },
};

interface ContactFormSectionProps {
  theme?: ThemeType;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  backgroundGrid?: string;
}

const ContactFormSection = ({
  theme = 'ug',
  title = 'Want to know more?',
  subtitle = 'Let us reach out to you',
  buttonText = 'I want to know more',
  onSubmit,
  backgroundGrid
}: ContactFormSectionProps) => {
  const currentTheme = CONTACT_THEMES[theme];
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    } else {
      console.log('Email submitted:', email);
    }
  };

  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      {/* Top and bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white" />

      {/* Background Grid */}
      <div className="absolute inset-0 -top-1/4 -bottom-1/4">
        <Image
          src={backgroundGrid || currentTheme.backgroundGrid}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Background Circle */}
      {theme === 'ug' && <div className="absolute top-[-214px] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] lg:w-[820px] h-[400px] md:h-[600px] lg:h-[820px]">
        <Image
          src="/540bbf1c49d15d10456954389965c466682043d7.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[800px] px-4 md:px-8 lg:px-0 flex flex-col items-center gap-4 md:gap-5 lg:gap-6"
        >
          {/* Header */}
          <div className="text-center">
            <h2
              className="capitalize mb-2 md:mb-3 text-[28px] md:text-[36px] lg:text-[44px] leading-tight"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontWeight: 600,
                letterSpacing: '-1.76px',
                color: currentTheme.titleColor
              }}
            >
              {title}
            </h2>
            <p
              className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5]"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontWeight: 400,
                color: currentTheme.subtitleColor
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
            {/* Email Input */}
            <div
              className="relative w-full h-[60px] md:h-[70px] lg:h-[81px] backdrop-blur-lg rounded-[10px] border"
              style={{
                backgroundColor: currentTheme.inputBg,
                borderColor: currentTheme.inputBorder,
                boxShadow: currentTheme.inputShadow
              }}
            >
              <div className="absolute inset-[10px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full h-full bg-white/50 border border-white rounded-[10px] px-4 md:px-5 py-3 md:py-4 text-[#505050] placeholder-[#505050] outline-none focus:bg-white/70 transition-colors text-[16px] md:text-[18px] lg:text-[20px]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontWeight: 400
                  }}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-3 md:px-4 py-2 h-10 md:h-11 rounded-lg flex items-center gap-2 transition-colors"
              style={{
                backgroundColor: currentTheme.buttonBg,
                color: currentTheme.buttonText,
                boxShadow: currentTheme.buttonShadow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = currentTheme.buttonHoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = currentTheme.buttonBg;
              }}
            >
              <span
                className="text-[14px] md:text-[16px] lg:text-[18px] font-medium whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  textShadow: currentTheme.buttonTextShadow
                }}
              >
                {buttonText}
              </span>
              {/* Chevron Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;