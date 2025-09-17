'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface MasterclassListingHeroProps {
  breadcrumb?: {
    category: string;
  };
  badge?: string;
  title?: string;
  datetime?: string;
  buttonText?: string;
  buttonLink?: string;
}

const MasterclassListingHero = ({
  breadcrumb = {
    category: 'BowerClass'
  },
  badge = '2 Hrs | Beginner Level | Online',
  title = 'For the Makers of Tomorrow',
  datetime = '8:00 AM - 7:00 PM | 23rd November, 2024',
  buttonText = 'Register for free',
  buttonLink = '/register'
}: MasterclassListingHeroProps) => {
  return (
    <section className="relative w-full min-h-[720px] lg:h-[820px] overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Background Image with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/6f45905f54603bfa70bf10dffe7987d8dd8a7834.png')`
          }}
        />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

        {/* Stars Background */}
        {/* <div className="absolute inset-0 mix-blend-screen opacity-30">
          <Image
            src="/d4116a9279920dc5a7fa85b3e826b75d12b8f94f.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div> */}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/b6f68bcc0d5b9d2c22d86bd280230365a4adaa28.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Light Effects */}
        <div className="absolute -top-[979px] left-[144.95px] w-[1693.86px] h-[1401.86px] opacity-40">
          <Image
            src="/a7cbf808de8ec0154aa2270db5da65383ce504b3.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute top-[127px] left-[153.95px] w-[1693.86px] h-[1401.86px] rotate-180 opacity-40">
          <Image
            src="/2977c27e28c7373750c00a5eedd919eaf1870212.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24">
          <div className="max-w-[1280px] w-full mx-auto">
            {/* Breadcrumb */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[16px] lg:text-[18px] text-white/90 mb-8"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Programs &gt; Masterclass &gt;{' '}
              <span className="font-medium text-[#6366f1]">{breadcrumb.category}</span>
            </motion.p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full mb-6"
            >
              <span
                className="text-[13px] lg:text-[14px] text-white/90 font-normal"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold text-white leading-[0.9] tracking-[-0.02em] mb-8 max-w-[800px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {title}
            </motion.h1>

            {/* DateTime */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-white/70 mb-10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {datetime}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = buttonLink}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#5b5fff] text-white rounded-lg hover:bg-[#4848ff] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span
                className="text-[16px] lg:text-[18px] font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {buttonText}
              </span>
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Partner Logos Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-30 bg-black/40 backdrop-blur-xl border-t mb-10 border-white/10"
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center h-14 md:h-16 gap-8 md:gap-12 lg:gap-20">
              <p
                className="text-[13px] md:text-[14px] font-normal text-white/80 whitespace-nowrap"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Learn from the Best
              </p>

              <div className="flex items-center gap-6 md:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide">
                {/* CRED Logo */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/22d761ba44c7c2babc8bb51b802e086cc1339998.png"
                    alt="CRED"
                    width={65}
                    height={24}
                    className="h-4 md:h-5 w-auto brightness-0 invert"
                  />
                </div>

                {/* Unity Logo */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/ff93379a9ca517e9a293ef7ad09a123c9296dc33.png"
                    alt="Unity"
                    width={50}
                    height={24}
                    className="h-4 md:h-5 w-auto brightness-0 invert"
                  />
                </div>

                {/* CRED Logo 2 */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/22d761ba44c7c2babc8bb51b802e086cc1339998.png"
                    alt="CRED"
                    width={65}
                    height={24}
                    className="h-4 md:h-5 w-auto brightness-0 invert"
                  />
                </div>

                {/* Airbnb Logo */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/6f161c58539e1ac4fb9bbf145a1c2938d5636702.png"
                    alt="Airbnb"
                    width={70}
                    height={24}
                    className="h-4 md:h-5 w-auto brightness-0 invert"
                  />
                </div>

                {/* Unity Logo 2 */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/ff93379a9ca517e9a293ef7ad09a123c9296dc33.png"
                    alt="Unity"
                    width={50}
                    height={24}
                    className="h-4 md:h-5 w-auto brightness-0 invert"
                  />
                </div>

                {/* Airbnb Logo 2 */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/6f161c58539e1ac4fb9bbf145a1c2938d5636702.png"
                    alt="Airbnb"
                    width={70}
                    height={24}
                    className="h-4 md:h-5 w-auto brightness-0 invert"
                  />
                </div>

                {/* Google Logo */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/c53e882f3a3f2d1c237564546b2e2940e85e99c2.svg"
                    alt="Google"
                    width={50}
                    height={16}
                    className="h-3.5 md:h-4 w-auto"
                  />
                </div>

                {/* Netflix Logo */}
                <div className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/f5ea92c4a038730c0618608c3e3379943709d55b.svg"
                    alt="Netflix"
                    width={60}
                    height={16}
                    className="h-3.5 md:h-4 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --masterclass-listing-bg: #000000;
          --masterclass-listing-white: #ffffff;
          --masterclass-listing-primary: #5b5fff;
          --masterclass-listing-primary-hover: #4848ff;
          --masterclass-listing-text-muted: #c3c3c3;
          --masterclass-listing-footer-text: #f0f0ff;
          --masterclass-listing-footer-bg: rgba(0, 0, 0, 0.4);
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          .backdrop-blur-xl {
            backdrop-filter: blur(24px);
          }
        }
      `}</style>
    </section>
  );
};

export default MasterclassListingHero;