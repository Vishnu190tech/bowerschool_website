'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OpenDayHeroSection = () => {
  const eventDetails = [
    { label: 'Date', value: '29th April' },
    { label: 'Day', value: 'Saturday' },
    { label: 'Time', value: '12:00 pm - 3:00 pm' },
    { label: 'Location', value: 'Hyderabad Campus' }
  ];

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-[#1e1e1e]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Stars background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/9551ae7f70b828d3304eda30a262678c914f6a0e.svg"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0">
          <Image
            src="/b6f68bcc0d5b9d2c22d86bd280230365a4adaa28.svg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Light effects - top */}
        <div className="absolute -top-[979px] left-[145px] w-[1694px] h-[1402px] hidden lg:block">
          <Image
            src="/afea1b5154f9a817ed09ed39f324c33e956ad1a7.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Light effects - bottom (rotated) */}
        <div className="absolute top-[127px] left-[154px] w-[1694px] h-[1402px] rotate-180 hidden lg:block">
          <Image
            src="/cf904cd38b37f42adb3afea0145b102933e7b93c.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Campus background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to left, transparent, rgba(0, 0, 0, 0.2)), url('/4fdcbbe35f93e857fb876fd542768fac060acc19.png')`
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Hero Title */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-[1440px] w-full px-4 md:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-[1063px] mx-auto w-full"
            >
              <h1
                className="text-[#f0f0ff] text-[36px] md:text-[56px] lg:text-[80px] font-bold leading-[1.1] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >
                Open Day at Bower
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Event Details Bar */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 pb-6 md:pb-8 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="backdrop-blur-[22px] bg-[rgba(0,0,0,0.3)] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] px-4 py-3 md:px-6 md:py-4 lg:px-10 lg:py-5">
              {/* Mobile: Grid Layout, Desktop: Flex Layout */}
              <div className="flex flex-col md:flex-row items-center lg:justify-between  gap-4 md:gap-6 lg:gap-8">
                {/* Logo/Icon */}
                <div className="relative w-[56px] h-[56px] md:w-[64px] md:h-[64px] lg:w-[72px] lg:h-[72px] mx-auto md:mx-0">
                  <Image
                    src="/f92d16e5e706d8868062d60ccb419461efe94737.svg"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Decorative elements on logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[28px] h-[40px] md:w-[32px] md:h-[46px] lg:w-[35px] lg:h-[51px]">
                      <Image
                        src="/21f520c34331817745bdcfb6ef9503a754ca50c7.svg"
                        alt=""
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-2 md:flex md:items-center gap-4 md:gap-6 w-full md:w-auto">
                  {eventDetails.map((detail, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col gap-1 md:gap-1.5 text-center md:text-left">
                        <div
                          className="text-gray-300 text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-[1.4]"
                          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                        >
                          {detail.label}
                        </div>
                        <div
                          className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-semibold leading-tight tracking-[-0.5px] md:tracking-[-0.75px] lg:tracking-[-0.96px] whitespace-nowrap"
                          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                        >
                          {detail.value}
                        </div>
                      </div>
                      {/* Desktop divider */}
                      {index < eventDetails.length - 1 && (
                        <div className="hidden md:block w-[1px] h-[50px] md:h-[60px] lg:h-[76px] bg-white/30" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenDayHeroSection;