'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const GuestSpeakerSectionTwo = () => {
  return (
    <section className="relative w-full bg-[#d3fa52] overflow-hidden">
      {/* Background 3D Objects */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Top left 3D shapes */}
        <div className="absolute -left-20 -top-20 opacity-30">
          <div className="w-[150px] h-[150px] bg-gradient-to-br from-[#b8e834] to-[#d3fa52] rounded-3xl transform rotate-12" />
        </div>
        <div className="absolute left-40 top-10 opacity-20">
          <div className="w-[100px] h-[100px] bg-gradient-to-br from-[#c5f13f] to-[#e0ff66] rounded-full" />
        </div>

        {/* Bottom right 3D shapes */}
        <div className="absolute -right-32 -bottom-32 opacity-25">
          <div className="w-[200px] h-[200px] bg-gradient-to-tl from-[#b8e834] to-[#d3fa52] rounded-[40px] transform -rotate-12" />
        </div>
        <div className="absolute right-20 bottom-20 opacity-20">
          <div className="w-[120px] h-[120px] bg-gradient-to-tl from-[#c5f13f] to-[#e0ff66] rounded-3xl transform rotate-45" />
        </div>

        {/* Center decorative shapes */}
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 opacity-15">
          <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#a9d923] to-[#d3fa52] rounded-2xl transform rotate-[30deg]" />
        </div>
        <div className="absolute right-1/4 top-1/3 opacity-10">
          <div className="w-[60px] h-[60px] bg-gradient-to-tr from-[#c5f13f] to-[#e0ff66] rounded-full" />
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
                className="text-[14px] md:text-[16px] lg:text-[18px] font-normal text-[#111827] leading-[21px] md:leading-[24px] lg:leading-[27px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Guest speaker
              </span>

              {/* Title and Speaker Name */}
              <div>
                <h2
                  className="text-[24px] md:text-[36px] lg:text-[48px] font-bold text-[#111827] leading-[28px] md:leading-[40px] lg:leading-[48px] tracking-[-0.96px] md:tracking-[-1.44px] lg:tracking-[-1.92px] mb-4 md:mb-5 lg:mb-6"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  How the entrepreneurial landscape is changing in India a special session with
                </h2>

                <p
                  className="text-[24px] md:text-[36px] lg:text-[48px] font-normal text-[#111827] leading-[28px] md:leading-[40px] lg:leading-[48px] tracking-[-0.96px] md:tracking-[-1.44px] lg:tracking-[-1.92px] italic"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  -Ritesh Agarwal
                </p>
              </div>

              {/* Register Button */}
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#111827] text-white rounded-lg shadow-sm hover:bg-[#1f2937] transition-colors"
                >
                  <span
                    className="text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-[24px] md:leading-[25px] lg:leading-[27px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Register
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
              src="/speaker-image.jpg"
              alt="Guest Speaker"
              fill
              className="object-cover"
            />

            {/* Optional gradient overlay for better text visibility if image has text overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* CSS Variables for Colors */}
      <style jsx>{`
        :root {
          --guest-speaker-bg: #d3fa52;
          --guest-speaker-text: #111827;
          --guest-speaker-accent-1: #b8e834;
          --guest-speaker-accent-2: #e0ff66;
          --guest-speaker-accent-3: #c5f13f;
          --guest-speaker-accent-4: #a9d923;
        }
      `}</style>
    </section>
  );
};

export default GuestSpeakerSectionTwo;