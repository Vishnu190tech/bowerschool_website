'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface CertificateTheme {
  primary: string;
  secondary: string;
  bgGradientFrom: string;
  bgGradientVia: string;
  bgGradientTo: string;
  decorativeGlow1: string;
  decorativeGlow2: string;
  titleGrayColor: string;
  titleMainColor: string;
  descriptionColor: string;
  buttonBg: string;
  buttonBgGradient: string;
  buttonText: string;
  buttonHoverShadow: string;
  featureIconBg: string;
  featureIconColor: string;
  featureTitleColor: string;
  featureDescColor: string;
  certificateAccent: string;
}

const CERTIFICATE_THEMES: Record<ThemeType, CertificateTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgGradientFrom: '#ffffff',
    bgGradientVia: '#f0f0ff',
    bgGradientTo: '#ffffff',
    decorativeGlow1: 'rgba(50, 50, 230, 0.15)',
    decorativeGlow2: 'rgba(66, 66, 255, 0.15)',
    titleGrayColor: '#6a6a6a',
    titleMainColor: '#1a2555',
    descriptionColor: '#6b7280',
    buttonBg: '#3232e6',
    buttonBgGradient: 'linear-gradient(to right, #3232e6, #4242FF)',
    buttonText: '#ffffff',
    buttonHoverShadow: '0 20px 40px rgba(50, 50, 230, 0.3)',
    featureIconBg: '#e8ebff',
    featureIconColor: '#3232e6',
    featureTitleColor: '#1f2937',
    featureDescColor: '#6b7280',
    certificateAccent: '#4242FF',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgGradientFrom: '#ffffff',
    bgGradientVia: '#f5ffd9',
    bgGradientTo: '#ffffff',
    decorativeGlow1: 'rgba(168, 243, 38, 0.15)',
    decorativeGlow2: 'rgba(143, 217, 32, 0.15)',
    titleGrayColor: '#6a6a6a',
    titleMainColor: '#2d3a15',
    descriptionColor: '#6b7280',
    buttonBg: '#8FD920',
    buttonBgGradient: 'linear-gradient(to right, #A8F326, #8FD920)',
    buttonText: '#000000',
    buttonHoverShadow: '0 20px 40px rgba(168, 243, 38, 0.3)',
    featureIconBg: '#f0ffe6',
    featureIconColor: '#8FD920',
    featureTitleColor: '#1f2937',
    featureDescColor: '#6b7280',
    certificateAccent: '#A8F326',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgGradientFrom: '#ffffff',
    bgGradientVia: '#fff8f0',
    bgGradientTo: '#ffffff',
    decorativeGlow1: 'rgba(255, 136, 41, 0.15)',
    decorativeGlow2: 'rgba(255, 191, 41, 0.15)',
    titleGrayColor: '#6a6a6a',
    titleMainColor: '#2c360d',
    descriptionColor: '#6b7280',
    buttonBg: '#ff8829',
    buttonBgGradient: 'linear-gradient(to right, #2c360d, #4a5a1a)',
    buttonText: '#ffffff',
    buttonHoverShadow: '0 20px 40px rgba(255, 136, 41, 0.3)',
    featureIconBg: '#dcfce7',
    featureIconColor: '#16a34a',
    featureTitleColor: '#1f2937',
    featureDescColor: '#6b7280',
    certificateAccent: '#4db8a8',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgGradientFrom: '#ffffff',
    bgGradientVia: '#f0f0ff',
    bgGradientTo: '#ffffff',
    decorativeGlow1: 'rgba(66, 66, 255, 0.15)',
    decorativeGlow2: 'rgba(50, 50, 230, 0.15)',
    titleGrayColor: '#6a6a6a',
    titleMainColor: '#1a2555',
    descriptionColor: '#6b7280',
    buttonBg: '#4242ff',
    buttonBgGradient: 'linear-gradient(to right, #4242FF, #3232e6)',
    buttonText: '#ffffff',
    buttonHoverShadow: '0 20px 40px rgba(66, 66, 255, 0.3)',
    featureIconBg: '#e8ebff',
    featureIconColor: '#4242FF',
    featureTitleColor: '#1f2937',
    featureDescColor: '#6b7280',
    certificateAccent: '#4242FF',
  },
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CertificateSectionProps {
  theme?: ThemeType;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  certificateRecipient?: string;
  features?: Feature[];
}

