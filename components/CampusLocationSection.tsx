'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CampusLocationSection = () => {
  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[1280px] h-auto md:h-[400px] lg:h-[551px] rounded-2xl lg:rounded-3xl overflow-hidden mx-auto"
        >
          {/* Grid Background */}
          <div className="absolute inset-0">
            <Image
              src="/2fda539e10baec0e450de6636564b28e083dce65.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 items-center p-4 md:p-6 lg:p-9 min-h-[400px] lg:h-full">
            {/* Left Section - Address */}
            <div className="w-full lg:w-[342px] flex flex-col justify-center lg:justify-end">
              <div className="flex flex-col gap-3">
                <h3
                  className="text-[#111827] text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-tight"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    letterSpacing: '-0.96px'
                  }}
                >
                  Bower Hyderabad Campus
                </h3>
                <p
                  className="text-[#4b5563] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontWeight: 400
                  }}
                >
                  8th Floor, WeWork, RMZ Spire, B103,<br />
                  Silpa Gram Craft Village, HITEC City,<br />
                  Hyderabad, Telangana 500081
                </p>
              </div>
            </div>

            {/* Right Section - Map */}
            <div className="relative w-full lg:w-[800px] h-[250px] md:h-[300px] lg:h-full rounded-xl lg:rounded-2xl overflow-hidden">
              {/* Map Image with overlay */}
              <div 
                className="absolute inset-0 bg-[#d9d9d9] backdrop-blur-md"
                style={{
                  backgroundImage: `url('/18ae764d23dbb8dc3f38f6940b769e031822ec7a.png'), url('/6e3892c0b6ec69fbcdf99e36ad16462031fb2bd3.png')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              {/* White border */}
              <div className="absolute inset-[-4px] md:inset-[-6px] lg:inset-[-8px] border-4 md:border-6 lg:border-8 border-white rounded-2xl lg:rounded-3xl pointer-events-none" />
            </div>
          </div>

          {/* Outer border and shadow */}
          <div className="absolute inset-[-1px] border border-white rounded-[18px] lg:rounded-[25px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.06)] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default CampusLocationSection;