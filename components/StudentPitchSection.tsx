'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface StudentPitchSectionProps {
  headerLine1?: string;
  headerLine2?: string;
  headerLine3?: string;
  headerLine1Color?: string;
  headerLine2Color?: string;
  headerLine3Color?: string;
}

const StudentPitchSection = ({
  headerLine1,
  headerLine2,
  headerLine3,
  headerLine1Color = "#6a6a6a",
  headerLine2Color = "#2c360d",
  headerLine3Color = "#2c360d"
}: StudentPitchSectionProps) => {

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  // Check if any header content is provided
  const hasHeader = headerLine1 || headerLine2 || headerLine3;

  return (
    <section className="w-full bg-[#f4f4ff] px-4 md:px-10 lg:px-20 py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Title Section - Only render if header content is provided */}
        {hasHeader && (
          <motion.div
            className="text-center mb-10 md:mb-16 lg:mb-20"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-tight tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]">
              {headerLine1 && (
                <>
                  <span style={{ color: headerLine1Color }}>{headerLine1}</span>
                  <br />
                </>
              )}
              {headerLine2 && (
                <>
                  <span style={{ color: headerLine2Color }}>{headerLine2}</span>
                  <br />
                </>
              )}
              {headerLine3 && (
                <span style={{ color: headerLine3Color }}>{headerLine3}</span>
              )}
            </h2>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[1280px] h-auto min-h-[400px] md:min-h-[500px] lg:h-[551px] rounded-2xl md:rounded-3xl"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/2fda539e10baec0e450de6636564b28e083dce65.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 items-center p-4 md:p-6 lg:p-9 h-full">
            {/* Left Section - Text */}
            <div className="w-full lg:w-[342px] flex flex-col justify-center lg:justify-end h-auto lg:h-full">
              <div className="flex flex-col gap-2 md:gap-3 text-center lg:text-left">
                <h3
                  className="text-[#111827] text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-tight"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    letterSpacing: '-0.96px'
                  }}
                >
                  Watch our students pitch
                </h3>
                <p
                  className="text-[#4b5563] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                >
                  A quick look at what makes Bower a launchpad for future founders, innovators, and changemakers.
                </p>
              </div>
            </div>

            {/* Right Section - Video Container */}
            <div className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-full">
              {/* Video Thumbnail with Play Button */}
              <div
                className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center backdrop-blur-md backdrop-filter"
                style={{
                  backgroundImage: `url('/59298596613f8784e5f3543cf28cf7dac772d8dc.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* White border */}
                <div className="absolute inset-[-4px] md:inset-[-6px] lg:inset-[-8px] border-4 md:border-6 lg:border-8 border-white rounded-2xl md:rounded-3xl pointer-events-none" />

                {/* Play Button Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[108px] lg:h-[108px] cursor-pointer"
                >
                  {/* Outer circle with opacity */}
                  <div className="absolute inset-0 bg-[#3232e6] opacity-50 rounded-xl md:rounded-2xl border border-white" />

                  {/* Inner circle */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] bg-[#3232e6] opacity-60 rounded-xl md:rounded-2xl border border-white" />

                  {/* Play Icon */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                    <Image
                      src="/fed2de9b7e0f73990f199d31a4e0bb04cdd53492.svg"
                      alt="Play"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Outer border and shadow */}
          <div className="absolute inset-[-1px] border border-white rounded-2xl md:rounded-[25px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.06)] md:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.06)] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default StudentPitchSection;