const CertificateSection = ({
  theme = 'seed',
  titleLine1 = 'Will you be Certified?',
  titleLine2 = 'Ofcourse, this is one for the',
  titleLine3 = 'collection',
  description = "Upon successful completion of the program, you'll receive an official certificate recognizing your achievement and entrepreneurial journey with Bower School.",
  buttonText = 'Earn Your Certificate →',
  onButtonClick,
  certificateRecipient = 'Jonathan Smith',
  features
}: CertificateSectionProps) => {
  const currentTheme = CERTIFICATE_THEMES[theme];

  const defaultFeatures: Feature[] = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Verified Achievement',
      description: 'Industry-recognized certification'
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Skill Validation',
      description: 'Proof of your entrepreneurial skills'
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
        </svg>
      ),
      title: 'Global Recognition',
      description: 'Accepted worldwide'
    }
  ];

  const displayFeatures = features || defaultFeatures;

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

  const certificateVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden py-12 md:py-10 lg:py-10"
      style={{
        background: `linear-gradient(to bottom, ${currentTheme.bgGradientFrom}, ${currentTheme.bgGradientVia}, ${currentTheme.bgGradientTo})`
      }}
    >
      {/* Background Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: currentTheme.decorativeGlow1 }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: currentTheme.decorativeGlow2 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Title Section */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <h2 className="text-[28px] md:text-[48px] lg:text-[54px] xl:text-[70px] font-bold leading-tight tracking-[-1.4px] md:tracking-[-2.4px] lg:tracking-[-3.2px] xl:tracking-[-4px]">
            <span style={{ color: currentTheme.titleGrayColor }}>{titleLine1}</span>
            <br />
            <span style={{ color: currentTheme.titleMainColor }}>{titleLine2}</span>
            <br />
            <span style={{ color: currentTheme.titleMainColor }}>{titleLine3}</span>
          </h2>
        </motion.div>

        {/* Certificate Display */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          variants={itemVariants}
        >
          {/* Front Certificate - Custom Design */}
          <motion.div
            className="relative z-10"
            variants={certificateVariants}
          >
            <div className="relative w-full max-w-4xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-[0px_8px_20px_0px_rgba(145,145,145,0.4)] md:shadow-[0px_16px_35px_0px_rgba(145,145,145,0.74),0px_64px_64px_0px_rgba(145,145,145,0.64),0px_145px_87px_0px_rgba(145,145,145,0.38),0px_258px_103px_0px_rgba(145,145,145,0.11)] overflow-hidden aspect-[16/10]">

              {/* Left Dark Section with Curves */}
              <div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-br from-[#2d3e3f] via-[#1f2d2e] to-[#111819]">
                {/* Top Curved Shape - Teal */}
                <div className="absolute top-0 right-0 w-[120%] h-[45%]">
                  <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M 0,0 L 200,0 Q 150,100 0,100 Z" fill="#4db8a8" />
                  </svg>
                </div>

                {/* Bottom Curved Shape - Teal */}
                <div className="absolute bottom-0 right-0 w-[120%] h-[55%]">
                  <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M 0,0 Q 150,0 200,100 L 0,100 Z" fill="#4db8a8" />
                  </svg>
                </div>

                {/* Badge Icon */}
                <div className="absolute top-8 md:top-12 left-6 md:left-10 w-16 h-16 md:w-20 md:h-20">
                  <div className="relative w-full h-full">
                    {/* Badge Circle */}
                    <div className="absolute inset-0 rounded-full bg-[#5cc4b3] flex items-center justify-center">
                      {/* Star */}
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#2d3e3f]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    {/* Badge Ribbon Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                      <div className="flex gap-1">
                        <div className="w-4 h-8 md:w-5 md:h-10 bg-[#5cc4b3] clip-ribbon-left"></div>
                        <div className="w-4 h-8 md:w-5 md:h-10 bg-[#5cc4b3] clip-ribbon-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right White Section with Content */}
              <div className="absolute right-0 top-0 bottom-0 left-[35%] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                {/* Large Background Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] rounded-full border-[20px] md:border-[30px] border-gray-200/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 py-8">
                  {/* Brand Logo */}
                  <div className="mb-4 md:mb-6">
                    <div className="text-[#4db8a8] font-bold text-xs md:text-sm flex items-center justify-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-[#4db8a8] rotate-45"></div>
                      <span>BRAND ART</span>
                    </div>
                    <div className="text-gray-400 text-[8px] md:text-xs">MODERN TEMPLATES</div>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4 tracking-wider">
                    CERTIFICATE
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 tracking-widest">
                    OF APPRECIATION
                  </p>

                  {/* Presented To */}
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Proudly Presented To
                  </p>

                  {/* Name */}
                  <h4
                    className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
                    style={{
                      fontFamily: 'Brush Script MT, cursive',
                      color: currentTheme.certificateAccent
                    }}
                  >
                    {certificateRecipient}
                  </h4>

                  {/* Description */}
                  <p className="text-[8px] md:text-xs text-gray-500 leading-relaxed mb-6 md:mb-8 max-w-md mx-auto">
                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    elit. Duis sed odio sit amet nibh vulputate et sit amet mauris. Morbi ipsum
                    velit. Nam nec tellus
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-end text-center gap-4 md:gap-8">
                    <div className="flex-1">
                      <div className="h-[1px] bg-gray-300 mb-1"></div>
                      <p className="text-[8px] md:text-xs text-gray-500 uppercase tracking-wider">Date</p>
                    </div>
                    <div className="flex-1">
                      <div className="h-[1px] bg-gray-300 mb-1"></div>
                      <p className="text-[8px] md:text-xs text-gray-500 uppercase tracking-wider">Sincerely</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-xl md:rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={itemVariants}
        >
          <p
            className="text-[16px] md:text-[18px] lg:text-[20px] max-w-2xl mx-auto leading-[24px] md:leading-[27px] lg:leading-[30px] px-4"
            style={{ color: currentTheme.descriptionColor }}
          >
            {description}
          </p>

          {/* CTA Button */}
          <motion.button
            className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 font-semibold text-[16px] md:text-[18px] rounded-full transform transition-all duration-300"
            style={{
              background: currentTheme.buttonBgGradient,
              color: currentTheme.buttonText
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: currentTheme.buttonHoverShadow
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
          >
            {buttonText}
          </motion.button>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {displayFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"
                style={{
                  backgroundColor: currentTheme.featureIconBg,
                  color: currentTheme.featureIconColor
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="font-semibold mb-2 text-[16px] md:text-[18px]"
                style={{ color: currentTheme.featureTitleColor }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[14px] md:text-[16px]"
                style={{ color: currentTheme.featureDescColor }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CertificateSection