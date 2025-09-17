'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface HeroCampusLifeProps {
  heading?: string;
  subheading?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export default function HeroCampusLife({
  heading = "Where Big Ideas Meet Bigger Energy",
  subheading = "From late-night brainstorming to early-morning jogs, from pitch sessions to music jams, every corner of our campus is built to spark curiosity, creativity, and connection.",
  primaryButtonText = "Take campus tour",
  primaryButtonLink = "/campus-tour",
  secondaryButtonText = "Download Brochure",
  secondaryButtonLink = "/download-brochure",
  backgroundImage = "/b40d3e1744994ce93c63c027a953dc6a89ecf64a.png"
}: HeroCampusLifeProps) {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-[#1e1e1e]">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Stars layer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/9551ae7f70b828d3304eda30a262678c914f6a0e.svg"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Grid layer */}
        <div className="absolute inset-0">
          <Image
            src="/b6f68bcc0d5b9d2c22d86bd280230365a4adaa28.svg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Top lights effect - Desktop only */}
        <div className="hidden md:block absolute -top-[979px] left-[145px] w-[1694px] h-[1402px]">
          <Image
            src="/01ea2abc9fa3aa0ec6af9d2d3c1f665c8b1d00f4.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom lights effect (rotated) - Desktop only */}
        <div className="hidden md:block absolute top-[127px] left-[154px] w-[1694px] h-[1402px] rotate-180">
          <Image
            src="/252bf222abcf5d85bd6aea4ae0a5add0255279b7.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Mobile lights effects */}
        <div className="md:hidden absolute -top-[650px] left-[50px] w-[1200px] h-[1000px]">
          <Image
            src="/5f8e28f5d42f2db2b81c70c1ec2ccd0fe5e0895d.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="md:hidden absolute top-[100px] left-[50px] w-[1200px] h-[1000px] rotate-180">
          <Image
            src="/e9e3c83b6d8b0022966d58002e9767b7e546c486.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Main background image with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/90" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-start pt-[148px] md:pt-[179px] px-6 md:px-20 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="w-full md:max-w-[1023px]"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-3 md:gap-6 mb-6 md:mb-8 text-center md:text-left">
            <h1
              className="text-[36px] md:text-[80px] font-semibold md:font-bold leading-[44px] md:leading-[1] text-white tracking-[-1.8px] md:tracking-[-4px] md:max-w-[890px]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              {heading}
            </h1>
            <p
              className="text-[18px] md:text-[24px] font-medium md:font-semibold text-gray-300 tracking-normal md:tracking-[-0.96px] leading-[28px] md:leading-normal md:max-w-[863px]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              {subheading}
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
            className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"
          >
            {/* Primary Button */}
            <Link href={primaryButtonLink} className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-4 py-2 h-10 md:h-11 w-full md:w-auto bg-[#4242ff] text-white rounded-[8px] shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] relative overflow-hidden group"
              >
                <span
                  className="text-[16px] md:text-[18px] font-medium leading-[26px] md:leading-[27px] whitespace-nowrap [text-shadow:#4242ff_0px_1px_3px]"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {primaryButtonText}
                </span>
                <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0.75px_0px_inset_rgba(255,255,255,0.12),0px_-1px_0px_0px_inset_#4242ff]" />
              </motion.button>
            </Link>

            {/* Secondary Button */}
            <Link href={secondaryButtonLink} className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-4 py-2 h-10 md:h-11 w-full md:w-auto rounded-[8px] overflow-hidden group"
              >
                {/* Glassmorphic background */}
                <div className="absolute inset-0 backdrop-blur-[32px] bg-[rgba(17,24,39,0.05)]" />

                {/* Radial gradient effect */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(50,50,230,1) 0%, rgba(50,50,230,0) 100%)'
                  }}
                />

                {/* Border */}
                <div className="absolute inset-0 border border-[rgba(255,255,255,0.5)] rounded-[8px] pointer-events-none" />

                {/* Text */}
                <span
                  className="relative text-[16px] md:text-[18px] font-medium leading-[26px] md:leading-[27px] text-white whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {secondaryButtonText}
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}